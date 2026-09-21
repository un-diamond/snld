import Link from "next/link";
import { siteConfig } from "@/data/site";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  return (
    <section className="border-b border-[var(--color-hairline)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-gold)]">
            Placeholder headline
          </p>
          <h1 className="mt-5 max-w-lg font-serif text-4xl leading-[1.1] text-[var(--color-ivory)] sm:text-5xl lg:text-6xl">
            Quiet forms for private viewing.
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-muted)]">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/collection" className="btn-primary">
              Collection
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact
            </Link>
          </div>
        </div>
        <PlaceholderImage
          alt="Hero visual forthcoming — client photography not supplied"
          width={1200}
          height={1500}
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          caption="Hero image forthcoming"
        />
      </div>
    </section>
  );
}
