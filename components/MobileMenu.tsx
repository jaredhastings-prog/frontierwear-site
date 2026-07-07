"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { navItems } from "@/content/site";

export function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const close = () => detailsRef.current?.removeAttribute("open");

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (
        detailsRef.current?.open &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <details className="relative lg:hidden" ref={detailsRef}>
      <summary className="flex cursor-pointer list-none items-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:border-blue/60">
        Menu
      </summary>
      <div className="absolute right-0 mt-4 w-[min(88vw,22rem)] rounded-lg border border-white/10 bg-[#080d16] p-3 shadow-glow">
        <nav aria-label="Mobile navigation" className="grid gap-1">
          {navItems.map((item) => (
            <div className="grid gap-1" key={item.href}>
              <Link
                className="rounded-md px-4 py-3 text-sm text-smoke transition hover:bg-white/[0.08] hover:text-white"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  className="rounded-md py-2.5 pl-8 pr-4 text-sm text-smoke/80 transition hover:bg-white/[0.08] hover:text-white"
                  href={child.href}
                  key={child.href}
                  onClick={close}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            className="mt-2 rounded-md bg-blue px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            href="/request-quote"
            onClick={close}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </details>
  );
}
