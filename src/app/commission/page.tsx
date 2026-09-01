import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Commission",
  description:
    "Understand the TPOWER Partner commission model — performance-based structures, qualification criteria, tracking, and payout information.",
  path: "/commission",
});

const sections = [
  {
    title: "Commission Model",
    content:
      "TPOWER Partner operates on a performance-based commission model. Commission structures are defined in your individual partner agreement and may vary based on partnership type, traffic quality, and performance tier. Specific commission rates and qualifying actions are communicated upon approval.",
  },
  {
    title: "Qualifying Actions",
    content:
      "Commission is earned on qualifying actions as defined in your partner agreement. These may include specific conversion events tracked through your unique partner links. All qualifying criteria are documented clearly to ensure transparency.",
  },
  {
    title: "Tracking & Attribution",
    content:
      "Every partner receives unique tracking links that attribute traffic and conversions accurately. Real-time reporting in the partner dashboard provides full visibility into performance metrics and commission accrual.",
  },
  {
    title: "Partner Tiers",
    content:
      "Partnership tiers may be available based on sustained performance and traffic volume. Tier structures, when applicable, are outlined in your partner agreement and may offer enhanced commission terms or additional support.",
  },
  {
    title: "Payout Schedule",
    content:
      "Commission payouts follow a defined schedule outlined in your partner agreement. Minimum payout thresholds and payment methods are communicated during the onboarding process. Pending and completed payouts are visible in your partner dashboard.",
  },
  {
    title: "Reporting",
    content:
      "Access detailed commission reports through your partner dashboard. Review traffic data, conversion metrics, and commission calculations in real time. Historical data is available for performance analysis and campaign optimization.",
  },
];

export default function CommissionPage() {
  return (
    <>
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>Commission</SectionLabel>
          <SectionHeading as="h1">
            A partnership built
            <br />
            around performance.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            TPOWER Partner commissions are structured around measurable performance.
            Terms are defined clearly in your partner agreement — no hidden conditions,
            no ambiguous calculations.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-20 lg:py-28">
        <Container>
          <div className="divide-y divide-border border border-border">
            {sections.map((section) => (
              <div key={section.title} className="grid gap-4 p-8 md:grid-cols-[240px_1fr] lg:p-10">
                <h2 className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded border border-dashed border-border bg-muted-bg p-8 text-center">
            <p className="text-sm text-muted">
              Specific commission rates and terms are provided upon partner approval.
              Apply to receive your personalized commission structure.
            </p>
            <div className="mt-6">
              <Button href="/register">Apply for Partnership</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
