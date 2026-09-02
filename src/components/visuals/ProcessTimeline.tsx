const steps = [
  { num: "01", label: "Register", description: "Create your partner account through the official registration portal." },
  { num: "02", label: "Get Approved", description: "Complete the partner onboarding and approval process." },
  { num: "03", label: "Access Your Partner Program", description: "Access partner tools, materials, and your account dashboard." },
  { num: "04", label: "Promote TPOWER", description: "Promote TPOWER Casino through your approved channels." },
  { num: "05", label: "Grow", description: "Build a long-term partnership based on performance." },
];

type ProcessTimelineProps = {
  vertical?: boolean;
  light?: boolean;
};

export function ProcessTimeline({ vertical = false, light = false }: ProcessTimelineProps) {
  const circleBg = light ? "bg-white" : "bg-charcoal";
  const titleClass = light ? "text-charcoal" : "text-white";
  const descClass = light ? "text-muted" : "text-white/50";

  if (vertical) {
    return (
      <div className="relative pl-4">
        <div className="absolute top-6 bottom-6 left-[27px] w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent" aria-hidden="true" />
        {steps.map((step) => (
          <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
            <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent-bright ${circleBg} red-glow`}>
              <span className="font-mono text-[10px] font-bold text-accent-bright">{step.num}</span>
            </div>
            <div className="pt-2">
              <h3 className={`font-display text-base font-extrabold uppercase ${titleClass}`}>{step.label}</h3>
              <p className={`mt-2 text-sm ${descClass}`}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-7 right-[5%] left-[5%] hidden h-0.5 bg-gradient-to-r from-accent/20 via-accent-bright to-accent/20 md:block" aria-hidden="true" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {steps.map((step) => (
          <div key={step.num} className="flex flex-col items-center text-center">
            <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-bright ${circleBg} red-glow`}>
              <span className="font-mono text-[10px] font-bold text-accent-bright">{step.num}</span>
            </div>
            <h3 className={`mt-5 font-display text-xs font-extrabold uppercase tracking-wide sm:text-sm ${titleClass}`}>
              {step.label}
            </h3>
            <p className={`mt-2 text-[11px] leading-relaxed ${descClass}`}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { steps as processSteps };
