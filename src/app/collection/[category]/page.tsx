import { notFound } from "next/navigation";

import { CollectionNav } from "@/components/product/CollectionNav";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { createPageMetadata } from "@/lib/seo";

import {
  getCategories,
  getCategoryBySlug,
  getProductsByCategoryId,
} from "@/lib/products";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return getCategories().map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps) {
  const { category: slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    return createPageMetadata({
      title: "Collection",
      description: "Category not found.",
      path: "/collection",
    });
  }

  return createPageMetadata({
    title: category.name,
    description:
      category.description ??
      `[Placeholder] ${category.name} studies.`,
    path: `/collection/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category: slug } = await params;

  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categories = getCategories();

  const products = await getProductsByCategoryId(
    category.id,
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Collection"
        title={category.name}
        description={category.description}
      />

      <div className="mt-10">
        <CollectionNav
          categories={categories}
          activeSlug={category.slug}
        />
      </div>

      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}