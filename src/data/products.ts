export type ProductStatus = "published" | "draft";

export type ProductAvailability = "inquiry" | "unavailable";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  sku: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  images: string[];
  specs: ProductSpec[];
  availability: ProductAvailability;
  featured: boolean;
  status: ProductStatus;
  placeholder?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  includeJsonLd?: boolean;
};

export const products: Product[] = [
  {
    sku: "SNLD-RING-01",
    name: "Solitaire Ring",
    categoryId: "rings",
    shortDescription: "A diamond solitaire ring.",
    description: "A diamond solitaire ring. Enquire for a private viewing.",
    images: ["/images/ring-01.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
  {
    sku: "SNLD-NCK-01",
    name: "Tennis Necklace",
    categoryId: "necklaces",
    shortDescription: "A diamond tennis necklace.",
    description: "A diamond tennis necklace. Enquire for a private viewing.",
    images: ["/images/necklace-01.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
  {
    sku: "SNLD-EAR-01",
    name: "Drop Earrings",
    categoryId: "earrings",
    shortDescription: "Diamond drop earrings.",
    description: "Diamond drop earrings. Enquire for a private viewing.",
    images: ["/images/earrings-01.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
  {
    sku: "SNLD-BRC-01",
    name: "Tennis Bracelet",
    categoryId: "bracelets",
    shortDescription: "A diamond tennis bracelet.",
    description: "A diamond tennis bracelet. Enquire for a private viewing.",
    images: ["/images/bracelet-01.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
  {
    sku: "SNLD-RING-02",
    name: "Eternity Ring",
    categoryId: "rings",
    shortDescription: "A diamond eternity ring.",
    description: "A diamond eternity ring. Enquire for a private viewing.",
    images: ["/images/ring-02.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
  {
    sku: "SNLD-NCK-02",
    name: "Pendant Necklace",
    categoryId: "necklaces",
    shortDescription: "A diamond pendant necklace.",
    description: "A diamond pendant necklace. Enquire for a private viewing.",
    images: ["/images/necklace-02.jpg"],
    specs: [],
    availability: "inquiry",
    featured: true,
    status: "published",
  },
];