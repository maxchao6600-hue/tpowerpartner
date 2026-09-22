import Image from "next/image";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { brandAssets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CasinoAmbience } from "@/components/visuals/CasinoAmbience";

type HomePageProps = {
  locale: Locale;
  dict: Dictionary;
};

export function HomePage({ locale, dict }: HomePageProps) {
  const h = dict.ui.home;
  const cta = dict.ui.cta;
  const previewFaq = dict.faq.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal pt-[72px]">
        <CasinoAmbience variant="hero" />
        <div className="relative h-[220px] sm:h-[280px] lg:hidden">
          <Image
            src={brandAssets.partnerHeroMobile}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal" aria-hidden="true" />
        </div>
        <Container className="relative">
          <div className="grid min-h-0 items-center py-8 lg:min-h-[min(78vh,820px)] lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:gap-8 lg:py-0">
            <div className="relative z-10 flex flex-col justify-center py-6 lg:py-20 lg:pr-8">
              <div className="rounded-sm border border-white/5 bg-charcoal/40 p-6 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                <p className="mb-5 inline-flex w-fit items-center gap-2 border border-accent/45 bg-accent/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.28em] text-accent-bright uppercase">
                  {h.hero.eyebrow}
                </p>
                <h1 className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-white text-glow-red">
                  {h.hero.title1}
                  <br />
                  <span className="text-accent-bright">{h.hero.title2}</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">{h.hero.description}</p>
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
            </div>
            <div className="relative hidden min-h-[480px] lg:block xl:min-h-[580px]">
              <div className="hero-artwork-panel absolute inset-y-6 right-0 left-0 overflow-hidden border border-white/5">
                <Image
                  src={brandAssets.partnerHero}
                  alt="TPOWER online casino — official partner website"
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

      {/* Intro */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="casino-pattern absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.intro.label}</p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-charcoal">
            {h.intro.title1} <span className="text-accent">{h.intro.title2}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{h.intro.description}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.intro.points.map((item) => (
              <div key={item.title} className="border border-charcoal/10 bg-white p-6">
                <h3 className="font-display text-lg font-extrabold uppercase text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Games */}
      <section className="relative casino-bg-dark py-20 lg:py-28">
        <CasinoAmbience variant="section" />
        <Container className="relative">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.games.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white md:text-4xl">{h.games.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">{h.games.description}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.games.categories.map((cat) => (
              <div key={cat.title} className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-display text-xl font-extrabold uppercase text-white">{cat.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{cat.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/35">{h.games.note}</p>
          <div className="mt-8">
            <Button href={localizedPath(locale, "games")}>{h.games.link}</Button>
          </div>
        </Container>
      </section>

      {/* Promotions */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.promotions.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal md:text-4xl">{h.promotions.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{h.promotions.description}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {h.promotions.items.map((item) => (
              <div key={item.title} className="border border-charcoal/10 p-6">
                <h3 className="font-display text-lg font-extrabold uppercase text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">{h.promotions.note}</p>
          <div className="mt-8">
            <Button variant="outline-light" href={localizedPath(locale, "promotions")}>
              {h.promotions.link}
            </Button>
          </div>
        </Container>
      </section>

      {/* Get Started */}
      <section className="relative overflow-hidden bg-accent py-20 lg:py-24">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">{h.getStarted.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white md:text-4xl">{h.getStarted.title}</h2>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">{h.getStarted.description}</p>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {h.getStarted.steps.map((step, i) => (
              <li key={step.title} className="border border-white/20 bg-black/20 p-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold uppercase text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="inverse" href={localizedPath(locale, "register")}>
              {cta.registerNow}
            </Button>
            <Button variant="secondary" href={localizedPath(locale, "login")}>
              {cta.login}
            </Button>
          </div>
        </Container>
      </section>

      {/* Payment */}
      <section className="bg-charcoal-mid py-20 lg:py-28">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.payment.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-white md:text-4xl">{h.payment.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">{h.payment.description}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {h.payment.items.map((item) => (
              <div key={item.title} className="border border-white/10 bg-white/5 p-6">
                <h3 className="font-display text-lg font-extrabold uppercase text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/35">{h.payment.note}</p>
          <div className="mt-8">
            <Button href={localizedPath(locale, "payment")}>{h.payment.link}</Button>
          </div>
        </Container>
      </section>

      {/* Why TPOWER */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">{h.why.label}</p>
          <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal md:text-4xl">
            {h.why.title1} <span className="text-accent">{h.why.title2}</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {h.why.reasons.map((r) => (
              <div key={r.title} className="border border-charcoal/10 p-6">
                <span className="chip-accent mb-4" aria-hidden="true">
                  {r.icon}
                </span>
                <h3 className="font-display text-lg font-extrabold uppercase text-charcoal">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="casino-bg-dark py-20 lg:py-28">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.faq.label}</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white">{h.faq.title}</h2>
            </div>
            <Button variant="secondary" href={localizedPath(locale, "faq")}>
              {h.faq.link}
            </Button>
          </div>
          <FAQAccordion items={[...previewFaq]} />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[360px] overflow-hidden">
        <Image src={brandAssets.joinCta} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
        <Container className="relative flex min-h-[360px] flex-col items-start justify-center py-16">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">{h.cta.trustLabel}</p>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold uppercase text-white md:text-5xl">{h.cta.title}</h2>
          <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">{h.cta.body}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={localizedPath(locale, "register")}>{cta.registerNow}</Button>
            <Button variant="secondary" href={localizedPath(locale, "login")}>
              {cta.login}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
