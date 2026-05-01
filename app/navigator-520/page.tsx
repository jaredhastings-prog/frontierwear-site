import type { Metadata } from "next";

import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/content/site";

const product = products.find((item) => item.slug === "navigator-520")!;

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
        width: 1445,
        height: 948,
        alt: product.imageAlt
      }
    ]
  }
};

export default function Navigator520Page() {
  return <ProductDetail product={product} />;
}
