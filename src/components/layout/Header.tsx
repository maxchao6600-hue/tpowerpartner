"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

export function Header() {
  const { locale, dict } = useLocale();
  const ui = dict.ui;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg =
    scrolled || menuOpen
      ? "bg-charcoal/95 border-b border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      : "bg-charcoal/40 backdrop-blur-sm";

  const mega = [
    {
      title: ui.mega.program,
      links: [
        { label: ui.mega.partnerProgram, href: localizedPath(locale, "partner-program") },
        { label: ui.mega.whyTpower, href: localizedPath(locale, "why-tpower") },
        { label: ui.mega.benefits, href: localizedPath(locale, "benefits") },
        { label: ui.mega.commission, href: localizedPath(locale, "commission") },
      ],
    },
    {
      title: ui.mega.partners,
      links: [
        { label: ui.mega.partnerTypes, href: localizedPath(locale, "partner-types") },
        { label: ui.mega.affiliateProgram, href: localizedPath(locale, "affiliate-program") },
        { label: ui.mega.agentProgram, href: localizedPath(locale, "agent-program") },
        { label: ui.mega.howItWorks, href: localizedPath(locale, "how-it-works") },
      ],
    },
    {
      title: ui.mega.resources,
      links: [
        { label: ui.mega.marketingResources, href: localizedPath(locale, "marketing-resources") },
        { label: ui.mega.promotionalMaterials, href: localizedPath(locale, "promotional-materials") },
        { label: ui.mega.partnerTools, href: localizedPath(locale, "partner-tools") },
        { label: ui.mega.insights, href: localizedPath(locale, "insights") },
        { label: ui.mega.news, href: localizedPath(locale, "news") },
      ],
    },
    {
      title: ui.mega.support,
      links: [
        { label: ui.mega.faq, href: localizedPath(locale, "faq") },
        { label: ui.mega.partnerSupport, href: localizedPath(locale, "partner-support") },
        { label: ui.mega.contact, href: localizedPath(locale, "contact") },
        { label: ui.mega.login, href: localizedPath(locale, "login") },
        { label: ui.mega.register, href: localizedPath(locale, "register") },
      ],
    },
  ];

  const topNav = [
    { label: ui.nav.program, href: localizedPath(locale, "partner-program"), mega: true },
    { label: ui.nav.whyTpower, href: localizedPath(locale, "why-tpower") },
    { label: ui.nav.howItWorks, href: localizedPath(locale, "how-it-works") },
    { label: ui.nav.commission, href: localizedPath(locale, "commission") },
    { label: ui.nav.resources, href: localizedPath(locale, "marketing-resources") },
    { label: ui.nav.faq, href: localizedPath(locale, "faq") },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-[72px] items-center justify-between gap-3">
          <Logo variant="inverse" />

          <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {topNav.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.mega && setMegaOpen(true)}
                onMouseLeave={() => link.mega && setMegaOpen(false)}
              >
                <Link
                  href={link.href}
                  className="font-mono text-[10px] tracking-[0.18em] text-white/75 uppercase transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Button variant="ghost" href={localizedPath(locale, "login")} className="!px-4 !py-2.5 !text-white/85">
              {ui.cta.login}
            </Button>
            <Button href={localizedPath(locale, "register")} className="!px-5 !py-2.5">
              {ui.cta.register}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <Button variant="ghost" href={localizedPath(locale, "login")} className="!px-2.5 !py-2 !text-[9px] !text-white/85">
              {ui.cta.login}
            </Button>
            <Button href={localizedPath(locale, "register")} className="!px-2.5 !py-2 !text-[9px]">
              {ui.cta.register}
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="relative block h-3.5 w-5">
                <span className={`absolute left-0 block h-0.5 w-5 bg-white transition-all ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute top-1.5 left-0 block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 block h-0.5 w-5 bg-white transition-all ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {megaOpen && (
        <div
          className="absolute inset-x-0 top-[72px] hidden border-b border-white/10 bg-charcoal/98 backdrop-blur-md lg:block"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <Container className="grid gap-8 py-10 sm:grid-cols-2 xl:grid-cols-4">
            {mega.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        </div>
      )}

      <div
        className={`fixed inset-0 top-[72px] z-40 overflow-y-auto casino-bg-dark transition-all lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-8 py-8">
          {mega.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-white/75"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </div>
    </header>
  );
}
