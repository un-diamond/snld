import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductInfo } from "@/components/product/ProductInfo";
import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  getCategoryById,
  getProductBySku,
  getRelatedProducts,
} from "@/lib/products";

import {
  createPageMetadata,
  productJsonLd,
} from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ sku: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps) {
  const { sku } = await params;

  const product = await getProductBySku(sku);

  if (!product) {
    return createPageMetadata({
      title: "Piece",
      description: "Study not found.",
      path: "/collection",
    });
  }

  return createPageMetadata({
    title: product.seoTitle ?? product.name,
    description:
      product.seoDescription ?? product.shortDescription,
    path: `/product/${product.sku}`,
  });
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { sku } = await params;

  const product = await getProductBySku(sku);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);

  const related = await getRelatedProducts(product);

  const jsonLd = productJsonLd(product);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      ) : null}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <ProductGallery
          images={product.images}
          name={product.name}
        />

        <ProductInfo
          product={product}
          category={category}
        />
      </div>

      {related.length > 0 ? (
        <section className="mt-20">
          <SectionHeading
            eyebrow="Related"
            title="Other studies in this form"
          />

          <div className="mt-10">
            <ProductGrid products={related} />
          </div>
        </section>
      ) : null}
    </div>
  );
}