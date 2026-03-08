import crypto from "node:crypto";
import type { NextRequest } from "next/server";

const EDITOR_COOKIE_NAME = "editor_admin";
export const EDITOR_SESSION_TTL_SECONDS = 60 * 60 * 8;

type SessionPayload = {
  role: "admin";
  exp: number;
};

function getSessionSecret() {
  const secret = process.env.EDITOR_SESSION_SECRET || process.env.EDITOR_ADMIN_PASSWORD || "";
  return secret.length > 0 ? secret : null;
}

function sign(payloadBase64: string) {
  const secret = getSessionSecret();
  if (!secret) {
    return null;
  }
  return crypto.createHmac("sha256", secret).update(payloadBase64).digest("hex");
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function createAdminSessionToken() {
  const payload: SessionPayload = {
    role: "admin",
    exp: Date.now() + EDITOR_SESSION_TTL_SECONDS * 1000,
  };
  const payloadBase64 = toBase64Url(JSON.stringify(payload));
  const signature = sign(payloadBase64);
  if (!signature) {
    throw new Error("Editor session secret is not configured.");
  }
  return `${payloadBase64}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return false;
  }

  const [payloadBase64, providedSignature] = token.split(".");
  if (!payloadBase64 || !providedSignature) {
    return false;
  }

  const expectedSignature = sign(payloadBase64);
  if (!expectedSignature) {
    return false;
  }
  const providedBuffer = Buffer.from(providedSignature, "utf8");
  const expectedBuffer = Buffer.from(expectedSignature, "utf8");

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  if (!crypto.timingSafeEqual(providedBuffer, expectedBuffer)) {
    return false;
  }

  try {
    const payload = JSON.parse(fromBase64Url(payloadBase64)) as SessionPayload;
    return payload.role === "admin" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function isEditorAdminRequest(request: NextRequest) {
  const token = request.cookies.get(EDITOR_COOKIE_NAME)?.value;
  return verifyAdminSessionToken(token);
}

export function verifyEditorPassword(password: string) {
  const expected = process.env.EDITOR_ADMIN_PASSWORD;
  if (!expected) {
    return false;
  }

  const actualBuffer = Buffer.from(password, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");

  if (actualBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(actualBuffer, expectedBuffer);
}

export function getEditorCookieName() {
  return EDITOR_COOKIE_NAME;
}
