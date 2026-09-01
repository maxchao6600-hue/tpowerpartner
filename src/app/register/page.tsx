import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { RegisterForm } from "./RegisterForm";

export const metadata: Metadata = createMetadata({
  title: "Become a Partner",
  description:
    "Apply to join the TPOWER Partner affiliate program. Submit your application to start a performance-based partnership.",
  path: "/register",
});

export default function RegisterPage() {
  return <RegisterForm />;
}
