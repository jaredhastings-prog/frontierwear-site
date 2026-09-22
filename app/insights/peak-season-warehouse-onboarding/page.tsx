import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/site";

const title = "How Warehouses Cut New-Hire Ramp-Up Time by Up to 70%";
const description =
  "Peak season forces a paradox: onboard a wave of temporary workers fast without wrecking accuracy or safety. Here's how guided, hands-free workflows solve it — with real results from DHL.";
const publishedDate = "2026-09-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/peak-season-warehouse-onboarding"
  },
  openGraph: {
    title,
    description,
    url: "/insights/peak-season-warehouse-onboarding",
    type: "article"
  }
};

const challenges = [
  {
    name: "Experienced staff get pulled off their own work",
    detail: "Shadowing and guiding new hires eats into the output of your most productive people."
  },
  {
    name: "Ramp-up bottlenecks hit at the worst time",
    detail: "Slow onboarding costs the most exactly when throughput matters most."
  },
  {
    name: "Scaling across sites is hard to repeat",
    detail: "What works at one warehouse doesn't automatically transfer to the next."
  },
  {
    name: "Picking errors rise with complexity",
    detail: "More SKUs and higher order volume push error rates up, not down."
  }
];

const results = [
  { stat: "50–70%", label: "Time saved onboarding" },
  { stat: "0.1%", label: "Error rate achieved" },
  { stat: "15%", label: "Increase in productivity" }
];

const diagnosticQuestions = [
  "Does throughput drop significantly when a large group of temporary workers starts?",
  "Do temps struggle to hit productivity standards within their first two weeks?",
  "Is overtime extended for permanent staff to cover slower temp output?",
  "Do temps struggle with warehouse tech — WMS software, RF scanners, voice-picking?",
  "Is there a noticeable rise in picking errors or mislabels when temps handle orders?",
  "Are experienced workers regularly pulled away to train or supervise temporary staff?",
  "Do language or communication barriers make it hard to train temps on safety and tasks?"
];

export default function PeakSeasonWarehouseOnboardingPage() {
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
    mainEntityOfPage: `${site.url}/insights/peak-season-warehouse-onboarding`
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
            Logistics &amp; warehousing · 6 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            Peak season creates a paradox for warehouse managers: bring on a
            wave of temporary workers fast, without letting throughput,
            accuracy, or safety slip. Traditional training can take up to six
            weeks before a temp reaches full productivity — time operations
            simply don&apos;t have when demand is already spiking.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              The four problems compounding each other
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {challenges.map((item) => (
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
              Replacing paper lists and shadowing with guided workflows
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Instead of relying on paper pick lists, handheld scanners, or a
              senior staff member walking a new hire through the process,
              workers wearing an assisted reality headset get clear,
              step-by-step instructions directly in their field of view —
              hands-free, and in their preferred language. Instant audio and
              visual confirmation of each action removes the guesswork that
              usually causes picking errors, and new hires reach full
              productivity in hours rather than weeks, without pulling an
              experienced worker off their own tasks to supervise them.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Case study: DHL Supply Chain
            </h2>
            <p className="text-base leading-8 text-frost/85">
              DHL Supply Chain is the world&apos;s largest logistics company,
              employing around 185,000 people across more than 50 countries.
              Facing rising order volumes, labour shortages, and outdated
              picking tools, DHL adopted a vision-picking solution built on
              RealWear assisted reality headsets, guiding workers step by
              step to the correct aisle, shelf, and bin — fully hands-free.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {results.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-center"
                  key={item.label}
                >
                  <p className="font-display text-3xl text-amber">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-smoke">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-8 text-frost/85">
              Across the broader deployment, around 1,500 operators use
              RealWear smart glasses daily across 25 US warehouse sites,
              spanning retail, technology, automotive, and consumer goods.
              New employees get up to speed within hours rather than weeks,
              through intuitive, visually guided instructions in their
              preferred language.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Is this worth solving at your site?
            </h2>
            <p className="text-base leading-8 text-frost/85">
              A few questions worth asking honestly before your next peak
              season:
            </p>
            <ul className="mt-4 grid gap-3">
              {diagnosticQuestions.map((question) => (
                <li
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-6 text-frost/80"
                  key={question}
                >
                  {question}
                </li>
              ))}
            </ul>
            <p className="text-base leading-8 text-frost/85">
              If you answered yes to three or more, guided hands-free
              workflows are likely to have a measurable impact on your next
              onboarding cycle.
            </p>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              Arc 3 is built for exactly this environment.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              Lightweight at 179g for comfortable all-shift wear, with the
              Ari voice assistant guiding new starters through every task —
              indoor warehousing and logistics is one of its core use cases.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/arc-3">View Arc 3</ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                Compare devices
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your peak season →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            Statistics and the DHL Supply Chain case study referenced from
            RealWear&apos;s Logistics &amp; Warehouse Solutions materials.
          </p>
        </article>
      </main>
    </>
  );
}
