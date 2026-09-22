import type { Locale } from "./config";

/** Logical page slugs (empty string = home). */
export const pageSlugs = [
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
  // Legacy partner routes retained for URL continuity (footer / redirects)
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
