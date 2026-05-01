import type { Metadata } from "next";

import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Quote Request Received",
  description:
    "Thank you for contacting Frontier Wear about RealWear assisted reality devices and connected worker support.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <main id="main">
      <section className="mx-auto max-w-4xl px-4 pb-24 pt-40 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
          Request received
        </p>
        <h1 className="mt-6 font-display text-5xl leading-tight text-white md:text-7xl">
          Thanks. Frontier Wear will be in touch.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-smoke">
          Your quote request has been sent. The team can now review your product
          interest, site context, and connected worker requirements.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Back Home</ButtonLink>
          <ButtonLink href="/#products" variant="secondary">
            View Products
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
