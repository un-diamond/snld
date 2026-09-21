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
  brandName: "S Nisanov Lux Diamond",
  // TODO: REPLACE with approved client tagline
  tagline: "[Placeholder] A private jewellery study — copy pending client approval.",
  locale: "en",
  contact: {
    // TODO: REPLACE with the client email
    email: "hello@example.com",
    // phone, whatsapp, and address intentionally omitted until provided
  },
  social: {
    // TODO: REPLACE with official profiles only when supplied
  },
};
