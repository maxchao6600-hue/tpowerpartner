import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact TPOWER Partner support for questions about the affiliate program, commissions, tracking, and partnership opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
