"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath, type PageSlug } from "@/lib/i18n/paths";

export function Footer() {
  const { locale, dict } = useLocale();
  const ui = dict.ui;
  const year = new Date().getFullYear();

  const columns: { title: string; links: { label: string; slug: PageSlug }[] }[] = [
    {
      title: ui.footer.explore,
      links: [
        { label: ui.footer.home, slug: "" },
        { label: ui.footer.games, slug: "games" },
        { label: ui.footer.promotions, slug: "promotions" },
        { label: ui.footer.payment, slug: "payment" },
        { label: ui.footer.whyTpower, slug: "why-tpower" },
      ],
    },
    {
      title: ui.footer.account,
      links: [
        { label: ui.footer.register, slug: "register" },
        { label: ui.footer.login, slug: "login" },
        { label: ui.footer.about, slug: "about" },
      ],
    },
    {
      title: ui.footer.help,
      links: [
        { label: ui.footer.faq, slug: "faq" },
        { label: ui.footer.support, slug: "support" },
        { label: ui.footer.contact, slug: "contact" },
      ],
    },
    {
      title: ui.footer.legal,
      links: [
        { label: ui.footer.terms, slug: "terms" },
        { label: ui.footer.privacy, slug: "privacy" },
        { label: ui.footer.responsibleGaming, slug: "responsible-gaming" },
      ],
    },
  ];

  return (
    <footer className="casino-bg-dark border-t border-accent/20">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-bright to-transparent" aria-hidden="true" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo variant="inverse" />
            <p className="mt-2 font-mono text-[9px] tracking-[0.25em] text-accent-bright uppercase">{ui.site.tagline}</p>
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
              <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.slug || "home"}`}>
                    <Link
                      href={localizedPath(locale, link.slug)}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
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
