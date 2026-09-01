import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-graphite text-warm-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo className="[&_span]:text-warm-white [&_.font-display]:text-warm-white" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Program
            </h3>
            <ul className="space-y-3">
              {footerNav.program.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Partner
            </h3>
            <ul className="space-y-3">
              {footerNav.partner.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Performance partnership program for professional affiliates and traffic partners.
          </p>
        </div>
      </Container>
    </footer>
  );
}
