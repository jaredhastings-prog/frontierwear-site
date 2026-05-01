import Image from "next/image";
import Link from "next/link";

import { navItems, site } from "@/content/site";

import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Frontier Wear home"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
          href="/"
        >
          <Image
            alt="Frontier Wear"
            className="h-auto w-36 sm:w-44"
            height={140}
            priority
            src="/assets/frontier-wear-logo.png"
            width={300}
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm text-smoke transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            className="text-sm text-smoke transition hover:text-white"
            href={site.phoneHref}
          >
            {site.phone}
          </a>
          <ButtonLink href="/request-quote">Request a Quote</ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-blue/60">
            Menu
          </summary>
          <div className="absolute right-0 mt-4 w-[min(88vw,22rem)] rounded-lg border border-white/10 bg-[#080d16] p-3 shadow-glow">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  className="rounded-md px-4 py-3 text-sm text-smoke transition hover:bg-white/[0.08] hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-2 rounded-md bg-blue px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
                href="/request-quote"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
