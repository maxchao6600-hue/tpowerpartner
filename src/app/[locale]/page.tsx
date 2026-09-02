import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n/config";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);
  return <HomePage locale={raw} dict={dict} />;
}
