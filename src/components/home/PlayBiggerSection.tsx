import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brandAssets } from "@/lib/assets";

export function PlayBiggerSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden py-24 lg:min-h-[520px] lg:py-32">
      <Image
        src={brandAssets.joinCta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-charcoal/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(227,24,55,0.35)_0%,transparent_55%)]" aria-hidden="true" />

      <Container className="relative text-center lg:text-left">
        <h2 className="font-display text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold uppercase leading-[1.0] tracking-[-0.03em] text-white text-glow-red">
          Ready To Join The
          <br />
          TPOWER Side Of The Game?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-white/88 lg:mx-0">
          Become a TPOWER Partner today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <Button variant="inverse" href="/register" className="sm:min-w-[220px]">
            Register Now
          </Button>
          <Button variant="secondary" href="/login" className="sm:min-w-[160px]">
            Login
          </Button>
        </div>
      </Container>
    </section>
  );
}
