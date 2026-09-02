"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { brandAssets } from "@/lib/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

export function LoginForm() {
  const { locale, dict } = useLocale();
  const f = dict.ui.forms;
  const cta = dict.ui.cta;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors ${
      errors[field]
        ? "border-red-500 bg-red-500/10 focus:border-red-400"
        : "border-white/15 bg-white/5 focus:border-accent-bright focus:bg-white/10"
    }`;

  function validate(form: FormData) {
    const next: Record<string, string> = {};
    if (!form.get("email")) next.email = f.errorRequired;
    if (!form.get("password")) next.password = f.errorRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (!validate(form)) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section className="relative min-h-screen pt-[72px]">
      <div className="relative h-[180px] sm:h-[220px] lg:hidden">
        <Image src={brandAssets.partnerHeroMobile} alt="" fill priority sizes="100vw" className="object-cover object-[center_42%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image src={brandAssets.partnerHero} alt="" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/94 to-charcoal/78" />
      </div>

      <Container className="relative grid min-h-[calc(100vh-72px)] items-start gap-10 py-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16">
        <div className="hidden lg:block">
          <Logo variant="on-dark" className="mb-8" />
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{f.portalLabel}</p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1.0] text-white text-glow-red">
            {f.welcomeBack}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base">{f.loginSubtitle}</p>
          <div className="relative mt-8 aspect-[16/10] max-w-md overflow-hidden border border-white/10 red-glow">
            <Image src={brandAssets.partnerHero} alt="" fill sizes="400px" className="object-cover object-[55%_center]" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <p className="mt-6 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden="true" />
            {f.officialPlatform}
          </p>
        </div>

        <div className="rounded-xl border border-accent/25 bg-charcoal-mid/95 p-7 shadow-[0_0_60px_rgba(227,24,55,0.12)] backdrop-blur-md red-glow lg:p-9">
          <div className="mb-6 lg:hidden">
            <p className="font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{f.portalLabel}</p>
            <h1 className="mt-2 font-display text-2xl font-extrabold uppercase text-white">{f.welcomeBack}</h1>
          </div>

          {submitted ? (
            <div className="py-8 text-center" role="status">
              <p className="text-sm text-white/50">
                {locale === "zh"
                  ? "登录功能将在合作伙伴后台接入后启用。"
                  : "Login will be available through the partner dashboard once your account is active."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="login-email" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                  {f.email}
                </label>
                <input id="login-email" name="email" type="email" autoComplete="email" className={inputClass("email")} aria-invalid={!!errors.email} />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="login-password" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                  {f.password}
                </label>
                <input id="login-password" name="password" type="password" autoComplete="current-password" className={inputClass("password")} aria-invalid={!!errors.password} />
                {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={loading} aria-busy={loading}>
                {loading ? f.loading : f.submitLogin}
              </Button>
              <Button variant="secondary" href={localizedPath(locale, "register")} className="w-full">
                {cta.register}
              </Button>
              <p className="text-center text-xs text-white/30">{cta.forgotPassword}</p>
              <p className="text-center font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase">{f.officialPlatform}</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
