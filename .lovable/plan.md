# Hung Vinh Asian Food — B2B Wholesale Platform

A premium, bilingual (EN/VI) marketing and wholesale-inquiry site for Hung & Vinh Asian Food Pty Ltd, Adelaide. Front-end only: no database or logins, so the RFQ form confirms on-screen and offers one-click call/email follow-up.

## Design system
- Deep forest emerald brand (#0E3A2F / #164E3D), harvest gold accents (#C89332 / #D97706), warm rice-alabaster canvas (#FBF9F5 / #F4EFE6), charcoal text (#1A221E) with olive-sage (#5F7268) for specs.
- Playfair Display for headlines, Plus Jakarta Sans for body/UI, loaded via link tags in the root route.
- All colours defined as semantic tokens in `src/styles.css` (oklch); glassmorphism header, pill badges, soft gold-tinted shadows, restrained hover/lift micro-interactions.

## Pages and structure
Home (`/`) carries the full narrative in order:
1. Announcement bar + sticky glass header — logo, nav links, EN/VI switcher, gold "Request Wholesale Pricing" CTA, mobile drawer.
2. Editorial split hero — award badge, headline, subhead, dual CTAs, product-card carousel (ST25 rice, Cửa Lò 48°N fish sauce, Bún Bò Huế paste, lychee juice).
3. B2B catalog — search bar, filter tabs with counts (42 items across 8 categories), product cards with image, SKU/pack format, origin tag, "Inquire About This Item", and a spec modal (carton dimensions, units/carton, shelf life).
4. ST25 Vilaconic spotlight — heritage story, kitchen benefits, HACCP / ISO 22000 / Global G.A.P. badges.
5. Who We Serve — three persona cards with hover treatment.
6. 4-step wholesale workflow.
7. RFQ form — business name, ABN, category, suburb/postcode, product interests, volume, contact details; validated, with a success state linking to call and email.
8. FAQ accordion + Wingfield warehouse card with Google Maps link.
9. Footer — branding, ABN, address, contacts, language selector, dynamic year.

Separate routes for shareable sections, each with its own SEO metadata: `/products`, `/st25`, `/wholesale`, `/about`, `/certificates`, `/faq`. Header links point to these; the home page keeps condensed versions that link through.

## Bilingual toggle
A lightweight React context holds the active locale and a typed EN/VI dictionary; every visible string, product name, and form label reads from it. Choice persists in localStorage and is applied after hydration to avoid mismatches.

## Technical notes
- TanStack Start routes under `src/routes/`, shared shell (header/footer/language provider) in `__root.tsx`.
- Product data lives in a typed `src/data/products.ts` module driving catalog, filters, counts, and the spotlight carousel.
- Product imagery generated as assets under `src/assets/` for hero/carousel and category cards; catalog items reuse consistent styled placeholders where a distinct photo isn't warranted.
- shadcn components for tabs, dialog, accordion, form inputs, styled to the token set rather than defaults.
- Responsive across mobile, tablet, desktop; semantic HTML, single H1 per route, alt text, JSON-LD LocalBusiness on home.
