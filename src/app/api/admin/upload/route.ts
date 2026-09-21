import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

function okAuth(req: Request) {
  const user = req.headers.get("x-admin-user") ?? "";
  const password = req.headers.get("x-admin-password") ?? "";

  return (
    user === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD &&
    user.length > 0 &&
    password.length > 0
  );
}

export async function POST(req: Request) {
  if (!okAuth(req)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "No file" },
        { status: 400 },
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 },
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image must be smaller than 10MB" },
        { status: 400 },
      );
    }

    const extension =
      file.name.split(".").pop()?.toLowerCase() || "jpg";

    const safeExtension = extension.replace(
      /[^a-z0-9]/g,
      "",
    );

    const key = `products/${Date.now()}-${crypto.randomUUID()}.${safeExtension}`;

    const store = getStore("snld-product-images");

    const buffer = await file.arrayBuffer();

    await store.set(key, buffer, {
      metadata: {
        contentType: file.type,
      },
    });

    return NextResponse.json({
      ok: true,
      key,
      url: `/api/product-image/${encodeURIComponent(key)}`,
    });
  } catch {
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 },
    );
  }
}