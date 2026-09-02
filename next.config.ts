import type { NextConfig } from "next";
import { contentSlugs } from "./src/lib/i18n/paths";

const legacyPaths = [
  "",
  ...contentSlugs.filter((s) => s !== "register" && s !== "login"),
  "resources",
];

const redirects = [
  ...legacyPaths.flatMap((path) => [
    {
      source: path === "" ? "/" : `/${path}`,
      destination: `/en${path === "" ? "" : `/${path}`}`,
      permanent: true,
    },
  ]),
  { source: "/en/insights", destination: "/en/partner-insights", permanent: true },
  { source: "/zh/insights", destination: "/zh/partner-insights", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
