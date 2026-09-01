const nodes = [
  { label: "Traffic", sub: "Your audience" },
  { label: "Partner", sub: "Your campaigns" },
  { label: "TPOWER", sub: "Platform" },
  { label: "Conversion", sub: "Results" },
  { label: "Performance", sub: "Metrics" },
  { label: "Growth", sub: "Scale" },
];

export function PartnerEcosystem() {
  return (
    <div className="relative py-8" aria-hidden="true">
      <div className="flex flex-col items-center gap-0 md:flex-row md:justify-between md:gap-4">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center md:flex-1">
            <div className="relative flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center border border-border bg-warm-white">
                <span className="font-mono text-[10px] tracking-[0.1em] text-foreground uppercase">
                  {node.label}
                </span>
              </div>
              <span className="mt-2 text-[10px] text-muted">{node.sub}</span>
            </div>
            {i < nodes.length - 1 && (
              <>
                <div className="my-3 h-8 w-px bg-border md:hidden" />
                <div className="absolute top-8 hidden h-px flex-1 bg-border md:block" style={{ display: "none" }} />
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 hidden md:block">
        <svg viewBox="0 0 800 2" className="w-full" preserveAspectRatio="none">
          <line
            x1="80"
            y1="1"
            x2="720"
            y2="1"
            stroke="#E2E1DD"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
}
