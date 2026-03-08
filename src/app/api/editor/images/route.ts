import { NextRequest, NextResponse } from "next/server";
import placeholders from "@/lib/placeholder-images.json";
import { isEditorAdminRequest } from "@/lib/editor-auth";
import { readImageOverrides, setImageOverride } from "@/lib/editor-image-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const knownImageIds = new Set(placeholders.placeholderImages.map((image) => image.id));

function isValidImageUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const overrides = await readImageOverrides();
    return NextResponse.json({ overrides });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load image overrides.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isEditorAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id.trim() : body?.id;
  const imageUrl = typeof body?.imageUrl === "string" ? body.imageUrl.trim() : body?.imageUrl;

  if (typeof id !== "string" || typeof imageUrl !== "string") {
    return NextResponse.json({ error: "Both id and imageUrl are required." }, { status: 400 });
  }

  if (!knownImageIds.has(id)) {
    return NextResponse.json({ error: "Unknown image id." }, { status: 400 });
  }

  if (!isValidImageUrl(imageUrl)) {
    return NextResponse.json(
      { error: "Invalid URL. Use a full HTTP/HTTPS image URL, including Cloudinary links." },
      { status: 400 }
    );
  }

  try {
    const overrides = await setImageOverride(id, imageUrl);
    return NextResponse.json({ success: true, overrides });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to persist image URL.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
