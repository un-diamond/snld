import { NextResponse } from "next/server";
import {
  getStoredProducts,
  saveStoredProducts,
} from "@/lib/product-store";

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

export async function GET(req: Request) {
  if (!okAuth(req)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const products = await getStoredProducts();

    return NextResponse.json({
      products,
    });
  } catch (error) {
    console.error("Failed to load products:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to load products",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  if (!okAuth(req)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const body = await req.json();

    const products = Array.isArray(body.products)
      ? body.products
      : [];

    await saveStoredProducts(products);

    return NextResponse.json({
      ok: true,
      products,
    });
  } catch (error) {
    console.error("Failed to save products:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save products",
      },
      { status: 500 },
    );
  }
}