"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Confidence = "conservative" | "moderate" | "optimistic";

type PainId =
  | "downtime"
  | "travel"
  | "training"
  | "errors"
  | "safety"
  | "knowledge";

type IndustryId =
  | "mining"
  | "manufacturing"
  | "utilities"
  | "construction"
  | "field"
  | "other";

type RedeployId = "maintenance" | "billable" | "throughput" | "unsure";

// Benchmarks as [conservative, moderate, optimistic]
const BENCH = {
  dtResolution: [0.25, 0.4, 0.6], // % faster resolution on expert events — LASCAM/TotalEnergies
  travelCapture: [0.6, 0.75, 0.9], // % of replaceable visits actually replaced in yr 1 — Honeywell
  rampReduction: [0.25, 0.35, 0.5], // % ramp time saved — Vestas/Librestream
  infoRecovery: [0.4, 0.55, 0.7] // % of info-delay hours recovered — hands-free doc access
} as const;

const CONF_INDEX: Record<Confidence, 0 | 1 | 2> = {
  conservative: 0,
  moderate: 1,
  optimistic: 2
};

const CONF_LABELS: Record<Confidence, string> = {
  conservative: "Cautious",
  moderate: "Balanced",
  optimistic: "Best case"
};

const PAIN_OPTIONS: Array<{ id: PainId; label: string }> = [
  { id: "downtime", label: "⚡ Equipment downtime" },
  { id: "travel", label: "✈️ Experts flying to site" },
  { id: "training", label: "📋 Slow onboarding" },
  { id: "errors", label: "❌ Errors & rework" },
  { id: "safety", label: "🦺 Safety incidents" },
  { id: "knowledge", label: "🧠 Skills walking out the door" }
];

const DEFAULT_INPUTS = {
  workers: 25,
  rate: 55,
  weeks: 48,
  visits: 8,
  visitCost: 2500,
  visitPct: 55,
  dtEvents: 6,
  dtHours: 3.5,
  dtCost: 3000,
  dtPct: 50,
  hires: 8,
  onboard: 8,
  infoHrs: 2
};

type Inputs = typeof DEFAULT_INPUTS;

const INDUSTRY_OPTIONS: Array<{
  id: IndustryId;
  label: string;
  crewLabel: string;
}> = [
  { id: "mining", label: "⛏ Mining & resources", crewLabel: "mining" },
  { id: "manufacturing", label: "🏭 Manufacturing", crewLabel: "manufacturing" },
  { id: "utilities", label: "⚡ Utilities & energy", crewLabel: "utilities" },
  { id: "construction", label: "🏗 Construction", crewLabel: "construction" },
  { id: "field", label: "🔧 Field services & trades", crewLabel: "field services" },
  { id: "other", label: "👀 Something else", crewLabel: "" }
];

// Typical starting points per industry — every value stays fully adjustable.
const INDUSTRY_PRESETS: Record<IndustryId, Inputs> = {
  mining: {
    workers: 50,
    rate: 75,
    weeks: 48,
    visits: 10,
    visitCost: 5000,
    visitPct: 55,
    dtEvents: 8,
    dtHours: 4,
    dtCost: 25000,
    dtPct: 50,
    hires: 10,
    onboard: 10,
    infoHrs: 2.5
  },
  manufacturing: {
    workers: 40,
    rate: 50,
    weeks: 48,
    visits: 6,
    visitCost: 2000,
    visitPct: 55,
    dtEvents: 10,
    dtHours: 3,
    dtCost: 5000,
    dtPct: 50,
    hires: 8,
    onboard: 8,
    infoHrs: 2
  },
  utilities: {
    workers: 35,
    rate: 65,
    weeks: 48,
    visits: 8,
    visitCost: 3000,
    visitPct: 60,
    dtEvents: 6,
    dtHours: 4,
    dtCost: 10000,
    dtPct: 55,
    hires: 6,
    onboard: 10,
    infoHrs: 2.5
  },
  construction: {
    workers: 45,
    rate: 55,
    weeks: 46,
    visits: 5,
    visitCost: 1500,
    visitPct: 50,
    dtEvents: 5,
    dtHours: 3,
    dtCost: 3000,
    dtPct: 40,
    hires: 15,
    onboard: 6,
    infoHrs: 2
  },
  field: {
    workers: 30,
    rate: 60,
    weeks: 48,
    visits: 12,
    visitCost: 2500,
    visitPct: 65,
    dtEvents: 4,
    dtHours: 3,
    dtCost: 2000,
    dtPct: 60,
    hires: 8,
    onboard: 8,
    infoHrs: 3
  },
  other: DEFAULT_INPUTS
};

const REDEPLOY_OPTIONS: Array<{
  id: RedeployId;
  label: string;
  note: string;
  mult: number;
}> = [
  {
    id: "maintenance",
    label: "🔧 Catch up on maintenance we keep putting off",
    note: "Prevented failures are worth more than the wages (~1.5×)",
    mult: 1.5
  },
  {
    id: "billable",
    label: "💰 Take on more jobs / billable work",
    note: "An hour sold is worth more than an hour paid (~2×)",
    mult: 2
  },
  {
    id: "throughput",
    label: "🏭 Produce more with the same crew",
    note: "Extra output without extra headcount (~2.5×)",
    mult: 2.5
  },
  {
    id: "unsure",
    label: "🤷 Not sure yet",
    note: "No worries — we'll just show you the hours",
    mult: 1
  }
];

function fmtFull(n: number) {
  return "$" + Math.round(n).toLocaleString("en-AU");
}

function fmtShort(n: number) {
  if (n >= 1000000) return "$" + (n / 1e6).toFixed(1) + "M";
  if (n >= 1000) return "$" + Math.round(n / 1000) + "K";
  return "$" + Math.round(n);
}

function calculate(
  inputs: Inputs,
  pains: Set<PainId>,
  confidence: Confidence,
  redeployMult: number
) {
  const bench = (key: keyof typeof BENCH) => BENCH[key][CONF_INDEX[confidence]];

  // 1. Downtime — scoped to expert-needing events only
  const dtBefore = pains.has("downtime")
    ? inputs.dtEvents * 12 * (inputs.dtPct / 100) * inputs.dtHours * inputs.dtCost
    : 0;
  const dtSaving = dtBefore * bench("dtResolution");
  const dtAfter = dtBefore - dtSaving;

  // 2. Travel — scoped to replaceable visits, adoption rate applied
  const tvBefore = pains.has("travel")
    ? inputs.visits * 12 * (inputs.visitPct / 100) * inputs.visitCost
    : 0;
  const travelSaving = tvBefore * bench("travelCapture");
  const tvAfter = tvBefore - travelSaving;

  // 3. Training — single factor, no double-application
  const rampHoursGained =
    pains.has("training") || pains.has("knowledge")
      ? inputs.hires * inputs.onboard * 40 * 0.35 * bench("rampReduction")
      : 0;
  const trainSaving = rampHoursGained * inputs.rate;

  // 4. Productivity — scoped to info-delay hours only
  const infoHoursRecovered =
    inputs.infoHrs > 0
      ? inputs.workers * inputs.infoHrs * inputs.weeks * bench("infoRecovery")
      : 0;
  const prodSaving = infoHoursRecovered * inputs.rate;

  const total = dtSaving + travelSaving + trainSaving + prodSaving;

  // 5. Capacity upside — worker-hours genuinely freed for new activities.
  // Downtime and travel stay out of the pool: idle labour is already priced
  // into the downtime cost, and travel hours belong to the visiting expert.
  // The freed hours are already counted once at wage rate above, so the
  // upside adds only the increment beyond wages. At 1× it is exactly zero.
  const freedHours = rampHoursGained + infoHoursRecovered;
  const upside = freedHours * (redeployMult - 1) * inputs.rate;
  const fteEquivalent = freedHours / (inputs.weeks * 40);

  const numDevices = Math.max(2, Math.ceil(inputs.workers / 10));
  const deviceCost = numDevices * 7000;
  const paybackMonths = total > 0 ? deviceCost / (total / 12) : 0;

  return {
    total,
    dtSaving,
    travelSaving,
    trainSaving,
    prodSaving,
    dtBefore,
    dtAfter,
    tvBefore,
    tvAfter,
    freedHours,
    upside,
    fteEquivalent,
    paybackMonths,
    numDevices,
    deviceCost
  };
}

type SliderRowProps = {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  minLabel: string;
  maxLabel: string;
  hint?: string;
  onChange: (value: number) => void;
};

function SliderRow({
  label,
  display,
  value,
  min,
  max,
  step = 1,
  minLabel,
  maxLabel,
  hint,
  onChange
}: SliderRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm leading-snug text-frost">{label}</span>
        <span className="whitespace-nowrap rounded-md bg-white/[0.06] px-2.5 py-1 font-display text-lg text-amber">
          {display}
        </span>
      </div>
      {hint ? <p className="mt-1 text-xs text-smoke/70">{hint}</p> : null}
      <input
        aria-label={label}
        className="roi-range mt-3"
        max={max}
        min={min}
        onChange={(event) => onChange(parseFloat(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-smoke/50">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

type TierPickerProps = {
  label: string;
  display: string;
  hint?: string;
  tiers: Array<{ label: string; value: number }>;
  value: number;
  onChange: (value: number) => void;
};

function TierPicker({ label, display, hint, tiers, value, onChange }: TierPickerProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm leading-snug text-frost">{label}</span>
        <span className="whitespace-nowrap rounded-md bg-white/[0.06] px-2.5 py-1 font-display text-lg text-amber">
          {display}
        </span>
      </div>
      {hint ? <p className="mt-1 text-xs text-smoke/70">{hint}</p> : null}
      <div className="roi-no-print mt-3 flex flex-wrap gap-2">
        {tiers.map((tier) => (
          <button
            className={cn(
              "rounded-full border px-3.5 py-2 text-xs font-semibold transition",
              value === tier.value
                ? "border-blue/50 bg-blue/20 text-white"
                : "border-white/12 bg-white/[0.04] text-smoke hover:border-blue/40 hover:text-frost"
            )}
            key={tier.label}
            onClick={() => onChange(tier.value)}
            type="button"
          >
            {tier.label}
          </button>
        ))}
      </div>
    </div>
  );
}

type StepPanelProps = {
  step: number;
  title: string;
  lead?: string;
  included?: boolean;
  onToggleIncluded?: () => void;
  children: ReactNode;
};

function StepPanel({
  step,
  title,
  lead,
  included = true,
  onToggleIncluded,
  children
}: StepPanelProps) {
  return (
    <section className="roi-card rounded-2xl border border-white/10 bg-steel/60 p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue font-display text-sm text-white">
            {step}
          </span>
          <div>
            <h2 className="font-display text-lg leading-tight text-white">{title}</h2>
            {lead ? <p className="mt-0.5 text-xs text-smoke">{lead}</p> : null}
          </div>
        </div>
        {onToggleIncluded ? (
          <button
            className={cn(
              "roi-no-print flex-shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition",
              included
                ? "border-blue/45 bg-blue/15 text-frost"
                : "border-white/15 text-smoke hover:border-blue/40 hover:text-frost"
            )}
            onClick={onToggleIncluded}
            type="button"
          >
            {included ? "✓ Counted" : "Not counted"}
          </button>
        ) : null}
      </div>
      <div
        className={cn(
          "mt-6 grid gap-6 transition-opacity",
          !included && "pointer-events-none opacity-35"
        )}
      >
        {children}
      </div>
      {!included ? (
        <p className="roi-no-print mt-4 text-xs text-smoke/70">
          This isn&apos;t counted in your total. Tap &ldquo;Not counted&rdquo; above to
          include it.
        </p>
      ) : null}
    </section>
  );
}

function FineTune({ children }: { children: ReactNode }) {
  return (
    <details className="roi-no-print group rounded-lg border border-white/[0.07] bg-white/[0.02] px-4 py-3">
      <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-[0.14em] text-smoke transition hover:text-frost">
        <span className="mr-1.5 inline-block transition-transform group-open:rotate-90">
          ▸
        </span>
        Fine-tune (optional)
      </summary>
      <div className="mt-5 grid gap-6">{children}</div>
    </details>
  );
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [industry, setIndustry] = useState<IndustryId | null>(null);
  const [pains, setPains] = useState<Set<PainId>>(
    () => new Set<PainId>(["downtime", "travel", "training"])
  );
  const [confidence, setConfidence] = useState<Confidence>("conservative");
  const [redeploy, setRedeploy] = useState<RedeployId>("unsure");
  const [includeUpside, setIncludeUpside] = useState(false);

  const [gateOpen, setGateOpen] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [pendingAction, setPendingAction] = useState<"pdf" | "share" | null>(null);
  const [shareCopied, setShareCopied] = useState(false);

  const redeployOption =
    REDEPLOY_OPTIONS.find((option) => option.id === redeploy) ?? REDEPLOY_OPTIONS[3];

  const results = useMemo(
    () => calculate(inputs, pains, confidence, redeployOption.mult),
    [inputs, pains, confidence, redeployOption]
  );

  const industryAverages = INDUSTRY_PRESETS[industry ?? "other"];

  const setInput = (key: keyof Inputs) => (value: number) =>
    setInputs((previous) => ({ ...previous, [key]: value }));

  const selectIndustry = (id: IndustryId) => {
    setIndustry(id);
    setInputs(INDUSTRY_PRESETS[id]);
  };

  const togglePain = (id: PainId) =>
    setPains((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const copyShareLink = () => {
    void navigator.clipboard?.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2500);
  };

  const runAction = (action: "pdf" | "share") => {
    if (action === "pdf") {
      window.print();
    } else {
      copyShareLink();
    }
  };

  const triggerGate = (action: "pdf" | "share") => {
    if (leadCaptured) {
      runAction(action);
      return;
    }
    setPendingAction(action);
    setGateOpen(true);
  };

  const handleGateSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = new URLSearchParams(
      new FormData(event.currentTarget) as unknown as Record<string, string>
    ).toString();
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });
    } catch {
      // Never block the visitor's report on a network hiccup.
    }
    setLeadCaptured(true);
    setGateOpen(false);
    if (pendingAction) {
      runAction(pendingAction);
      setPendingAction(null);
    }
  };

  const confLabel = CONF_LABELS[confidence];
  const dtRate = Math.round(BENCH.dtResolution[CONF_INDEX[confidence]] * 100);
  const tvRate = Math.round(BENCH.travelCapture[CONF_INDEX[confidence]] * 100);
  const trRate = Math.round(BENCH.rampReduction[CONF_INDEX[confidence]] * 100);
  const prRate = Math.round(BENCH.infoRecovery[CONF_INDEX[confidence]] * 100);

  const crewLabel = INDUSTRY_OPTIONS.find((option) => option.id === industry)?.crewLabel;
  const headlineTotal = includeUpside ? results.total + results.upside : results.total;
  const freedHoursLabel = Math.round(results.freedHours).toLocaleString("en-AU");

  const resultsSummary = [
    `Total: ${fmtFull(results.total)}`,
    `Upside: ${fmtFull(results.upside)} (${redeployOption.id})`,
    `Hours freed: ${freedHoursLabel}`,
    `Industry: ${industry ?? "not set"}`,
    `Confidence: ${confLabel}`,
    `Payback months: ${results.paybackMonths.toFixed(1)}`,
    `Devices: ${results.numDevices}`,
    `Workers: ${inputs.workers}`,
    `Downtime saving: ${fmtFull(results.dtSaving)}`,
    `Travel saving: ${fmtFull(results.travelSaving)}`,
    `Training saving: ${fmtFull(results.trainSaving)}`,
    `Productivity saving: ${fmtFull(results.prodSaving)}`
  ].join(" | ");

  const categoryRows = [
    {
      icon: "⚡",
      name: "Less downtime",
      value: results.dtSaving
    },
    {
      icon: "✈️",
      name: "Fewer expert trips",
      value: results.travelSaving
    },
    {
      icon: "📋",
      name: "Faster onboarding",
      value: results.trainSaving
    },
    {
      icon: "🔧",
      name: "Time back every week",
      value: results.prodSaving
    }
  ];
  const maxCategory = Math.max(...categoryRows.map((row) => row.value), 1);

  const breakdownRows = [
    {
      icon: "⚡",
      value: results.dtSaving,
      name: `Downtime — ${dtRate}% faster resolution on expert-escalation events`,
      source: "LASCAM case study; TotalEnergies deployment"
    },
    {
      icon: "✈️",
      value: results.travelSaving,
      name: `Travel — ${tvRate}% of replaceable visits converted to remote assist`,
      source: "Honeywell deployment (50% baseline); Engineering Group case study"
    },
    {
      icon: "📋",
      value: results.trainSaving,
      name: `Onboarding — ${trRate}% reduction in ramp-to-productivity time`,
      source: "Vestas connected worker program; Librestream/RealWear case study"
    },
    {
      icon: "🔧",
      value: results.prodSaving,
      name: `Productivity — ${prRate}% of scoped information-delay hours recovered`,
      source: "Hands-free doc access; user-specified scope only"
    }
  ].filter((row) => row.value > 0);

  const paybackHeading =
    results.paybackMonths <= 0
      ? "Adjust the sliders to see your payback"
      : results.paybackMonths < 3
        ? "Pays for itself in under 3 months"
        : results.paybackMonths < 12
          ? `Pays for itself in about ${Math.round(results.paybackMonths)} months`
          : `Pays for itself in ${(results.paybackMonths / 12).toFixed(1)} years`;

  return (
    <div className="pb-24 lg:pb-0">
      <style>{`
        .roi-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.14);
          border-radius: 4px;
          outline: none;
          cursor: pointer;
        }
        .roi-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ff6c2f;
          border: 3px solid #1a2030;
          box-shadow: 0 1px 8px rgba(255, 108, 47, 0.45);
          cursor: pointer;
          transition: transform 0.1s;
        }
        .roi-range::-webkit-slider-thumb:hover {
          transform: scale(1.12);
        }
        .roi-range::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ff6c2f;
          border: 3px solid #1a2030;
          cursor: pointer;
        }
        @media print {
          header,
          footer,
          .roi-no-print {
            display: none !important;
          }
          html,
          body {
            background: white !important;
            color: #0f172a !important;
          }
          body::before {
            display: none !important;
          }
          .roi-split {
            grid-template-columns: 1fr !important;
          }
          .roi-results {
            position: static !important;
          }
          .roi-card,
          .roi-card * {
            background: white !important;
            border-color: #e2e8f0 !important;
            color: #0f172a !important;
            box-shadow: none !important;
            break-inside: avoid;
          }
          .roi-card .roi-num {
            color: #c4460a !important;
          }
        }
      `}</style>

      {/* Step 1 — industry */}
      <StepPanel
        lead="One tap fills everything in with typical numbers for your world — then adjust whatever looks off."
        step={1}
        title="What's your industry?"
      >
        <div className="roi-no-print flex flex-wrap gap-2.5">
          {INDUSTRY_OPTIONS.map((option) => (
            <button
              className={cn(
                "rounded-full border px-4 py-2.5 text-[13px] font-semibold transition",
                industry === option.id
                  ? "border-blue/50 bg-blue/20 text-white"
                  : "border-white/12 bg-white/[0.04] text-smoke hover:border-blue/40 hover:text-frost"
              )}
              key={option.id}
              onClick={() => selectIndustry(option.id)}
              type="button"
            >
              {industry === option.id ? "✓ " : ""}
              {option.label}
            </button>
          ))}
        </div>
      </StepPanel>

      {/* Step 2 — problems */}
      <div className="mt-5">
        <StepPanel
          lead="Pick as many as you like. You can change these anytime."
          step={2}
          title="What's slowing your team down?"
        >
          <div className="roi-no-print flex flex-wrap gap-2.5">
            {PAIN_OPTIONS.map((pain) => (
              <button
                className={cn(
                  "rounded-full border px-4 py-2.5 text-[13px] font-semibold transition",
                  pains.has(pain.id)
                    ? "border-blue/50 bg-blue/20 text-white"
                    : "border-white/12 bg-white/[0.04] text-smoke hover:border-blue/40 hover:text-frost"
                )}
                key={pain.id}
                onClick={() => togglePain(pain.id)}
                type="button"
              >
                {pains.has(pain.id) ? "✓ " : ""}
                {pain.label}
              </button>
            ))}
          </div>
        </StepPanel>
      </div>

      {/* Split: input steps left, live results right */}
      <div className="roi-split mt-5 grid items-start gap-5 lg:grid-cols-[1fr_400px]">
        <div className="grid gap-5">
          <StepPanel lead="Rough numbers are fine." step={3} title="Your team">
            <SliderRow
              display={String(inputs.workers)}
              label="How many people work on your frontline?"
              max={500}
              maxLabel="500"
              min={5}
              minLabel="5"
              onChange={setInput("workers")}
              step={5}
              value={inputs.workers}
            />
            <SliderRow
              display={`$${inputs.rate}/hr`}
              hint="Include super and allowances."
              label="What do they earn per hour, on average?"
              max={150}
              maxLabel="$150"
              min={25}
              minLabel="$25"
              onChange={setInput("rate")}
              step={5}
              value={inputs.rate}
            />
            <FineTune>
              <SliderRow
                display={`${inputs.weeks} wks`}
                label="Working weeks per year"
                max={52}
                maxLabel="52"
                min={30}
                minLabel="30"
                onChange={setInput("weeks")}
                value={inputs.weeks}
              />
            </FineTune>
          </StepPanel>

          <StepPanel
            included={pains.has("travel")}
            lead="Specialists or technicians travelling to your sites."
            onToggleIncluded={() => togglePain("travel")}
            step={4}
            title="Experts coming to site"
          >
            <SliderRow
              display={`${inputs.visits} /mo`}
              label="How many expert visits happen each month?"
              max={40}
              maxLabel="40"
              min={1}
              minLabel="1"
              onChange={setInput("visits")}
              value={inputs.visits}
            />
            <TierPicker
              display={`$${inputs.visitCost.toLocaleString("en-AU")}`}
              hint="Flights, accommodation, and lost time."
              label="What does one visit cost, all up?"
              onChange={setInput("visitCost")}
              tiers={[
                { label: "Local — ~$800", value: 800 },
                { label: "Interstate — ~$2.5K", value: 2500 },
                { label: "Fly-in / remote — ~$6K", value: 6000 },
                {
                  label: "Not sure — use the typical figure",
                  value: industryAverages.visitCost
                }
              ]}
              value={inputs.visitCost}
            />
            <FineTune>
              <SliderRow
                display={`$${inputs.visitCost.toLocaleString("en-AU")}`}
                label="Exact cost per visit"
                max={15000}
                maxLabel="$15K"
                min={500}
                minLabel="$500"
                onChange={setInput("visitCost")}
                step={250}
                value={inputs.visitCost}
              />
              <SliderRow
                display={`${inputs.visitPct}%`}
                hint="Exclude planned commissioning or hands-on installs."
                label="How many visits could be handled remotely?"
                max={90}
                maxLabel="90%"
                min={10}
                minLabel="10%"
                onChange={setInput("visitPct")}
                step={5}
                value={inputs.visitPct}
              />
            </FineTune>
          </StepPanel>

          <StepPanel
            included={pains.has("downtime")}
            lead="Breakdowns and unplanned stoppages."
            onToggleIncluded={() => togglePain("downtime")}
            step={5}
            title="Downtime"
          >
            <SliderRow
              display={`${inputs.dtEvents} /mo`}
              label="How many breakdowns or stoppages each month?"
              max={60}
              maxLabel="60"
              min={0}
              minLabel="0"
              onChange={setInput("dtEvents")}
              value={inputs.dtEvents}
            />
            <SliderRow
              display={`${inputs.dtHours} hrs`}
              label="How long does a typical one take to fix?"
              max={24}
              maxLabel="24h"
              min={0.5}
              minLabel="30min"
              onChange={setInput("dtHours")}
              step={0.5}
              value={inputs.dtHours}
            />
            <TierPicker
              display={`$${inputs.dtCost.toLocaleString("en-AU")}/hr`}
              hint="Lost production, idle labour, penalties."
              label="What does an hour of downtime cost you?"
              onChange={setInput("dtCost")}
              tiers={[
                { label: "Minor — ~$1K/hr", value: 1000 },
                { label: "Painful — ~$5K/hr", value: 5000 },
                { label: "Severe — ~$25K/hr", value: 25000 },
                {
                  label: "Not sure — use the typical figure",
                  value: industryAverages.dtCost
                }
              ]}
              value={inputs.dtCost}
            />
            <FineTune>
              <SliderRow
                display={`$${inputs.dtCost.toLocaleString("en-AU")}/hr`}
                label="Exact cost per downtime hour"
                max={100000}
                maxLabel="$100K"
                min={500}
                minLabel="$500"
                onChange={setInput("dtCost")}
                step={500}
                value={inputs.dtCost}
              />
              <SliderRow
                display={`${inputs.dtPct}%`}
                hint="Mechanical-only faults excluded."
                label="How often do you need an expert's help to fix it?"
                max={90}
                maxLabel="90%"
                min={10}
                minLabel="10%"
                onChange={setInput("dtPct")}
                step={5}
                value={inputs.dtPct}
              />
            </FineTune>
          </StepPanel>

          <StepPanel
            included={pains.has("training") || pains.has("knowledge")}
            lead="New starters, and time lost chasing information."
            onToggleIncluded={() => togglePain("training")}
            step={6}
            title="Training & everyday time"
          >
            <SliderRow
              display={String(inputs.hires)}
              label="How many new starters each year?"
              max={100}
              maxLabel="100"
              min={0}
              minLabel="0"
              onChange={setInput("hires")}
              value={inputs.hires}
            />
            <SliderRow
              display={`${inputs.infoHrs} hrs`}
              hint="Searching manuals, waiting for approvals, walking to check equipment."
              label="Hours each worker loses per week chasing information"
              max={15}
              maxLabel="15"
              min={0}
              minLabel="0"
              onChange={setInput("infoHrs")}
              step={0.5}
              value={inputs.infoHrs}
            />
            <FineTune>
              <SliderRow
                display={`${inputs.onboard} wks`}
                label="Weeks until a new starter is fully productive"
                max={26}
                maxLabel="26"
                min={1}
                minLabel="1"
                onChange={setInput("onboard")}
                value={inputs.onboard}
              />
            </FineTune>
          </StepPanel>

          <StepPanel
            lead={`Your crew gets back about ${freedHoursLabel} hours a year. What happens with them is the upside most ROI numbers miss.`}
            step={7}
            title="What would your team do with the time back?"
          >
            <div className="roi-no-print grid gap-2.5 sm:grid-cols-2">
              {REDEPLOY_OPTIONS.map((option) => (
                <button
                  className={cn(
                    "rounded-xl border p-4 text-left transition",
                    redeploy === option.id
                      ? "border-blue/50 bg-blue/20"
                      : "border-white/12 bg-white/[0.04] hover:border-blue/40"
                  )}
                  key={option.id}
                  onClick={() => setRedeploy(option.id)}
                  type="button"
                >
                  <span
                    className={cn(
                      "block text-[13px] font-semibold leading-snug",
                      redeploy === option.id ? "text-white" : "text-frost/80"
                    )}
                  >
                    {redeploy === option.id ? "✓ " : ""}
                    {option.label}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-smoke/70">
                    {option.note}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-xs text-smoke/60">
              This is your call, not a case-study benchmark — so we show it separately
              from your savings.
            </p>
          </StepPanel>
        </div>

        {/* Results — visually distinct, sticky on desktop */}
        <aside
          className="roi-results grid gap-4 lg:sticky lg:top-24"
          id="roi-results"
        >
          <div className="roi-card overflow-hidden rounded-2xl border border-amber/30 bg-gradient-to-br from-amber/[0.12] via-graphite/90 to-navy/30 shadow-amber">
            <div className="border-b border-white/10 px-6 py-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
                Your results · updates live
              </p>
            </div>
            <div className="px-6 py-5">
              <p className="roi-num font-display text-5xl leading-none text-white [font-variant-numeric:tabular-nums]">
                {fmtFull(headlineTotal)}
              </p>
              <p className="mt-2 text-sm text-frost/60">
                estimated first-year savings for your {inputs.workers}-person
                {crewLabel ? ` ${crewLabel}` : ""} crew
                {includeUpside && results.upside > 0 ? ", upside included" : ""}
              </p>

              {results.freedHours > 0 ? (
                <div className="mt-4 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-3">
                  <p className="font-display text-[15px] text-white">
                    ⏱ {freedHoursLabel} hours back per year
                  </p>
                  <p className="mt-0.5 text-xs text-smoke">
                    Like adding {results.fteEquivalent.toFixed(1)} workers without
                    hiring.
                    {results.upside > 0
                      ? ` Redeployed: +${fmtFull(results.upside)} upside.`
                      : ""}
                  </p>
                  {results.upside > 0 ? (
                    <label className="roi-no-print mt-2 flex cursor-pointer items-center gap-2 text-xs text-smoke">
                      <input
                        checked={includeUpside}
                        className="accent-amber"
                        onChange={(event) => setIncludeUpside(event.target.checked)}
                        type="checkbox"
                      />
                      Include upside in the headline number
                    </label>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-4 rounded-lg border border-blue/25 bg-blue/[0.08] px-4 py-3">
                <p className="font-display text-[15px] text-white">{paybackHeading}</p>
                <p className="mt-0.5 text-xs text-smoke">
                  Based on {results.numDevices} devices (~{fmtShort(results.deviceCost)}),
                  1 per 10 workers — savings only, upside not counted.
                </p>
              </div>

              <div className="mt-5 grid gap-3.5">
                {categoryRows.map((row) => (
                  <div className="flex items-center gap-3" key={row.name}>
                    <span className="w-6 text-center text-[15px]">{row.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs text-smoke">{row.name}</span>
                        <span className="roi-num font-mono text-[13px] font-bold text-frost">
                          {row.value > 0 ? fmtShort(row.value) : "—"}
                        </span>
                      </div>
                      <div className="mt-1 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue to-amber transition-[width] duration-500"
                          style={{ width: `${(row.value / maxCategory) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="roi-no-print mt-5 border-t border-white/10 pt-4">
                <p className="text-xs text-smoke">How careful should the estimate be?</p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {(Object.keys(CONF_LABELS) as Confidence[]).map((level) => (
                    <button
                      className={cn(
                        "rounded-md border px-2 py-2 text-[11px] font-semibold transition",
                        confidence === level
                          ? "border-white/30 bg-white/[0.1] text-white"
                          : "border-white/10 text-smoke hover:border-white/25 hover:text-frost"
                      )}
                      key={level}
                      onClick={() => setConfidence(level)}
                      type="button"
                    >
                      {CONF_LABELS[level]}
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-smoke/50">
                  Cautious numbers are the easiest to defend.
                </p>
              </div>

              <div className="roi-no-print mt-5 grid gap-2">
                <Link
                  className="rounded-md bg-amber px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-amber transition hover:bg-[#ff7f4a]"
                  href="/request-quote"
                >
                  Request a Quote
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-smoke transition hover:border-amber/35 hover:text-frost"
                    onClick={() => triggerGate("pdf")}
                    type="button"
                  >
                    ⤓ Save as PDF
                  </button>
                  <button
                    className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-smoke transition hover:border-amber/35 hover:text-frost"
                    onClick={() => triggerGate("share")}
                    type="button"
                  >
                    {shareCopied ? "✓ Link copied" : "⇪ Share"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* How we worked it out */}
      <section className="mt-12">
        <h2 className="text-center font-display text-2xl text-white md:text-3xl">
          How we worked it out
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-smoke">
          Every figure comes from your inputs and published RealWear case studies —
          nothing is invented.
        </p>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <div className="roi-card rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke">
              Before vs. after RealWear
            </p>
            {[
              {
                metric: "Annual downtime cost",
                before: results.dtBefore,
                after: results.dtAfter
              },
              {
                metric: "Annual expert travel cost",
                before: results.tvBefore,
                after: results.tvAfter
              }
            ].map((group) => (
              <div className="mb-5 last:mb-0" key={group.metric}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-smoke">
                  {group.metric}
                </p>
                {group.before > 0 ? (
                  [
                    { label: "Now", value: group.before, tone: "bg-red-500/65" },
                    { label: "After", value: group.after, tone: "bg-blue/70" }
                  ].map((bar) => (
                    <div className="mb-1.5 flex items-center gap-2.5" key={bar.label}>
                      <span className="w-11 text-[10px] font-semibold uppercase tracking-[0.1em] text-smoke">
                        {bar.label}
                      </span>
                      <div className="h-5 flex-1 overflow-hidden rounded bg-white/[0.05]">
                        <div
                          className={cn(
                            "flex h-full items-center justify-end rounded pr-2 transition-[width] duration-700",
                            bar.tone
                          )}
                          style={{
                            width: `${(bar.value / Math.max(group.before, 1)) * 100}%`
                          }}
                        >
                          <span className="whitespace-nowrap font-mono text-[10px] font-bold text-white">
                            {fmtShort(bar.value)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-smoke/60">
                    Not counted — switch it on in the steps above.
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="roi-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <p className="border-b border-white/[0.07] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke">
              Savings breakdown &amp; sources
            </p>
            {breakdownRows.map((row) => (
              <div
                className="flex items-start gap-2.5 border-b border-white/[0.04] px-5 py-3 transition last:border-b-0 hover:bg-white/[0.03]"
                key={row.name}
              >
                <span className="w-6 flex-shrink-0 pt-0.5 text-center text-[15px]">
                  {row.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs leading-relaxed text-frost/80">{row.name}</p>
                  <p className="mt-0.5 text-[10px] italic text-smoke/40">{row.source}</p>
                </div>
                <span className="roi-num flex-shrink-0 pt-0.5 font-mono text-[13px] font-bold text-amber">
                  {fmtFull(row.value)}
                </span>
              </div>
            ))}
            <div className="flex justify-between border-t border-amber/20 bg-amber/[0.06] px-5 py-3.5">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-frost">
                Total estimated annual savings
              </span>
              <span className="roi-num font-display text-base text-amber">
                {fmtFull(results.total)}
              </span>
            </div>
            {results.upside > 0 ? (
              <div className="flex items-start justify-between gap-3 border-t border-emerald-400/20 bg-emerald-400/[0.05] px-5 py-3.5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-frost">
                    + Capacity upside
                  </span>
                  <p className="mt-0.5 text-[10px] italic text-smoke/50">
                    {freedHoursLabel} freed hours redeployed at ~
                    {redeployOption.mult}× wage value — your estimate, not a
                    case-study benchmark
                  </p>
                </div>
                <span className="roi-num whitespace-nowrap font-display text-base text-emerald-300">
                  {fmtFull(results.upside)}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="roi-no-print mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-blue/30 bg-gradient-to-r from-blue/20 via-amber/10 to-white/[0.03] p-7">
        <div className="min-w-[200px] flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
            Next step
          </p>
          <p className="mt-2 font-display text-xl text-white md:text-2xl">
            Ready to take this to your leadership team?
          </p>
          <p className="mt-1.5 text-[13px] text-frost/60">
            Save your results as a PDF, then request a quote to finalise your business
            case.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            className="rounded-md border border-white/15 bg-white/[0.05] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-frost transition hover:border-amber/40"
            onClick={() => triggerGate("pdf")}
            type="button"
          >
            ⤓ Save as PDF
          </button>
          <Link
            className="whitespace-nowrap rounded-md bg-amber px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-amber transition hover:-translate-y-px hover:bg-[#ff7f4a]"
            href="/request-quote"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Mobile sticky total bar */}
      <div className="roi-no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-smoke">
              Year 1 savings
            </p>
            <p className="roi-num font-display text-xl leading-tight text-amber [font-variant-numeric:tabular-nums]">
              {fmtFull(headlineTotal)}
            </p>
          </div>
          <a
            className="rounded-md bg-amber px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-amber"
            href="#roi-results"
          >
            See results
          </a>
        </div>
      </div>

      {/* Lead-capture gate */}
      <div
        className={cn(
          "roi-no-print fixed inset-0 z-[500] items-center justify-center bg-graphite/80 p-5 backdrop-blur-md",
          gateOpen ? "flex" : "hidden"
        )}
        onClick={(event) => {
          if (event.target === event.currentTarget) setGateOpen(false);
        }}
      >
        <div className="w-full max-w-md rounded-2xl border border-blue/30 bg-gradient-to-br from-navy/90 to-[#080d16] p-8 shadow-glow">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
            Unlock your report
          </p>
          <p className="mt-2 font-display text-2xl text-white">
            Save &amp; download your ROI summary.
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-frost/55">
            Enter your details to download a PDF of your results — your numbers stay
            exactly as you set them.
          </p>
          <form
            className="mt-5 grid gap-2.5"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="POST"
            name="roi-calculator-lead"
            onSubmit={handleGateSubmit}
          >
            <input name="form-name" type="hidden" value="roi-calculator-lead" />
            <input name="results" type="hidden" value={resultsSummary} />
            <p
              aria-hidden="true"
              style={{
                position: "absolute",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: 0,
                border: 0
              }}
            >
              <label>
                Do not fill this out:{" "}
                <input autoComplete="off" name="bot-field" tabIndex={-1} />
              </label>
            </p>
            <input
              autoComplete="name"
              className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
              name="name"
              placeholder="Full name"
              required
              type="text"
            />
            <input
              autoComplete="organization"
              className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
              name="company"
              placeholder="Company name"
              required
              type="text"
            />
            <input
              autoComplete="email"
              className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
              name="email"
              placeholder="Work email address"
              required
              type="email"
            />
            <input
              autoComplete="tel"
              className="min-h-12 rounded-md border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-smoke/70 focus:border-blue"
              name="phone"
              placeholder="Phone number (optional)"
              type="tel"
            />
            <button
              className="mt-1 min-h-12 rounded-md bg-amber text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-amber transition hover:bg-[#ff7f4a]"
              type="submit"
            >
              Unlock PDF Report →
            </button>
          </form>
          <div className="mt-2.5 text-center">
            <button
              className="text-[11px] text-smoke/40 underline transition hover:text-smoke"
              onClick={() => setGateOpen(false)}
              type="button"
            >
              Continue without saving
            </button>
          </div>
          <p className="mt-1.5 text-center text-[10px] text-smoke/30">
            Shared only with Frontier Wear. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}
