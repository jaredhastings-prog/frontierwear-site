import Image from "next/image";
import Link from "next/link";

import { comparisonRows, products } from "@/content/site";

import { ButtonLink } from "./ButtonLink";
import { SectionHeading } from "./SectionHeading";

const recommendations: Record<string, string> = {
  "navigator-520":
    "Choose Navigator 520 if your team works outdoors or across mixed industrial sites and needs a rugged, general-purpose device that can take a drop.",
  "navigator-z1":
    "Choose Navigator Z1 if your team operates in hazardous or intrinsically-safe-certified zones — oil & gas, chemical processing, restricted areas.",
  "arc-3":
    "Choose Arc 3 if your team works indoors — manufacturing floors, clinical settings, warehouses — and values all-day comfort over rugged certification."
};

export function DeviceComparison() {
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(120deg,#05070c_0%,#08101f_50%,rgba(14,27,77,0.5)_100%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
            Compare devices
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.02] text-white md:text-6xl">
            Which RealWear device is right for your team?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-frost/85">
            Navigator and Arc 3 are built for different environments, not
            different tiers of the same product. Use the summary below to find
            your fit, then check the full spec comparison.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.045] p-6"
              key={product.slug}
            >
              <div className="relative h-40 w-full">
                <Image
                  alt={product.imageAlt}
                  className="object-contain"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  src={product.image}
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber">
                {product.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl text-white">
                {product.shortName}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-frost/80">
                {recommendations[product.slug]}
              </p>
              <ButtonLink className="mt-6" href={product.href} variant="secondary">
                View {product.shortName}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Full comparison" title="Spec by spec">
            <p>
              Figures sourced from RealWear&apos;s published specifications for
              each device. Talk to us if you need help matching a spec to a
              real-world requirement.
            </p>
          </SectionHeading>

          <div className="mt-10 overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#080d16]">
                  <th className="sticky left-0 z-10 bg-[#080d16] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-smoke">
                    &nbsp;
                  </th>
                  {products.map((product) => (
                    <th
                      className="px-5 py-4 font-display text-lg font-normal text-white"
                      key={product.slug}
                    >
                      {product.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    className={index % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}
                    key={row.label}
                  >
                    <th
                      className={`sticky left-0 z-10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-smoke ${
                        index % 2 === 0 ? "bg-[#0b0f1a]" : "bg-[#08101c]"
                      }`}
                      scope="row"
                    >
                      {row.label}
                    </th>
                    {products.map((product) => (
                      <td
                        className="px-5 py-4 align-top leading-6 text-frost/85"
                        key={product.slug}
                      >
                        {row.values[product.slug as keyof typeof row.values]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-smoke/60">
            Scroll horizontally on smaller screens to see all three devices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            Still not sure?
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-tight text-white md:text-5xl">
            We&apos;ll help you match the device to your site
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-frost/80 md:text-base">
            Tell us about your environment, PPE requirements, and team size —
            Frontier Wear will recommend the right device and kit before you
            commit.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
            <Link
              className="text-sm text-smoke transition hover:text-white"
              href="/#products"
            >
              Back to products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
