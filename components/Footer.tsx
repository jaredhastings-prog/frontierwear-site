import Image from "next/image";
import Link from "next/link";

import { navItems, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070a10]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            alt="Frontier Wear"
            className="h-auto w-44"
            height={140}
            src="/assets/frontier-wear-logo.png"
            width={300}
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-smoke">
            Hands-free assisted reality devices, deployment support, and
            connected worker guidance for industrial teams across {site.coverage}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Explore
          </h2>
          <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link
                className="text-sm text-smoke transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="text-sm text-smoke transition hover:text-white"
              href="/request-quote"
            >
              Request a Quote
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Contact
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
          <div className="mt-6 flex gap-4 text-sm text-smoke">
            <a className="transition hover:text-white" href={site.social.facebook}>
              Facebook
            </a>
            <a className="transition hover:text-white" href={site.social.instagram}>
              Instagram
            </a>
            <a className="transition hover:text-white" href={site.social.youtube}>
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-smoke">
        Copyright 2026 Frontier Wear. Connected worker specialists.
      </div>
    </footer>
  );
}
