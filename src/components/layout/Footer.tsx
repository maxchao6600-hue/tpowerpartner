"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

export function Footer() {
  const { locale, dict } = useLocale();
  const ui = dict.ui;
  const year = new Date().getFullYear();

  const columns = [
    {
      title: ui.footer.program,
      links: [
        { label: ui.footer.partnerProgram, href: localizedPath(locale, "partner-program") },
        { label: ui.footer.commission, href: localizedPath(locale, "commission") },
        { label: ui.footer.howItWorks, href: localizedPath(locale, "how-it-works") },
        { label: ui.footer.faq, href: localizedPath(locale, "faq") },
        { label: ui.footer.contact, href: localizedPath(locale, "contact") },
      ],
    },
    {
      title: ui.footer.account,
      links: [
        { label: ui.footer.register, href: localizedPath(locale, "register") },
        { label: ui.footer.login, href: localizedPath(locale, "login") },
      ],
    },
    {
      title: ui.footer.legal,
      links: [
        { label: ui.footer.terms, href: localizedPath(locale, "terms") },
        { label: ui.footer.privacy, href: localizedPath(locale, "privacy") },
        { label: ui.footer.responsibleGaming, href: localizedPath(locale, "responsible-gaming") },
        { label: ui.footer.compliance, href: localizedPath(locale, "compliance") },
      ],
    },
    {
      title: ui.footer.resources,
      links: [
        { label: ui.mega.marketingResources, href: localizedPath(locale, "marketing-resources") },
        { label: ui.mega.insights, href: localizedPath(locale, "insights") },
        { label: ui.footer.guidelines, href: localizedPath(locale, "content-guidelines") },
        { label: ui.footer.support, href: localizedPath(locale, "partner-support") },
      ],
    },
  ];

  return (
    <footer className="casino-bg-dark border-t border-accent/20">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="inverse" />
            <p className="mt-2 font-mono text-[9px] tracking-[0.25em] text-accent-bright uppercase">
              {ui.site.tagline}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">{ui.site.footerBlurb}</p>
            <div className="mt-6 flex gap-3">
              <Button href={localizedPath(locale, "register")} className="!px-4 !py-2 !text-[10px]">
                {ui.cta.register}
              </Button>
              <Button variant="secondary" href={localizedPath(locale, "login")} className="!px-4 !py-2 !text-[10px]">
                {ui.cta.login}
              </Button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            &copy; {year} {ui.site.name}. {ui.site.copyright}
          </p>
          <p className="font-mono text-[9px] tracking-widest text-white/25 uppercase">{ui.site.footerLegal}</p>
        </div>
      </Container>
    </footer>
  );
}
