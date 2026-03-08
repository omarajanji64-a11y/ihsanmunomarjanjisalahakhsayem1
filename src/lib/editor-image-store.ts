import { promises as fs } from "node:fs";
import path from "node:path";

export type ImageOverrides = Record<string, string>;

const IMAGE_OVERRIDES_PATH = path.join(process.cwd(), "data", "site-image-overrides.json");
const KV_OVERRIDES_KEY = "site:image-overrides";

function sanitizeOverrides(raw: unknown): ImageOverrides {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  const entries = Object.entries(raw as Record<string, unknown>).filter(
    ([id, value]) => typeof id === "string" && typeof value === "string" && value.length > 0
  );

  return Object.fromEntries(entries);
}

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function ensurePersistentStoreConfigured() {
  if (process.env.VERCEL && !hasKvConfig()) {
    throw new Error(
      "Persistent image storage is not configured. Add Vercel KV and set KV_REST_API_URL + KV_REST_API_TOKEN."
    );
  }
}

async function kvFetch(pathname: string, init?: RequestInit) {
  const baseUrl = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  if (!baseUrl || !token) {
    throw new Error("KV credentials are missing.");
  }

  const response = await fetch(`${baseUrl}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => "");
    throw new Error(`KV request failed (${response.status}): ${responseText || "no response body"}`);
  }

  return response.json().catch(() => null);
}

async function readImageOverridesFromKv(): Promise<ImageOverrides> {
  const payload = (await kvFetch(`/get/${encodeURIComponent(KV_OVERRIDES_KEY)}`)) as
    | { result?: string | null }
    | null;
  const result = payload?.result;
  if (!result) {
    return {};
  }

  try {
    return sanitizeOverrides(JSON.parse(result));
  } catch {
    throw new Error("Stored KV image override data is not valid JSON.");
  }
}

async function writeImageOverridesToKv(overrides: ImageOverrides) {
  const safeOverrides = sanitizeOverrides(overrides);
  const serialized = JSON.stringify(safeOverrides);
  await kvFetch(
    `/set/${encodeURIComponent(KV_OVERRIDES_KEY)}/${encodeURIComponent(serialized)}`,
    { method: "POST" }
  );
}

async function ensureOverridesFile() {
  await fs.mkdir(path.dirname(IMAGE_OVERRIDES_PATH), { recursive: true });
  try {
    await fs.access(IMAGE_OVERRIDES_PATH);
  } catch {
    await fs.writeFile(IMAGE_OVERRIDES_PATH, "{}\n", "utf8");
  }
}

export async function readImageOverrides(): Promise<ImageOverrides> {
  ensurePersistentStoreConfigured();

  if (hasKvConfig()) {
    return readImageOverridesFromKv();
  }

  await ensureOverridesFile();
  try {
    const raw = await fs.readFile(IMAGE_OVERRIDES_PATH, "utf8");
    return sanitizeOverrides(JSON.parse(raw));
  } catch {
    return {};
  }
}

export async function writeImageOverrides(overrides: ImageOverrides) {
  ensurePersistentStoreConfigured();

  if (hasKvConfig()) {
    await writeImageOverridesToKv(overrides);
    return;
  }

  await ensureOverridesFile();
  const safeOverrides = sanitizeOverrides(overrides);
  const tempPath = `${IMAGE_OVERRIDES_PATH}.tmp`;

  await fs.writeFile(tempPath, `${JSON.stringify(safeOverrides, null, 2)}\n`, "utf8");
  await fs.rename(tempPath, IMAGE_OVERRIDES_PATH);
}

export async function setImageOverride(id: string, imageUrl: string) {
  const overrides = await readImageOverrides();
  overrides[id] = imageUrl;
  await writeImageOverrides(overrides);
  return overrides;
}
