# S Nisanov Lux Diamond — Phase 1

Private jewellery **showcase** with contact intent. This is not ecommerce: there is no cart, checkout, account, CMS, or database.

All catalogue entries are **placeholders** (`placeholder: true`) so layout can be built. Replace copy, contact details, and photography before any public launch.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```

Local URL: `http://localhost:3000`

## Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Use the production origin for `NEXT_PUBLIC_SITE_URL` so sitemap and canonical URLs are correct.

Optional later:

```
NEXT_PUBLIC_HIDE_PLACEHOLDERS=true
```

Phase 1 keeps placeholder studies visible even without that flag.

## Client assets (TODO)

Replace before launch:

- Brand photography in `public/images/brand`, `public/images/home`, `public/images/products`
- Copy in `src/data/site.ts`, `src/data/categories.ts`, `src/data/products.ts`
- Contact email (`hello@example.com` is a REPLACE marker)
- Privacy policy on `/privacy`
- Open Graph art if a designed still is supplied (`src/app/opengraph-image.tsx` is a typed placeholder)

Do not invent certificates, prices, WhatsApp numbers, or heritage claims.

## Deploy

- **Vercel:** import the repo; zero extra config. Set `NEXT_PUBLIC_SITE_URL`.
- **Netlify:** `netlify.toml` is included. Use the Next.js runtime plugin. Set `NEXT_PUBLIC_SITE_URL`.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home showcase |
| `/collection` | All published studies |
| `/collection/[category]` | Category grid |
| `/product/[sku]` | Study detail + inquiry |
| `/about` | Placeholder narrative |
| `/contact` | Channels + mailto form |
| `/privacy` | Holding policy |

## Stack

Next.js (App Router), React, TypeScript (strict), Tailwind CSS. Server Components by default. Client Components: mobile navigation, product gallery, contact form.
