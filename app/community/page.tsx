import type { Metadata } from "next";
import { CommunityContent } from "@/components/page-content";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Community",
};
export default function CommunityPage() {
  return (
    <PageShell>
      <CommunityContent />
    </PageShell>
  );
}
