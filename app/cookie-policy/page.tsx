import type { Metadata } from "next";
import { CookiePolicyContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";
import "@/styles/policy.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "This Cookie Policy explains how MySENn uses cookies and similar tracking technologies.",
};
export default function CookiePolicyPage() {
  return (
    <PageShell>
      <CookiePolicyContent />
    </PageShell>
  );
}
