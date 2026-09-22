import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  benefitStrip,
  customerLogos,
  products,
  useCases,
  whyFrontier
} from "@/content/site";

const teamsTeaserFeatures = [
  "Hands-free Teams calls",
  "Live expert support",
  "Real-time field video",
  "Works with Microsoft environments"
];

export default function Home() {
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-white/10 pt-[84px]">
        {/* pt-[84px] clears the fixed header (h-20 + 1px border) so it
            floats over the plain background instead of sitting on top of
            the photo — on the short mobile image band especially, the
            header was covering a large share of it and cutting the heads
            off. */}
        {/* Mobile: the full photo at native aspect ratio, zero crop, no
            overlap. A fixed-height crop here would zoom into just the middle
            person on a narrow screen, and there isn't room for a tasteful
            bottom-quarter overlap at this size anyway. */}
        <div className="relative aspect-video w-full md:hidden">
          <Image
            alt="Three frontline workers wearing RealWear Navigator assisted reality headsets"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/assets/realwear-device-lineup.jpg"
          />
        </div>

        {/* Tablet/desktop: fixed-height band, cropped from the bottom only
            (object-top keeps every head in frame) with a blend concentrated
            in roughly its bottom quarter for the overlapping text below. */}
        <div className="relative hidden w-full md:block md:h-[62svh] lg:h-[68svh]">
          <Image
            alt="Three frontline workers wearing RealWear Navigator assisted reality headsets"
            className="object-cover object-top"
            fill
            priority
            sizes="100vw"
            src="/assets/realwear-device-lineup.jpg"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent via-graphite/70 to-graphite" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 md:-mt-24 md:pb-20 md:pt-0 lg:-mt-32 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
            ANZ RealWear Gold Partner
          </p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-5xl leading-[0.94] text-white md:text-7xl lg:text-8xl">
            Hands-Free Technology for the Frontline
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-frost/88 md:text-xl">
            RealWear assisted reality devices for field teams, industrial sites,
            and connected worker programs across Australia and New Zealand.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
            <ButtonLink href="#products" variant="secondary">
              View Products
            </ButtonLink>
          </div>

          <div className="mt-14 grid max-w-6xl gap-px overflow-hidden border-y border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {benefitStrip.map((benefit) => (
              <div
                className="bg-graphite/45 px-4 py-5 text-center"
                key={benefit}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Field reality"
          title="Frontline workers need information without stopping work"
        >
          <p>
            Handheld screens slow people down when they are wearing PPE, moving
            through a site, holding tools, or responding to equipment issues.
            Assisted reality keeps the real world first while bringing experts,
            work instructions, documents, and visual workflows into view.
          </p>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Keep both hands available for the task",
            "Bring remote experts into the worker's point of view",
            "Access documents, checklists, and workflows by voice",
            "Capture repeatable knowledge from the field"
          ].map((outcome) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6 text-lg leading-7 text-white"
              key={outcome}
            >
              {outcome}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#05070c] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Trusted by"
            title="Industrial teams deploying connected worker technology"
          >
            <p>
              Frontier Wear supports practical deployments across field
              operations, infrastructure, manufacturing, resources, logistics,
              and government teams.
            </p>
          </SectionHeading>
          <div className="mt-10">
            <LogoMarquee logos={customerLogos} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(71,112,219,0.16),rgba(5,7,12,0.96)_42%,rgba(8,13,22,1)_100%)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue">
              Microsoft Teams integration
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
              Bring Microsoft Teams to the frontline.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-frost/82 md:text-lg">
              Collaborate Teams 2 connects RealWear devices directly with
              Microsoft Teams for hands-free communication, remote expert
              support, and live field collaboration.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {teamsTeaserFeatures.map((feature) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold leading-6 text-frost/90 shadow-[0_14px_34px_rgba(0,0,0,0.18)]"
                  key={feature}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-blue/30 bg-[#080d16] shadow-[0_24px_70px_rgba(71,112,219,0.18)]">
            <div className="relative aspect-video">
              <Image
                alt="RealWear headset being used for Microsoft Teams field collaboration"
                className="object-cover object-center"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 52vw, 100vw"
                src="/assets/teams-home-teaser.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#E2E8F0] bg-[#F5F7FA] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        id="products"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            className="[&_div]:text-[#64748B] [&_h2]:text-[#0F172A]"
            eyebrow="Product showcase"
            title="RealWear devices for industrial connected worker programs"
          >
            <p>
              Three focused product paths. One practical goal: equip
              frontline teams with the right hands-free technology for their
              environment, indoors or out, plus the support to deploy it
              well.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[#334155]">
            Not sure which device fits your site?{" "}
            <Link className="font-semibold text-blue hover:underline" href="/compare">
              Compare all three devices
            </Link>
          </p>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        id="use-cases"
      >
        <SectionHeading
          eyebrow="Use cases"
          title="Built for work that cannot wait for a laptop"
        >
          <p>
            Frontier Wear supports the workflows that make assisted reality
            useful on real industrial sites, from expert escalation to long-term
            knowledge transfer.
          </p>
        </SectionHeading>
        <div className="mt-12 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#080d16] transition duration-300 hover:-translate-y-1 hover:border-blue/45"
              key={useCase.title}
            >
              <div className="relative -mx-px -mt-px aspect-[21/10] overflow-hidden rounded-t-lg border-b border-white/10">
                <Image
                  alt={useCase.image.alt}
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  src={useCase.image.src}
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl leading-tight text-white">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-smoke">
                  {useCase.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-28">
        <div>
          <SectionHeading
            eyebrow="Why Frontier Wear"
            title="Specialists for the rollout, not just the device"
          >
            <p>
              Connected worker programs succeed when the hardware, workflow,
              training, and support model are designed together. Frontier Wear
              helps teams move from pilot to practical deployment.
            </p>
          </SectionHeading>
          <ButtonLink className="mt-8" href="/request-quote">
            Talk to a Specialist
          </ButtonLink>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyFrontier.map((reason) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.045] p-6"
              key={reason}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-amber">
                Frontier Wear
              </p>
              <h3 className="mt-4 font-display text-2xl leading-tight text-white">
                {reason}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.20),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
            Deployment next steps
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl">
            Ready to equip your frontline team?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-frost/80">
            Share your team size, sites, and workflow goals. Frontier Wear will
            help scope the right RealWear device path and deployment support.
          </p>
          <ButtonLink className="mt-8" href="/request-quote">
            Request a Quote
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
