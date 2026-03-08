import { promises as fs } from "node:fs";
import path from "node:path";

export type ImageOverrides = Record<string, string>;

const IMAGE_OVERRIDES_PATH = path.join(process.cwd(), "data", "site-image-overrides.json");

function sanitizeOverrides(raw: unknown): ImageOverrides {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  const entries = Object.entries(raw as Record<string, unknown>).filter(
    ([id, value]) => typeof id === "string" && typeof value === "string" && value.length > 0
  );

  return Object.fromEntries(entries);
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
  await ensureOverridesFile();
  try {
    const raw = await fs.readFile(IMAGE_OVERRIDES_PATH, "utf8");
    return sanitizeOverrides(JSON.parse(raw));
  } catch {
    return {};
  }
}

export async function writeImageOverrides(overrides: ImageOverrides) {
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
