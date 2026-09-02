"use client";

import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/assets";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

type LogoProps = {
  className?: string;
  variant?: "default" | "inverse" | "on-dark";
  showPartnerLabel?: boolean;
  iconOnly?: boolean;
};

export function Logo({
  className = "",
  variant = "inverse",
  showPartnerLabel = true,
  iconOnly = false,
}: LogoProps) {
  const { locale } = useLocale();
  const onDark = variant === "inverse" || variant === "on-dark";
  const titleClass = onDark ? "text-white" : "text-charcoal";
  const subtitleClass = onDark ? "text-white/65" : "text-muted";

  return (
    <Link href={localizedPath(locale)} className={`group inline-flex items-center gap-3 ${className}`}>
      <Image
        src={brandAssets.logoMark}
        alt="TPOWER"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-[10px] object-cover"
        priority
      />
      {!iconOnly && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className={`font-display text-[15px] font-extrabold tracking-[0.14em] uppercase sm:text-base ${titleClass}`}>
            TPOWER
          </span>
          {showPartnerLabel && (
            <span className={`mt-1 hidden font-mono text-[9px] tracking-[0.28em] uppercase sm:block sm:text-[10px] ${subtitleClass}`}>
              {locale === "zh" ? "合作伙伴计划" : "Partner Program"}
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
