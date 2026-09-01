import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = createMetadata({
  title: "Partner Login",
  description:
    "Sign in to your TPOWER Partner dashboard to access tracking links, performance reports, and promotional resources.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return <LoginForm />;
}
