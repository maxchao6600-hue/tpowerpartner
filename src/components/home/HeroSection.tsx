import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PerformanceGraph } from "@/components/visuals/PerformanceGraph";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <Container className="relative py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            <p className="mb-6 font-mono text-[11px] tracking-[0.25em] text-accent uppercase">
              Performance Partnership Program
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.03em] text-foreground">
              Partner With TPOWER.
              <br />
              <span className="text-muted">Grow With Performance.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              TPOWER Partner is built for affiliates and professional partners who
              want to grow traffic and revenue through a structured, transparent
              partnership program.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/register">Become a Partner</Button>
              <Button variant="secondary" href="/how-it-works">
                Explore the Program
              </Button>
            </div>
          </div>

          <div className="animate-fade-up stagger-2 relative">
            <div className="border border-border bg-warm-white p-6 lg:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                  Partner Performance
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-subtle" />
                  <span className="font-mono text-[10px] text-muted">Live</span>
                </span>
              </div>
              <PerformanceGraph className="text-foreground h-[200px] lg:h-[260px]" />
            </div>
            <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full border border-accent/20" />
          </div>
        </div>
      </Container>
    </section>
  );
}
