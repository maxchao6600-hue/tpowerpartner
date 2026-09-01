import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/faq";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about the TPOWER Partner program — eligibility, commissions, tracking, payouts, and getting started.",
  path: "/faq",
});

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FaqJsonLd />
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading as="h1">
            Frequently asked
            <br />
            questions.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Find answers to common questions about the TPOWER Partner program.
            For additional support, contact our partner team.
          </p>
        </Container>
      </section>

      <section className="border-t border-border pb-20 lg:pb-28">
        <Container>
          <FAQAccordion items={[...faqItems]} />
        </Container>
      </section>

      <section className="border-t border-border bg-muted-bg py-16">
        <Container className="text-center">
          <p className="text-sm text-muted">
            Still have questions? Our partner support team is here to help.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/contact">Contact Partner Support</Button>
            <Button variant="secondary" href="/register">
              Become a Partner
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
