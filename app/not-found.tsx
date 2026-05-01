import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main id="main">
      <section className="mx-auto max-w-4xl px-4 pb-24 pt-40 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber">
          Page not found
        </p>
        <h1 className="mt-6 font-display text-5xl leading-tight text-white md:text-7xl">
          This page is no longer on the frontline.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-smoke">
          The new Frontier Wear site is focused on product information and quote
          requests, with old store paths redirected where possible.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Go Home</ButtonLink>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-blue"
            href="/request-quote"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
