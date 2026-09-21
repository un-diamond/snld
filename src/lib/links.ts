import { siteConfig } from "@/data/site";

export const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type ExternalLinkProps = {
  href: string;
  target: "_blank";
  rel: "noopener noreferrer";
};

export function externalLinkProps(href: string): ExternalLinkProps {
  return {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

export function mailtoInquiry(sku?: string): string | null {
  const email = siteConfig.contact.email;
  if (!email) return null;
  const subject = sku
    ? `Inquiry — ${sku} — ${siteConfig.brandName}`
    : `Inquiry — ${siteConfig.brandName}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function getConfiguredChannels(): { label: string; href: string; external?: boolean }[] {
  const channels: { label: string; href: string; external?: boolean }[] = [];
  const { email, phone, whatsapp, addressLine } = siteConfig.contact;

  if (email) {
    channels.push({ label: email, href: `mailto:${email}` });
  }
  if (phone) {
    channels.push({ label: phone, href: `tel:${phone.replace(/\s+/g, "")}` });
  }
  if (whatsapp) {
    channels.push({
      label: "WhatsApp",
      href: whatsapp,
      external: true,
    });
  }
  if (addressLine) {
    channels.push({ label: addressLine, href: "/contact" });
  }

  const { instagram, facebook, pinterest } = siteConfig.social;
  if (instagram) {
    channels.push({ label: "Instagram", href: instagram, external: true });
  }
  if (facebook) {
    channels.push({ label: "Facebook", href: facebook, external: true });
  }
  if (pinterest) {
    channels.push({ label: "Pinterest", href: pinterest, external: true });
  }

  return channels;
}
