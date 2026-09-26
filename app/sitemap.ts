import type { MetadataRoute } from "next";

import { insights, products, site } from "@/content/site";

export const dynamic = "force-static";

// Reflects the date each route's content was actually last edited, not a
// single fixed date for the whole site — keeps lastmod meaningful for crawlers.
const staticLastModified: Record<string, string> = {
  "": "2026-09-22",
  "/collaborate-teams-2": "2026-05-17",
  "/compare": "2026-09-22",
  "/insights": "2026-09-22",
  "/request-quote": "2026-09-18",
  "/roi-calculator": "2026-09-22"
};

const productLastModified = "2026-09-23";

const insightLastModified: Record<string, string> = {
  "intrinsically-safe-explained": "2026-09-22",
  "closing-the-skills-gap": "2026-09-22",
  "assisted-reality-oil-and-gas": "2026-09-22",
  "peak-season-warehouse-onboarding": "2026-09-22"
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(staticLastModified).map(
    ([route, date]) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(date),
      changeFrequency: "monthly" as const,
      priority:
        route === ""
          ? 1
          : route === "/collaborate-teams-2" || route === "/compare"
            ? 0.9
            : 0.8
    })
  );

  const productRoutes = products.map((product) => ({
    url: `${site.url}${product.href}`,
    lastModified: new Date(productLastModified),
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const insightRoutes = insights.map((article) => ({
    url: `${site.url}/insights/${article.slug}`,
    lastModified: new Date(insightLastModified[article.slug] ?? "2026-09-22"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}
