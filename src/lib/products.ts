import {
  getStoredProducts,
  hasStoredProducts,
} from "@/lib/product-store";

import {
  products as fallbackProducts,
  type Product,
} from "@/data/products";

import {
  categories,
  type Category,
} from "@/data/categories";

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryById(
  categoryId: string,
): Category | undefined {
  return categories.find(
    (category) => category.id === categoryId,
  );
}

export function getCategoryBySlug(
  slug: string,
): Category | undefined {
  const normalizedSlug =
    decodeURIComponent(slug).toLowerCase();

  return categories.find(
    (category) => category.slug === normalizedSlug,
  );
}

export async function getProducts(): Promise<Product[]> {
  try {
    const initialized = await hasStoredProducts();

    if (initialized) {
      return await getStoredProducts();
    }
  } catch (error) {
    console.warn(
      "Netlify Blobs unavailable during build/runtime. Using fallback products.",
      error,
    );
  }

  return fallbackProducts;
}

export async function getPublishedProducts(): Promise<Product[]> {
  const products = await getProducts();

  return products.filter(
    (product) => product.status === "published",
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const products = await getPublishedProducts();

  return products.filter(
    (product) => product.featured,
  );
}

export async function getProductBySku(
  sku: string,
): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find(
    (product) => product.sku === sku,
  );
}

export async function getProductsByCategoryId(
  categoryId: string,
): Promise<Product[]> {
  const products = await getPublishedProducts();

  return products.filter(
    (product) => product.categoryId === categoryId,
  );
}

export async function getRelatedProducts(
  product: Product,
  limit = 4,
): Promise<Product[]> {
  const products = await getProductsByCategoryId(
    product.categoryId,
  );

  return products
    .filter(
      (item) => item.sku !== product.sku,
    )
    .slice(0, limit);
}