import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brandAssets } from "@/lib/assets";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-[72px]">
      {/* Mobile hero visual */}
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
          {/* Left — copy + CTAs */}
          <div className="relative z-10 flex flex-col justify-center py-10 lg:py-16 lg:pr-6">
            <p className="mb-5 inline-flex w-fit items-center gap-2 border border-accent/45 bg-accent/10 px-4 py-1.5 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">
              TPOWER Partner Program
            </p>
            <h1 className="font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-white text-glow-red">
              Join The TPOWER
              <br />
              Side Of <span className="text-accent-bright">The Game.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">
              Partner with TPOWER and build your next growth opportunity through the official
              TPOWER Partner Program.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/register" className="sm:min-w-[220px]">
                Register Now
              </Button>
              <Button variant="secondary" href="/login" className="sm:min-w-[180px]">
                Login
              </Button>
            </div>
          </div>

          {/* Right — unique partner hero artwork */}
          <div className="relative hidden min-h-[520px] lg:block xl:min-h-[600px]">
            <div className="absolute inset-y-4 right-0 left-0 overflow-hidden rounded-sm border border-white/5 hero-artwork-panel">
              <Image
                src={brandAssets.partnerHero}
                alt="TPOWER Partner — premium casino partnership visual"
                fill
                priority
                sizes="(max-width: 1280px) 55vw, 800px"
                className="object-cover object-[58%_center] scale-[1.02]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/20 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/30"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
    </section>
  );
}
