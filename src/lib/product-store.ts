import { getStore } from "@netlify/blobs";

import type { Product } from "@/data/products";

const STORE_NAME = "snld-products";

const PRODUCTS_KEY = "products.json";

const INITIALIZED_KEY = "initialized";

function getProductStore() {
  return getStore(STORE_NAME);
}

export async function hasStoredProducts(): Promise<boolean> {
  const store = getProductStore();

  const initialized = await store.get(INITIALIZED_KEY, {
    type: "text",
  });

  return initialized === "true";
}

export async function getStoredProducts(): Promise<Product[]> {
  const store = getProductStore();

  const products = await store.get(PRODUCTS_KEY, {
    type: "json",
  });

  if (Array.isArray(products)) {
    return products as Product[];
  }

  return [];
}

export async function saveStoredProducts(
  products: Product[],
): Promise<void> {
  const store = getProductStore();

  await store.setJSON(PRODUCTS_KEY, products);

  await store.set(INITIALIZED_KEY, "true");
}

export async function deleteStoredProduct(
  sku: string,
): Promise<void> {
  const products = await getStoredProducts();

  const remaining = products.filter(
    (product) => product.sku !== sku,
  );

  await saveStoredProducts(remaining);
}