import type { Metadata } from "next";

import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/content/site";

const product = products.find((item) => item.slug === "arc-3")!;

export const metadata: Metadata = {
  title: product.productPageTitle,
  description: product.metaDescription,
  alternates: {
    canonical: product.href
  },
  openGraph: {
    title: product.productPageTitle,
    description: product.metaDescription,
    url: product.href,
    images: [
      {
        url: product.image,
        width: 1800,
        height: 1200,
        alt: product.imageAlt
      }
    ]
  }
};

export default function Arc3Page() {
  return <ProductDetail product={product} />;
}
