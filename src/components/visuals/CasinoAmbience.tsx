type CasinoAmbienceProps = {
  variant?: "hero" | "section" | "subtle";
};

export function CasinoAmbience({ variant = "section" }: CasinoAmbienceProps) {
  const opacity = variant === "hero" ? "opacity-[0.07]" : variant === "subtle" ? "opacity-[0.04]" : "opacity-[0.06]";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity}`} aria-hidden="true">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />
      <span className={`absolute top-[18%] right-[12%] select-none font-serif ${variant === "hero" ? "text-8xl" : "text-6xl"} text-white`}>♠</span>
      <span className={`absolute bottom-[22%] right-[28%] select-none font-serif ${variant === "hero" ? "text-6xl" : "text-5xl"} text-accent-bright`}>♦</span>
      <span className="absolute top-[40%] right-[6%] select-none font-serif text-5xl text-white">♣</span>
      {variant === "hero" && (
        <>
          <span className="absolute bottom-[35%] left-[8%] h-12 w-12 rounded-full border-2 border-dashed border-accent/40" />
          <span className="absolute top-[30%] left-[15%] h-8 w-8 rounded-full border border-accent/30 bg-accent/10" />
        </>
      )}
    </div>
  );
}
