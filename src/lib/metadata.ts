import type { Metadata } from "next";
import { locales, type Locale, ogLocale } from "@/lib/i18n/config";
import { localizedPath, type PageSlug } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  locale: Locale;
  slug: PageSlug;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  locale,
  slug,
  noIndex = false,
}: PageMeta): Metadata {
  const path = localizedPath(locale, slug);
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    slug === ""
      ? locale === "zh"
        ? `${siteConfig.name} | TPOWER 官方在线赌场合作伙伴计划`
        : `${siteConfig.name} | Official TPOWER Casino Partner Program`
      : `${title} | ${siteConfig.name}`;

  const languages: Record<string, string> = {
    "x-default": `${siteConfig.url}${localizedPath("en", slug)}`,
  };
  for (const loc of locales) {
    languages[loc === "zh" ? "zh-CN" : loc] = `${siteConfig.url}${localizedPath(loc, slug)}`;
  }

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
