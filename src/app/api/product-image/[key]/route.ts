import { NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

type RouteContext = {
  params: Promise<{
    key: string;
  }>;
};

export async function GET(
  _req: Request,
  context: RouteContext,
) {
  try {
    const { key } = await context.params;

    const store = getStore("snld-product-images");

    const blob = await store.get(key, {
      type: "blob",
    });

    if (!blob) {
      return new NextResponse("Image not found", {
        status: 404,
      });
    }

    return new NextResponse(blob);
  } catch {
    return new NextResponse("Image unavailable", {
      status: 500,
    });
  }
}