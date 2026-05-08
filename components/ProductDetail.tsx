import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/content/site";

import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const isNavigatorZ1 = product.slug === "navigator-z1";
  const heroImageSize = isNavigatorZ1
    ? { height: 2000, width: 2000 }
    : { height: 894, width: 1445 };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: "RealWear"
    },
    image: `https://frontierwear.com.au${product.image}`,
    description: product.metaDescription,
    url: `https://frontierwear.com.au${product.href}`
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <main id="main">
        <section className="relative isolate overflow-hidden border-b border-white/10 pt-32">
          <Image
            alt=""
            aria-hidden="true"
            className={
              isNavigatorZ1
                ? "pointer-events-none absolute right-0 top-1/2 z-0 h-[58vh] w-full -translate-y-1/2 object-contain object-center md:right-[2%] md:h-[72vh] md:w-[52vw]"
                : "pointer-events-none absolute bottom-0 right-[-18%] z-[-1] h-[56vh] w-[86vw] object-contain opacity-80 blur-[0.2px] md:right-[-8%] md:h-[72vh] md:w-[55vw]"
            }
            height={heroImageSize.height}
            priority
            src={product.image}
            width={heroImageSize.width}
          />
          <div className="absolute inset-0 z-[-3] bg-[linear-gradient(110deg,#05070c_0%,#08101f_46%,rgba(14,27,77,0.78)_100%)]" />
          <div className="absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgba(5,7,12,0.96)_0%,rgba(5,7,12,0.78)_48%,rgba(5,7,12,0.30)_100%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 md:pb-28 lg:px-8">
            <Link
              className="text-sm text-smoke transition hover:text-white"
              href="/#products"
            >
              Back to products
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              {product.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
              {product.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-frost/85 md:text-xl">
              {product.longSummary}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
              <ButtonLink href="/#use-cases" variant="secondary">
                View Use Cases
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Field-ready fit"
              title={`Where ${product.shortName} makes sense`}
            >
              <p>
                Frontier Wear helps match the device, accessories, training, and
                connected worker workflow to the reality of your sites.
              </p>
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.bestFor.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-white"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {isNavigatorZ1 ? (
          <section className="border-y border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Image
                  alt="Back view of the RealWear Navigator Z1 headset"
                  className="-mb-[25%] -mt-[33%] block h-auto w-full object-contain"
                  height={2000}
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  src="/assets/navigator-z1-back.png"
                  width={2000}
                />
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-y border-white/10 bg-white/[0.035]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-display text-3xl text-white md:text-5xl">
                Key advantages
              </h2>
              <div className="mt-8 grid gap-4">
                {product.benefits.map((benefit) => (
                  <div
                    className="rounded-lg border border-white/10 bg-[#080d16] p-5 text-sm leading-7 text-frost/90"
                    key={benefit}
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-white md:text-5xl">
                Technical highlights
              </h2>
              <div className="mt-8 grid gap-4">
                {product.specs.map((spec) => (
                  <div
                    className="rounded-lg border border-white/10 bg-[#080d16] p-5 text-sm leading-7 text-frost/90"
                    key={spec}
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Deployment detail" title="Included kit">
              <p>
                Use the quote request form to confirm quantities, accessories,
                support needs, and the best device path for your sites.
              </p>
            </SectionHeading>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.kit.map((item) => (
                <li
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm text-frost/90"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 md:p-12">
            <div
              className={
                isNavigatorZ1 ? "relative z-10 max-w-2xl md:max-w-[58%]" : ""
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
                Quote support
              </p>
              <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight text-white md:text-5xl">
                Ready to assess {product.shortName} for your frontline team?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-frost/80 md:text-base">
                Tell us about your sites, team size, and required workflows. We
                will help you scope devices, accessories, training, and rollout
                support.
              </p>
              <ButtonLink className="mt-8" href="/request-quote">
                Request a Quote
              </ButtonLink>
            </div>
            {isNavigatorZ1 ? (
              <div className="pointer-events-none relative z-0 mt-8 flex justify-center md:absolute md:inset-y-0 md:right-8 md:mt-0 md:w-[36%] md:items-center">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-auto max-h-72 w-full max-w-sm object-contain md:max-h-[82%] md:max-w-none"
                  height={1280}
                  src="/assets/navigator-z1-hardhat.png"
                  width={1280}
                />
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
