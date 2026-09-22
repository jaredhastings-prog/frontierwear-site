import type { MetadataRoute } from "next";

import { insights, products, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-05-01");
  const staticRoutes = [
    "",
    "/collaborate-teams-2",
    "/compare",
    "/insights",
    "/request-quote",
    "/roi-calculator"
  ].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: updated,
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
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  const insightRoutes = insights.map((article) => ({
    url: `${site.url}/insights/${article.slug}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes, ...insightRoutes];
}
