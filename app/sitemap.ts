import type { MetadataRoute } from "next";

import { products, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-05-01");
  const staticRoutes = ["", "/request-quote"].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}${product.href}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...productRoutes];
}
