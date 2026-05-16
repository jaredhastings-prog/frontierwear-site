import type { Metadata } from "next";
import type { ReactNode } from "react";

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

type IconComponent = (props: IconProps) => ReactNode;

type FeatureItem = {
  title: string;
  copy: string;
  icon: IconComponent;
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

const features: FeatureItem[] = [
  {
    title: "Hands-free Teams communication",
    copy:
      "Join calls and collaborate while keeping both hands available for tools, equipment, and safe movement.",
    icon: HeadsetIcon
  },
  {
    title: "Live point-of-view video",
    copy:
      "Share what the frontline worker sees so experts can diagnose issues with real field context.",
    icon: VideoIcon
  },
  {
    title: "Remote expert collaboration",
    copy:
      "Bring engineers, supervisors, and specialists into the workflow without sending them across sites.",
    icon: UsersIcon
  },
  {
    title: "Voice-controlled workflows",
    copy:
      "Use voice-first interaction designed for industrial environments where handheld devices get in the way.",
    icon: VoiceIcon
  },
  {
    title: "Field inspections and maintenance",
    copy:
      "Support inspections, repairs, audits, and procedural guidance directly from the worker's viewpoint.",
    icon: ClipboardIcon
  },
  {
    title: "Secure enterprise connectivity",
    copy:
      "Align frontline collaboration with Microsoft environments already used by enterprise teams.",
    icon: ShieldIcon
  }
];

const videos = [
  "Remote expert support",
  "Live field collaboration",
  "Industrial inspections"
];

const industries = [
  "Mining",
  "Manufacturing",
  "Utilities",
  "Oil & Gas",
  "Infrastructure",
  "Field services"
];

function HeadsetIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 13.5v-2a7.5 7.5 0 0 1 15 0v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M6 13h2.5v5H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Zm9.5 0H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2.5v-5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M15.5 19c-.8.8-2 1.2-3.5 1.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

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

function UsersIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.5 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M15.8 10.6a2.6 2.6 0 1 0 0-5.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M3.8 19.2c.7-3.3 2.8-5 5.7-5s5 1.7 5.7 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M16 14.4c2.2.4 3.6 1.9 4.2 4.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function VoiceIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 14.5a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5.5a3 3 0 0 0 3 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M5.8 11.5a6.2 6.2 0 0 0 12.4 0M12 17.8V21M8.5 21h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ClipboardIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.5 5.5h-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M8.5 4h7v3h-7V4ZM8 13l2.4 2.4L16 9.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 3.5 19 6v5.3c0 4.4-2.8 7.7-7 9.2-4.2-1.5-7-4.8-7-9.2V6l7-2.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m9.2 12 2 2 3.8-4"
        stroke="currentColor"
        strokeLinecap="round"
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
      <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-20 pt-32 sm:px-6 md:pb-28 lg:px-8">
        <div className="absolute inset-0 z-[-2] bg-[linear-gradient(115deg,#05070c_0%,#08101f_48%,rgba(71,112,219,0.32)_100%)]" />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(5,7,12,0.15),rgba(5,7,12,0.92)_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[72svh] lg:grid-cols-[0.95fr_1.05fr]">
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
                  className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold leading-6 text-frost/90"
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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
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
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-sm font-semibold uppercase tracking-[0.16em] text-frost/90"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10">
          {valueRows.map((row, index) => (
            <article
              className="grid items-center gap-8 lg:grid-cols-2"
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

      <section className="border-y border-white/10 bg-white/[0.035] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Feature set"
            title="Built for Microsoft Teams workflows on industrial sites"
          >
            <p>
              Collaborate Teams 2 gives enterprise teams a practical bridge
              between Microsoft collaboration and hands-free field execution.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="group rounded-lg border border-white/10 bg-[#080d16] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/45 hover:bg-white/[0.055]"
                  key={feature.title}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-blue/35 bg-blue/10 text-blue transition duration-300 group-hover:border-blue/70 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-smoke">
                    {feature.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Video showcase"
          title="See Collaborate Teams 2 in action"
        >
          <p>
            Placeholder modules are ready for future demos, walkthroughs, and
            product videos without changing the page structure.
          </p>
        </SectionHeading>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              className="overflow-hidden rounded-lg border border-white/10 bg-[#080d16] transition duration-300 hover:-translate-y-1 hover:border-blue/45"
              key={video}
            >
              <div
                aria-label={`${video} video placeholder`}
                className="relative aspect-video bg-[linear-gradient(135deg,rgba(71,112,219,0.18),rgba(5,7,12,0.92))]"
                role="img"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue/45 bg-blue/15 text-blue shadow-[0_0_34px_rgba(71,112,219,0.24)]">
                    <svg
                      aria-hidden="true"
                      className="h-7 w-7 translate-x-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl leading-tight text-white">
                  {video}
                </h3>
                <p className="mt-3 text-sm leading-6 text-smoke">
                  Future video placeholder for {video.toLowerCase()} workflows.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#05070c] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="center"
            eyebrow="Industries"
            title="Perfect for Teams-driven organisations"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.045] p-5 text-center transition duration-300 hover:border-blue/45 hover:bg-white/[0.07]"
                key={industry}
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg border border-blue/30 bg-blue/10 text-blue">
                  <ShieldIcon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-frost/90">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.22),rgba(255,108,47,0.08),rgba(255,255,255,0.04))] p-8 text-center md:p-14">
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
