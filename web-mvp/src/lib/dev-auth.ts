import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "dev-auth";

export function getDevPassword() {
  return process.env.DEV_PASSWORD?.trim() ?? "";
}

export function isAuthenticated(request: NextRequest) {
  const devPassword = getDevPassword();
  if (!devPassword) {
    // If password is not configured, auth is effectively disabled for local dev.
    return true;
  }

  return request.cookies.get(AUTH_COOKIE_NAME)?.value === devPassword;
}

export function buildUnauthorizedResponse(request: NextRequest) {
  const isApiRequest = request.nextUrl.pathname.startsWith("/api/");

  if (isApiRequest) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  return NextResponse.redirect(loginUrl);
}

export const devAuthCookie = {
  name: AUTH_COOKIE_NAME,
};
