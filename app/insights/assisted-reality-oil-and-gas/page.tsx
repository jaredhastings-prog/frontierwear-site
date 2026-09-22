import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/site";

const title = "Why Oil & Gas Is Going Hands-Free";
const description =
  "Independent market research puts assisted reality HMD shipments in oil & gas on a 51% CAGR through 2027. Here's what's driving it, and where an intrinsically safe device like Navigator Z1 fits.";
const publishedDate = "2026-09-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/assisted-reality-oil-and-gas"
  },
  openGraph: {
    title,
    description,
    url: "/insights/assisted-reality-oil-and-gas",
    type: "article"
  }
};

const useCases = [
  {
    name: "Knowledge capture",
    detail:
      "Critical with a retiring workforce and complex, hazardous environments — centralising expertise before it walks out the door."
  },
  {
    name: "Remote expertise",
    detail:
      "Real-time guidance from a specialist without the travel cost, delay, or downtime of flying someone to site."
  },
  {
    name: "IoT data visualisation",
    detail:
      "Visual data delivered hands-free is processed faster than checking a separate screen or device."
  },
  {
    name: "Hands-free asset management",
    detail:
      "Persistent, up-to-date asset records improve collaboration across shifts and sites."
  }
];

const recommendations = [
  {
    title: "Start targeted, not sweeping",
    detail:
      "A focused rollout on one workflow — remote expertise is the common starting point — builds a stronger case than an org-wide deployment on day one. Add step-by-step instruction and other use cases once results are proven."
  },
  {
    title: "Match the device to the environment",
    detail:
      "Not every oil & gas role needs an intrinsically safe device, but many do — and using a non-IS device in a hazardous zone, even accidentally, is a safety and compliance issue, not just a policy breach."
  },
  {
    title: "Plan for real-world connectivity",
    detail:
      "Remote expertise needs a live connection; workflow instructions stored locally don't. Know which use case you're deploying before you plan the network and security side."
  }
];

export default function AssistedRealityOilAndGasPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedDate,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    mainEntityOfPage: `${site.url}/insights/assisted-reality-oil-and-gas`
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        type="application/ld+json"
      />
      <main id="main">
        <article className="mx-auto max-w-3xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <Link
            className="text-sm text-smoke transition hover:text-white"
            href="/insights"
          >
            ← Back to Insights
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            Oil &amp; gas · 6 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            Unplanned downtime in oil &amp; gas can cost more than US$20,000 a
            day in lost and deferred product, according to research cited by
            ABI Research. That single number explains why assisted reality
            headsets — devices that connect a technician to a remote expert
            without ever taking their hands off the job — are being adopted
            in the sector faster than almost anywhere else in industry.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              A market moving fast
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Independent analyst firm ABI Research projected assisted
              reality head-mounted display shipments in oil &amp; gas to grow
              at a 51% compound annual growth rate through 2027, driven
              specifically by demand for hands-free content access and remote
              collaboration. That&apos;s a steeper growth curve than most
              other industrial sectors — and it tracks with a simple
              economic reality: when a single remote-expert session can avoid
              one unplanned shutdown, the device has often paid for itself in
              that one use.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Why oil &amp; gas has different requirements
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Oil &amp; gas sites carry constraints most industrial
              environments don&apos;t. Intrinsically safe certification is
              often required — not just on an obvious environment like a
              rig, but anywhere hazardous materials are loaded or unloaded.
              Shifts run long, which pushes both workers and batteries to
              their limits, so all-day power matters as much as ruggedness.
              And compliance is unforgiving: image and video capture from a
              headset can double as hands-free, real-time verification for
              an inspection record, with none of the penalties that come
              from missed documentation.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Where the value actually shows up
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={item.name}
                >
                  <p className="font-display text-base text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Case study: TotalEnergies
            </h2>
            <p className="text-base leading-8 text-frost/85">
              TotalEnergies, a global oil and gas company operating across
              the entire value chain, was facing costly, disruptive
              production slowdowns caused by equipment maintenance and
              repairs. Their fix was to deploy RealWear&apos;s intrinsically
              safe headsets integrated with voice-enabled Microsoft Teams, so
              experts could guide equipment diagnosis and repair remotely
              instead of travelling to site.
            </p>
            <p className="text-base leading-8 text-frost/85">
              The result, per ABI Research&apos;s write-up: expert travel
              time and cost were eliminated, global teams collaborated more
              effectively, and both equipment downtime and overall
              maintenance duration were significantly reduced. It&apos;s
              close to the exact pairing Frontier Wear offers directly —
              a RealWear headset running{" "}
              <Link className="text-blue hover:underline" href="/collaborate-teams-2">
                Collaborate Teams 2
              </Link>{" "}
              for hands-free Microsoft Teams in the field.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Getting started: three recommendations
            </h2>
            <div className="mt-6 grid gap-4">
              {recommendations.map((item, index) => (
                <div className="flex gap-4" key={item.title}>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue font-display text-sm text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-frost/75">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              Navigator Z1 is built for exactly this environment.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              Intrinsically safe, and designed to integrate with the PPE oil
              &amp; gas teams already wear — hard hats, safety glasses, and
              hearing protection.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/navigator-z1">View Navigator Z1</ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                Compare devices
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your site →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            Market data and the TotalEnergies case study referenced from ABI
            Research&apos;s 2022 report &quot;Assisted Reality in the Oil
            &amp; Gas Sector,&quot; commissioned by RealWear.
          </p>
        </article>
      </main>
    </>
  );
}
