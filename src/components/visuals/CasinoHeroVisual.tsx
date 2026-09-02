export function CasinoHeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animation: "pulse-glow 4s ease-in-out infinite" }} />

      <svg viewBox="0 0 500 520" fill="none" className="relative h-full w-full">
        <defs>
          <radialGradient id="chipGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff3355" />
            <stop offset="100%" stopColor="#a01028" />
          </radialGradient>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8e8e8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Roulette wheel */}
        <g className="animate-spin-slow" style={{ transformOrigin: "250px 200px" }}>
          <circle cx="250" cy="200" r="110" fill="#141414" stroke="#e31837" strokeWidth="2" />
          <circle cx="250" cy="200" r="95" fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4 8" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + 70 * Math.cos(angle);
            const y1 = 200 + 70 * Math.sin(angle);
            const x2 = 250 + 90 * Math.cos(angle);
            const y2 = 200 + 90 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 2 === 0 ? "#e31837" : "#fff"} strokeWidth="2" strokeOpacity="0.6" />
            );
          })}
          <circle cx="250" cy="200" r="20" fill="#e31837" filter="url(#glow)" />
          <text x="250" y="205" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">TPOWER</text>
        </g>

        {/* Playing cards */}
        <g transform="translate(60, 280) rotate(-12)">
          <rect width="90" height="130" rx="6" fill="url(#cardGrad)" stroke="#e31837" strokeWidth="2" />
          <text x="12" y="28" fill="#e31837" fontSize="22" fontWeight="700">A</text>
          <text x="12" y="48" fill="#e31837" fontSize="18">♠</text>
          <text x="60" y="115" fill="#e31837" fontSize="22" fontWeight="700" transform="rotate(180 75 105)">A</text>
        </g>
        <g transform="translate(130, 300) rotate(6)">
          <rect width="90" height="130" rx="6" fill="url(#cardGrad)" stroke="#333" strokeWidth="1.5" opacity="0.9" />
          <text x="12" y="28" fill="#e31837" fontSize="22" fontWeight="700">K</text>
          <text x="12" y="48" fill="#e31837" fontSize="18">♥</text>
        </g>

        {/* Chip stack */}
        {[
          { cy: 420, opacity: 1 },
          { cy: 408, opacity: 0.85 },
          { cy: 396, opacity: 0.7 },
          { cy: 384, opacity: 0.55 },
        ].map((chip, i) => (
          <g key={i}>
            <ellipse cx="360" cy={chip.cy} rx="52" ry="10" fill="#0a0a0a" opacity="0.5" />
            <ellipse cx="360" cy={chip.cy - 4} rx="50" ry="12" fill="url(#chipGrad)" opacity={chip.opacity} stroke="#fff" strokeWidth="1" strokeOpacity="0.3" />
            <ellipse cx="360" cy={chip.cy - 10} rx="50" ry="12" fill="#c41430" opacity={chip.opacity} />
            <text x="360" y={chip.cy - 6} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700" opacity={chip.opacity}>TPOWER</text>
          </g>
        ))}

        {/* Light streaks */}
        <line x1="0" y1="100" x2="500" y2="120" stroke="#e31837" strokeWidth="1" strokeOpacity="0.15" />
        <line x1="0" y1="400" x2="500" y2="380" stroke="#e31837" strokeWidth="1" strokeOpacity="0.1" />
      </svg>
    </div>
  );
}
