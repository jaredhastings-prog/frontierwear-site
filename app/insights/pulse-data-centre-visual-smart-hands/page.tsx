import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { site } from "@/content/site";

const title =
  "How Pulse Data Centre Revolutionised Service Delivery with Visual Smart Hands";
const description =
  "Pulse Data Centre built a 24/7 \"Visual Smart Hands\" service on RealWear, giving customers live, hands-free eyes-on access to their own infrastructure without a site visit.";
const publishedDate = "2026-09-27";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/pulse-data-centre-visual-smart-hands"
  },
  openGraph: {
    title,
    description,
    url: "/insights/pulse-data-centre-visual-smart-hands",
    type: "article"
  }
};

const oldWay = [
  {
    name: "Book and wait for a site visit",
    detail: "Any hands-on check of your own hardware means scheduling access and waiting for a window."
  },
  {
    name: "Take the technician's word for it",
    detail: "A phone update or an emailed photo is a snapshot, not a live view of what's actually happening at the rack."
  },
  {
    name: "Fly someone in for anything complex",
    detail: "Diagnosing an unfamiliar fault often meant getting your own specialist on site in person."
  }
];

export default function PulseDataCentreVisualSmartHandsPage() {
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
    mainEntityOfPage: `${site.url}/insights/pulse-data-centre-visual-smart-hands`
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
            Customer story · 4 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            Data centre customers want to know exactly what&apos;s happening
            to their own infrastructure, in real time &mdash; without
            booking a flight or waiting on a call-back. Pulse Data Centre
            built &ldquo;Visual Smart Hands&rdquo; on RealWear to give
            customers live, hands-free eyes-on access to their racks,
            24 hours a day, through the eyes of an on-site technician.
          </p>

          <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
            <YouTubeEmbed title="Pulse Data Centre — Visual Smart Hands" videoId="s9quqhPqhGI" />
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              What remote access used to mean
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Colocation customers don&apos;t get to walk their own floor
              whenever they like. Getting real, trustworthy visibility into
              your own hardware has traditionally meant one of a few
              compromises:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-1">
              {oldWay.map((item) => (
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
              Visual Smart Hands: eyes-on, on demand
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Pulse technicians wear a RealWear headset while working the
              floor. When a customer needs eyes on their own infrastructure
              &mdash; confirming a cable run, checking port lights, reading a
              label buried in a rack &mdash; a technician streams live video
              and audio straight from their point of view. The technician
              stays completely hands-free throughout, so they can work the
              rack and narrate at the same time, instead of holding up a
              phone with one hand and fumbling with cabling with the other.
            </p>
            <p className="text-base leading-8 text-frost/85">
              For the customer, it removes the lag between &ldquo;something
              needs checking&rdquo; and actually seeing it &mdash; no travel,
              no waiting on a scheduled visit, no relying on a second-hand
              description down the phone.
            </p>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              Navigator 520 is built for exactly this kind of live remote
              access.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              Hands-free voice control, a sharp HyperDisplay, and a modular
              camera built for all-day wear &mdash; the same setup Pulse Data
              Centre runs Visual Smart Hands on.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/navigator-520">View Navigator 520</ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                Compare all devices
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your use case →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            Video and story courtesy of Pulse Data Centre.
          </p>
        </article>
      </main>
    </>
  );
}
