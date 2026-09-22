import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/site";

const title = "How Wearable Computers Help Close the Industrial Skills Gap";
const description =
  "Experienced workers are retiring faster than replacements can be trained. Here's how hands-free video and voice-guided training help transfer knowledge before it walks out the door.";
const publishedDate = "2026-09-23";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/closing-the-skills-gap"
  },
  openGraph: {
    title,
    description,
    url: "/insights/closing-the-skills-gap",
    type: "article"
  }
};

const deviceChecklist = [
  {
    name: "Rugged, drop- and dust-resistant",
    detail: "Built to survive daily use on a real worksite, not a desk."
  },
  {
    name: "Hands-free voice control",
    detail: "No touchscreen to operate through gloves or PPE."
  },
  {
    name: "Noise-cancelling microphone",
    detail: "Reliable voice commands on a loud shop floor or site."
  },
  {
    name: "All-shift battery life",
    detail: "Video streaming drains a battery fast — it needs to last the shift."
  },
  {
    name: "Intrinsically safe option",
    detail: "Where the site requires it — oil & gas, chemical, restricted zones."
  }
];

const rolloutSteps = [
  {
    title: "Bring IT and stakeholders in early",
    detail:
      "Connectivity and security decisions land with IT — get their buy-in before you're asking them to support a live rollout."
  },
  {
    title: "Reuse what you already have",
    detail:
      "Existing training videos, manuals, and SOPs usually cover more of an initial rollout than teams expect. Fill gaps only where needed."
  },
  {
    title: "Train people on the device itself",
    detail:
      "A proper orientation takes about 15 minutes per person and heads off most early frustration."
  },
  {
    title: "Pilot with a small group first",
    detail:
      "Pick one use case, one team, and a defined window — a few months is enough to gather real results and report back."
  },
  {
    title: "Find your advocates before you scale",
    detail:
      "Buy-in from the workers who actually use the device daily does more than a top-down mandate ever will."
  },
  {
    title: "Expand one use case at a time",
    detail:
      "Grow deliberately rather than rolling out to the whole organisation at once."
  }
];

const industryExamples = [
  {
    company: "Honeywell",
    detail:
      "Uses wearable computers as part of its Connected Plant suite so field workers can access procedures, safety data, and remote specialists by voice — carrying decades of expertise with them on site."
  },
  {
    company: "Volkswagen Commercial Vehicles",
    detail:
      "A technician used a wearable to bring in a remote expert on a van that had sat in the shop for 21 days. It was fixed in 38 minutes, with the technician trained on the issue in real time."
  },
  {
    company: "Lexus",
    detail:
      "Technicians video-call specialists at headquarters to troubleshoot in real time, including training staff across multiple countries to service electric vehicles."
  },
  {
    company: "High-volume manufacturing",
    detail:
      "One production line losing roughly $800 a minute in downtime uses wearable video calls to get a remote expert's eyes on a fault immediately, instead of waiting for one to travel to site."
  }
];

export default function ClosingTheSkillsGapPage() {
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
    mainEntityOfPage: `${site.url}/insights/closing-the-skills-gap`
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
            Training &amp; knowledge transfer · 8 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            The workers who know your sites best are retiring faster than
            anyone is training their replacements. Manufacturing, utilities,
            oil &amp; gas, aviation — every industrial sector is watching the
            same gap open up between the people who have the knowledge and
            the people who need it. Hands-free wearables didn&apos;t create
            this problem, but they&apos;re one of the more practical ways
            companies are closing it.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              The hollow middle: why this is happening now
            </h2>
            <p className="text-base leading-8 text-frost/85">
              After the 2007–09 downturn, a lot of experienced technical
              workers left industrial careers and didn&apos;t come back —
              taking their knowledge with them. Younger workers moved toward
              other fields, and the roles that opened up as older workers
              retired weren&apos;t backfilled at the same rate. The result in
              most industrial workforces today is a demographic gap: a
              shrinking group of experienced people who have the knowledge,
              a growing group of newer workers who need it, and not much in
              between.
            </p>
            <p className="text-base leading-8 text-frost/85">
              The numbers vary by sector but point the same direction —
              roughly a quarter of manufacturing workers are approaching
              retirement age, a majority of utilities employers report
              difficulty filling roles left by retiring staff, and in oil
              &amp; gas the gap is large enough that it has its own name:
              &quot;the Great Crew Change.&quot; None of this is a one-year
              problem. It&apos;s a structural shift in who&apos;s left to do
              the training.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Why manuals and classroom training don&apos;t keep up
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Workers who grew up with YouTube and on-demand learning
              platforms expect to find a short video the moment they need
              one — the same way most people troubleshoot a broken appliance
              at home. That habit is called microlearning: short, visual,
              easy to recall, available exactly when it&apos;s needed rather
              than scheduled weeks in advance. A thick binder or a half-day
              classroom session simply doesn&apos;t match how this workforce
              actually learns.
            </p>
            <p className="text-base leading-8 text-frost/85">
              The catch for industrial work is that most of that learning
              needs to happen while a worker&apos;s hands are already busy —
              holding a tool, wearing gloves, standing at a live machine.
              Pulling out a tablet or stopping to watch a video on a laptop
              isn&apos;t always practical, and it isn&apos;t always safe.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Why hands-free wearables fit the job
            </h2>
            <p className="text-base leading-8 text-frost/85">
              A voice-controlled headset lets a worker call up a short
              training video, a manual page, or a live expert without ever
              putting down what&apos;s in their hands. The same front-facing
              camera that shows a remote expert exactly what the worker is
              looking at also makes it simple for an experienced technician
              to record a quick how-to clip while doing the job — turning
              routine work into reusable training content instead of losing
              that knowledge when they eventually move on.
            </p>
            <p className="text-base leading-8 text-frost/85">
              It also collapses training and troubleshooting into the same
              interaction: a technician stuck on a repair gets an expert on
              the line, and by the time the issue is fixed, they&apos;ve
              effectively been trained on it too.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              What to look for in a training device
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {deviceChecklist.map((item) => (
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
            <p className="text-base leading-8 text-frost/85">
              Not every site needs every item on this list — an indoor
              manufacturing floor has different priorities than a restricted
              oil &amp; gas zone. That&apos;s the whole reason Frontier Wear
              carries more than one device rather than a single one-size-fits
              -all option.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Rolling out a training program: the short version
            </h2>
            <div className="mt-6 grid gap-4">
              {rolloutSteps.map((step, index) => (
                <div className="flex gap-4" key={step.title}>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue font-display text-sm text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-base text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-frost/75">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              How other industrial teams are using this
            </h2>
            <p className="text-base leading-8 text-frost/85">
              A few examples from RealWear&apos;s global deployments show
              what this looks like in practice:
            </p>
            <div className="mt-6 grid gap-4">
              {industryExamples.map((example) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={example.company}
                >
                  <p className="font-display text-base text-white">
                    {example.company}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {example.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              Build a training and knowledge-capture program around the
              right device.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              Navigator 520 and Arc 3 both support guided workflows and
              remote expert training — the right fit depends on whether your
              team works indoors or out. Compare them, or tell us about your
              site and we&apos;ll help you decide.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/compare">Compare devices</ButtonLink>
              <ButtonLink href="/navigator-520" variant="secondary">
                View Navigator 520
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your training goals →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            Industry examples and workforce statistics referenced from
            RealWear&apos;s research on training and knowledge transfer via
            wearable computers.
          </p>
        </article>
      </main>
    </>
  );
}
