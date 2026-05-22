import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance from Frontier Wear on connected workers, assisted reality, remote expert support, industrial safety, and frontline digital transformation.",
  alternates: {
    canonical: "/insights"
  },
  openGraph: {
    title: "Frontier Wear Insights",
    description:
      "Practical guidance on connected workers, assisted reality, remote expert support, industrial safety, and frontline digital transformation.",
    url: "/insights",
    siteName: site.name,
    images: [
      {
        url: "/assets/field-worker.jpg",
        width: 1800,
        height: 1012,
        alt: "Frontier Wear connected worker technology insight"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontier Wear Insights",
    description:
      "Guidance on connected workers, assisted reality, remote support, safety, and frontline transformation.",
    images: ["/assets/field-worker.jpg"]
  }
};

const featuredInsight = {
  label: "Featured insight",
  title: "Connected worker roadmap placeholder",
  excerpt:
    "A future feature article for practical guidance on planning, piloting, and scaling connected worker technology across industrial teams.",
  readingTime: "8 min read"
};

const insights = [
  {
    title: "Remote expert support placeholder",
    excerpt:
      "A future insight on using point-of-view video and hands-free collaboration to reduce delays in field support.",
    readingTime: "5 min read"
  },
  {
    title: "Assisted reality workflows placeholder",
    excerpt:
      "A future article on matching RealWear devices to inspections, maintenance, training, and knowledge capture workflows.",
    readingTime: "6 min read"
  },
  {
    title: "Frontline safety placeholder",
    excerpt:
      "A future guide to improving situational awareness, documentation, and expert access without handheld screens.",
    readingTime: "4 min read"
  },
  {
    title: "Industrial Teams adoption placeholder",
    excerpt:
      "A future perspective on extending enterprise collaboration platforms into practical frontline environments.",
    readingTime: "7 min read"
  },
  {
    title: "Training capture placeholder",
    excerpt:
      "A future insight on recording expert methods and turning field knowledge into repeatable frontline support.",
    readingTime: "5 min read"
  },
  {
    title: "Connected worker deployment placeholder",
    excerpt:
      "A future playbook for moving from pilot programs to supported, site-ready assisted reality deployments.",
    readingTime: "6 min read"
  }
];

function InsightImagePlaceholder({
  label,
  roundedClassName = "rounded-t-lg"
}: {
  label: string;
  roundedClassName?: string;
}) {
  return (
    <div
      className={`relative h-full min-h-48 overflow-hidden border-b border-white/10 bg-[#0a101b] ${roundedClassName}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(71,112,219,0.22),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:auto,48px_48px,48px_48px]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent,rgba(5,7,12,0.86))]" />
      <div className="relative flex h-full min-h-48 items-end p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-frost/70">
          {label}
        </p>
      </div>
    </div>
  );
}

function InsightCard({
  title,
  excerpt,
  readingTime
}: {
  title: string;
  excerpt: string;
  readingTime: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#080d16] transition duration-300 hover:-translate-y-1 hover:border-blue/45">
      <InsightImagePlaceholder label="Insight image" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">
          {readingTime}
        </p>
        <h3 className="mt-4 font-display text-2xl leading-tight text-white">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-smoke">{excerpt}</p>
        <span className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-blue transition group-hover:text-white">
          Read insight
        </span>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(115deg,#05070c_0%,#08101f_48%,rgba(71,112,219,0.26)_100%)]" />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(5,7,12,0.1),rgba(5,7,12,0.92)_100%)]" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
            Frontier Wear insights
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.94] text-white md:text-7xl lg:text-8xl">
            Frontline technology insights
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-frost/88 md:text-xl">
            Practical guidance on connected workers, assisted reality, remote
            expert support, industrial safety, and frontline digital
            transformation.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="featured-insight-heading"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <SectionHeading title="Featured guidance for industrial teams">
          <p>
            A future home for practical Frontier Wear articles, rollout
            guidance, and field-tested thinking for connected worker programs.
          </p>
        </SectionHeading>

        <article className="mt-12 grid overflow-hidden rounded-lg border border-blue/25 bg-[#080d16] shadow-[0_28px_90px_rgba(0,0,0,0.28)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="min-h-80 lg:min-h-[28rem]">
            <InsightImagePlaceholder
              label="Featured insight image"
              roundedClassName="rounded-t-lg lg:rounded-none"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber">
              {featuredInsight.label}
            </p>
            <h2
              className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl"
              id="featured-insight-heading"
            >
              {featuredInsight.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-smoke md:text-lg">
              {featuredInsight.excerpt}
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue">
              {featuredInsight.readingTime}
            </p>
          </div>
        </article>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Articles"
            title="Latest insight placeholders"
            className="max-w-4xl"
          >
            <p>
              Upcoming articles will cover field adoption, remote support,
              workflow design, safety, and practical digital transformation.
            </p>
          </SectionHeading>

          <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.title} {...insight} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
