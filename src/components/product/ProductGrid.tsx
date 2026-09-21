import type { Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

type ProductGridProps = {
  products: Product[];
  emptyLabel?: string;
};

export function ProductGrid({
  products,
  emptyLabel = "No studies to show yet.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-[15px] text-[var(--color-muted)]">{emptyLabel}</p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.sku}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
