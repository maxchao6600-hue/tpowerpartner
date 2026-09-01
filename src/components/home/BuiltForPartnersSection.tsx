import { Container, SectionHeading } from "@/components/ui/Container";

const values = [
  "Professional partnership standards",
  "Transparent performance reporting",
  "Dedicated partner support",
  "Long-term growth orientation",
  "Compliance-first approach",
  "Scalable partnership infrastructure",
];

export function BuiltForPartnersSection() {
  return (
    <section className="bg-graphite py-20 text-warm-white lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              Our Commitment
            </p>
            <SectionHeading as="h2" className="!text-warm-white">
              Built for
              <br />
              serious partners.
            </SectionHeading>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              TPOWER Partner is designed for professionals who approach affiliate
              marketing as a business — with discipline, transparency, and a focus
              on sustainable growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <div
                key={value}
                className="border border-white/10 p-5"
              >
                <span className="font-mono text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
