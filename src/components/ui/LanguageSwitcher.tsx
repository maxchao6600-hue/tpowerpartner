"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { swapLocalePath } from "@/lib/i18n/paths";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 font-mono text-[10px] tracking-[0.15em] uppercase">
      {( ["en", "zh"] as const).map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/25" aria-hidden="true">|</span>}
          <Link
            href={swapLocalePath(pathname, loc)}
            className={`px-1.5 py-1 transition-colors ${
              locale === loc
                ? "text-accent-bright"
                : "text-white/55 hover:text-white"
            }`}
            hrefLang={loc === "zh" ? "zh-CN" : "en"}
            aria-current={locale === loc ? "page" : undefined}
          >
            {localeLabels[loc]}
          </Link>
        </span>
      ))}
    </div>
  );
}
