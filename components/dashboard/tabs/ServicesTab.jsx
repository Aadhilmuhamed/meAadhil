"use client";

import { ArrowRight, CalendarCheck, CheckCircle2, CircleHelp, ListChecks, Zap } from "lucide-react";

import { Card, Eyebrow, PulseDot, SPOT_LIGHT, TabGrid } from "@/components/dashboard/primitives";
import { Icon } from "@/lib/icons";
import { deliverables, services } from "@/lib/data";

export default function ServicesTab({ openEnquiry }) {
  return (
    <TabGrid>
      <Card
        spotlight={SPOT_LIGHT}
        className="relative flex flex-col justify-between gap-5 overflow-hidden rounded-[32px] border border-clay-border bg-clay p-5 text-white sm:p-6 lg:col-span-4"
      >
        <div className="pointer-events-none absolute -top-16 -right-16 size-52 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 size-44 rounded-full bg-black/10 blur-xl" />

        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-neutral-900/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Zap className="size-3.5 text-amber-300" /> High-Impact Delivery
          </span>
          <span className="font-mono text-[11px] text-white/80">Q2 Availability</span>
        </div>

        <div className="relative">
          <h2 className="text-3xl leading-tight font-extrabold">
            Services &amp; Offerings
            <span className="block font-serif text-4xl font-normal italic">What I Build</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-white/85">
            From scalable web architectures to high-converting user interfaces. Engineering tailor-made digital systems
            with production reliability.
          </p>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-black/10 p-3.5">
          <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] uppercase">
            <ListChecks className="size-3.5" /> Deliverables Checklist
          </p>
          <ul className="space-y-2">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[12.5px] leading-snug">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-300" /> {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col gap-2">
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white py-2.5 text-sm font-bold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Request Service <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => openEnquiry("Web Development")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-neutral-900/40 py-2.5 text-sm font-semibold transition-colors hover:bg-neutral-900/70"
          >
            <CalendarCheck className="size-4" /> Book Architecture Consultation
          </button>
        </div>
      </Card>

      <div className="flex flex-col gap-3 lg:col-span-8">
        <Card className="flex items-center justify-between rounded-[22px] border border-card-border bg-card px-4 py-2.5">
          <Eyebrow className="flex items-center gap-2 text-neutral-700">
            <PulseDot className="bg-emerald-500" /> Capabilities Spectrum
          </Eyebrow>
          <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold">
            4 Specializations • End-to-End
          </span>
        </Card>

        <div className="grid flex-1 gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group flex flex-col gap-3 rounded-[26px] border border-card-border bg-card p-4 transition-colors hover:border-neutral-400 hover:bg-card-hover"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`grid size-9 place-items-center rounded-xl text-white transition-transform group-hover:scale-110 ${s.tile}`}
                >
                  <Icon name={s.icon} className="size-4" />
                </span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${s.tagClass}`}>{s.tag}</span>
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold">{s.title}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-700">{s.desc}</p>
              </div>
              <ul className="space-y-1.5">
                {s.checks.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-[12px] font-medium">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> {c}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-neutral-400/30 pt-3">
                <span className="font-mono text-[10px] text-neutral-500">{s.footer}</span>
                <button
                  type="button"
                  onClick={() => openEnquiry(s.preset)}
                  className="group/btn inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  Select Service <ArrowRight className="size-3 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="flex flex-wrap items-center justify-between gap-2 rounded-[22px] border border-card-border bg-card-2 px-4 py-3">
          <span className="flex items-center gap-2 text-[13px] font-semibold">
            <CircleHelp className="size-4" /> Need a combined stack or unlisted bespoke service?
          </span>
          <button type="button" onClick={() => openEnquiry()} className="text-[13px] font-bold underline underline-offset-4">
            Request Custom Scope →
          </button>
        </Card>
      </div>
    </TabGrid>
  );
}
