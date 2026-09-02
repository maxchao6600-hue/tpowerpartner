"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (href !== "/" && !href.includes("#") && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
        isActive ? "text-accent-bright" : "text-muted hover:text-foreground"
      } ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 h-px w-full bg-accent-bright shadow-[0_0_8px_rgba(227,24,55,0.8)]" aria-hidden="true" />
      )}
    </Link>
  );
}
