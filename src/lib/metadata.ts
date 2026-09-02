import type { Metadata } from "next";
import { locales, type Locale, ogLocale } from "@/lib/i18n/config";
import { localizedPath, type PageSlug } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { brandAssets, siteIcons } from "@/lib/assets";

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

  const ogImage = `${siteConfig.url}${brandAssets.partnerHero}`;

  const languages: Record<string, string> = {
    "x-default": `${siteConfig.url}${localizedPath("en", slug)}`,
  };
  for (const loc of locales) {
    languages[loc === "zh" ? "zh-CN" : loc] = `${siteConfig.url}${localizedPath(loc, slug)}`;
  }

  return {
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: [...siteIcons.icon],
      apple: [...siteIcons.apple],
      shortcut: [...siteIcons.shortcut],
    },
    manifest: brandAssets.webManifest,
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
