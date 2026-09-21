import Link from "next/link";
import { siteConfig } from "@/data/site";
import { externalLinkProps, getConfiguredChannels, navLinks } from "@/lib/links";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const channels = getConfiguredChannels();

  return (
    <footer className="mt-auto border-t border-[var(--color-hairline)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="font-serif text-xl text-[var(--color-ivory)]">
            {siteConfig.brandName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-quiet">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="link-quiet">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Contact
          </p>
          {channels.length > 0 ? (
            <ul className="mt-4 space-y-2">
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
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Channels will appear here once configured.
            </p>
          )}
        </div>
      </div>
      <div className="border-t border-[var(--color-hairline)]">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-[var(--color-muted)] sm:px-8">
          © {year} {siteConfig.brandName}. Showcase only — not an online store.
        </p>
      </div>
    </footer>
  );
}
