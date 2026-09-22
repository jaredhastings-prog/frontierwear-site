import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";
import { insights } from "@/content/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance on connected worker technology, hazardous-area certifications, and deploying assisted reality across industrial sites — from Frontier Wear.",
  alternates: {
    canonical: "/insights"
  }
};

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Guidance for deploying connected worker technology"
        >
          <p>
            Practical explainers on the standards, certifications, and
            decisions behind fitting assisted reality devices to real
            industrial sites.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-6">
          {insights.map((article) => (
            <Link
              className="group block rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:border-blue/45 sm:p-8"
              href={`/insights/${article.slug}`}
              key={article.slug}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-smoke">
                {article.readTime}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-white transition group-hover:text-blue sm:text-3xl">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-frost/80 sm:text-base">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
