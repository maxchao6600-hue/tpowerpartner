import Link from "next/link";
import { type ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "outline-light";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-shimmer bg-accent text-white border border-accent-bright/50 red-glow-strong hover:brightness-110",
  secondary:
    "bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10",
  ghost:
    "bg-transparent text-white/80 border border-transparent hover:text-accent-bright hover:border-accent/30",
  inverse:
    "bg-white text-accent border border-white hover:bg-white/90 red-glow",
  "outline-light":
    "bg-transparent text-foreground border-2 border-charcoal/20 hover:border-accent hover:text-accent",
};

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300";

export function Button({
  variant = "primary",
  href,
  external,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
