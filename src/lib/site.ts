export const siteConfig = {
  name: "TPOWER Partner",
  shortName: "TPOWER Partner",
  description:
    "TPOWER Partner is a professional affiliate and partnership program built for marketers, publishers, and traffic owners who want to grow through performance-based partnerships.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tpowerpartner.com",
  locale: "en",
  contactEmail: "partners@tpowerpartner.com",
} as const;

export const navLinks = [
  { label: "Why TPOWER", href: "/why-tpower" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Commission", href: "/commission" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
] as const;

export const footerNav = {
  program: [
    { label: "Why TPOWER", href: "/why-tpower" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Commission", href: "/commission" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  partner: [
    { label: "Login", href: "/login" },
    { label: "Become a Partner", href: "/register" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Responsible Gaming", href: "/responsible-gaming" },
  ],
} as const;

export const resourceCategories = [
  {
    title: "Affiliate Guides",
    description: "Foundational guidance for building and scaling partner campaigns.",
    href: "/resources#affiliate-guides",
  },
  {
    title: "Marketing Resources",
    description: "Creative assets, campaign frameworks, and promotional best practices.",
    href: "/resources#marketing-resources",
  },
  {
    title: "Partner Tips",
    description: "Practical insights for optimizing traffic and partnership performance.",
    href: "/resources#partner-tips",
  },
  {
    title: "Industry Insights",
    description: "Trends and perspectives for performance marketing professionals.",
    href: "/resources#industry-insights",
  },
  {
    title: "Campaign Resources",
    description: "Tools and references to support structured campaign execution.",
    href: "/resources#campaign-resources",
  },
  {
    title: "FAQ",
    description: "Answers to common questions about the TPOWER Partner program.",
    href: "/faq",
  },
] as const;
