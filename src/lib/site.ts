export const siteConfig = {
  name: "TPOWER Partner",
  shortName: "TPOWER Partner",
  tagline: "Official TPOWER Partner Program",
  description:
    "TPOWER Partner is the official partner and affiliate platform for TPOWER Casino. Register, login, and join the TPOWER partner program.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpowerpartner.com",
  locale: "en" as const,
  contactEmail: "partners@tpowerpartner.com",
} as const;

export const navLinks = [
  { label: "Partner Program", href: "/about" },
  { label: "Benefits", href: "/#benefits" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Commission", href: "/commission" },
  { label: "FAQ", href: "/faq" },
] as const;

export const footerNav = {
  program: [
    { label: "Partner Program", href: "/about" },
    { label: "Commission", href: "/commission" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  account: [
    { label: "Register", href: "/register" },
    { label: "Login", href: "/login" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Responsible Gaming", href: "/responsible-gaming" },
  ],
} as const;

export const resourceCategories = [
  { title: "Partner Guides", description: "Guidance for the TPOWER Partner Program.", href: "/resources#partner-guides" },
  { title: "Marketing Resources", description: "Brand assets for approved partner campaigns.", href: "/resources#marketing-resources" },
  { title: "Promotion Materials", description: "Creative materials for TPOWER partners.", href: "/resources#promotion-materials" },
  { title: "Program Updates", description: "Updates from the TPOWER Partner Program.", href: "/resources#program-updates" },
  { title: "FAQ", description: "Common partner program questions.", href: "/faq" },
] as const;
