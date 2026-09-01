import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Responsible Gaming",
  description:
    "Responsible gaming information and resources for TPOWER Partner affiliates and their audiences.",
  path: "/responsible-gaming",
});

export default function ResponsibleGamingPage() {
  return (
    <section className="pt-[72px]">
      <Container className="py-20 lg:py-28">
        <SectionHeading as="h1" className="!text-[clamp(1.75rem,4vw,2.5rem)]">
          Responsible Gaming
        </SectionHeading>
        <p className="mt-4 text-sm text-muted">Last updated: September 2026</p>

        <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Our Commitment
            </h2>
            <p className="mt-3">
              TPOWER is committed to promoting responsible gaming practices. As a
              TPOWER Partner, you share in this responsibility by ensuring your
              promotional activities do not target vulnerable audiences or encourage
              irresponsible behavior.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Partner Guidelines
            </h2>
            <p className="mt-3">
              Partners must not promote TPOWER to individuals under the legal gambling
              age in their jurisdiction. Promotional content must not misrepresent
              the nature of gaming products or create unrealistic expectations about
              winning. Partners should include responsible gaming messaging where
              appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Player Protection
            </h2>
            <p className="mt-3">
              TPOWER provides tools and resources to help players manage their gaming
              activity, including deposit limits, self-exclusion options, and access
              to support organizations. Partners should be aware of these resources
              and direct players to them when appropriate.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Support Resources
            </h2>
            <p className="mt-3">
              If you or someone you know may have a gambling problem, please seek help
              from professional support organizations in your region. Gambling should
              always be treated as entertainment, not as a source of income.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
