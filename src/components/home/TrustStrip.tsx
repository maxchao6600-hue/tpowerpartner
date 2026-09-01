import { Container } from "@/components/ui/Container";

const points = [
  { label: "Performance-focused partnership", detail: "Built around measurable outcomes" },
  { label: "Professional support", detail: "Dedicated partner assistance" },
  { label: "Transparent reporting", detail: "Clear visibility into results" },
  { label: "Flexible growth opportunities", detail: "Designed to scale with you" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-muted-bg">
      <Container className="py-12 lg:py-16">
        <p className="font-display text-xl font-medium text-foreground md:text-2xl lg:text-3xl">
          Built for partners who think long-term.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {points.map((point) => (
            <div key={point.label} className="border-l-2 border-accent pl-5">
              <p className="text-sm font-medium text-foreground">{point.label}</p>
              <p className="mt-1 text-xs text-muted">{point.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
