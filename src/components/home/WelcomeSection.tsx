import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-accent/[0.06] to-transparent" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
              Official Partner Platform
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-charcoal">
              Enter The
              <br />
              <span className="text-accent">TPOWER Partner Club.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {siteConfig.name} is the official partner platform for TPOWER Casino — not a third-party
              affiliate network. Register to join the program, or login if you already have partner access.
            </p>
          </div>
          <div className="border border-charcoal/10 bg-charcoal p-8 red-glow lg:p-10">
            <Logo variant="on-dark" />
            <p className="mt-8 font-display text-2xl font-extrabold uppercase leading-tight text-white">
              TPOWER Casino
              <span className="block text-accent-bright">Partner Program</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              One brand family. One official partner destination. Premium casino atmosphere with a
              partner-focused purpose.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
