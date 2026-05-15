import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/content/site";

import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

type ProductDetailProps = {
  product: Product;
};

const thermalSpecs = [
  "FLIR thermal module included",
  "Real-time hotspot detection",
  "Hands-free inspection workflow",
  "Built for hazardous/restricted environments"
];

export function ProductDetail({ product }: ProductDetailProps) {
  const isNavigator520 = product.slug === "navigator-520";
  const isNavigatorZ1 = product.slug === "navigator-z1";
  const usesEnhancedImageLayout = isNavigator520 || isNavigatorZ1;
  const backImage = isNavigator520
    ? {
        alt: "Back view of the RealWear Navigator 520 headset",
        className: "-mb-[8%] -mt-[22%] block h-auto w-full object-contain",
        src: "/assets/navigator520-back.png"
      }
    : isNavigatorZ1
      ? {
          alt: "Back view of the RealWear Navigator Z1 headset",
          className: "-mb-[25%] -mt-[33%] block h-auto w-full object-contain",
          src: "/assets/navigator-z1-back.png"
        }
      : null;
  const quoteImage = isNavigator520
    ? {
        height: 2000,
        src: "/assets/navigator520-side.png",
        width: 2000
      }
    : isNavigatorZ1
      ? {
          height: 1280,
          src: "/assets/navigator-z1-hardhat.png",
          width: 1280
        }
      : null;
  const heroImageSize = usesEnhancedImageLayout
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
              usesEnhancedImageLayout
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

        {backImage ? (
          <section className="border-y border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Image
                  alt={backImage.alt}
                  className={backImage.className}
                  height={2000}
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  src={backImage.src}
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

        {isNavigatorZ1 ? (
          <section className="border-y border-white/10 bg-[#05070c] px-4 py-14 sm:px-6 lg:px-8">
            <div className="relative isolate mx-auto grid max-w-7xl items-center overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,84,38,0.14),rgba(8,13,22,0.98)_42%,rgba(71,112,219,0.10))] shadow-glow lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative flex min-h-[16rem] items-center justify-center overflow-hidden border-b border-white/10 bg-[#080d16] p-4 sm:min-h-[18rem] lg:min-h-[24rem] lg:border-b-0 lg:border-r lg:p-6">
                <Image
                  alt="Thermal inspection scenes shown alongside industrial equipment"
                  className="relative z-0 h-auto w-full max-w-[34rem] object-contain saturate-125 xl:max-w-[36rem]"
                  height={1094}
                  sizes="(min-width: 1280px) 34rem, (min-width: 1024px) 42vw, 92vw"
                  src="/assets/navigator-z1-flir-thermal-scenes.png"
                  width={2006}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,12,0.02),rgba(5,7,12,0.22)_70%,rgba(5,7,12,0.48))]" />
                <div className="pointer-events-none absolute left-1/2 top-4 z-10 w-32 -translate-x-[8%] sm:top-5 sm:w-40 lg:top-6 lg:w-52 xl:w-56">
                  <div className="absolute inset-5 rounded-full bg-[radial-gradient(circle,rgba(255,84,38,0.38),rgba(255,84,38,0.06)_58%,transparent_74%)] blur-2xl" />
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="relative h-auto w-full object-contain drop-shadow-[0_20px_44px_rgba(0,0,0,0.52)]"
                    height={2000}
                    src="/assets/navigator-z1-flir-camera.png"
                    width={2000}
                  />
                </div>
              </div>
              <div className="relative z-20 p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="relative mb-6 h-16 w-72 max-w-full overflow-hidden">
                  <Image
                    alt="Thermal by FLIR"
                    className="object-cover"
                    fill
                    sizes="288px"
                    src="/assets/navigator-z1-flir-logo.png"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
                  THERMAL BY FLIR
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-white md:text-5xl">
                  Integrated thermal vision for hazardous environments
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-frost/82 md:text-base">
                  Every Navigator Z1 includes an integrated FLIR thermal camera
                  for hands-free remote inspection, hotspot detection,
                  diagnostics, and safer field operations in hazardous and
                  restricted environments.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {thermalSpecs.map((item) => (
                    <div
                      className="rounded-lg border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-frost/90"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Deployment detail" title="Included kit">
              <p>
                Use the quote request form to confirm quantities, accessories,
                support needs, and the best device path for your sites.
              </p>
            </SectionHeading>
            <div>
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
              {isNavigator520 ? (
                <p className="mt-4 rounded-lg border border-amber/25 bg-amber/10 p-4 text-sm leading-6 text-frost/90">
                  FLIR thermal camera available as an optional add-on.
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 md:p-12">
            <div
              className={
                quoteImage ? "relative z-10 max-w-2xl md:max-w-[58%]" : ""
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
            {quoteImage ? (
              <div className="pointer-events-none relative z-0 mt-8 flex justify-center md:absolute md:inset-y-0 md:right-8 md:mt-0 md:w-[36%] md:items-center">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-auto max-h-72 w-full max-w-sm object-contain md:max-h-[82%] md:max-w-none"
                  height={quoteImage.height}
                  src={quoteImage.src}
                  width={quoteImage.width}
                />
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
