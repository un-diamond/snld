import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy",
  description: "Privacy notice for S Nisanov Lux Diamond.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Notice"
        description="How inquiries are handled on this website."
      />
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--color-muted)]">
        <section>
          <h2 className="font-serif text-xl text-[var(--color-ivory)]">This website</h2>
          <p className="mt-3">
            {siteConfig.brandName} is a jewellery showcase. There is no online checkout,
            shopping cart, or customer account on this site.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-[var(--color-ivory)]">When you contact us</h2>
          <p className="mt-3">
            Messages are sent through the channel you choose, including email and WhatsApp.
            This website does not keep a customer database of those messages.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-[var(--color-ivory)]">External services</h2>
          <p className="mt-3">
            Email, WhatsApp, and social links open outside this website and follow their own
            privacy practices.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-[var(--color-ivory)]">Contact</h2>
          <p className="mt-3">
            Questions about this notice can be sent to{" "}
            <a className="link-quiet" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}