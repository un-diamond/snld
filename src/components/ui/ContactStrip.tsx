import { externalLinkProps, getConfiguredChannels } from "@/lib/links";

export function ContactStrip() {
  const channels = getConfiguredChannels().filter(
    (channel) => channel.href.startsWith("mailto:") || channel.href.startsWith("tel:") || Boolean(channel.external),
  );

  if (channels.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="flex flex-col gap-6 border border-[var(--color-hairline)] px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]">
          Contact
        </p>
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
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
      </div>
    </section>
  );
}
