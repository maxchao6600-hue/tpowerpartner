import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { PerformanceGraph } from "@/components/visuals/PerformanceGraph";

const metrics = [
  { label: "Traffic", value: "—" },
  { label: "Conversions", value: "—" },
  { label: "Revenue", value: "—" },
  { label: "Growth", value: "—" },
];

export function PerformanceSection() {
  return (
    <section className="bg-surface-dark py-20 text-warm-white lg:py-28">
      <div className="grid-bg-dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionLabel>Performance Intelligence</SectionLabel>
              <SectionHeading as="h2" className="!text-warm-white">
                Understand.
                <br />
                Measure.
                <br />
                <span className="text-accent">Optimize.</span>
              </SectionHeading>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                Partnership performance can be understood, measured, and optimized.
                Our reporting infrastructure gives partners the data they need to
                make informed decisions.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-white/40 uppercase">
                      {m.label}
                    </p>
                    <p className="mt-1 font-display text-3xl font-bold text-accent">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-mono text-[9px] tracking-wider text-white/30 uppercase">
                Dashboard metrics available upon partner approval
              </p>
            </div>

            <div className="flex items-center">
              <div className="w-full border border-white/10 bg-graphite-soft p-6 lg:p-8">
                <PerformanceGraph className="h-[240px] text-warm-white lg:h-[300px]" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
