import type { Metadata } from "next";

import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote for RealWear Navigator 520, Navigator Z1, connected worker deployment support, and Frontier Wear training across Australia and New Zealand.",
  alternates: {
    canonical: "/request-quote"
  }
};

export default function RequestQuotePage() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Request a quote"
            title="Tell us what your frontline team needs"
          >
            <p>
              Share your device interest, site environment, quantity range, and
              workflow goals. Frontier Wear will respond with practical next
              steps for hardware, accessories, training, and support.
            </p>
          </SectionHeading>

          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Direct contact
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-smoke">
              <a className="transition hover:text-white" href={site.phoneHref}>
                Ph: {site.phone}
              </a>
              <a className="transition hover:text-white" href={site.emailHref}>
                Email: {site.email}
              </a>
              <p>Coverage: Australia and New Zealand</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue/25 bg-[#080d16] p-5 shadow-glow md:p-8">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
