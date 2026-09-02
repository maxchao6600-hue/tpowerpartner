"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/content/types";
import { localizedPath } from "@/lib/i18n/paths";

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  path: (slug?: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    dict,
    path: (slug = "") => localizedPath(locale, slug as "" | "about"),
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
