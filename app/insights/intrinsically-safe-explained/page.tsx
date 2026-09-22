import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/site";

const title = 'What Does "Intrinsically Safe" Actually Mean?';
const description =
  "A plain-English guide to ATEX, IECEx, CSA, and NEC500 hazardous-area certifications — and why matching the right one to your site is a safety decision, not a spec-sheet checkbox.";
const publishedDate = "2026-09-23";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/intrinsically-safe-explained"
  },
  openGraph: {
    title,
    description,
    url: "/insights/intrinsically-safe-explained",
    type: "article"
  }
};

const explosionElements = [
  {
    name: "Ignition source",
    detail: "Open flames, sparks, static electricity, or a hot surface."
  },
  {
    name: "Flammable substance",
    detail: "A gas, vapor, dust, or fiber that will ignite and keep burning."
  },
  {
    name: "Oxidizer",
    detail: "Almost always just the oxygen already in the air."
  }
];

const certifyingBodies = [
  {
    name: "ATEX",
    region: "European Union",
    detail:
      "Short for \"ATmosphère EXplosible.\" The EU directive covering explosion-proof electrical and mechanical equipment. Certified gear carries a CE mark plus an EC attestation of conformity."
  },
  {
    name: "IECEx",
    region: "International",
    detail:
      "A voluntary global scheme built on IEC standards. Because it's internationally recognised, IECEx certification often avoids the cost and delay of re-testing equipment separately for every country it ships to."
  },
  {
    name: "CSA",
    region: "North America",
    detail:
      "The Canadian Standards Association's certification, widely recognised across Canada and the US. Often written as \"C1/D1\" — shorthand for Class 1, Division 1."
  },
  {
    name: "NEC500",
    region: "United States",
    detail:
      "Article 500 of the US National Electrical Code — the regulatory backbone US sites are actually inspected against, covering how hazardous locations are classified and what equipment is permitted in them."
  }
];

const zoneClasses = [
  {
    label: "Continuous risk",
    zone: "Zone 0",
    division: "Division 1",
    detail: "The hazardous atmosphere is present continuously or for long periods."
  },
  {
    label: "Intermittent risk",
    zone: "Zone 1",
    division: "Division 1",
    detail: "Likely to occur during normal operation, occasionally."
  },
  {
    label: "Abnormal-condition risk",
    zone: "Zone 2",
    division: "Division 2",
    detail: "Not expected in normal operation — only if something goes wrong."
  }
];

export default function IntrinsicallySafeExplainedPage() {
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
    mainEntityOfPage: `${site.url}/insights/intrinsically-safe-explained`
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
            Hazardous-area technology · {publishedDate.slice(0, 7)} · 7 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            If your team works around flammable gases, vapors, or combustible
            dust — refineries, chemical plants, paint shops, flour mills,
            loading facilities — the electronic equipment they carry isn&apos;t
            just a productivity tool. Get the certification wrong, and the
            device itself becomes the ignition source. Here&apos;s what
            &quot;intrinsically safe&quot; actually means, in plain English.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              What it takes to cause an explosion
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Every explosion needs three things present at once. Remove any
              one of them, and ignition can&apos;t happen.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {explosionElements.map((item, index) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={item.name}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                    {index + 1}
                  </p>
                  <p className="mt-2 font-display text-lg text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-8 text-frost/85">
              On a working site, you generally can&apos;t remove the flammable
              substance or the oxygen in the air. So the practical fix is to
              make sure the equipment itself can never supply enough energy to
              become the ignition source — even if something inside it fails.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              So what does &quot;intrinsically safe&quot; mean?
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Intrinsic safety is a design approach, not a coating or a case.
              It caps the electrical and thermal energy in a device&apos;s
              circuits to a level so low that even under fault conditions —
              a short circuit, a damaged component — there isn&apos;t enough
              energy released to ignite the specific hazardous atmosphere
              around it. A device that passes rigorous independent testing
              against this standard is &quot;Intrinsically Safe Certified.&quot;
              A device that hasn&apos;t been tested and certified for your
              specific zone isn&apos;t a safer option just because it looks
              rugged — it&apos;s an unknown risk.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Zones and divisions, simplified
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Hazardous areas are classified by how often the dangerous
              atmosphere is actually present. Europe and most of the world use
              a zone system; North America traditionally uses classes and
              divisions covering the same ground.
            </p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#080d16]">
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-smoke">
                      Risk level
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-smoke">
                      IEC / ATEX
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-smoke">
                      North America
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-smoke">
                      Meaning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {zoneClasses.map((row, index) => (
                    <tr
                      className={index % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}
                      key={row.zone}
                    >
                      <td className="px-5 py-4 font-semibold text-white">
                        {row.label}
                      </td>
                      <td className="px-5 py-4 text-frost/85">{row.zone}</td>
                      <td className="px-5 py-4 text-frost/85">{row.division}</td>
                      <td className="px-5 py-4 text-frost/85">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-smoke/70">
              Dust hazards follow the same logic under Zones 20/21/22 rather
              than 0/1/2. Every combustible gas, vapor, or dust used on a site
              is also assigned a specific gas/dust group and temperature
              class — the fine print an EHS team will already have mapped for
              your facility.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              The four certifications you&apos;ll actually see on a spec sheet
            </h2>
            <div className="mt-6 grid gap-4">
              {certifyingBodies.map((body) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={body.name}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-lg text-white">{body.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                      {body.region}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {body.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-8 text-frost/85">
              A device might carry one of these marks or several, depending on
              where it&apos;s sold and used. What matters is that the specific
              certification matches your specific site&apos;s classified zone
              — not just that a certification exists somewhere on the box.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Why this matters when choosing frontline hands-free technology
            </h2>
            <p className="text-base leading-8 text-frost/85">
              A standard consumer headset or tablet wasn&apos;t designed to
              limit its own energy output — it wasn&apos;t designed with
              hazardous areas in mind at all. Bringing one onto a classified
              site isn&apos;t just a policy breach; it&apos;s a genuine
              ignition risk, and getting the designation wrong can mean an
              injury, facility damage, or serious legal exposure. Achieving
              intrinsically safe certification is a deliberate, multi-year
              engineering process, not an afterthought — which is exactly why
              so few connected-worker devices actually hold it.
            </p>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              Navigator Z1 is our intrinsically safe device for restricted and
              hazardous zones.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              Tell us your site&apos;s exact zone or division and we&apos;ll
              confirm the right device and certification before you commit —
              not just recommend the ruggedest-looking option.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/navigator-z1">View Navigator Z1</ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                Compare all devices
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your site →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            This article is a general introduction to hazardous-area
            certification concepts, not a substitute for a formal site risk
            assessment. Always confirm exact certification requirements for
            your facility with a qualified safety professional before
            procurement.
          </p>
        </article>
      </main>
    </>
  );
}
