import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-foreground">
            Ready to build something bigger?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Join TPOWER Partner and turn your audience, traffic, and marketing
            capability into a long-term partnership opportunity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/register">Become a Partner</Button>
            <Button variant="secondary" href="/contact">
              Contact Partner Support
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
