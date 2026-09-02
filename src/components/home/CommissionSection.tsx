import { Container, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const tiers = [
  { label: "Partner Level", desc: "Partnership tiering and program structure defined in your official agreement." },
  { label: "Commission", desc: "Performance-based commission framework communicated upon partner approval." },
  { label: "Performance", desc: "Qualifying actions and performance criteria documented for approved partners." },
  { label: "Reward", desc: "Payout schedules and reward mechanics outlined in your partner agreement." },
];

export function CommissionSection() {
  return (
    <section className="casino-bg-dark relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,55,0.14)_0%,transparent_55%)]" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel className="!text-accent-bright">Commission</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-white">
              The More You Grow,
              <br />
              <span className="text-accent-bright">The More You Can Earn.</span>
            </h2>
            <p className="mt-5 text-sm text-white/55 md:text-base">
              Commission details are provided upon partner approval. No figures, percentages, or
              earning guarantees are published until your official agreement is confirmed.
            </p>
            <Button href="/commission" className="mt-8">
              View Commission
            </Button>
          </div>

          <div className="space-y-3">
            {tiers.map((tier, i) => (
              <div
                key={tier.label}
                className="group border border-white/10 bg-charcoal-mid/80 p-6 transition-all hover:border-accent/50 hover:red-glow lg:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-extrabold text-accent-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                      {tier.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">{tier.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
