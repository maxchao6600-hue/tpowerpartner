import { Container } from "@/components/ui/Container";

const flow = ["Traffic", "Partner", "TPOWER", "Players", "Performance"];

export function PerformanceSection() {
  return (
    <section className="relative overflow-hidden casino-bg-felt py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,24,55,0.15)_0%,transparent_70%)]" aria-hidden="true" />
      <Container className="relative">
        <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-white text-glow-red">
          Every Player Starts
          <br />
          <span className="text-accent-bright">With A Click.</span>
        </h2>
        <p className="mt-5 max-w-xl text-base text-white/55">
          Your traffic connects to TPOWER Casino. Every partner plays a role in the
          player journey — from first click to long-term performance.
        </p>

        <div className="mt-14 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          {flow.map((step, i) => (
            <div key={step} className="flex flex-col items-center md:flex-1 md:flex-row">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-bright bg-charcoal red-glow">
                  <span className="font-mono text-[9px] font-bold tracking-wider text-accent-bright uppercase">{step}</span>
                </div>
                {i < flow.length - 1 && (
                  <div className="my-2 h-8 w-px bg-gradient-to-b from-accent/60 to-accent/20 md:hidden" aria-hidden="true" />
                )}
              </div>
              {i < flow.length - 1 && (
                <div className="mx-2 hidden h-px flex-1 bg-gradient-to-r from-accent/60 via-accent/30 to-accent/60 md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[9px] tracking-widest text-white/30 uppercase">
          Performance data available to approved partners
        </p>
      </Container>
    </section>
  );
}
