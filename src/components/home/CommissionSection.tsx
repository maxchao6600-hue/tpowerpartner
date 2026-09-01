import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const commissionAreas = [
  {
    title: "Commission Model",
    description:
      "Performance-based commission structures tailored to partnership type. Specific rates are provided upon approval.",
  },
  {
    title: "Qualification",
    description:
      "Clear criteria define which actions and conversions qualify for commission under your partner agreement.",
  },
  {
    title: "Payouts",
    description:
      "Structured payout schedules with transparent reporting. View pending and completed commissions in your dashboard.",
  },
  {
    title: "Tracking",
    description:
      "Real-time tracking links and attribution ensure accurate performance measurement across all campaigns.",
  },
];

export function CommissionSection() {
  return (
    <section className="border-y border-border bg-muted-bg py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionLabel>Commission</SectionLabel>
            <SectionHeading as="h2">
              A partnership built around performance.
            </SectionHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
              TPOWER Partner operates on a performance-based model. Commission
              terms, qualifying actions, and payout schedules are defined in your
              partner agreement and communicated clearly upon approval.
            </p>
            <div className="mt-8">
              <Button href="/commission">View commission details</Button>
            </div>
          </div>

          <div className="divide-y divide-border border border-border bg-warm-white">
            {commissionAreas.map((area) => (
              <div key={area.title} className="p-6 lg:p-8">
                <h3 className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
