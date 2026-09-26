import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/site";

const title = "A Hands-Free Thermal Camera for Wildfire Hot-Spot Detection";
const description =
  "Scion's wildfire researchers trialled the Navigator 520's thermal camera on the fireground in New Zealand — freeing both hands for a hose or hand tool while still seeing exactly where the heat is.";
const publishedDate = "2026-09-26";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/insights/wearable-thermal-camera-wildfire-hotspots"
  },
  openGraph: {
    title,
    description,
    url: "/insights/wearable-thermal-camera-wildfire-hotspots",
    type: "article"
  }
};

const senses = [
  {
    name: "Hearing",
    detail: "On a quiet, windless day, a hot spot can occasionally be heard crackling."
  },
  {
    name: "Smell",
    detail: "Firefighters position themselves downwind and track the plume of combustion gases back to its source."
  },
  {
    name: "Sight",
    detail: "Visual clues like white ash or a thin, hard-to-see smoke column narrow the search area."
  },
  {
    name: "Touch",
    detail: "Ultimately, a bare hand feels for heat — effective on small hot spots, but a real burn risk on big, active ones."
  }
];

const trialFindings = [
  {
    name: "Both eyes open",
    detail: "The instinct to close one eye to view the display works against the camera — it's designed to be used with both eyes open."
  },
  {
    name: "Slow, deliberate scanning",
    detail: "At an 8 fps refresh rate, the thermal image can't keep pace with fast head movement — slower scanning tracks it cleanly."
  },
  {
    name: "Natural within minutes",
    detail: "After 5–10 minutes of use, walking and scanning the fireground with the device felt natural to trial participants."
  },
  {
    name: "No eye strain, no added weight",
    detail: "Participants reported no noticeable strain and didn't feel the extra weight on their head during extended wear."
  }
];

export default function WearableThermalCameraWildfireHotspotsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedDate,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    mainEntityOfPage: `${site.url}/insights/wearable-thermal-camera-wildfire-hotspots`
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        type="application/ld+json"
      />
      <main id="main">
        <article className="mx-auto max-w-3xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <Link
            className="text-sm text-smoke transition hover:text-white"
            href="/insights"
          >
            ← Back to Insights
          </Link>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            Wildfire research · 6 min read
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-frost/85">
            After the flaming front of a vegetation fire is extinguished, the
            job isn&apos;t over. Roots, bark, and organic material in the soil
            can keep smouldering in hidden &ldquo;hot spots&rdquo; that
            reignite with a change in wind or humidity. Finding them during
            mop-up is slow, awkward, and depends on senses that don&apos;t
            always work. Scion&apos;s wildfire researchers set out to test
            whether a wearable thermal camera could do better — and
            Frontier Wear supplied the Navigator 520 used in the trial.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-white/10">
              <Image
                alt="Naked-eye view of vegetation after a fire, showing no visible sign of remaining heat"
                className="w-full"
                height={558}
                sizes="(min-width: 640px) 50vw, 100vw"
                src="/assets/insights/wildfire-naked-eye.jpg"
                width={478}
              />
              <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-smoke/70">
                Naked eye — nothing visible
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/10">
              <Image
                alt="Thermal camera view of the same vegetation, showing a hidden hot spot glowing at over 400 degrees Celsius"
                className="w-full"
                height={556}
                sizes="(min-width: 640px) 50vw, 100vw"
                src="/assets/insights/wildfire-thermal-hotspot.jpg"
                width={478}
              />
              <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-smoke/70">
                Same ground, Navigator 520 thermal camera — hot spot at 400&deg;C+
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              How crews find hot spots today
            </h2>
            <p className="text-base leading-8 text-frost/85">
              To locate smouldering material on the fireground, firefighters
              use almost every sense they have:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {senses.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={item.name}
                >
                  <p className="font-display text-base text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <figure className="mx-auto max-w-sm overflow-hidden rounded-lg border border-white/10">
              <Image
                alt="A firefighter in full PPE feeling for heat in burnt ground with a bare hand"
                className="w-full"
                height={441}
                sizes="384px"
                src="/assets/insights/wildfire-feeling-for-heat.jpg"
                width={458}
              />
              <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-smoke/70">
                Touch is still the fallback — a glove off, feeling for heat by hand
              </figcaption>
            </figure>
            <p className="text-base leading-8 text-frost/85">
              Handheld thermal cameras help, and are commonly used on
              vegetation fires — but one hand is permanently occupied holding
              the camera, competing with the hand tool a firefighter is
              already carrying. The moment they look away from the viewfinder
              to dig or swing a tool, they lose thermal vision entirely. The
              usual workaround is pairing two firefighters together: one on
              the camera, calling out directions, one on the tool — which
              works, but ties up a second person for the whole task.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              A camera that doesn&apos;t need a hand
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Scion&apos;s researchers went looking for a wearable thermal
              camera suited to wildland firefighting, and landed on the
              RealWear Navigator 520 — a voice-controlled, hands-free Android
              wearable built with a FLIR Lepton&reg; 3.5 thermal sensor
              alongside a conventional visible-light camera. The thermal feed
              displays on a boom-mounted screen positioned just below the
              wearer&apos;s dominant eye, controlled entirely by spoken
              commands, leaving both hands free for a hose or hand tool.
            </p>
            <p className="text-base leading-8 text-frost/85">
              To fit it for the fireground, Frontier Wear had a pair of clips
              specially fabricated to mount the device on the New Zealand
              wildfire helmet (Pacific Helmets model BR9). At 275g, the whole
              setup adds negligible weight to a firefighter&apos;s existing
              kit.
            </p>
            <figure className="mx-auto max-w-sm overflow-hidden rounded-lg border border-white/10">
              <Image
                alt="RealWear Navigator 520 mounted on a New Zealand wildfire helmet using custom-fabricated clips"
                className="w-full"
                height={595}
                sizes="384px"
                src="/assets/insights/wildfire-helmet-mounted.jpg"
                width={456}
              />
              <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-smoke/70">
                Navigator 520 on a Pacific Helmets BR9, via Frontier Wear&apos;s custom clips
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              What the trial found
            </h2>
            <p className="text-base leading-8 text-frost/85">
              Trial participants needed a short adjustment period before the
              device felt natural to use:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {trialFindings.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.045] p-5"
                  key={item.name}
                >
                  <p className="font-display text-base text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-frost/75">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-8 text-frost/85">
              To test raw thermal sensitivity, researchers buried
              air-activated chemical warming pads — invisible to the naked
              eye — across a test area without telling participants where
              they were. Wearing the camera, participants located every pad
              immediately. The device went on to prove itself under real
              conditions too, successfully locating hot spots at wildfires in
              Canterbury during December 2024, with wearers spotting hot
              material through vegetation that would otherwise have gone
              unnoticed.
            </p>
            <figure className="overflow-hidden rounded-lg border border-white/10">
              <Image
                alt="Thermal camera view of firefighters at a real wildfire in Canterbury, showing multiple hot spots glowing in the surrounding ground"
                className="w-full"
                height={421}
                sizes="(min-width: 768px) 672px, 100vw"
                src="/assets/insights/wildfire-hotspot-canterbury.jpg"
                width={964}
              />
              <figcaption className="border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-smoke/70">
                Real fireground, Canterbury, December 2024 — hot spots visible at 326&deg;C+ through smoke and vegetation
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Beyond the thermal camera
            </h2>
            <p className="text-base leading-8 text-frost/85">
              The trial to date has focused purely on the camera. But the
              Navigator 520 is a full wearable computer — it can join Teams
              calls, access files, and send live video or still images from
              anywhere with Wi-Fi. Scion&apos;s researchers see this as the
              next step: using those same communication features for training
              and intelligence-gathering directly on the fireground.
            </p>
          </div>

          <div className="mt-14 rounded-lg border border-blue/30 bg-[linear-gradient(120deg,rgba(71,112,219,0.18),rgba(255,108,47,0.10),rgba(255,255,255,0.04))] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Where this fits at Frontier Wear
            </p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-2xl leading-tight text-white md:text-4xl">
              We supplied the Navigator 520 behind this research.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-frost/80">
              As an authorised RealWear reseller, Frontier Wear worked
              directly with Scion&apos;s wildfire research team to get this
              device onto the fireground. If your team has a use case that
              doesn&apos;t fit a standard spec sheet, talk to us.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/navigator-520">View Navigator 520</ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                Compare all devices
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm">
              <Link className="text-smoke transition hover:text-white" href="/request-quote">
                Or request a quote and describe your use case →
              </Link>
            </p>
          </div>

          <p className="mt-10 text-xs leading-6 text-smoke/50">
            Source: Parker, R., Kunzli, J., Hooper, B. &amp; Clifford, V.
            &ldquo;Wearable thermal camera for hot spot detection.&rdquo;
            Wildfire Research Update, Issue 21, Scion Bioeconomy Science
            Institute, August 2025. Funded through the Scion Endeavour
            research programme &ldquo;Extreme Wildfire&rdquo; (Ministry of
            Business, Innovation and Employment), with thanks to the
            Canterbury High Country Fire Team. Photos in this article are
            reproduced from the same publicly available report.
          </p>
        </article>
      </main>
    </>
  );
}
