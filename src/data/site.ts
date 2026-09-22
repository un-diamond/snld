export type SiteContact = {
  email?: string;
  phone?: string;
  whatsapp?: string;
  addressLine?: string;
  city?: string;
};

export type SiteSocial = {
  instagram?: string;
  facebook?: string;
  pinterest?: string;
};

export type SiteConfig = {
  brandName: string;
  tagline: string;
  locale: string;
  contact: SiteContact;
  social: SiteSocial;
};

export const siteConfig: SiteConfig = {
  brandName: "S NISANOV LUX DIAMOND",
  tagline: "Timeless diamond luxury.",
  locale: "en",
  contact: {
    email: "hello@example.com",
  },
  social: {},
};