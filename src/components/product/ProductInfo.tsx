import Link from "next/link";
import type { Product } from "@/data/products";
import type { Category } from "@/data/categories";
import { InquiryCta } from "@/components/product/InquiryCta";
import { SpecTable } from "@/components/product/SpecTable";

type ProductInfoProps = {
  product: Product;
  category?: Category;
};

export function ProductInfo({ product, category }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        {category ? (
          <Link
            href={`/collection/${category.slug}`}
            className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-gold)]"
          >
            {category.name}
          </Link>
        ) : null}
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--color-ivory)]">
          {product.name}
        </h1>
        <p className="mt-3 text-sm tracking-[0.12em] text-[var(--color-muted)]">
          {product.sku}
        </p>
        {product.placeholder ? (
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Placeholder study — not inventory
          </p>
        ) : null}
      </div>
      <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
        {product.description}
      </p>
      <SpecTable specs={product.specs} />
      <InquiryCta sku={product.sku} />
    </div>
  );
}
