import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import type { Product } from "@/data/products";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalised}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.brandName}`,
      description,
      url,
      siteName: siteConfig.brandName,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}

export function productJsonLd(product: Product) {
  if (!product.includeJsonLd || product.placeholder) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    description: product.seoDescription ?? product.shortDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
  };
}
