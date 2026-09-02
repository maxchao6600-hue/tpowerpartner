import Image from "next/image";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { brandAssets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CasinoAmbience } from "@/components/visuals/CasinoAmbience";

type HomePageProps = {
  locale: Locale;
  dict: Dictionary;
};

export function HomePage({ locale, dict }: HomePageProps) {
  const h = dict.ui.home;
  const cta = dict.ui.cta;
  const previewFaq = dict.faq.slice(0, 4);

  return (
    <>
      {/* 1. Premium Hero */}
      <section className="relative overflow-hidden bg-charcoal pt-[72px]">
        <CasinoAmbience variant="hero" />
        <div className="relative h-[260px] sm:h-[320px] lg:hidden">
          <Image
            src={brandAssets.partnerHeroMobile}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" aria-hidden="true" />
        </div>
        <Container className="relative">
          <div className="grid min-h-[min(82vh,860px)] items-center lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-8">
            <div className="relative z-10 flex flex-col justify-center py-10 lg:py-20 lg:pr-8">
              <p className="mb-5 inline-flex w-fit items-center gap-2 border border-accent/45 bg-accent/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.28em] text-accent-bright uppercase">
                {h.hero.eyebrow}
              </p>
              <h1 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-white text-glow-red">
                {h.hero.title1}
                <br />
                <span className="text-accent-bright">{h.hero.title2}</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">
                {h.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href={localizedPath(locale, "register")} className="sm:min-w-[220px]">
                  {cta.registerNow}
                </Button>
                <Button variant="secondary" href={localizedPath(locale, "login")} className="sm:min-w-[180px]">
                  {cta.login}
                </Button>
              </div>
              <p className="mt-6 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden="true" />
                {h.hero.trustLabel}
              </p>
            </div>
            <div className="relative hidden min-h-[540px] lg:block xl:min-h-[640px]">
              <div className="hero-artwork-panel absolute inset-y-6 right-0 left-0 overflow-hidden border border-white/5">
                <Image
                  src={brandAssets.partnerHero}
                  alt="TPOWER Partner — premium casino partner program"
                  fill
                  priority
                  sizes="(max-width: 1280px) 56vw, 820px"
                  className="object-cover object-[55%_center] scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/25 to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
      </section>

      {/* 2. Official Partner Identity — split layout */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="casino-pattern absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.identity.label}</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-charcoal">
                {h.identity.title1}
                <br />
                <span className="text-accent">{h.identity.title2}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{h.identity.description}</p>
              <div className="mt-8">
                <Button variant="outline-light" href={localizedPath(locale, "partner-program")}>
                  {cta.exploreProgram}
                </Button>
              </div>
            </div>
            <div className="relative border border-charcoal/10 bg-charcoal p-8 red-glow lg:p-12">
              <span className="pointer-events-none absolute top-6 right-6 text-5xl text-white/5 select-none" aria-hidden="true">♠</span>
              <Logo variant="on-dark" />
              <p className="mt-8 font-display text-2xl font-extrabold uppercase leading-tight text-white">
                {h.identity.cardTitle1}
                <span className="block text-accent-bright">{h.identity.cardTitle2}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{h.identity.cardBody}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Casino Atmosphere — full-width image */}
      <section className="relative min-h-[480px] overflow-hidden lg:min-h-[560px]">
        <Image src={brandAssets.joinCta} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(227,24,55,0.15)_0%,transparent_60%)]" aria-hidden="true" />
        <CasinoAmbience variant="subtle" />
        <Container className="relative flex min-h-[480px] items-center py-20 lg:min-h-[560px]">
          <div className="max-w-2xl">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.casino.label}</p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-white text-glow-red">
              {h.casino.title1}
              <br />
              {h.casino.title2}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{h.casino.description}</p>
            <div className="mt-10">
              <Button href={localizedPath(locale, "why-tpower")}>{cta.learnMore}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Why Partner — asymmetric grid with suit icons */}
      <section className="relative casino-bg-crimson py-20 lg:py-28">
        <CasinoAmbience variant="section" />
        <Container className="relative">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.why.label}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] text-white">
              {h.why.title1}
              <br />
              <span className="text-accent-bright">{h.why.title2}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">{h.why.description}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.why.reasons.map((r) => (
              <div key={r.title} className="card-premium p-6 lg:p-7">
                <span className="chip-accent mb-4" aria-hidden="true">{r.icon}</span>
                <h3 className="font-display text-base font-bold uppercase text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{r.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Partnership Advantages — numbered dark cards */}
      <section id="benefits" className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.benefits.label}</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal lg:text-4xl">{h.benefits.title}</h2>
            </div>
            <Button variant="outline-light" href={localizedPath(locale, "benefits")}>{cta.learnMore}</Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {h.benefits.items.map((item) => (
              <div key={item.num} className="group flex gap-5 border border-charcoal/10 bg-charcoal p-6 transition-shadow hover:red-glow lg:p-7">
                <span className="font-display text-3xl font-extrabold text-accent-bright">{item.num}</span>
                <div>
                  <h3 className="font-display text-base font-bold uppercase text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Partner Types — editorial cards */}
      <section className="relative casino-bg-dark py-20 lg:py-28">
        <CasinoAmbience variant="subtle" />
        <Container className="relative">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.partnerTypes.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white lg:text-4xl">{h.partnerTypes.title}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {h.partnerTypes.types.map((t) => (
              <div key={t.name} className="card-premium p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-accent-bright">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{t.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={localizedPath(locale, "partner-types")}>{h.partnerTypes.link}</Button>
          </div>
        </Container>
      </section>

      {/* 7. How It Works — horizontal timeline */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.howItWorks.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal">{h.howItWorks.title}</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {h.howItWorks.steps.map((step, i) => (
              <li key={step.title} className="relative border-t-2 border-accent/30 pt-6">
                <span className="absolute -top-3 left-0 flex h-6 w-6 items-center justify-center bg-accent text-[10px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm font-bold uppercase text-charcoal">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href={localizedPath(locale, "how-it-works")}>{h.howItWorks.link}</Button>
          </div>
        </Container>
      </section>

      {/* 8. Commission Framework — flow diagram */}
      <section className="casino-bg-red py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">{h.commission.label}</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.commission.title}</h2>
              <p className="mt-4 max-w-lg text-white/70">{h.commission.body}</p>
              <div className="mt-8">
                <Button variant="secondary" href={localizedPath(locale, "commission")}>{h.commission.link}</Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:gap-0">
                {h.commission.flow.map((step) => (
                  <div key={step} className="flow-arrow">
                    <span className="inline-block border border-white/20 bg-white/10 px-4 py-2.5 font-mono text-[10px] tracking-wider text-white uppercase">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-white/30 pl-4 text-xs leading-relaxed text-white/50 italic">
                {h.commission.disclaimer}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Marketing Resources — resource hub grid */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.resources.label}</p>
            <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal">{h.resources.title}</h2>
            <p className="mt-3 text-sm text-muted">{h.resources.note}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {h.resources.items.map((item) => (
              <div key={item.title} className="card-premium-light p-6">
                <h3 className="font-display text-sm font-bold uppercase text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="outline-light" href={localizedPath(locale, "marketing-resources")}>{h.resources.link}</Button>
          </div>
        </Container>
      </section>

      {/* 10. Partner Tools — compact feature row */}
      <section className="casino-bg-felt py-20 lg:py-24">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.tools.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.tools.title}</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {h.tools.items.map((item) => (
              <div key={item.title} className="border border-white/10 bg-charcoal/60 p-6">
                <h3 className="font-display text-base font-bold uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={localizedPath(locale, "partner-tools")}>{h.tools.link}</Button>
          </div>
        </Container>
      </section>

      {/* 11. Partner Support + FAQ */}
      <section className="casino-bg-dark py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.support.label}</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.support.title}</h2>
              <ul className="mt-8 space-y-4">
                {h.support.items.map((item) => (
                  <li key={item.title} className="flex gap-4 border border-white/10 bg-white/5 p-5">
                    <span className="text-accent-bright" aria-hidden="true">✓</span>
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/55">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={localizedPath(locale, "partner-support")}>{h.support.link}</Button>
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.faq.label}</p>
              <h2 className="mb-8 font-display text-3xl font-extrabold uppercase text-white">{h.faq.title}</h2>
              <FAQAccordion items={previewFaq} />
              <div className="mt-8">
                <Button variant="secondary" href={localizedPath(locale, "faq")}>{h.faq.link}</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. Final CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <Image src={brandAssets.joinCta} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/85" aria-hidden="true" />
        <Container className="relative text-center">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.cta.trustLabel}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase text-white">
            {h.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">{h.cta.body}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={localizedPath(locale, "register")}>{cta.registerNow}</Button>
            <Button variant="secondary" href={localizedPath(locale, "login")}>{cta.login}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
