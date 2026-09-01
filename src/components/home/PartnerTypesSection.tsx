import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";

const partnerTypes = [
  { title: "Affiliate Marketers", description: "Performance-driven marketers with established traffic channels and campaign expertise." },
  { title: "Content Creators", description: "Creators who produce engaging content and build audiences across platforms." },
  { title: "Media Buyers", description: "Professionals who manage paid acquisition across display, social, and search channels." },
  { title: "Website Owners", description: "Publishers and site owners with established web properties and organic traffic." },
  { title: "Social Communities", description: "Community operators who engage audiences through social platforms and groups." },
  { title: "Traffic Partners", description: "Partners with diversified traffic sources seeking performance-based monetization." },
];

export function PartnerTypesSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Partner Types</SectionLabel>
          <SectionHeading as="h2">
            Built for professional traffic partners.
          </SectionHeading>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((type, i) => (
            <div
              key={type.title}
              className={`bg-warm-white p-8 lg:p-10 ${
                i === 1 || i === 4 ? "lg:mt-8" : ""
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {type.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
