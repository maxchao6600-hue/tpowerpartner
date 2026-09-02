export const brandAssets = {
  logoMark: "/brand/tpower-logo.png",
  casinoHero: "/images/hero.webp",
  partnerHero: "/images/tpower-partner-hero.webp",
  partnerHeroMobile: "/images/tpower-partner-hero-mobile.webp",
  joinCta: "/images/cta/tpower-join-cta.webp",
  favicon: "/favicon.ico",
  favicon48: "/favicon-48x48.png",
  favicon96: "/favicon-96x96.png",
  appleTouchIcon: "/apple-touch-icon.png",
  icon192: "/icon-192.png",
  icon512: "/icon-512.png",
  webManifest: "/site.webmanifest",
} as const;

export const siteIcons = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  shortcut: ["/favicon.ico"],
} as const;
