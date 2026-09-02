import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

function getPreferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  if (header.toLowerCase().includes("zh")) return "zh" as const;
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  if (isLocale(segment)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
