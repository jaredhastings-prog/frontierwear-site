import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "RealWear Collaborate Teams 2",
  description:
    "Bring Microsoft Teams to frontline industrial workers with RealWear and Collaborate Teams 2 hands-free communication, remote expert support, and live field collaboration.",
  alternates: {
    canonical: "/collaborate-teams-2"
  },
  openGraph: {
    title: "RealWear Collaborate Teams 2 | Frontier Wear",
    description:
      "A hands-free Microsoft Teams solution for frontline industrial workers using RealWear devices.",
    url: "/collaborate-teams-2",
    siteName: site.name,
    images: [
      {
        url: "/assets/teams-home-teaser.jpeg",
        width: 2752,
        height: 1536,
        alt: "RealWear headset used for Microsoft Teams field collaboration"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RealWear Collaborate Teams 2 | Frontier Wear",
    description:
      "Extend Microsoft Teams to frontline workers with RealWear hands-free collaboration.",
    images: ["/assets/teams-home-teaser.jpeg"]
  }
};

const heroHighlights = [
  "Hands-free Teams calls",
  "Remote expert support",
  "Live field video",
  "Works with Microsoft environments"
];

const valueRows = [
  {
    eyebrow: "Field connectivity",
    title: "Make Teams useful where the work actually happens",
    copy:
      "RealWear keeps collaboration available while workers move through noisy, PPE-heavy, tool-in-hand environments. Teams becomes a practical field channel for escalation, support, and decision making."
  },
  {
    eyebrow: "Operational impact",
    title: "Reduce travel and speed up troubleshooting",
    copy:
      "Remote experts can see the worker's point of view, guide diagnostics, confirm next steps, and capture field context without waiting for a site visit or stopping the task for a handheld screen."
  }
];

function MediaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-blue/25 bg-[#080d16] shadow-[0_24px_70px_rgba(71,112,219,0.18)]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_28%_18%,rgba(71,112,219,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%)]" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

function YouTubeMedia({
  title,
  videoId
}: {
  title: string;
  videoId: string;
}) {
  return (
    <MediaFrame>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
      />
    </MediaFrame>
  );
}

function ImageMedia() {
  return (
    <MediaFrame>
      <Image
        alt="Frontline worker using RealWear Collaborate Teams 2 in the field"
        className="object-cover object-center"
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 50vw, 100vw"
        src="/assets/Collaborate-insitu.png"
      />
    </MediaFrame>
  );
}

export default function CollaborateTeams2Page() {
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-24 pt-32 sm:px-6 md:pb-32 lg:px-8">
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(115deg,#05070c_0%,#08101f_48%,rgba(71,112,219,0.32)_100%)]" />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(5,7,12,0.15),rgba(5,7,12,0.92)_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[76svh] lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue">
              Microsoft Teams integration
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.94] text-white md:text-7xl lg:text-8xl">
              Microsoft Teams. Built for the field.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-frost/88 md:text-xl">
              Collaborate Teams 2 extends Microsoft Teams to frontline workers
              using RealWear devices for hands-free communication, remote expert
              support, and real-time collaboration in industrial environments.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-4 text-sm font-semibold leading-6 text-frost/90"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <YouTubeMedia
            title="Collaborate Teams 2 product video"
            videoId="GU2rSKZXaBs"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading title="Teams works on laptops. RealWear brings it to frontline workers.">
            <p>
              Office collaboration tools become field-ready when they can be
              used without stopping work, removing gloves, or handing over a
              device. RealWear wearable devices help frontline teams stay
              connected to experts, workflows, and decisions in real industrial
              conditions.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Field connectivity",
              "Safer operations",
              "Reduced travel",
              "Faster troubleshooting",
              "Real-time support",
              "Hands-free productivity"
            ].map((item) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6 text-sm font-semibold uppercase tracking-[0.16em] text-frost/90"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-14">
          {valueRows.map((row, index) => (
            <article
              className="grid items-center gap-10 lg:grid-cols-2"
              key={row.title}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue">
                  {row.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-white md:text-5xl">
                  {row.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-smoke md:text-lg">
                  {row.copy}
                </p>
              </div>
              {row.eyebrow === "Field connectivity" ? (
                <ImageMedia />
              ) : (
                <YouTubeMedia
                  title="Collaborate Teams 2 operational impact video"
                  videoId="Pqf3BYO0ELg"
                />
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.24),rgba(255,108,47,0.08),rgba(255,255,255,0.045))] p-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue">
            RealWear + Microsoft Teams
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl">
            A powerful combination for safer, smarter frontline operations.
          </h2>
        </div>
      </section>
    </main>
  );
}
