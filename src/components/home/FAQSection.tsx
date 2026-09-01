import { faqItems } from "@/lib/faq";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading as="h2">Common questions.</SectionHeading>
            <div className="mt-6">
              <Button variant="ghost" href="/faq" className="!px-0">
                View all questions &rarr;
              </Button>
            </div>
          </div>
          <FAQAccordion items={[...faqItems].slice(0, 5)} />
        </div>
      </Container>
    </section>
  );
}
