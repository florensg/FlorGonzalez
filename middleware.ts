import { NextResponse } from "next/server";

// Middleware mínimo para habilitar Edge Runtime sin crashes.
export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
