import { PageShell } from "@/components/page-shell";
import { PrivacyPolicyContent } from "@/components/page-content";
import "@/styles/policy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How MySENn protects your family's sensitive developmental and educational data in compliance with UK GDPR and Data Protection standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PrivacyPolicyContent />
    </PageShell>
  );
}
