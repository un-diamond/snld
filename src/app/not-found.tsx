import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-[var(--color-ivory)]">
        This page is not in the collection.
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-muted)]">
        {siteConfig.brandName} — the address may have changed, or the study
        has not been published.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/collection" className="btn-ghost">
          Collection
        </Link>
      </div>
    </div>
  );
}
