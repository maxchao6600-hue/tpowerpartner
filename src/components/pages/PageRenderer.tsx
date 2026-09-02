import type { PageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { localizedPath } from "@/lib/i18n/paths";
import type { FaqItem } from "@/content/types";

type PageRendererProps = {
  page: PageContent;
  locale: Locale;
  faq?: FaqItem[];
  cta: { register: string; login: string; contact?: string };
};

export function PageRenderer({ page, locale, faq, cta }: PageRendererProps) {
  const heroTitle = (
    <>
      {page.hero.title}
      {page.hero.titleHighlight && (
        <span className="text-accent-bright">{page.hero.titleHighlight}</span>
      )}
    </>
  );

  return (
    <>
      <PageHero
        label={page.hero.label}
        title={heroTitle}
        description={page.hero.description}
        variant={page.hero.variant ?? "dark"}
      />

      {page.slug === "faq" && faq && (
        <section className="bg-white py-16 lg:py-24">
          <Container>
            <FAQAccordion items={faq} />
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={localizedPath(locale, "register")}>{cta.register}</Button>
              <Button variant="outline-light" href={localizedPath(locale, "contact")}>
                {cta.contact ?? "Contact"}
              </Button>
            </div>
          </Container>
        </section>
      )}

      {page.sections.map((section, i) => {
        if (section.type === "prose") {
          return (
            <section key={i} className="bg-white py-16 lg:py-20">
              <Container>
                {section.heading && (
                  <h2 className="mb-8 font-display text-2xl font-extrabold uppercase text-charcoal">
                    {section.heading}
                  </h2>
                )}
                <div className="max-w-3xl space-y-5">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-base leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (section.type === "cards") {
          return (
            <section key={i} className="bg-white py-16 lg:py-24">
              <Container>
                {section.heading && (
                  <h2 className="mb-10 font-display text-2xl font-extrabold uppercase text-charcoal">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.title} className="border border-charcoal/10 bg-charcoal p-7 lg:p-8">
                      {item.tag && (
                        <span className="font-display text-2xl font-extrabold text-accent-bright">
                          {item.tag}
                        </span>
                      )}
                      <h3 className="mt-3 font-display text-lg font-bold uppercase text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/50">{item.body}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (section.type === "grid") {
          return (
            <section key={i} className="casino-bg-dark py-16 lg:py-24">
              <Container>
                {section.heading && (
                  <h2 className="mb-10 font-display text-2xl font-extrabold uppercase text-white">
                    {section.heading}
                  </h2>
                )}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                    >
                      <h3 className="font-display text-base font-bold uppercase text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (section.type === "steps") {
          return (
            <section key={i} className="bg-white py-16 lg:py-24">
              <Container>
                {section.heading && (
                  <h2 className="mb-10 font-display text-2xl font-extrabold uppercase text-charcoal">
                    {section.heading}
                  </h2>
                )}
                <ol className="space-y-0 border-l-2 border-accent/30 pl-8">
                  {section.items.map((item, idx) => (
                    <li key={item.title} className="relative pb-10 last:pb-0">
                      <span
                        className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white"
                        aria-hidden="true"
                      >
                        {idx + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold uppercase text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </Container>
            </section>
          );
        }

        if (section.type === "list") {
          return (
            <section key={i} className="casino-bg-felt py-16 lg:py-24">
              <Container>
                {section.heading && (
                  <h2 className="mb-8 font-display text-2xl font-extrabold uppercase text-white">
                    {section.heading}
                  </h2>
                )}
                <ul className="max-w-3xl space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border border-white/10 bg-charcoal/60 px-5 py-4 text-sm text-white/70"
                    >
                      <span className="text-accent-bright" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Container>
            </section>
          );
        }

        if (section.type === "legal") {
          return (
            <section key={i} className="bg-white py-16 lg:py-24">
              <Container>
                <div className="max-w-3xl space-y-10">
                  {section.sections.map((block) => (
                    <div key={block.title}>
                      <h2 className="font-display text-xl font-bold uppercase text-charcoal">
                        {block.title}
                      </h2>
                      <div className="mt-4 space-y-3">
                        {block.paragraphs.map((p, j) => (
                          <p key={j} className="text-sm leading-relaxed text-muted">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (section.type === "notice") {
          return (
            <section key={i} className="border-y border-accent/20 bg-accent/5 py-10">
              <Container>
                <p className="max-w-3xl text-sm leading-relaxed text-white/70">{section.body}</p>
              </Container>
            </section>
          );
        }

        return null;
      })}

      {page.slug !== "faq" && page.slug !== "register" && page.slug !== "login" && page.slug !== "contact" && (
        <section className="casino-bg-red py-14">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                {cta.register}
              </h2>
            </div>
            <div className="flex gap-3">
              <Button href={localizedPath(locale, "register")}>{cta.register}</Button>
              <Button variant="secondary" href={localizedPath(locale, "login")}>
                {cta.login}
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
