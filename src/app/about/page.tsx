import { CtaBanner } from "@/components/ui/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "[Placeholder] About this house. History and people will be added when the client supplies them.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title={siteConfig.brandName}
          description="[Placeholder] This page is a frame for client-approved narrative. Do not treat the following as fact."
        />
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
          <p>
            [Placeholder] A short note on why the house exists will sit here.
            Dates, cities, and family history are omitted until verified copy
            is provided.
          </p>
          <p>
            [Placeholder] Working method, private appointments, and any
            independent documentation standards can be described later. This
            Phase 1 site is a showcase and inquiry channel only.
          </p>
        </div>
      </div>
      <CtaBanner
        title="Begin a conversation."
        description="Share a brief and we will reply through the configured channel."
        primaryHref="/contact"
        primaryLabel="Contact"
      />
    </>
  );
}
