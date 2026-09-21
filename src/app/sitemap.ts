import type { MetadataRoute } from "next";

import {
  getCategories,
  getPublishedProducts,
} from "@/lib/products";

import { getSiteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const staticRoutes = [
    "",
    "/collection",
    "/about",
    "/contact",
    "/privacy",
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.6,
    }),
  );

  const products = (
    await getPublishedProducts()
  ).map((product) => ({
    url: `${siteUrl}/product/${product.sku}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categories = getCategories().map(
    (category) => ({
      url: `${siteUrl}/collection/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }),
  );

  return [
    ...pages,
    ...categories,
    ...products,
  ];
}