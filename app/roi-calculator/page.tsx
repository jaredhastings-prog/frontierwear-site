import type { Metadata } from "next";

import { RoiCalculator } from "@/components/RoiCalculator";

export const metadata: Metadata = {
  title: "Connected Worker ROI Calculator",
  description:
    "Estimate what frontline inefficiency is costing you and the year-one return of a RealWear connected worker deployment. Figures based on published RealWear case studies.",
  alternates: {
    canonical: "/roi-calculator"
  }
};

export default function RoiCalculatorPage() {
  return (
    <main id="main">
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber/25 bg-amber/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber">
            <span aria-hidden="true" className="text-[7px]">
              ●
            </span>
            RealWear Gold Partner · ANZ
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
            What is frontline inefficiency <em className="not-italic text-amber">really</em>{" "}
            costing you?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-frost/60">
            Answer a few quick questions — rough numbers are fine. Your savings update
            live as you go. Takes about a minute.
          </p>
        </div>

        <div className="mt-8">
          <RoiCalculator />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            "RealWear Gold Partner ANZ",
            "Global deployments",
            "Conservative assumptions"
          ].map((item) => (
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.1em] text-smoke/40"
              key={item}
            >
              ✓ {item}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-4xl text-center text-[10px] leading-relaxed text-smoke/30">
          Estimates based on published RealWear case studies and industry benchmarks.
          Actual savings vary by organisation, industry, and deployment scope. Frontier
          Wear recommends a pilot program to establish your baseline.
        </p>
      </section>
    </main>
  );
}
