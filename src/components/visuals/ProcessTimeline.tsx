const steps = [
  { num: "01", label: "Apply", description: "Submit your partnership application with details about your traffic and marketing approach." },
  { num: "02", label: "Get Approved", description: "Our team reviews your application and aligns on partnership fit and program terms." },
  { num: "03", label: "Promote", description: "Access tracking tools and promotional resources to begin driving qualified traffic." },
  { num: "04", label: "Optimize", description: "Monitor performance data and refine your campaigns for stronger results." },
  { num: "05", label: "Grow", description: "Scale your partnership as performance improves and opportunities expand." },
];

export function ProcessTimeline({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={
        vertical
          ? "flex flex-col gap-0"
          : "grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4"
      }
    >
      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`relative ${vertical ? "flex gap-6 pb-10" : ""}`}
        >
          {vertical && i < steps.length - 1 && (
            <div className="absolute top-12 left-[19px] h-[calc(100%-48px)] w-px bg-border" />
          )}
          {!vertical && i < steps.length - 1 && (
            <div className="absolute top-6 right-0 hidden h-px w-full translate-x-1/2 bg-border md:block" />
          )}

          <div
            className={`${vertical ? "relative z-10 shrink-0" : ""}`}
          >
            <span className="font-display text-3xl font-bold text-accent md:text-4xl">
              {step.num}
            </span>
          </div>

          <div className={vertical ? "pt-1" : "mt-4"}>
            <h3 className="font-mono text-xs tracking-[0.15em] text-foreground uppercase">
              {step.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { steps as processSteps };
