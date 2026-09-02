import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const partnerTypes = [
  {
    num: "01",
    title: "Affiliate Partners",
    description: "Performance marketers promoting TPOWER through approved affiliate channels.",
  },
  {
    num: "02",
    title: "Website Owners",
    description: "Site operators integrating TPOWER partner campaigns into owned traffic destinations.",
  },
  {
    num: "03",
    title: "Content Creators",
    description: "Creators building audience-led campaigns around the TPOWER casino brand.",
  },
  {
    num: "04",
    title: "Social Media Partners",
    description: "Partners driving awareness and traffic through social platforms and communities.",
  },
  {
    num: "05",
    title: "Traffic Partners",
    description: "Specialists focused on acquisition funnels and qualified player traffic.",
  },
  {
    num: "06",
    title: "Agents",
    description: "Agents managing partner relationships and promotional activity within program guidelines.",
  },
];

export function PartnerTypesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.3em] text-accent uppercase">Partner Types</p>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase text-charcoal">
              Who Can <span className="text-accent">Join?</span>
            </h2>
          </div>
          <Button href="/register">Register Now</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((type) => (
            <article
              key={type.num}
              className="group relative overflow-hidden border border-charcoal/10 bg-charcoal p-6 transition-all hover:border-accent hover:red-glow lg:p-7"
            >
              <span className="font-display text-4xl font-extrabold text-accent-bright/80 transition-colors group-hover:text-accent-bright">
                {type.num}
              </span>
              <h3 className="mt-4 font-display text-base font-extrabold uppercase tracking-wide text-white">
                {type.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{type.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
