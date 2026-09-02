"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath } from "@/lib/i18n/paths";

type MegaGroup = "program" | "partners" | "resources" | "support" | null;

export function Header() {
  const { locale, dict } = useLocale();
  const ui = dict.ui;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<MegaGroup>(null);
  const [mobileGroup, setMobileGroup] = useState<MegaGroup>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerBg =
    scrolled || menuOpen || megaOpen
      ? "bg-charcoal/95 border-b border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      : "bg-charcoal/50 backdrop-blur-sm";

  const megaMenus = {
    program: {
      title: ui.mega.program,
      links: [
        { label: ui.mega.partnerProgram, href: localizedPath(locale, "partner-program") },
        { label: ui.mega.whyTpower, href: localizedPath(locale, "why-tpower") },
        { label: ui.mega.benefits, href: localizedPath(locale, "benefits") },
        { label: ui.mega.commission, href: localizedPath(locale, "commission") },
        { label: ui.mega.about, href: localizedPath(locale, "about") },
      ],
    },
    partners: {
      title: ui.mega.partners,
      links: [
        { label: ui.mega.partnerTypes, href: localizedPath(locale, "partner-types") },
        { label: ui.mega.affiliateProgram, href: localizedPath(locale, "affiliate-program") },
        { label: ui.mega.agentProgram, href: localizedPath(locale, "agent-program") },
        { label: ui.mega.howItWorks, href: localizedPath(locale, "how-it-works") },
      ],
    },
    resources: {
      title: ui.mega.resources,
      links: [
        { label: ui.mega.marketingResources, href: localizedPath(locale, "marketing-resources") },
        { label: ui.mega.promotionalMaterials, href: localizedPath(locale, "promotional-materials") },
        { label: ui.mega.partnerTools, href: localizedPath(locale, "partner-tools") },
        { label: ui.mega.insights, href: localizedPath(locale, "partner-insights") },
        { label: ui.mega.news, href: localizedPath(locale, "news") },
      ],
    },
    support: {
      title: ui.mega.support,
      links: [
        { label: ui.mega.faq, href: localizedPath(locale, "faq") },
        { label: ui.mega.partnerSupport, href: localizedPath(locale, "partner-support") },
        { label: ui.mega.contact, href: localizedPath(locale, "contact") },
      ],
    },
  };

  const topNav: { key: MegaGroup; label: string }[] = [
    { key: "program", label: ui.nav.program },
    { key: "partners", label: ui.nav.partners },
    { key: "resources", label: ui.nav.resources },
    { key: "support", label: ui.nav.support },
  ];

  function handleMegaKeyDown(e: React.KeyboardEvent, key: MegaGroup) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMegaOpen(megaOpen === key ? null : key);
    }
    if (e.key === "Escape") setMegaOpen(null);
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-[72px] items-center justify-between gap-3">
          <Logo variant="inverse" />

          <ul className="hidden items-center gap-1 lg:flex">
            {topNav.map(({ key, label }) => (
              <li key={key} className="relative">
                <button
                  type="button"
                  className={`px-4 py-2 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
                    megaOpen === key ? "text-accent-bright" : "text-white/75 hover:text-white"
                  }`}
                  aria-expanded={megaOpen === key}
                  aria-haspopup="true"
                  onMouseEnter={() => setMegaOpen(key)}
                  onFocus={() => setMegaOpen(key)}
                  onKeyDown={(e) => handleMegaKeyDown(e, key)}
                  onClick={() => setMegaOpen(megaOpen === key ? null : key)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Button variant="ghost" href={localizedPath(locale, "login")} className="!px-4 !py-2.5 !text-white/85">
              {ui.cta.login}
            </Button>
            <Button href={localizedPath(locale, "register")} className="!px-5 !py-2.5">
              {ui.cta.registerNow}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />
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
          ref={megaRef}
          className="absolute inset-x-0 top-[72px] hidden border-b border-white/10 bg-charcoal/98 backdrop-blur-md lg:block"
          onMouseEnter={() => setMegaOpen(megaOpen)}
          onMouseLeave={() => setMegaOpen(null)}
        >
          <Container className="py-8">
            <h3 className="mb-5 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase">
              {megaMenus[megaOpen].title}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {megaMenus[megaOpen].links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm text-white/60 transition-colors hover:text-white"
                    onClick={() => setMegaOpen(null)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}

      <div
        className={`fixed inset-0 top-[72px] z-40 overflow-y-auto casino-bg-dark transition-all lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-2 py-6">
          <div className="mb-4 flex gap-3">
            <Button href={localizedPath(locale, "register")} className="flex-1 !py-3">{ui.cta.registerNow}</Button>
            <Button variant="secondary" href={localizedPath(locale, "login")} className="flex-1 !py-3">{ui.cta.login}</Button>
          </div>
          {(Object.keys(megaMenus) as MegaGroup[]).filter(Boolean).map((key) => {
            if (!key) return null;
            const menu = megaMenus[key];
            const isOpen = mobileGroup === key;
            return (
              <div key={key} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 font-mono text-[10px] tracking-[0.2em] text-accent-bright uppercase"
                  aria-expanded={isOpen}
                  onClick={() => setMobileGroup(isOpen ? null : key)}
                >
                  {menu.title}
                  <span className={`text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">▾</span>
                </button>
                {isOpen && (
                  <ul className="space-y-1 pb-4">
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block py-2.5 pl-2 text-sm text-white/75"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </Container>
      </div>
    </header>
  );
}
