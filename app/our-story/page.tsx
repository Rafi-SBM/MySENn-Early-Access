import type { Metadata } from "next";
import { OurStoryContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";
import "./our-story.module.css";

export const metadata: Metadata = {
  title: "Our Story",
};
export default function OurStoryPage() {
  return (
    <PageShell>
      <OurStoryContent />
    </PageShell>
  );
}
