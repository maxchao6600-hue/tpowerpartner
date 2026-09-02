export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
