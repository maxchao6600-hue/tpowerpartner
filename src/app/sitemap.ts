import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/lib/i18n/config";
import { pageSlugs, localizedPath } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const slug of pageSlugs) {
      if (slug === "login" || slug === "register") continue;
      entries.push({
        url: `${siteConfig.url}${localizedPath(locale, slug)}`,
        lastModified: new Date(),
        changeFrequency: slug === "" ? "weekly" : "monthly",
        priority: slug === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
