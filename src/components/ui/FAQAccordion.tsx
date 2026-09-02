"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items, dark = true }: { items: FAQItem[]; dark?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const borderColor = dark ? "border-white/10" : "border-charcoal/10";
  const qColor = dark ? "text-white" : "text-charcoal";
  const aColor = dark ? "text-white/55" : "text-muted";

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className={`border-b ${borderColor}`}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className={`font-display text-base font-bold md:text-lg ${qColor}`}>
                {item.question}
              </span>
              <span
                className={`mt-1 shrink-0 flex h-7 w-7 items-center justify-center border text-sm transition-all ${
                  isOpen
                    ? "border-accent bg-accent text-white rotate-45"
                    : "border-accent/50 text-accent"
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
              <p className={`max-w-2xl text-sm leading-relaxed md:text-base ${aColor}`}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
