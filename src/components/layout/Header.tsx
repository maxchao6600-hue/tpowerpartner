"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizedPath, type PageSlug } from "@/lib/i18n/paths";

export function Header() {
  const { locale, dict } = useLocale();
  const ui = dict.ui;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      : "bg-charcoal/50 backdrop-blur-sm";

  const navItems: { label: string; slug: PageSlug }[] = [
    { label: ui.nav.home, slug: "" },
    { label: ui.nav.games, slug: "games" },
    { label: ui.nav.promotions, slug: "promotions" },
    { label: ui.nav.payment, slug: "payment" },
    { label: ui.nav.faq, slug: "faq" },
    { label: ui.nav.support, slug: "support" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-[72px] items-center justify-between gap-3">
          <Logo variant="inverse" />

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <li key={item.slug || "home"}>
                <Link
                  href={localizedPath(locale, item.slug)}
                  className="px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-white/75 uppercase transition-colors hover:text-white"
                >
                  {item.label}
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

      <div
        className={`fixed inset-0 top-[72px] z-40 overflow-y-auto casino-bg-dark transition-all lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-2 py-6">
          <div className="mb-4 flex gap-3">
            <Link
              href={localizedPath(locale, "register")}
              className="btn-shimmer inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-accent-bright/50 bg-accent px-4 text-xs font-bold tracking-[0.16em] text-white uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {ui.cta.registerNow}
            </Link>
            <Link
              href={localizedPath(locale, "login")}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-4 text-xs font-bold tracking-[0.16em] text-white uppercase"
              onClick={() => setMenuOpen(false)}
            >
              {ui.cta.login}
            </Link>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.slug || "home"}>
                <Link
                  href={localizedPath(locale, item.slug)}
                  className="block border-b border-white/10 py-4 font-mono text-[11px] tracking-[0.2em] text-white/80 uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}
