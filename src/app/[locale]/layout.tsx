import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { createPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales, htmlLang, type Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSansSc = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);
  return createPageMetadata({
    title: dict.ui.site.name,
    description: dict.ui.site.description,
    locale: raw,
    slug: "",
  });
}

function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const baseUrl = `${siteConfig.url}/${locale}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    description: dict.ui.site.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "partner support",
      email: siteConfig.contactEmail,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: dict.ui.site.description,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);
  const fontClass =
    raw === "zh"
      ? `${inter.variable} ${ibmPlexMono.variable} ${notoSansSc.variable}`
      : `${inter.variable} ${ibmPlexMono.variable}`;

  return (
    <html
      lang={htmlLang[raw]}
      className={`${fontClass} h-full antialiased`}
    >
      <head>
        <JsonLd locale={raw} />
      </head>
      <body
        className={`flex min-h-full flex-col bg-charcoal font-sans text-white ${
          raw === "zh" ? "[font-family:var(--font-noto-sc),var(--font-inter),sans-serif]" : ""
        }`}
      >
        <LocaleProvider locale={raw} dict={dict}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
