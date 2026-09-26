import type { Metadata } from "next";
import { FaqContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";
import "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQs",
};
export default function FaqPage() {
  return (
    <PageShell>
      <FaqContent />
    </PageShell>
  );
}
