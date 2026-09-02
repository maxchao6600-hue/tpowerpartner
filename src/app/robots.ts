import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/en/login", "/zh/login", "/en/register", "/zh/register"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
