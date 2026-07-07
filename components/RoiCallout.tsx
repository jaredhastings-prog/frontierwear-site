"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// Pages where the calculator teaser would be noise rather than a nudge.
const HIDDEN_PATHS = ["/roi-calculator", "/request-quote", "/thank-you"];

const STORAGE_KEY = "roi-callout-dismissed";

export function RoiCallout() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600) setScrolled(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (HIDDEN_PATHS.some((path) => pathname?.startsWith(path))) {
    return null;
  }

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const open = scrolled && !dismissed;

  return (
    <aside
      aria-hidden={!open}
      aria-label="ROI calculator teaser"
      className={cn(
        "fixed bottom-4 right-4 z-40 w-[16rem] max-w-[calc(100vw-2rem)] transition-all duration-500 print:hidden sm:bottom-5 sm:right-5 sm:w-[19rem]",
        open
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-[120%] opacity-0"
      )}
    >
      <div className="relative rounded-2xl border border-amber/30 bg-[#0a0f1a]/95 p-4 shadow-amber backdrop-blur-xl sm:p-5">
        <button
          aria-label="Dismiss ROI calculator teaser"
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-smoke transition hover:bg-white/[0.08] hover:text-white"
          onClick={dismiss}
          type="button"
        >
          ✕
        </button>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
          ROI calculator
        </p>
        <p className="mt-2 pr-4 font-display text-base leading-snug text-white sm:text-lg">
          What&apos;s frontline inefficiency costing you?
        </p>
        <p className="mt-1.5 hidden text-xs leading-relaxed text-smoke sm:block">
          A typical 25-person crew saves around $240K a year. Get your number in about
          a minute.
        </p>
        <Link
          className="mt-3.5 block rounded-md bg-amber px-4 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-amber transition hover:bg-[#ff7f4a]"
          href="/roi-calculator"
          onClick={dismiss}
        >
          Calculate my savings
        </Link>
      </div>
    </aside>
  );
}
