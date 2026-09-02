"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { brandAssets } from "@/lib/assets";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

export function RegisterForm() {
  const { locale, dict } = useLocale();
  const f = dict.ui.forms;
  const [submitted, setSubmitted] = useState(false);
  const inputClass =
    "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent-bright focus:bg-white/10";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative min-h-screen pt-[72px]">
      <Image src={brandAssets.partnerHeroMobile} alt="" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/70" aria-hidden="true" />

      <Container className="relative grid min-h-[calc(100vh-72px)] items-start gap-10 py-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Logo variant="on-dark" className="mb-8" />
          <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">
            {dict.ui.site.tagline}
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] text-white">
            {f.becomePartner}
          </h1>
          <p className="mt-4 max-w-md text-sm text-white/60 md:text-base">{f.registerSubtitle}</p>
        </div>

        <div className="rounded-xl border border-accent/20 bg-charcoal-mid/80 p-7 backdrop-blur-md red-glow lg:p-9">
          {submitted ? (
            <div className="py-8 text-center">
              <h2 className="font-display text-xl font-extrabold uppercase text-white">{f.applicationSubmitted}</h2>
              <p className="mt-3 text-sm text-white/50">{f.applicationThanks}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                    {f.firstName}
                  </label>
                  <input id="first-name" name="firstName" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                    {f.lastName}
                  </label>
                  <input id="last-name" name="lastName" type="text" required className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="reg-email" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                  {f.email}
                </label>
                <input id="reg-email" name="email" type="email" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="partner-type" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                  {f.partnerType}
                </label>
                <select id="partner-type" name="partnerType" required className={inputClass}>
                  <option value="" className="bg-charcoal">{f.selectType}</option>
                  <option value="affiliate" className="bg-charcoal">{f.affiliate}</option>
                  <option value="website" className="bg-charcoal">{f.website}</option>
                  <option value="content" className="bg-charcoal">{f.content}</option>
                  <option value="social" className="bg-charcoal">{f.social}</option>
                  <option value="traffic" className="bg-charcoal">{f.traffic}</option>
                  <option value="agent" className="bg-charcoal">{f.agent}</option>
                </select>
              </div>
              <Button type="submit" className="w-full">{f.submitRegister}</Button>
              <p className="text-center text-xs text-white/45">
                <Link href={localizedPath(locale, "login")} className="text-accent-bright hover:underline">
                  {dict.ui.cta.alreadyPartner}
                </Link>
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
