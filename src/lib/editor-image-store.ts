import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type ImageOverrides = Record<string, string>;

type FirestoreConfig = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

const IMAGE_OVERRIDES_PATH = path.join(process.cwd(), "data", "site-image-overrides.json");
const FIRESTORE_DOC_PATH = "siteConfig/imageOverrides";
const OAUTH_TOKEN_AUDIENCE = "https://oauth2.googleapis.com/token";
const DATASTORE_SCOPE = "https://www.googleapis.com/auth/datastore";

let cachedAccessToken: { token: string; expiresAtMs: number } | null = null;

function sanitizeOverrides(raw: unknown): ImageOverrides {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  const entries = Object.entries(raw as Record<string, unknown>).filter(
    ([id, value]) => typeof id === "string" && typeof value === "string" && value.length > 0
  );

  return Object.fromEntries(entries);
}

function normalizePrivateKey(privateKey: string) {
  return privateKey.replace(/\\n/g, "\n");
}

function getConfigFromServiceAccountJson(): FirestoreConfig | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as {
      project_id?: string;
      client_email?: string;
      private_key?: string;
    };

    if (!parsed.project_id || !parsed.client_email || !parsed.private_key) {
      return null;
    }

    return {
      projectId: parsed.project_id,
      clientEmail: parsed.client_email,
      privateKey: normalizePrivateKey(parsed.private_key),
    };
  } catch {
    return null;
  }
}

function getFirestoreConfig(): FirestoreConfig | null {
  const fromJson = getConfigFromServiceAccountJson();
  if (fromJson) {
    return fromJson;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return {
    projectId,
    clientEmail,
    privateKey: normalizePrivateKey(privateKey),
  };
}

function ensurePersistentStoreConfigured() {
  if (process.env.VERCEL && !getFirestoreConfig()) {
    throw new Error(
      "Persistent image storage is not configured. Add Firestore credentials via FIREBASE_SERVICE_ACCOUNT_KEY JSON or FIREBASE_PROJECT_ID + FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY."
    );
  }
}

function base64UrlEncode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function createServiceAccountJwt(config: FirestoreConfig) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const header = base64UrlEncode(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64UrlEncode(
    JSON.stringify({
      iss: config.clientEmail,
      sub: config.clientEmail,
      aud: OAUTH_TOKEN_AUDIENCE,
      scope: DATASTORE_SCOPE,
      iat,
      exp,
    })
  );

  const unsignedToken = `${header}.${payload}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(config.privateKey, "base64url");

  return `${unsignedToken}.${signature}`;
}

async function getGoogleAccessToken(config: FirestoreConfig) {
  if (cachedAccessToken && cachedAccessToken.expiresAtMs > Date.now() + 60_000) {
    return cachedAccessToken.token;
  }

  const assertion = createServiceAccountJwt(config);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(OAUTH_TOKEN_AUDIENCE, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  const payload = (await response.json().catch(() => null)) as
    | { access_token?: string; expires_in?: number; error_description?: string }
    | null;

  if (!response.ok || !payload?.access_token) {
    throw new Error(payload?.error_description || "Failed to get Google access token for Firestore.");
  }

  const expiresInMs = (payload.expires_in ?? 3600) * 1000;
  cachedAccessToken = {
    token: payload.access_token,
    expiresAtMs: Date.now() + expiresInMs,
  };

  return payload.access_token;
}

function getFirestoreDocumentUrl(config: FirestoreConfig) {
  return `https://firestore.googleapis.com/v1/projects/${config.projectId}/databases/(default)/documents/${FIRESTORE_DOC_PATH}`;
}

function toFirestoreMapFields(overrides: ImageOverrides) {
  return Object.fromEntries(
    Object.entries(overrides).map(([id, imageUrl]) => [id, { stringValue: imageUrl }])
  );
}

function fromFirestoreMapFields(raw: unknown): ImageOverrides {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return {};
  }

  const entries = Object.entries(raw as Record<string, unknown>)
    .map(([id, value]) => {
      const imageUrl =
        typeof value === "object" &&
        value !== null &&
        "stringValue" in value &&
        typeof (value as { stringValue?: unknown }).stringValue === "string"
          ? (value as { stringValue: string }).stringValue
          : null;
      return [id, imageUrl] as const;
    })
    .filter((entry): entry is [string, string] => typeof entry[1] === "string");

  return sanitizeOverrides(Object.fromEntries(entries));
}

async function readImageOverridesFromFirestore(config: FirestoreConfig): Promise<ImageOverrides> {
  const token = await getGoogleAccessToken(config);
  const response = await fetch(getFirestoreDocumentUrl(config), {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (response.status === 404) {
    return {};
  }

  const payload = (await response.json().catch(() => null)) as
    | {
        error?: { message?: string };
        fields?: {
          overrides?: {
            mapValue?: {
              fields?: Record<string, unknown>;
            };
          };
        };
      }
    | null;

  if (!response.ok) {
    throw new Error(payload?.error?.message || "Failed to read Firestore image overrides.");
  }

  const mapFields = payload?.fields?.overrides?.mapValue?.fields ?? {};
  return fromFirestoreMapFields(mapFields);
}

async function writeImageOverridesToFirestore(config: FirestoreConfig, overrides: ImageOverrides) {
  const token = await getGoogleAccessToken(config);
  const safeOverrides = sanitizeOverrides(overrides);
  const response = await fetch(getFirestoreDocumentUrl(config), {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        overrides: {
          mapValue: {
            fields: toFirestoreMapFields(safeOverrides),
          },
        },
      },
    }),
    cache: "no-store",
  });

  const payload = (await response.json().catch(() => null)) as
    | { error?: { message?: string } }
    | null;

  if (!response.ok) {
    throw new Error(payload?.error?.message || "Failed to write Firestore image overrides.");
  }
}

async function ensureOverridesFile() {
  await fs.mkdir(path.dirname(IMAGE_OVERRIDES_PATH), { recursive: true });
  try {
    await fs.access(IMAGE_OVERRIDES_PATH);
  } catch {
    await fs.writeFile(IMAGE_OVERRIDES_PATH, "{}\n", "utf8");
  }
}

async function readImageOverridesFromFile(): Promise<ImageOverrides> {
  await ensureOverridesFile();
  try {
    const raw = await fs.readFile(IMAGE_OVERRIDES_PATH, "utf8");
    return sanitizeOverrides(JSON.parse(raw));
  } catch {
    return {};
  }
}

async function writeImageOverridesToFile(overrides: ImageOverrides) {
  await ensureOverridesFile();
  const safeOverrides = sanitizeOverrides(overrides);
  const tempPath = `${IMAGE_OVERRIDES_PATH}.tmp`;

  await fs.writeFile(tempPath, `${JSON.stringify(safeOverrides, null, 2)}\n`, "utf8");
  await fs.rename(tempPath, IMAGE_OVERRIDES_PATH);
}

export async function readImageOverrides(): Promise<ImageOverrides> {
  ensurePersistentStoreConfigured();

  const firestoreConfig = getFirestoreConfig();
  if (firestoreConfig) {
    return readImageOverridesFromFirestore(firestoreConfig);
  }

  return readImageOverridesFromFile();
}

export async function writeImageOverrides(overrides: ImageOverrides) {
  ensurePersistentStoreConfigured();

  const firestoreConfig = getFirestoreConfig();
  if (firestoreConfig) {
    await writeImageOverridesToFirestore(firestoreConfig, overrides);
    return;
  }

  await writeImageOverridesToFile(overrides);
}

export async function setImageOverride(id: string, imageUrl: string) {
  const overrides = await readImageOverrides();
  overrides[id] = imageUrl;
  await writeImageOverrides(overrides);
  return overrides;
}
