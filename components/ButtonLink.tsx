import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-blue text-white shadow-glow hover:bg-[#5d82ee] focus-visible:outline-blue",
  secondary:
    "border border-white/20 bg-white/[0.08] text-white hover:border-blue/70 hover:bg-blue/15 focus-visible:outline-blue",
  ghost:
    "border border-white/10 bg-transparent text-frost hover:border-amber/60 hover:text-white focus-visible:outline-amber"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel
}: ButtonLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
