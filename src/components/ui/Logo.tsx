import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="28" height="28" fill="#0D0D0D" />
        <path
          d="M7 20V8h3.2l3.8 6.4L17.8 8H21v12h-2.8v-7.2L14.8 20h-1.6L9.8 12.8V20H7z"
          fill="#FAFAF8"
        />
        <rect x="22" y="8" width="2" height="12" fill="#C41E3A" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-bold tracking-[0.08em] text-foreground uppercase">
          TPOWER
        </span>
        <span className="mt-0.5 font-mono text-[9px] tracking-[0.25em] text-muted uppercase">
          Partner
        </span>
      </span>
    </Link>
  );
}
