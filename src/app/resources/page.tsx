import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Resources",
  description:
    "Partner resources for TPOWER affiliates — guides, marketing materials, tips, industry insights, and campaign resources.",
  path: "/resources",
});

const upcomingContent = [
  {
    id: "affiliate-guides",
    title: "Affiliate Guides",
    description:
      "Comprehensive guides covering partnership fundamentals, traffic strategies, and campaign optimization for TPOWER partners.",
    status: "Coming soon",
  },
  {
    id: "marketing-resources",
    title: "Marketing Resources",
    description:
      "Creative assets, banner templates, and promotional frameworks to support your marketing campaigns.",
    status: "Coming soon",
  },
  {
    id: "partner-tips",
    title: "Partner Tips",
    description:
      "Practical tips and best practices from experienced performance marketers to help you grow your partnership.",
    status: "Coming soon",
  },
  {
    id: "industry-insights",
    title: "Industry Insights",
    description:
      "Analysis and perspectives on trends in affiliate marketing, traffic acquisition, and performance partnerships.",
    status: "Coming soon",
  },
  {
    id: "campaign-resources",
    title: "Campaign Resources",
    description:
      "Structured resources for planning, executing, and measuring partner marketing campaigns.",
    status: "Coming soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-[72px]">
        <Container className="py-20 lg:py-28">
          <SectionLabel>Resources</SectionLabel>
          <SectionHeading as="h1">
            Knowledge for
            <br />
            serious partners.
          </SectionHeading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Access guides, marketing resources, and partner insights designed to
            help you build and scale your TPOWER partnership effectively.
          </p>
        </Container>
      </section>

      <section className="border-t border-border py-20 lg:py-28">
        <Container>
          <div className="space-y-8">
            {upcomingContent.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="grid gap-6 border border-border p-8 md:grid-cols-[1fr_auto] lg:p-10"
              >
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    {item.status}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-border bg-muted-bg p-8 text-center lg:p-12">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Already a partner?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Approved partners can access promotional materials and campaign resources
              through the partner dashboard.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button href="/login">Partner Login</Button>
              <Button variant="secondary" href="/faq">
                View FAQ
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
