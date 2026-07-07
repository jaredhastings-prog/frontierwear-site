import Image from "next/image";
import Link from "next/link";

import { navItems, site } from "@/content/site";

import { ButtonLink } from "./ButtonLink";
import { MobileMenu } from "./MobileMenu";

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
          {navItems.map((item) =>
            item.children ? (
              <div className="group relative" key={item.href}>
                <Link
                  className="flex items-center gap-1.5 text-sm text-smoke transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                  href={item.href}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className="mt-px transition-transform group-hover:rotate-180"
                    fill="none"
                    height="6"
                    viewBox="0 0 10 6"
                    width="10"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="w-56 rounded-lg border border-white/10 bg-[#080d16] p-2 shadow-glow">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-md px-4 py-2.5 text-sm text-smoke transition hover:bg-white/[0.08] hover:text-white"
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                className="text-sm text-smoke transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            )
          )}
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

        <MobileMenu />
      </div>
    </header>
  );
}
