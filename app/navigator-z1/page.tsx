import type { Metadata } from "next";

import { ProductDetail } from "@/components/ProductDetail";
import { products } from "@/content/site";

const product = products.find((item) => item.slug === "navigator-z1")!;

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
        height: 894,
        alt: product.imageAlt
      }
    ]
  }
};

export default function NavigatorZ1Page() {
  return <ProductDetail product={product} />;
}
