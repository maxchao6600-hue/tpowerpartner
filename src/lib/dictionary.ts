import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/content/types";
import { ui as enUi } from "@/content/en/ui";
import { ui as zhUi } from "@/content/zh/ui";
import { pages as enPages } from "@/content/en/pages";
import { pages as zhPages } from "@/content/zh/pages";
import { faqItems as enFaq } from "@/content/en/faq";
import { faqItems as zhFaq } from "@/content/zh/faq";
import { homeContent as enHome } from "@/content/en/home";
import { homeContent as zhHome } from "@/content/zh/home";

const dictionaries: Record<Locale, () => Dictionary> = {
  en: () => ({
    locale: "en",
    ui: { ...enUi, home: enHome },
    pages: enPages,
    faq: [...enFaq],
  }),
  zh: () => ({
    locale: "zh",
    ui: { ...zhUi, home: zhHome },
    pages: zhPages,
    faq: [...zhFaq],
  }),
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]();
}

export function getPage(locale: Locale, slug: string) {
  return getDictionary(locale).pages[slug];
}
