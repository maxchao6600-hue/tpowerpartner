"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const { dict } = useLocale();
  const f = dict.ui.forms;
  const [sent, setSent] = useState(false);
  const inputClass =
    "w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3.5 text-sm text-charcoal outline-none focus:border-accent";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase text-charcoal">{f.contactTitle}</h2>
            <p className="mt-4 text-muted">{f.contactSubtitle}</p>
            <p className="mt-6 font-mono text-sm text-charcoal">
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
          <div className="rounded-xl border border-charcoal/10 bg-charcoal/5 p-7">
            {sent ? (
              <div className="py-8 text-center">
                <h3 className="font-display text-lg font-bold uppercase text-charcoal">{f.contactSent}</h3>
                <p className="mt-3 text-sm text-muted">{f.contactThanks}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="firstName" placeholder={f.firstName} required className={inputClass} />
                  <input name="lastName" placeholder={f.lastName} required className={inputClass} />
                </div>
                <input name="email" type="email" placeholder={f.email} required className={inputClass} />
                <textarea name="message" placeholder={f.message} required rows={5} className={inputClass} />
                <Button type="submit">{f.submitContact}</Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
