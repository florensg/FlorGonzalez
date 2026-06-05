import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip assets, API and internal routes
  if (
    pathname.includes("/_next/") ||
    pathname.includes("/api/") ||
    pathname.includes("/_vercel") ||
    pathname.includes("/images/") ||
    /\.\w+$/.test(pathname)
  ) {
    return;
  }

  // If path already has a valid locale prefix, let it through
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return;
  }

  // Set default locale cookie and continue rendering
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", defaultLocale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
