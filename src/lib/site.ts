export const siteConfig = {
  name: "TPOWER",
  shortName: "TPOWER",
  tagline: "Official TPOWER Partner Website",
  description:
    "Access TPOWER online casino through our official partner website. Register your TPOWER account, log in, explore games, view promotions and get support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpowerpartner.com",
  locale: "en" as const,
  contactEmail: "partners@tpowerpartner.com",
} as const;
