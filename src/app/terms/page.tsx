import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for the TPOWER Partner affiliate and partnership program.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="pt-[72px]">
      <Container className="py-20 lg:py-28">
        <SectionHeading as="h1" className="!text-[clamp(1.75rem,4vw,2.5rem)]">
          Terms & Conditions
        </SectionHeading>
        <p className="mt-4 text-sm text-muted">Last updated: September 2026</p>

        <div className="prose-tpower mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              1. Agreement
            </h2>
            <p className="mt-3">
              By applying to or participating in the {siteConfig.name} program, you
              agree to be bound by these Terms & Conditions. If you do not agree,
              please do not apply or participate in the program.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              2. Program Overview
            </h2>
            <p className="mt-3">
              {siteConfig.name} is an affiliate and partnership program that allows
              approved partners to promote TPOWER products and services in exchange
              for performance-based commissions as defined in individual partner agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              3. Partner Eligibility
            </h2>
            <p className="mt-3">
              Partners must be at least 18 years of age and operate legitimate marketing
              channels. All applications are subject to review and approval at our
              sole discretion. We reserve the right to reject or terminate any
              partnership without prior notice if program guidelines are violated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              4. Promotional Guidelines
            </h2>
            <p className="mt-3">
              Partners must comply with all applicable laws and regulations in their
              jurisdiction. Misleading claims, spam, unauthorized advertising methods,
              and promotion to restricted audiences are prohibited. All promotional
              materials must be accurate and not misrepresent the TPOWER brand or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              5. Commission & Payment
            </h2>
            <p className="mt-3">
              Commission terms, qualifying actions, and payout schedules are defined
              in your individual partner agreement. We reserve the right to withhold
              or reverse commissions resulting from fraudulent, invalid, or non-compliant
              traffic.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              Partners are granted a limited, non-exclusive license to use approved
              promotional materials solely for the purpose of promoting TPOWER under
              the program. All TPOWER trademarks and brand assets remain the property
              of TPOWER.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              7. Termination
            </h2>
            <p className="mt-3">
              Either party may terminate the partnership at any time. Upon termination,
              partners must cease all promotional activities and remove TPOWER branding
              from their channels. Outstanding commissions will be handled according
              to the terms of your partner agreement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              8. Limitation of Liability
            </h2>
            <p className="mt-3">
              {siteConfig.name} is provided on an &ldquo;as is&rdquo; basis. We make
              no guarantees regarding earnings, traffic performance, or conversion rates.
              Our liability is limited to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              9. Changes
            </h2>
            <p className="mt-3">
              We reserve the right to modify these terms at any time. Continued
              participation in the program after changes constitutes acceptance of
              the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              10. Contact
            </h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
