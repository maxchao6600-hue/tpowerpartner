import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/visuals/ProcessTimeline";

export const metadata: Metadata = createMetadata({
  title: "How It Works",
  description:
    "Learn how the TPOWER Partner program works — from application and approval to promotion, optimization, and growth.",
  path: "/how-it-works",
});

const details = [
  {
    step: "01",
    title: "Submit Your Application",
    body: "Complete the partner application with information about your traffic sources, marketing methods, and audience. This helps us understand your partnership fit.",
  },
  {
    step: "02",
    title: "Application Review",
    body: "Our partner team reviews each application individually. We assess traffic quality, marketing approach, and alignment with program guidelines.",
  },
  {
    step: "03",
    title: "Account Setup",
    body: "Approved partners receive access to the partner dashboard, unique tracking links, and promotional resources to begin campaigns.",
  },
  {
    step: "04",
    title: "Campaign Execution",
    body: "Promote TPOWER through your approved channels using assigned tracking links. All traffic is attributed through the partner tracking system.",
  },
  {
    step: "05",
    title: "Performance Monitoring",
    body: "Monitor real-time data through your dashboard. Review traffic, conversions, and commission metrics to inform campaign decisions.",
  },
  {
    step: "06",
    title: "Optimization & Growth",
    body: "Refine campaigns based on performance data. As results improve, explore expanded partnership opportunities and support.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>How It Works</SectionLabel>
          <SectionHeading as="h1">
            A clear path from
            <br />
            application to growth.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            The TPOWER Partner program follows a structured process designed to
            ensure quality partnerships and measurable performance from day one.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-muted-bg py-20 lg:py-28">
        <Container>
          <h2 className="mb-12 font-display text-2xl font-semibold text-foreground">
            Partnership process overview
          </h2>
          <div className="hidden md:block">
            <ProcessTimeline />
          </div>
          <div className="md:hidden">
            <ProcessTimeline vertical />
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="space-y-16">
            {details.map((item) => (
              <div
                key={item.step}
                className="grid gap-6 border-b border-border pb-16 last:border-0 md:grid-cols-[120px_1fr]"
              >
                <span className="font-display text-4xl font-bold text-accent">
                  {item.step}
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-graphite py-20 text-warm-white lg:py-28">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Start your partnership journey
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/60">
            Submit your application and our team will review it promptly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/register">Become a Partner</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
