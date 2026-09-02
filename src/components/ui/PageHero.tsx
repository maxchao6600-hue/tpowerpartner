import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { brandAssets } from "@/lib/assets";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description?: string;
  variant?: "dark" | "red" | "felt" | "image" | "cta";
};

export function PageHero({ label, title, description, variant = "dark" }: PageHeroProps) {
  const bg = {
    dark: "casino-bg-dark",
    red: "casino-bg-red",
    felt: "casino-bg-felt",
    image: "",
    cta: "",
  }[variant];

  const imageSrc =
    variant === "cta" ? brandAssets.joinCta : brandAssets.partnerHeroMobile;

  return (
    <section className={`relative overflow-hidden pt-[72px] ${bg}`}>
      {(variant === "image" || variant === "cta") && (
        <>
          <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/55" aria-hidden="true" />
        </>
      )}
      <div className="casino-light-streak pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <span className="pointer-events-none absolute top-24 right-8 text-7xl text-white/5 select-none" aria-hidden="true">
        ♠
      </span>
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <p className="mb-4 inline-block border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] tracking-[0.28em] text-accent-bright uppercase backdrop-blur-sm">
          {label}
        </p>
        <h1 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-white text-glow-red">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">{description}</p>
        )}
      </Container>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden="true" />
    </section>
  );
}
