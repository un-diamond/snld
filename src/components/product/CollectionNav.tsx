import Link from "next/link";
import type { Category } from "@/data/categories";

type CollectionNavProps = {
  categories: Category[];
  activeSlug?: string;
};

export function CollectionNav({ categories, activeSlug }: CollectionNavProps) {
  const items = [{ slug: undefined as string | undefined, name: "All", href: "/collection" }].concat(
    categories.map((category) => ({
      slug: category.slug,
      name: category.name,
      href: `/collection/${category.slug}`,
    })),
  );

  return (
    <nav aria-label="Collection categories" className="overflow-x-auto">
      <ul className="flex min-w-max gap-2 pb-1">
        {items.map((item) => {
          const isActive = item.slug === activeSlug;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center border px-4 text-[11px] uppercase tracking-[0.2em] ${
                  isActive
                    ? "border-[var(--color-gold)] text-[var(--color-ivory)]"
                    : "border-[var(--color-hairline)] text-[var(--color-muted)] hover:text-[var(--color-ivory)]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
