import type { Metadata } from "next";

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

type IconProps = {
  className?: string;
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

function VideoIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 7.5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m16.5 11 4-2.5v7l-4-2.5"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PlaceholderMedia({
  label,
  eyebrow = "Future media"
}: {
  label: string;
  eyebrow?: string;
}) {
  return (
    <div
      aria-label={label}
      className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(71,112,219,0.18),rgba(8,13,22,0.92)_42%,rgba(255,255,255,0.045))] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-45" />
      <div className="absolute inset-5 rounded-lg border border-white/10" />
      <div className="absolute left-6 top-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-blue">
          {eyebrow}
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue/45 bg-blue/15 text-blue shadow-[0_0_28px_rgba(71,112,219,0.22)]">
            <VideoIcon className="h-7 w-7" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            {label}
          </p>
        </div>
      </div>
    </div>
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
          <PlaceholderMedia
            eyebrow="Collaborate Teams 2"
            label="Video/Image Placeholder"
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
              <PlaceholderMedia
                eyebrow="Future imagery"
                label={`${row.eyebrow} Placeholder`}
              />
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
