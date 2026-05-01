# Frontier Wear Lead Generation Site

Modern static product showcase for Frontier Wear, built with Next.js App Router and Tailwind CSS. The site replaces the old Shopify-style store with quote-focused pages and a Netlify Forms quote request flow.

## Pages

- `/` main conversion homepage
- `/navigator-520` RealWear Navigator 520 product page
- `/navigator-z1` RealWear Navigator Z1 product page
- `/request-quote` Netlify Forms quote request page
- `/thank-you` form success page

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
npm run typecheck
npm run build
```

## Deployment

This project is configured for static export on Netlify.

- Build command: `npm run build`
- Publish directory: `out`
- Forms: Netlify Forms, form name `quote-request`
- CMS/database/apps: none

Old Shopify product and collection paths are redirected in `netlify.toml`.

## Content and Assets

Static site content lives in `content/site.ts`.

Brand assets and product imagery are stored in `public/assets`. The current files use Frontier Wear logo and product images sourced from the existing Frontier Wear site and can be replaced in place as final photography becomes available.

Local fonts are stored in `public/fonts`, using the same Questrial and Archivo pairing found on the existing site.

## PR Workflow Notes

1. Create a branch, preferably using the `codex/` prefix.
2. Make focused changes in components, pages, or `content/site.ts`.
3. Run `npm run typecheck` and `npm run build`.
4. Open a pull request and use the Netlify deploy preview for review.
