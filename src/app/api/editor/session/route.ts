import { NextRequest, NextResponse } from "next/server";
import {
  createAdminSessionToken,
  EDITOR_SESSION_TTL_SECONDS,
  getEditorCookieName,
  isEditorAdminRequest,
  verifyEditorPassword,
} from "@/lib/editor-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  return NextResponse.json({ authenticated: isEditorAdminRequest(request) });
}

export async function POST(request: NextRequest) {
  if (!process.env.EDITOR_ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "EDITOR_ADMIN_PASSWORD is not configured on the server." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (typeof password !== "string" || !verifyEditorPassword(password)) {
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  try {
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set({
      name: getEditorCookieName(),
      value: createAdminSessionToken(),
      maxAge: EDITOR_SESSION_TTL_SECONDS,
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Failed to create admin session." }, { status: 500 });
  }
}
