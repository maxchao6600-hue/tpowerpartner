import { Container } from "@/components/ui/Container";

const reasons = [
  {
    title: "Brand",
    description: "Promote a recognizable TPOWER casino identity with premium entertainment positioning.",
  },
  {
    title: "Support",
    description: "Dedicated partner assistance through registration, onboarding, and ongoing program participation.",
  },
  {
    title: "Tools",
    description: "Marketing and promotional resources for approved partners, with reporting where supported.",
  },
  {
    title: "Performance",
    description: "Track partner activity and campaign results through the official partner platform.",
  },
  {
    title: "Opportunity",
    description: "Build a long-term partnership with TPOWER through a structured affiliate program.",
  },
];

export function WhyPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
            Why Partner With TPOWER
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-charcoal">
            Play A Bigger Role
            <br />
            <span className="text-accent">In TPOWER.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            The official TPOWER Partner Program connects affiliates, agents, and traffic partners
            to one of gaming&apos;s most dynamic casino brands.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <article
              key={item.title}
              className="border border-charcoal/10 bg-charcoal p-6 transition-all hover:border-accent/50 hover:red-glow lg:p-7"
            >
              <span className="font-display text-3xl font-extrabold leading-none text-accent-bright">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-sm font-extrabold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
