import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/visuals/ProcessTimeline";

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>How It Works</SectionLabel>
            <SectionHeading as="h2">
              From application
              <br />
              to growth.
            </SectionHeading>
          </div>
          <Button variant="secondary" href="/how-it-works">
            Full process details
          </Button>
        </div>

        <div className="hidden md:block">
          <ProcessTimeline />
        </div>
        <div className="md:hidden">
          <ProcessTimeline vertical />
        </div>
      </Container>
    </section>
  );
}
