"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading as="h1">
            Partner support
            <br />
            is here to help.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Have questions about the TPOWER Partner program? Reach out to our
            partner support team and we will respond as soon as possible.
          </p>
        </Container>
      </section>

      <section className="border-t border-border pb-20 lg:pb-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Get in touch
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-1 block text-sm text-foreground hover:text-accent"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Response Time
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    We aim to respond to all partner inquiries within 1–2 business days.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Existing Partners
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    If you are an approved partner, you can also reach support through
                    your partner dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border bg-warm-white p-8 lg:p-10">
              {submitted ? (
                <div className="py-8 text-center">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Message received
                  </h2>
                  <p className="mt-3 text-sm text-muted">
                    Thank you for contacting TPOWER Partner support. We will get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-y border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
