import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: "[Placeholder] Privacy notice pending legal review.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy"
        description="[Placeholder] This is a holding page. Replace with counsel-approved policy before public launch."
      />
      <div className="mt-10 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
        <p>
          {siteConfig.brandName} Phase 1 does not run accounts, payments, or a
          database. If you send a message, it travels through the channel you
          choose (for example, your mail application).
        </p>
        <p>
          TODO: REPLACE this text with the client’s privacy policy, including
          who processes inquiries and how long correspondence is kept.
        </p>
      </div>
    </div>
  );
}
