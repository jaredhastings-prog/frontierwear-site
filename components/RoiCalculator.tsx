"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

import { cn } from "@/lib/utils";

type Confidence = "conservative" | "moderate" | "optimistic";

type PainId =
  | "downtime"
  | "travel"
  | "training"
  | "errors"
  | "safety"
  | "knowledge";

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
  conservative: "Conservative",
  moderate: "Moderate",
  optimistic: "Optimistic"
};

const PAIN_OPTIONS: Array<{ id: PainId; label: string }> = [
  { id: "downtime", label: "⚡ Equipment Downtime" },
  { id: "travel", label: "✈️ Expert Travel" },
  { id: "training", label: "📋 Slow Onboarding" },
  { id: "errors", label: "❌ Errors & Rework" },
  { id: "safety", label: "🦺 Safety Incidents" },
  { id: "knowledge", label: "🧠 Knowledge Loss" }
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

function fmtFull(n: number) {
  return "$" + Math.round(n).toLocaleString("en-AU");
}

function fmtShort(n: number) {
  if (n >= 1000000) return "$" + (n / 1e6).toFixed(1) + "M";
  if (n >= 1000) return "$" + Math.round(n / 1000) + "K";
  return "$" + Math.round(n);
}

function calculate(inputs: Inputs, pains: Set<PainId>, confidence: Confidence) {
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
  const rampCostPerHire = inputs.onboard * 40 * inputs.rate * 0.35;
  const trainSaving =
    pains.has("training") || pains.has("knowledge")
      ? inputs.hires * rampCostPerHire * bench("rampReduction")
      : 0;

  // 4. Productivity — scoped to info-delay hours only
  const prodSaving =
    inputs.infoHrs > 0
      ? inputs.workers * inputs.infoHrs * inputs.weeks * inputs.rate * bench("infoRecovery")
      : 0;

  const total = dtSaving + travelSaving + trainSaving + prodSaving;
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
  ticks: string[];
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
  ticks,
  hint,
  onChange
}: SliderRowProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-smoke">
          {label}
        </span>
        <span className="font-display text-xl text-amber">{display}</span>
      </div>
      <input
        aria-label={label}
        className="roi-range mt-2"
        max={max}
        min={min}
        onChange={(event) => onChange(parseFloat(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-smoke/40">
        {ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
      {hint ? (
        <p className="mt-1 text-[11px] leading-snug text-smoke/50">{hint}</p>
      ) : null}
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="roi-card rounded-2xl border border-white/10 bg-white/[0.055] p-5">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke">
        {title}
      </p>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [pains, setPains] = useState<Set<PainId>>(
    () => new Set<PainId>(["downtime", "travel", "training"])
  );
  const [confidence, setConfidence] = useState<Confidence>("conservative");

  const [gateOpen, setGateOpen] = useState(false);
  const [gateShown, setGateShown] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [pendingAction, setPendingAction] = useState<"pdf" | "share" | null>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [timerSec, setTimerSec] = useState(0);

  const results = useMemo(
    () => calculate(inputs, pains, confidence),
    [inputs, pains, confidence]
  );

  useEffect(() => {
    const timer = setInterval(() => setTimerSec((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timerSec === 60 && !gateShown && !leadCaptured) {
      setGateShown(true);
      setGateOpen(true);
    }
  }, [timerSec, gateShown, leadCaptured]);

  const setInput = (key: keyof Inputs) => (value: number) =>
    setInputs((previous) => ({ ...previous, [key]: value }));

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
    setGateShown(true);
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

  const resultsSummary = [
    `Total: ${fmtFull(results.total)}`,
    `Confidence: ${confLabel}`,
    `Payback months: ${results.paybackMonths.toFixed(1)}`,
    `Devices: ${results.numDevices}`,
    `Workers: ${inputs.workers}`,
    `Downtime saving: ${fmtFull(results.dtSaving)}`,
    `Travel saving: ${fmtFull(results.travelSaving)}`,
    `Training saving: ${fmtFull(results.trainSaving)}`,
    `Productivity saving: ${fmtFull(results.prodSaving)}`
  ].join(" | ");

  const statCards = [
    {
      tag: "⚡ Downtime",
      value: results.dtSaving,
      label: "Saved on expert-escalation events"
    },
    {
      tag: "✈️ Travel",
      value: results.travelSaving,
      label: "Expert visit costs eliminated"
    },
    {
      tag: "📋 Training",
      value: results.trainSaving,
      label: "Faster ramp-to-productivity"
    },
    {
      tag: "🔧 Productivity",
      value: results.prodSaving,
      label: "Information delay hours recovered"
    }
  ];
  const maxStat = Math.max(...statCards.map((card) => card.value), 1);

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
      ? "Set your inputs to calculate payback"
      : results.paybackMonths < 3
        ? "Payback in under 3 months"
        : results.paybackMonths < 12
          ? `Payback in approximately ${Math.round(results.paybackMonths)} months`
          : `Payback in ${(results.paybackMonths / 12).toFixed(1)} years`;

  return (
    <div>
      <style>{`
        .roi-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 3px;
          outline: none;
          cursor: pointer;
        }
        .roi-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff6c2f;
          border: 3px solid #1a2030;
          box-shadow: 0 1px 8px rgba(255, 108, 47, 0.45);
          cursor: pointer;
          transition: transform 0.1s;
        }
        .roi-range::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .roi-range::-moz-range-thumb {
          width: 20px;
          height: 20px;
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
          .roi-input-panel {
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

      {/* Pain point chips */}
      <div className="roi-no-print flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-smoke">
          I need to fix:
        </span>
        {PAIN_OPTIONS.map((pain) => (
          <button
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] transition",
              pains.has(pain.id)
                ? "border-blue/45 bg-blue/15 text-frost"
                : "border-white/10 bg-white/[0.04] text-smoke hover:border-blue/40 hover:text-frost"
            )}
            key={pain.id}
            onClick={() => togglePain(pain.id)}
            type="button"
          >
            {pain.label}
          </button>
        ))}
      </div>

      {/* Confidence toggle */}
      <div className="roi-no-print mt-4 flex flex-wrap items-center gap-2.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-smoke">
          Confidence:
        </span>
        {(Object.keys(CONF_LABELS) as Confidence[]).map((level) => (
          <button
            className={cn(
              "rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition",
              confidence === level
                ? "border-white/25 bg-white/[0.07] text-white"
                : "border-white/10 text-smoke hover:border-white/25 hover:text-frost"
            )}
            key={level}
            onClick={() => setConfidence(level)}
            type="button"
          >
            {level === "conservative" ? "🛡 " : level === "moderate" ? "⚖ " : "🚀 "}
            {CONF_LABELS[level]}
          </button>
        ))}
        <span className="text-[11px] text-smoke/40">
          Conservative figures are easiest to defend to a CFO
        </span>
      </div>

      {/* Split layout */}
      <div className="roi-split mt-6 grid items-start gap-5 lg:grid-cols-[380px_1fr]">
        {/* Left: inputs */}
        <div className="roi-input-panel grid gap-3.5 lg:sticky lg:top-28">
          <Panel title="Your Team">
            <SliderRow
              display={String(inputs.workers)}
              label="Frontline workers"
              max={500}
              min={5}
              onChange={setInput("workers")}
              step={5}
              ticks={["5", "100", "200", "300", "500"]}
              value={inputs.workers}
            />
            <SliderRow
              display={`$${inputs.rate}`}
              hint="Include super and allowances"
              label="Average hourly wage (AUD)"
              max={150}
              min={25}
              onChange={setInput("rate")}
              step={5}
              ticks={["$25", "$60", "$100", "$150"]}
              value={inputs.rate}
            />
            <SliderRow
              display={`${inputs.weeks} wks`}
              label="Working weeks per year"
              max={52}
              min={30}
              onChange={setInput("weeks")}
              ticks={["30", "36", "42", "48", "52"]}
              value={inputs.weeks}
            />
          </Panel>

          <Panel title="Expert Visits">
            <SliderRow
              display={`${inputs.visits} /mo`}
              label="Expert visits to site / month"
              max={40}
              min={1}
              onChange={setInput("visits")}
              ticks={["1", "10", "20", "30", "40"]}
              value={inputs.visits}
            />
            <SliderRow
              display={`$${inputs.visitCost.toLocaleString("en-AU")}`}
              hint="Flights, accommodation, lost time"
              label="Avg cost per visit (AUD)"
              max={15000}
              min={500}
              onChange={setInput("visitCost")}
              step={250}
              ticks={["$500", "$5K", "$10K", "$15K"]}
              value={inputs.visitCost}
            />
            <SliderRow
              display={`${inputs.visitPct}%`}
              hint="Exclude planned commissioning or hands-on installs"
              label="% replaceable remotely"
              max={90}
              min={10}
              onChange={setInput("visitPct")}
              step={5}
              ticks={["10%", "30%", "55%", "75%", "90%"]}
              value={inputs.visitPct}
            />
          </Panel>

          <Panel title="Downtime">
            <SliderRow
              display={`${inputs.dtEvents} events`}
              label="Unplanned events / month"
              max={60}
              min={0}
              onChange={setInput("dtEvents")}
              ticks={["0", "15", "30", "45", "60"]}
              value={inputs.dtEvents}
            />
            <SliderRow
              display={`${inputs.dtHours} hrs`}
              label="Avg hours to resolve"
              max={24}
              min={0.5}
              onChange={setInput("dtHours")}
              step={0.5}
              ticks={["0.5h", "6h", "12h", "18h", "24h"]}
              value={inputs.dtHours}
            />
            <SliderRow
              display={`$${inputs.dtCost.toLocaleString("en-AU")}`}
              hint="Lost production, idle labour, penalties"
              label="Cost per downtime hour (AUD)"
              max={100000}
              min={500}
              onChange={setInput("dtCost")}
              step={500}
              ticks={["$500", "$25K", "$50K", "$100K"]}
              value={inputs.dtCost}
            />
            <SliderRow
              display={`${inputs.dtPct}%`}
              hint="Mechanical-only faults excluded"
              label="% of events needing remote expert"
              max={90}
              min={10}
              onChange={setInput("dtPct")}
              step={5}
              ticks={["10%", "30%", "50%", "70%", "90%"]}
              value={inputs.dtPct}
            />
          </Panel>

          <Panel title="Training & Productivity">
            <SliderRow
              display={String(inputs.hires)}
              label="New workers onboarded / year"
              max={100}
              min={0}
              onChange={setInput("hires")}
              ticks={["0", "25", "50", "75", "100"]}
              value={inputs.hires}
            />
            <SliderRow
              display={`${inputs.onboard} wks`}
              label="Weeks to full productivity"
              max={26}
              min={1}
              onChange={setInput("onboard")}
              ticks={["1", "6", "12", "18", "26"]}
              value={inputs.onboard}
            />
            <SliderRow
              display={`${inputs.infoHrs} hrs`}
              hint="Searching manuals, waiting for approvals, walking to check equipment"
              label="Info-delay hrs / worker / week"
              max={15}
              min={0}
              onChange={setInput("infoHrs")}
              step={0.5}
              ticks={["0", "4", "8", "12", "15"]}
              value={inputs.infoHrs}
            />
          </Panel>
        </div>

        {/* Right: results */}
        <div className="grid gap-3.5">
          <div className="roi-card relative overflow-hidden rounded-2xl border border-amber/20 bg-gradient-to-br from-amber/10 via-graphite/85 to-navy/25 p-7 shadow-amber">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
              Estimated Year 1 Return · {confLabel}
            </p>
            <p className="roi-num mt-2 font-display text-5xl leading-none text-white [font-variant-numeric:tabular-nums] md:text-7xl">
              {fmtFull(results.total)}
            </p>
            <p className="mt-1 text-[13px] text-frost/45">Based on your inputs</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] text-frost/60">
                <strong className="text-white">{results.numDevices}</strong> devices
                recommended
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] text-frost/60">
                Investment: {fmtShort(results.deviceCost)}
              </span>
              {pains.has("safety") ? (
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] text-frost/60">
                  + Safety uplift (unquantified)
                </span>
              ) : null}
            </div>
          </div>

          <div className="roi-card flex items-center gap-3.5 rounded-xl border border-blue/25 bg-blue/[0.07] px-5 py-4 shadow-glow">
            <span className="text-xl">✅</span>
            <div>
              <p className="font-display text-[15px] text-white">{paybackHeading}</p>
              <p className="text-[11px] text-smoke">
                Estimated device investment: {fmtFull(results.deviceCost)} for{" "}
                {results.numDevices} units (1 per 10 workers, min. 2)
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {statCards.map((card) => (
              <div
                className="roi-card rounded-xl border border-white/10 bg-white/[0.055] p-4 transition hover:border-blue/30"
                key={card.tag}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-smoke">
                  {card.tag}
                </p>
                <p className="roi-num mt-2 font-display text-2xl leading-none text-amber [font-variant-numeric:tabular-nums]">
                  {fmtFull(card.value)}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-smoke">{card.label}</p>
                <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue to-amber transition-[width] duration-500"
                    style={{ width: `${(card.value / maxStat) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="roi-card rounded-2xl border border-white/10 bg-white/[0.055] p-5">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke">
              Before vs. After RealWear
            </p>
            {[
              {
                metric: "Annual Downtime Cost",
                before: results.dtBefore,
                after: results.dtAfter
              },
              {
                metric: "Annual Expert Travel Cost",
                before: results.tvBefore,
                after: results.tvAfter
              }
            ].map((group) => (
              <div className="mb-4 last:mb-0" key={group.metric}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-smoke">
                  {group.metric}
                </p>
                {[
                  { label: "Before", value: group.before, tone: "bg-red-500/65" },
                  { label: "After", value: group.after, tone: "bg-blue/70" }
                ].map((bar) => (
                  <div className="mb-1 flex items-center gap-2.5" key={bar.label}>
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
                ))}
              </div>
            ))}
          </div>

          <div className="roi-card overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <p className="border-b border-white/[0.07] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke">
              Savings breakdown &amp; sources
            </p>
            {breakdownRows.map((row) => (
              <div
                className="flex items-start gap-2.5 border-b border-white/[0.04] px-4 py-3 transition last:border-b-0 hover:bg-white/[0.03]"
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
            <div className="flex justify-between border-t border-amber/20 bg-amber/[0.06] px-4 py-3.5">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-frost">
                Total estimated annual return
              </span>
              <span className="roi-num font-display text-base text-amber">
                {fmtFull(results.total)}
              </span>
            </div>
          </div>

          <div className="roi-no-print flex flex-wrap gap-2.5">
            <button
              className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-smoke transition hover:border-amber/35 hover:text-frost"
              onClick={() => triggerGate("pdf")}
              type="button"
            >
              ⤓ Download PDF
            </button>
            <button
              className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-smoke transition hover:border-amber/35 hover:text-frost"
              onClick={() => triggerGate("share")}
              type="button"
            >
              {shareCopied ? "✓ Link copied" : "⇪ Share results"}
            </button>
          </div>

          <div className="roi-no-print flex flex-wrap items-center gap-6 rounded-2xl border border-blue/30 bg-gradient-to-r from-blue/20 via-amber/10 to-white/[0.03] p-7">
            <div className="min-w-[200px] flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber">
                Deployment next steps
              </p>
              <p className="mt-2 font-display text-xl text-white md:text-2xl">
                Ready to take this to your leadership team?
              </p>
              <p className="mt-1.5 text-[13px] text-frost/60">
                Request a quote from our team to finalise your business case.
              </p>
            </div>
            <Link
              className="whitespace-nowrap rounded-md bg-amber px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-amber transition hover:-translate-y-px hover:bg-[#ff7f4a]"
              href="/request-quote"
            >
              Request a Quote
            </Link>
          </div>
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
