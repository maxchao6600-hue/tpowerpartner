"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    num: "01",
    label: "Brand",
    title: "A Strong Casino Brand",
    description: "Promote TPOWER Casino — an established online casino brand built for player engagement and entertainment.",
  },
  {
    num: "02",
    label: "Support",
    title: "Partner Support",
    description: "Dedicated assistance for partners throughout registration, onboarding, and ongoing program participation.",
  },
  {
    num: "03",
    label: "Resources",
    title: "Marketing Resources",
    description: "Approved partners can access promotional materials and campaign resources through the partner platform.",
  },
  {
    num: "04",
    label: "Performance",
    title: "Performance Tracking",
    description: "Approved partners receive tracking and reporting access to monitor traffic and partnership performance.",
  },
  {
    num: "05",
    label: "Growth",
    title: "Partner Opportunities",
    description: "A structured program designed for affiliates and agents seeking a long-term partnership with TPOWER.",
  },
];

export function BenefitsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="benefits" className="casino-bg-dark relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 casino-light-streak opacity-50" aria-hidden="true" />
      <Container className="relative">
        <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-accent-bright uppercase">
          Partner Benefits
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase tracking-[-0.03em] text-white">
          Why <span className="text-accent-bright">TPOWER?</span>
        </h2>

        <div className="mt-14 grid gap-0 lg:grid-cols-[300px_1fr]">
          <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible">
            {benefits.map((b, i) => (
              <button
                key={b.num}
                type="button"
                className={`group shrink-0 border-l-4 px-6 py-6 text-left transition-all lg:border-l-4 lg:border-b lg:border-l-0 lg:px-8 ${
                  active === i
                    ? "border-accent-bright bg-accent/15"
                    : "border-white/10 bg-transparent hover:bg-white/5"
                }`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="font-display text-4xl font-extrabold text-accent-bright">{b.num}</span>
                <p className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-white">{b.label}</p>
              </button>
            ))}
          </div>

          <div className="border border-accent/20 bg-charcoal-mid/80 p-8 lg:p-12 red-glow">
            <h3 className="font-display text-2xl font-extrabold uppercase text-white lg:text-3xl">
              {benefits[active].title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
              {benefits[active].description}
            </p>
            <div className="mt-8 flex gap-2 text-3xl text-accent/40">
              {["♠", "♥", "♦", "♣"].map((s) => (
                <span key={s} aria-hidden="true">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
