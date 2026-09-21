import { NextResponse } from "next/server";

function clean(value: string | undefined) {
  return (value ?? "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const username = clean(body.username);
    const password = clean(body.password);

    const adminUser = clean(process.env.ADMIN_USER);
    const adminPassword = clean(process.env.ADMIN_PASSWORD);

    if (
      username.length === 0 ||
      password.length === 0 ||
      adminUser.length === 0 ||
      adminPassword.length === 0
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Admin credentials are not configured.",
        },
        { status: 500 },
      );
    }

    if (
      username !== adminUser ||
      password !== adminPassword
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid username or password.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request.",
      },
      { status: 400 },
    );
  }
}