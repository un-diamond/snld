import { CollectionNav } from "@/components/product/CollectionNav";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { createPageMetadata } from "@/lib/seo";

import {
  getCategories,
  getPublishedProducts,
} from "@/lib/products";

export const metadata = createPageMetadata({
  title: "Collection",
  description:
    "[Placeholder] Study pieces for layout and inquiry. Not a live catalogue of inventory.",
  path: "/collection",
});

export default async function CollectionPage() {
  const categories = getCategories();

  const products = await getPublishedProducts();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Collection"
        title="Study pieces"
        description="Placeholder entries only. Photography and client copy have not been supplied."
      />

      <div className="mt-10">
        <CollectionNav categories={categories} />
      </div>

      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}