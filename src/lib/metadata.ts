import type { Metadata } from "next";
import { locales, type Locale, ogLocale } from "@/lib/i18n/config";
import { localizedPath, isLegacyPartnerSlug, type PageSlug } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { brandAssets } from "@/lib/assets";

type PageMeta = {
  title: string;
  description: string;
  locale: Locale;
  slug: PageSlug;
  noIndex?: boolean;
};

function brandSuffix(locale: Locale) {
  return locale === "zh" ? "TPOWER 官方合作伙伴" : "Official TPOWER Partner";
}

function resolveTitle(title: string, locale: Locale, slug: PageSlug): string {
  if (slug === "") {
    return locale === "zh"
      ? "TPOWER 在线赌场 | 官方合作伙伴网站"
      : "TPOWER Online Casino | Official TPOWER Partner";
  }
  // Allow fully composed titles (e.g. payment page)
  if (title.includes("|")) return title;
  return `${title} | ${brandSuffix(locale)}`;
}

export function createPageMetadata({
  title,
  description,
  locale,
  slug,
  noIndex = false,
}: PageMeta): Metadata {
  const path = localizedPath(locale, slug);
  const url = `${siteConfig.url}${path}`;
  const fullTitle = resolveTitle(title, locale, slug);
  const shouldNoIndex = noIndex || isLegacyPartnerSlug(slug) || slug === "login" || slug === "register";

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: locale === "zh" ? "TPOWER 在线赌场" : "TPOWER Online Casino",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: shouldNoIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
