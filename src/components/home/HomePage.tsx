import Image from "next/image";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { brandAssets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CasinoExperienceSection } from "@/components/home/CasinoExperienceSection";

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
      <section className="relative overflow-hidden bg-charcoal pt-[72px]">
        <div className="relative h-[240px] sm:h-[300px] lg:hidden">
          <Image
            src={brandAssets.partnerHeroMobile}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal" aria-hidden="true" />
        </div>
        <Container className="relative">
          <div className="grid min-h-[min(78vh,820px)] items-center lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-6">
            <div className="relative z-10 flex flex-col justify-center py-10 lg:py-16 lg:pr-6">
              <p className="mb-5 inline-flex w-fit items-center gap-2 border border-accent/45 bg-accent/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">
                {h.hero.eyebrow}
              </p>
              <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-white text-glow-red">
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
            </div>
            <div className="relative hidden min-h-[520px] lg:block xl:min-h-[600px]">
              <div className="hero-artwork-panel absolute inset-y-4 right-0 left-0 overflow-hidden rounded-sm border border-white/5">
                <Image
                  src={brandAssets.partnerHero}
                  alt="TPOWER Partner"
                  fill
                  priority
                  sizes="(max-width: 1280px) 55vw, 800px"
                  className="object-cover object-[58%_center] scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/20 to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/30" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.welcome.label}</p>
              <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-charcoal">
                {h.welcome.title1}
                <br />
                <span className="text-accent">{h.welcome.title2}</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{h.welcome.description}</p>
            </div>
            <div className="border border-charcoal/10 bg-charcoal p-8 red-glow lg:p-10">
              <Logo variant="on-dark" />
              <p className="mt-8 font-display text-2xl font-extrabold uppercase leading-tight text-white">
                {h.welcome.cardTitle1}
                <span className="block text-accent-bright">{h.welcome.cardTitle2}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{h.welcome.cardBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <CasinoExperienceSection locale={locale} />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.why.label}</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] text-charcoal">
              {h.why.title1}
              <br />
              <span className="text-accent">{h.why.title2}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{h.why.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {h.why.reasons.map((r) => (
              <div key={r.title} className="border border-charcoal/10 p-6">
                <h3 className="font-display text-lg font-bold uppercase text-charcoal">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="outline-light" href={localizedPath(locale, "why-tpower")}>
              {cta.learnMore}
            </Button>
          </div>
        </Container>
      </section>

      <section id="benefits" className="casino-bg-dark py-20 lg:py-28">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.benefits.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.benefits.title}</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {h.benefits.items.map((item) => (
              <div key={item.num} className="flex gap-5 border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-extrabold text-accent-bright">{item.num}</span>
                <div>
                  <h3 className="font-display text-base font-bold uppercase text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href={localizedPath(locale, "benefits")}>{cta.learnMore}</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.howItWorks.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal">{h.howItWorks.title}</h2>
          <ol className="mt-10 flex flex-wrap gap-4">
            {h.howItWorks.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3 border border-charcoal/10 px-5 py-4">
                <span className="font-display text-lg font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-sm font-bold uppercase text-charcoal">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href={localizedPath(locale, "how-it-works")}>{h.howItWorks.link}</Button>
          </div>
        </Container>
      </section>

      <section className="casino-bg-red py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">{h.commission.label}</p>
            <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.commission.title}</h2>
            <p className="mt-4 max-w-lg text-white/70">{h.commission.body}</p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Button variant="secondary" href={localizedPath(locale, "commission")}>
              {h.commission.link}
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.partnerTypes.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal">{h.partnerTypes.title}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {h.partnerTypes.types.map((t) => (
              <span key={t} className="border border-charcoal/15 px-4 py-2 font-mono text-xs tracking-wider text-charcoal uppercase">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="outline-light" href={localizedPath(locale, "partner-types")}>
              {h.partnerTypes.link}
            </Button>
          </div>
        </Container>
      </section>

      <section className="casino-bg-dark py-20 lg:py-24">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.faq.label}</p>
          <h2 className="mb-10 font-display text-3xl font-extrabold uppercase text-white">{h.faq.title}</h2>
          <FAQAccordion items={previewFaq} />
          <div className="mt-10">
            <Button href={localizedPath(locale, "faq")}>{h.faq.link}</Button>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <Image src={brandAssets.joinCta} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
        <Container className="relative text-center">
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
