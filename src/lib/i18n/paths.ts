import type { Locale } from "./config";

/** All 30 logical page slugs (empty string = home). */
export const pageSlugs = [
  "",
  "about",
  "why-tpower",
  "partner-program",
  "how-it-works",
  "commission",
  "benefits",
  "partner-types",
  "affiliate-program",
  "agent-program",
  "registration-guide",
  "login-guide",
  "marketing-resources",
  "promotional-materials",
  "partner-tools",
  "tracking-reporting",
  "payments",
  "compliance",
  "responsible-gaming",
  "affiliate-guidelines",
  "content-guidelines",
  "faq",
  "contact",
  "partner-support",
  "news",
  "insights",
  "terms",
  "privacy",
  "register",
  "login",
] as const;

export type PageSlug = (typeof pageSlugs)[number];

export const contentSlugs = pageSlugs.filter((s) => s !== "") as Exclude<PageSlug, "">[];

export function localizedPath(locale: Locale, slug: PageSlug = ""): string {
  if (slug === "") return `/${locale}`;
  return `/${locale}/${slug}`;
}

export function swapLocalePath(pathname: string, targetLocale: Locale): string {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  if (stripped === "/") return `/${targetLocale}`;
  return `/${targetLocale}${stripped}`;
}

export function slugFromPathname(pathname: string): PageSlug {
  const match = pathname.match(/^\/(?:en|zh)(?:\/([^/?#]+))?/);
  const slug = match?.[1] ?? "";
  return (pageSlugs.includes(slug as PageSlug) ? slug : "") as PageSlug;
}
