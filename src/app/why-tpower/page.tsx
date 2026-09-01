import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Why TPOWER Partner",
  description:
    "Discover why professional affiliates and traffic partners choose TPOWER Partner for performance-based partnerships, transparent reporting, and dedicated support.",
  path: "/why-tpower",
});

const advantages = [
  {
    title: "Performance Infrastructure",
    body: "TPOWER Partner provides the tracking, reporting, and attribution tools partners need to measure campaign performance with confidence.",
  },
  {
    title: "Professional Standards",
    body: "We work with partners who approach marketing professionally — with compliance, transparency, and long-term thinking at the core.",
  },
  {
    title: "Dedicated Support",
    body: "Partner support is available throughout your journey, from onboarding and account setup to ongoing campaign optimization.",
  },
  {
    title: "Scalable Partnership",
    body: "As your traffic and performance grow, the partnership is designed to scale with you — offering expanded opportunities over time.",
  },
  {
    title: "Transparent Reporting",
    body: "Real-time dashboards provide clear visibility into traffic, conversions, and commission data without ambiguity.",
  },
  {
    title: "Long-Term Orientation",
    body: "TPOWER Partner is built for partners who think beyond short-term campaigns and invest in sustainable growth.",
  },
];

export default function WhyTpowerPage() {
  return (
    <>
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>Why TPOWER Partner</SectionLabel>
          <SectionHeading as="h1">
            A partnership platform
            <br />
            built for professionals.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            TPOWER Partner exists to connect serious marketers with a platform
            designed for performance. We provide the infrastructure, transparency,
            and support — you bring the expertise and traffic.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-muted-bg py-20 lg:py-28">
        <Container>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {advantages.map((item, i) => (
              <div key={item.title} className="bg-warm-white p-8 lg:p-10">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
            Ready to partner with TPOWER?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
            Apply today and join a partnership program designed for professional growth.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/register">Become a Partner</Button>
            <Button variant="secondary" href="/how-it-works">
              How It Works
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
