import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className,
  tone = "light"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight md:text-5xl",
          tone === "dark" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-5 text-base leading-8 md:text-lg",
            tone === "dark" ? "text-slate-300" : "text-smoke"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
