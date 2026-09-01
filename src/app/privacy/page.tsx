import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container, SectionHeading } from "@/components/ui/Container";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the TPOWER Partner affiliate and partnership program.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="pt-[72px]">
      <Container className="py-20 lg:py-28">
        <SectionHeading as="h1" className="!text-[clamp(1.75rem,4vw,2.5rem)]">
          Privacy Policy
        </SectionHeading>
        <p className="mt-4 text-sm text-muted">Last updated: September 2026</p>

        <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              1. Introduction
            </h2>
            <p className="mt-3">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This policy describes how we collect, use, and
              protect personal information when you use our partner program website
              and services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect information you provide directly, including your name,
              email address, website or traffic source details, marketing experience,
              and other information submitted through application or contact forms.
              We also collect usage data through cookies and analytics tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              3. How We Use Information
            </h2>
            <p className="mt-3">
              We use collected information to process partner applications, manage
              partnerships, provide support, improve our services, communicate program
              updates, and comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              4. Information Sharing
            </h2>
            <p className="mt-3">
              We do not sell personal information. We may share data with service
              providers who assist in operating the program, when required by law,
              or to protect our rights and the rights of others.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              5. Cookies & Analytics
            </h2>
            <p className="mt-3">
              Our website may use cookies and similar technologies to improve user
              experience and analyze site usage. You can manage cookie preferences
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              6. Data Security
            </h2>
            <p className="mt-3">
              We implement reasonable security measures to protect personal information.
              However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your jurisdiction, you may have rights to access, correct,
              or delete your personal information. To exercise these rights, contact
              us at{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              8. Changes
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">
              9. Contact
            </h2>
            <p className="mt-3">
              For privacy-related inquiries, contact{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:underline">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
