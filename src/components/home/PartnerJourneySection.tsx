import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";

const nodes = [
  "Traffic",
  "Partner",
  "TPOWER",
  "Conversion",
  "Performance",
  "Growth",
];

export function PartnerJourneySection() {
  return (
    <section className="border-y border-border bg-muted-bg py-20 lg:py-28">
      <Container>
        <div className="mb-16 text-center">
          <SectionLabel>Partner Ecosystem</SectionLabel>
          <SectionHeading as="h2" className="mx-auto max-w-2xl">
            The performance partnership flow.
          </SectionHeading>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="hidden items-center justify-between md:flex">
            {nodes.map((node, i) => (
              <div key={node} className="relative flex flex-1 flex-col items-center">
                {i > 0 && (
                  <div className="absolute top-5 right-1/2 h-px w-full bg-border" />
                )}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center border-2 border-accent bg-warm-white">
                  <span className="font-mono text-[8px] tracking-wider text-foreground uppercase">
                    {i + 1}
                  </span>
                </div>
                <span className="mt-3 font-mono text-[10px] tracking-[0.12em] text-foreground uppercase">
                  {node}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-0 md:hidden">
            {nodes.map((node, i) => (
              <div key={node} className="flex flex-col items-center">
                <div className="flex h-12 w-32 items-center justify-center border border-border bg-warm-white">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-foreground uppercase">
                    {node}
                  </span>
                </div>
                {i < nodes.length - 1 && (
                  <div className="flex h-8 flex-col items-center justify-center">
                    <div className="h-full w-px bg-border" />
                    <span className="text-xs text-accent">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
