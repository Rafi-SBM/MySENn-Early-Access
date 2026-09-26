import type { Metadata } from "next";
import { HomeContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";
import "./page.module.css";

export const metadata: Metadata = {
  title: "MySENn - Understand Their World.",
};

export default function HomePage() {
  return (
    <PageShell>
      <HomeContent />
    </PageShell>
  );
}
