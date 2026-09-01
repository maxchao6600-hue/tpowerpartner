import Link from "next/link";
import { resourceCategories } from "@/lib/site";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ResourcesSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Resources</SectionLabel>
            <SectionHeading as="h2">
              Knowledge for
              <br />
              serious partners.
            </SectionHeading>
          </div>
          <Button variant="secondary" href="/resources">
            Browse all resources
          </Button>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group bg-warm-white p-8 transition-colors hover:bg-muted-bg lg:p-10"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {cat.description}
              </p>
              <span className="mt-4 inline-block font-mono text-[10px] tracking-[0.15em] text-accent uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
