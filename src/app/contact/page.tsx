import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { externalLinkProps, getConfiguredChannels } from "@/lib/links";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "[Placeholder] Inquire about a study piece. This site does not take payments.",
  path: "/contact",
});

export default function ContactPage() {
  const channels = getConfiguredChannels();

  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Private inquiry"
          description="Configured channels appear below. Empty fields stay hidden until the client supplies them."
        />
        {channels.length > 0 ? (
          <ul className="mt-10 space-y-3">
            {channels.map((channel) => (
              <li key={`${channel.label}-${channel.href}`}>
                {channel.external ? (
                  <a className="link-quiet" {...externalLinkProps(channel.href)}>
                    {channel.label}
                  </a>
                ) : (
                  <a className="link-quiet" href={channel.href}>
                    {channel.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-sm text-[var(--color-muted)]">
            No contact channels are configured yet.
          </p>
        )}
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
          {siteConfig.brandName} — showcase only
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
