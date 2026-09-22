import type { Locale } from "./config";

/** Primary casino-facing pages (preferred IA). */
export const primarySlugs = [
  "",
  "games",
  "promotions",
  "payment",
  "faq",
  "support",
  "about",
  "why-tpower",
  "responsible-gaming",
  "terms",
  "privacy",
  "contact",
  "news",
  "register",
  "login",
] as const;

/** Legacy affiliate/partner recruitment routes retained for URL continuity. */
export const legacyPartnerSlugs = [
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
  "affiliate-guidelines",
  "content-guidelines",
  "partner-support",
  "partner-insights",
] as const;

/** All logical page slugs (empty string = home). */
export const pageSlugs = [...primarySlugs, ...legacyPartnerSlugs] as const;

export type PageSlug = (typeof pageSlugs)[number];
export type LegacyPartnerSlug = (typeof legacyPartnerSlugs)[number];

export const contentSlugs = pageSlugs.filter((s) => s !== "") as Exclude<PageSlug, "">[];

/** Slugs that should appear in sitemap (indexable public pages). */
export const sitemapSlugs = primarySlugs.filter(
  (s) => s !== "register" && s !== "login",
) as Exclude<PageSlug, "register" | "login">[];

export function isLegacyPartnerSlug(slug: string): boolean {
  return (legacyPartnerSlugs as readonly string[]).includes(slug);
}

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
