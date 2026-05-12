import Image from "next/image";

import type { customerLogos } from "@/content/site";

type Logo = (typeof customerLogos)[number];

type LogoMarqueeProps = {
  logos: readonly Logo[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <div
      aria-label="Customer logos"
      className="logo-marquee relative overflow-hidden"
      role="list"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#05070c] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#05070c] to-transparent md:w-28" />
      <div className="logo-marquee__track flex w-max items-center gap-4 py-2 md:gap-5">
        {marqueeLogos.map((logo, index) => (
          <div
            aria-hidden={index >= logos.length}
            className="flex h-24 w-40 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-frost/90 px-6 py-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-blue/45 hover:bg-white md:h-28 md:w-48"
            data-marquee-duplicate={index >= logos.length ? "true" : undefined}
            key={`${logo.name}-${index}`}
            role="listitem"
          >
            <Image
              alt={index < logos.length ? logo.name : ""}
              className="h-full w-full object-contain opacity-90 transition duration-300 hover:opacity-100"
              height={192}
              loading="lazy"
              sizes="(min-width: 768px) 12rem, 10rem"
              src={logo.src}
              width={384}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
