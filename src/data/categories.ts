export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  heroImage?: string;
  order: number;
};

export const categories: Category[] = [
  {
    id: "rings",
    slug: "rings",
    name: "Rings",
    description:
      "[Placeholder] Study pieces in ring form. Not a live inventory list.",
    order: 1,
  },
  {
    id: "necklaces",
    slug: "necklaces",
    name: "Necklaces",
    description:
      "[Placeholder] Study pieces in necklace form. Not a live inventory list.",
    order: 2,
  },
  {
    id: "studies",
    slug: "studies",
    name: "Atelier studies",
    description:
      "[Placeholder] Form and proportion studies. Replace with client categories.",
    order: 3,
  },
];
