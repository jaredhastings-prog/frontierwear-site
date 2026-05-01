import Image from "next/image";

import type { Product } from "@/content/site";

import { ButtonLink } from "./ButtonLink";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-glow transition duration-300 hover:-translate-y-1 hover:border-blue/50 md:grid-rows-[auto_1fr]">
      <div className="relative min-h-72 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(71,112,219,0.16),rgba(255,108,47,0.08),rgba(255,255,255,0.03))]">
        <Image
          alt={product.imageAlt}
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src={product.image}
        />
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber">
          {product.eyebrow}
        </p>
        <h3 className="mt-4 font-display text-3xl leading-tight text-white">
          {product.name}
        </h3>
        <p className="mt-4 text-base leading-7 text-smoke">{product.summary}</p>
        <ul className="mt-6 grid gap-3 text-sm text-frost/85">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li className="border-l border-blue/60 pl-3" key={benefit}>
              {benefit}
            </li>
          ))}
        </ul>
        <ButtonLink className="mt-8 w-full sm:w-fit" href={product.href} variant="secondary">
          View Product
        </ButtonLink>
      </div>
    </article>
  );
}
