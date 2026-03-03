import { NextRequest, NextResponse } from "next/server";
import { devAuthCookie, getDevPassword } from "@/lib/dev-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const devPass = getDevPassword();

  if (!devPass) {
    return NextResponse.json({ error: "no password configured" }, { status: 500 });
  }
  if (body?.password === devPass) {
    const res = NextResponse.json({ success: true });
    res.cookies.set(devAuthCookie.name, devPass, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return res;
  }
  return NextResponse.json({ error: "invalid" }, { status: 401 });
}
