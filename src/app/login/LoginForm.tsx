"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center pt-[72px]">
      <Container className="py-20">
        <div className="mx-auto max-w-md">
          <SectionHeading as="h1" className="!text-[clamp(1.75rem,4vw,2.5rem)]">
            Partner Login
          </SectionHeading>
          <p className="mt-4 text-sm text-muted">
            Sign in to your TPOWER Partner dashboard to access tracking, reports,
            and promotional resources.
          </p>

          <div className="mt-10 border border-border bg-warm-white p-8">
            {submitted ? (
              <div className="py-4 text-center">
                <p className="text-sm text-muted">
                  Partner dashboard access will be available upon account approval.
                  If you have not yet applied, please register first.
                </p>
                <div className="mt-6">
                  <Button href="/register" className="w-full">
                    Become a Partner
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Email
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="login-password" className="mb-2 block font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Not a partner yet?{" "}
            <Link href="/register" className="text-accent hover:underline">
              Apply now
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
