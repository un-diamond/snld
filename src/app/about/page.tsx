import { CtaBanner } from "@/components/ui/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "S Nisanov Lux Diamond presents diamonds and fine jewellery for private viewing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="The House"
          title={siteConfig.brandName}
          description="Diamonds and fine jewellery, presented with quiet luxury."
        />
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--color-muted)]">
          <p>
            S Nisanov Lux Diamond presents a curated selection of diamonds and fine jewellery,
            bringing together timeless design, refined detail and understated luxury.
          </p>
          <p>
            Our collection is presented for private viewing and personal inquiry. Each piece is
            selected to reflect the enduring beauty of diamonds and the character of fine
            jewellery.
          </p>
          <p>
            We welcome private inquiries for further information about available pieces,
            appointments and collection details.
          </p>
        </div>
      </div>
      <CtaBanner
        title="Begin a conversation."
        description="Write to us about a piece, a viewing, or the collection."
        primaryHref="/contact"
        primaryLabel="Contact"
      />
    </>
  );
}