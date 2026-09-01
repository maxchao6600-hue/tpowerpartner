"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-[72px]">
      <Container className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <SectionHeading as="h1" className="!text-[clamp(1.75rem,4vw,2.5rem)]">
            Become a Partner
          </SectionHeading>
          <p className="mt-4 text-sm text-muted md:text-base">
            Apply to join the TPOWER Partner program. Our team reviews each
            application individually and will contact you with next steps.
          </p>

          <div className="mt-10 border border-border bg-warm-white p-8 lg:p-10">
            {submitted ? (
              <div className="py-8 text-center">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Application submitted
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Thank you for your interest in TPOWER Partner. Our team will review
                  your application and respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="reg-email" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Email
                  </label>
                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Website / Traffic Source
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://"
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="partner-type" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Partner Type
                  </label>
                  <select
                    id="partner-type"
                    name="partnerType"
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  >
                    <option value="">Select partner type</option>
                    <option value="affiliate">Affiliate Marketer</option>
                    <option value="content">Content Creator</option>
                    <option value="media-buyer">Media Buyer</option>
                    <option value="website">Website Owner</option>
                    <option value="social">Social Community</option>
                    <option value="traffic">Traffic Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Marketing Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    placeholder="Briefly describe your marketing experience and traffic sources"
                    className="w-full resize-y border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-xs text-muted">
                    I agree to the{" "}
                    <Link href="/terms" className="text-accent hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Already a partner?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
