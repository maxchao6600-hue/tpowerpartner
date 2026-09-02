"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
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
        { label: ui.footer.whyTpower, href: localizedPath(locale, "why-tpower") },
        { label: ui.footer.benefits, href: localizedPath(locale, "benefits") },
        { label: ui.footer.commission, href: localizedPath(locale, "commission") },
      ],
    },
    {
      title: ui.footer.partners,
      links: [
        { label: ui.footer.partnerTypes, href: localizedPath(locale, "partner-types") },
        { label: ui.footer.affiliateProgram, href: localizedPath(locale, "affiliate-program") },
        { label: ui.footer.agentProgram, href: localizedPath(locale, "agent-program") },
        { label: ui.footer.howItWorks, href: localizedPath(locale, "how-it-works") },
      ],
    },
    {
      title: ui.footer.resources,
      links: [
        { label: ui.footer.marketingResources, href: localizedPath(locale, "marketing-resources") },
        { label: ui.footer.promotionalMaterials, href: localizedPath(locale, "promotional-materials") },
        { label: ui.footer.partnerTools, href: localizedPath(locale, "partner-tools") },
        { label: ui.footer.insights, href: localizedPath(locale, "partner-insights") },
        { label: ui.footer.news, href: localizedPath(locale, "news") },
      ],
    },
    {
      title: ui.footer.support,
      links: [
        { label: ui.footer.faq, href: localizedPath(locale, "faq") },
        { label: ui.footer.partnerSupport, href: localizedPath(locale, "partner-support") },
        { label: ui.footer.contact, href: localizedPath(locale, "contact") },
        { label: ui.footer.login, href: localizedPath(locale, "login") },
        { label: ui.footer.register, href: localizedPath(locale, "register") },
      ],
    },
    {
      title: ui.footer.legal,
      links: [
        { label: ui.footer.terms, href: localizedPath(locale, "terms") },
        { label: ui.footer.privacy, href: localizedPath(locale, "privacy") },
        { label: ui.footer.compliance, href: localizedPath(locale, "compliance") },
        { label: ui.footer.responsibleGaming, href: localizedPath(locale, "responsible-gaming") },
        { label: ui.footer.affiliateGuidelines, href: localizedPath(locale, "affiliate-guidelines") },
        { label: ui.footer.contentGuidelines, href: localizedPath(locale, "content-guidelines") },
      ],
    },
  ];

  return (
    <footer className="casino-bg-dark border-t border-accent/20">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(5,1fr)]">
          <div>
            <Logo variant="inverse" />
            <p className="mt-2 font-mono text-[9px] tracking-[0.25em] text-accent-bright uppercase">
              {ui.site.tagline}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">{ui.site.footerBlurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={localizedPath(locale, "register")} className="!px-4 !py-2 !text-[10px]">
                {ui.cta.registerNow}
              </Button>
              <Button variant="secondary" href={localizedPath(locale, "login")} className="!px-4 !py-2 !text-[10px]">
                {ui.cta.login}
              </Button>
            </div>
            <div className="mt-6">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
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
