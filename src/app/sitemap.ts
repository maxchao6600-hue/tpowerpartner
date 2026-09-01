import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/why-tpower",
  "/how-it-works",
  "/commission",
  "/resources",
  "/faq",
  "/contact",
  "/register",
  "/terms",
  "/privacy",
  "/responsible-gaming",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
