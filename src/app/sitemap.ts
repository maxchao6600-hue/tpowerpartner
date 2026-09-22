import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/lib/i18n/config";
import { sitemapSlugs, localizedPath, type PageSlug } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const slug of sitemapSlugs) {
      const pageSlug = slug as PageSlug;
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, pageSlug)}`,
        lastModified: new Date(),
        changeFrequency: pageSlug === "" ? "weekly" : "monthly",
        priority: pageSlug === "" ? 1 : pageSlug === "games" || pageSlug === "promotions" ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}
