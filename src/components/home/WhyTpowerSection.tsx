import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    title: "Performance",
    description:
      "Built around measurable partner performance. Track traffic, conversions, and revenue with clarity.",
  },
  {
    title: "Support",
    description:
      "Dedicated assistance for partners at every stage — from onboarding to campaign optimization.",
  },
  {
    title: "Tracking",
    description:
      "Clear visibility into traffic and results through real-time reporting and partner dashboards.",
  },
  {
    title: "Growth",
    description:
      "Designed to scale with successful partners. Expand your reach as performance improves.",
  },
];

export function WhyTpowerSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Why TPOWER Partner</SectionLabel>
            <SectionHeading as="h2">
              Your traffic.
              <br />
              Our platform.
              <br />
              <span className="text-accent">Shared growth.</span>
            </SectionHeading>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              TPOWER Partner connects professional marketers with a platform built
              for performance. We provide the infrastructure, tracking, and support
              — you bring the traffic and expertise.
            </p>
            <div className="mt-6">
              <Button variant="ghost" href="/why-tpower" className="!px-0">
                Learn more about TPOWER Partner &rarr;
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`bg-warm-white p-8 lg:p-10 ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
