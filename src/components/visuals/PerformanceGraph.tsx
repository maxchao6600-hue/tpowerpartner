export function PerformanceGraph({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 480 280"
        fill="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C41E3A" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C41E3A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[60, 100, 140, 180, 220].map((y) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="440"
            y2={y}
            stroke="currentColor"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        ))}

        <path
          d="M40 200 L100 185 L160 170 L220 140 L280 120 L340 95 L400 70 L440 55"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
        />

        <path
          d="M40 200 L100 185 L160 170 L220 140 L280 120 L340 95 L400 70 L440 55 L440 220 L40 220 Z"
          fill="url(#areaGrad)"
        />

        {[
          [40, 200],
          [100, 185],
          [160, 170],
          [220, 140],
          [280, 120],
          [340, 95],
          [400, 70],
          [440, 55],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#C41E3A"
            className={i === 7 ? "animate-pulse-subtle" : ""}
          />
        ))}

        <text x="40" y="250" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">
          TRAFFIC
        </text>
        <text x="160" y="250" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">
          CONVERSIONS
        </text>
        <text x="300" y="250" fill="currentColor" fillOpacity="0.4" fontSize="10" fontFamily="monospace">
          REVENUE
        </text>
        <text x="400" y="250" fill="#C41E3A" fillOpacity="0.8" fontSize="10" fontFamily="monospace">
          GROWTH
        </text>
      </svg>
      <p className="absolute right-0 bottom-0 font-mono text-[9px] tracking-wider text-muted uppercase">
        Illustrative visualization
      </p>
    </div>
  );
}
