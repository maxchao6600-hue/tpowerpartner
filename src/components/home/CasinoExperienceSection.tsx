import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import { brandAssets } from "@/lib/assets";

export function CasinoExperienceSection({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  return (
    <section className="relative min-h-[480px] overflow-hidden lg:min-h-[560px]">
      <Image
        src={brandAssets.joinCta}
        alt="TPOWER casino experience"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" aria-hidden="true" />

      <Container className="relative flex min-h-[480px] items-center py-20 lg:min-h-[560px] lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">
            {isZh ? "赌场氛围" : "Casino Atmosphere"}
          </p>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-white text-glow-red">
            {isZh ? "TPOWER" : "The TPOWER"}
            <br />
            {isZh ? "品牌体验。" : "Experience."}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {isZh
              ? "合作伙伴推广的是为娱乐、活力与玩家参与而打造的高端在线赌场——并将这一体验与基于绩效的合作增长相连接。"
              : "Partners promote a premium online casino built for entertainment, energy, and player engagement — then connect that experience to performance-based partnership growth."}
          </p>
          <Link
            href={localizedPath(locale, "register")}
            className="btn-shimmer red-glow-strong mt-10 inline-flex items-center justify-center border border-accent-bright/50 bg-accent px-8 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all hover:brightness-110"
          >
            {isZh ? "立即注册" : "Register Now"}
          </Link>
        </div>
      </Container>
    </section>
  );
}
