import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/lib/links";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-hairline)] bg-[var(--color-charcoal)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="min-h-11 py-2 font-serif text-[15px] tracking-[0.08em] text-[var(--color-ivory)] sm:text-lg"
        >
          {siteConfig.brandName}
        </Link>
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)] hover:text-[var(--color-ivory)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
