import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { buildUnauthorizedResponse, isAuthenticated } from "@/lib/dev-auth";

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return buildUnauthorizedResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/:path*", "/api/projects/:path*"],
};
