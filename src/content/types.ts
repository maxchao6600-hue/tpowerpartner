import type { Locale } from "@/lib/i18n/config";

export type HeroVariant = "dark" | "red" | "felt" | "image" | "cta";

export type PageSection =
  | { type: "prose"; heading?: string; paragraphs: string[] }
  | { type: "cards"; heading?: string; items: { tag?: string; title: string; body: string }[] }
  | { type: "grid"; heading?: string; items: { title: string; body: string; href?: string }[] }
  | { type: "steps"; heading?: string; items: { title: string; body: string }[] }
  | { type: "flow"; heading?: string; items: string[]; disclaimer?: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "legal"; sections: { title: string; paragraphs: string[] }[] }
  | { type: "notice"; body: string }
  | { type: "articles"; heading?: string; items: { title: string; body: string; tag?: string }[] }
  | { type: "related"; heading?: string; links: { label: string; slug: string }[] };

export type PageContent = {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    label: string;
    title: string;
    titleHighlight?: string;
    description: string;
    variant?: HeroVariant;
  };
  sections: PageSection[];
  noIndex?: boolean;
};

export type FaqItem = { question: string; answer: string };

import type { HomeContent } from "@/content/en/home";

export type UiDictionary = {
  site: {
    name: string;
    tagline: string;
    description: string;
    footerBlurb: string;
    footerLegal: string;
    copyright: string;
  };
  cta: {
    register: string;
    login: string;
    registerNow: string;
    learnMore: string;
    contactSupport: string;
    alreadyPartner: string;
    noAccount: string;
    becomePartner: string;
    exploreProgram: string;
    viewResources: string;
    forgotPassword: string;
  };
  nav: {
    program: string;
    partners: string;
    resources: string;
    support: string;
  };
  mega: {
    program: string;
    partners: string;
    resources: string;
    support: string;
    partnerProgram: string;
    whyTpower: string;
    benefits: string;
    commission: string;
    about: string;
    partnerTypes: string;
    affiliateProgram: string;
    agentProgram: string;
    howItWorks: string;
    marketingResources: string;
    promotionalMaterials: string;
    partnerTools: string;
    insights: string;
    news: string;
    faq: string;
    partnerSupport: string;
    contact: string;
    login: string;
    register: string;
  };
  footer: {
    program: string;
    partners: string;
    resources: string;
    support: string;
    legal: string;
    partnerProgram: string;
    whyTpower: string;
    benefits: string;
    commission: string;
    partnerTypes: string;
    affiliateProgram: string;
    agentProgram: string;
    howItWorks: string;
    marketingResources: string;
    promotionalMaterials: string;
    partnerTools: string;
    insights: string;
    news: string;
    faq: string;
    partnerSupport: string;
    contact: string;
    register: string;
    login: string;
    terms: string;
    privacy: string;
    responsibleGaming: string;
    compliance: string;
    affiliateGuidelines: string;
    contentGuidelines: string;
  };
  forms: {
    firstName: string;
    lastName: string;
    email: string;
    partnerType: string;
    selectType: string;
    affiliate: string;
    website: string;
    content: string;
    social: string;
    traffic: string;
    agent: string;
    websiteSource: string;
    country: string;
    message: string;
    password: string;
    submitRegister: string;
    submitLogin: string;
    submitContact: string;
    applicationSubmitted: string;
    applicationThanks: string;
    welcomeBack: string;
    loginSubtitle: string;
    registerSubtitle: string;
    becomePartner: string;
    contactTitle: string;
    contactSubtitle: string;
    contactSent: string;
    contactThanks: string;
    portalLabel: string;
    officialPlatform: string;
    loading: string;
    errorRequired: string;
  };
  home: HomeContent;
};

export type Dictionary = {
  locale: Locale;
  ui: UiDictionary;
  pages: Record<string, PageContent>;
  faq: FaqItem[];
};
