import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { LoginForm } from "@/components/forms/LoginForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { getDictionary, getPage } from "@/lib/dictionary";
import { createPageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/i18n/config";
import { contentSlugs } from "@/lib/i18n/paths";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return contentSlugs.flatMap((slug) =>
    (["en", "zh"] as const).map((locale) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const page = getPage(raw, slug);
  if (!page) return {};
  return createPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    locale: raw,
    slug: slug as import("@/lib/i18n/paths").PageSlug,
    noIndex: page.noIndex,
  });
}

function FaqJsonLd({ locale }: { locale: "en" | "zh" }) {
  const dict = getDictionary(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ContentPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();

  const page = getPage(raw, slug);
  if (!page) notFound();

  const dict = getDictionary(raw);

  if (slug === "register") return <RegisterForm />;
  if (slug === "login") return <LoginForm />;
  if (slug === "contact") {
    return (
      <>
        <PageRenderer
          page={page}
          locale={raw}
          faq={dict.faq}
          cta={{ register: dict.ui.cta.registerNow, login: dict.ui.cta.login, contact: dict.ui.mega.contact }}
        />
        <ContactForm />
      </>
    );
  }

  return (
    <>
      {slug === "faq" && <FaqJsonLd locale={raw} />}
      <PageRenderer
        page={page}
        locale={raw}
        faq={dict.faq}
        cta={{ register: dict.ui.cta.registerNow, login: dict.ui.cta.login, contact: dict.ui.mega.contact }}
      />
    </>
  );
}
