import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Product } from "@/data/products";

const categoryLabel: Record<string, string> = {
rings: "Rings",
necklaces: "Necklaces",
earrings: "Earrings",
bracelets: "Bracelets",
};

export function ProductCard({ product }: { product: Product }) {
const image = product.images[0] ?? "";

return ( <article className="group"> <div className="overflow-hidden bg-[var(--color-raised)]"> <div className="transition duration-500 group-hover:scale-[1.03]"> <PlaceholderImage
         src={image}
         alt={product.name}
         width={900}
         height={1125}
         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
       /> </div> </div>

```
  <div className="pt-5">
    <p className="text-[10px] tracking-[0.28em] text-[var(--color-rose)]">
      {(categoryLabel[product.categoryId] ?? product.categoryId).toUpperCase()}
    </p>

    <h3 className="mt-2 font-serif text-xl tracking-[0.06em]">
      {product.name}
    </h3>

    <Link
      href={`/product/${product.sku}`}
      className="mt-3 inline-block text-[10px] tracking-[0.3em] text-[var(--color-muted)] transition hover:text-[var(--color-rose)]"
    >
      VIEW DETAILS
    </Link>
  </div>
</article>
);
}
