import type { Metadata } from "next";
import { HowItHelpsContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "How It Helps",
};
export default function HowItHelpsPage() {
  return (
    <PageShell>
      <HowItHelpsContent />
    </PageShell>
  );
}
