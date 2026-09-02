import { faqItems } from "@/lib/faq";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">FAQ</p>
            <h2 className="font-display text-3xl font-extrabold uppercase text-charcoal">Partner Questions</h2>
          </div>
          <Button variant="outline-light" href="/faq">View All FAQ</Button>
        </div>
        <FAQAccordion items={[...faqItems].slice(0, 4)} dark={false} />
      </Container>
    </section>
  );
}
