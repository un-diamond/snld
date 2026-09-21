import { ProductGrid } from "@/components/product/ProductGrid";

import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

import { siteConfig } from "@/data/site";

import { getFeaturedProducts } from "@/lib/products";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "S Nisanov Lux Diamond",
  description: "Timeless diamond luxury. Enquire for viewing.",
  path: "/",
});

export default async function HomePage() {
  const pieces = await getFeaturedProducts();

  const contact = siteConfig.contact ?? {};
  const email = "email" in contact ? String(contact.email ?? "") : "";
  const phone = "phone" in contact ? String(contact.phone ?? "") : "";
  const whatsapp =
    "whatsapp" in contact ? String(contact.whatsapp ?? "") : "";
  const instagram =
    "instagram" in contact ? String(contact.instagram ?? "") : "";

  const mailHref = email ? `mailto:${email}` : "#contact";

  return (
    <>
      <section className="relative flex min-h-screen items-end md:items-center">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-mobile.jpg"
            />
            <PlaceholderImage
              src="/images/hero.jpg"
              alt="Hero diamond jewelry"
              width={1920}
              height={1080}
              sizes="100vw"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/55 to-[var(--color-ink)]/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8">
          <h1 className="font-serif text-5xl leading-none tracking-[0.12em] md:text-7xl">
            S NISANOV
            <span className="mt-3 block text-2xl tracking-[0.28em] text-[var(--color-rose)] md:text-4xl">
              LUX DIAMOND
            </span>
          </h1>

          <p className="mt-8 text-[11px] tracking-[0.42em] text-[var(--color-diamond)]/80">
            TIMELESS DIAMOND LUXURY
          </p>

          <a href="#collection" className="btn-ghost mt-10">
            EXPLORE COLLECTION
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <PlaceholderImage
          src="/images/intro.jpg"
          alt="Diamond jewellery"
          width={900}
          height={1125}
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        <div>
          <p className="text-[10px] tracking-[0.4em] text-[var(--color-rose)]">
            THE HOUSE
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[0.08em] md:text-5xl">
            THE BEAUTY OF DIAMONDS
          </h2>

          <div className="mt-6 h-px w-16 bg-[var(--color-rose)]/70" />

          <p className="mt-8 max-w-md text-sm leading-8 text-[var(--color-muted)]">
            Diamonds selected for beauty, fire, and wear. Each piece is shown
            as it is — crafted to be seen up close.
          </p>
        </div>
      </section>

      <section
        id="collection"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28"
      >
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl tracking-[0.12em] md:text-5xl">
            OUR COLLECTION
          </h2>

          <p className="mt-6 text-[10px] tracking-[0.35em] text-[var(--color-muted)]">
            RINGS · NECKLACES · EARRINGS · BRACELETS
          </p>
        </div>

        <ProductGrid products={pieces} />
      </section>

      <section className="relative min-h-[70vh]">
        <div className="absolute inset-0">
          <PlaceholderImage
            src="/images/visual.jpg"
            alt="Signature diamond piece"
            width={1920}
            height={1080}
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[var(--color-ink)]/45" />
        </div>

        <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-5 text-center">
          <div>
            <h2 className="font-serif text-4xl tracking-[0.18em] md:text-6xl">
              CRAFTED TO SHINE
            </h2>

            <p className="mt-6 text-[11px] tracking-[0.35em] text-[var(--color-diamond)]/80">
              Light, cut, and quiet luxury.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-3 md:py-28">
        <div>
          <div className="h-px w-10 bg-[var(--color-rose)]" />

          <h3 className="mt-6 font-serif text-xl tracking-[0.12em]">
            EXCEPTIONAL BEAUTY
          </h3>

          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Cut and presence that hold the light.
          </p>
        </div>

        <div>
          <div className="h-px w-10 bg-[var(--color-rose)]" />

          <h3 className="mt-6 font-serif text-xl tracking-[0.12em]">
            TIMELESS DESIGN
          </h3>

          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Forms meant to last beyond a season.
          </p>
        </div>

        <div>
          <div className="h-px w-10 bg-[var(--color-rose)]" />

          <h3 className="mt-6 font-serif text-xl tracking-[0.12em]">
            PERSONAL SERVICE
          </h3>

          <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
            Private guidance when you are ready to enquire.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[var(--color-hairline)] px-5 py-20 text-center sm:px-8 md:py-28"
      >
        <h2 className="font-serif text-4xl tracking-[0.1em] md:text-5xl">
          FIND YOUR PERFECT DIAMOND
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-[var(--color-muted)]">
          Discover our collection and contact us for more information.
        </p>

        <a href={mailHref} className="btn-ghost mt-10">
          CONTACT US
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[10px] tracking-[0.3em] text-[var(--color-muted)]">
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-rose)]"
            >
              WHATSAPP
            </a>
          ) : null}

          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-rose)]"
            >
              INSTAGRAM
            </a>
          ) : null}

          {phone ? (
            <a
              href={`tel:${phone}`}
              className="hover:text-[var(--color-rose)]"
            >
              {phone}
            </a>
          ) : null}
        </div>
      </section>
    </>
  );
}