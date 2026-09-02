import { Container } from "@/components/ui/Container";
import { ProcessTimeline } from "@/components/visuals/ProcessTimeline";
import { Button } from "@/components/ui/Button";

export function HowItWorksSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <Container>
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">Partner Journey</p>
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold uppercase text-charcoal">
              How It <span className="text-accent">Works</span>
            </h2>
          </div>
          <Button variant="outline-light" href="/how-it-works">
            Learn More
          </Button>
        </div>
        <div className="hidden md:block">
          <ProcessTimeline light />
        </div>
        <div className="md:hidden">
          <ProcessTimeline vertical light />
        </div>
      </Container>
    </section>
  );
}
