"use client";

import { ArrowRight, GraduationCap, Layers, ShieldCheck } from "lucide-react";

import { Card, Eyebrow, Pill, PulseDot, TabGrid } from "@/components/dashboard/primitives";
import { Icon } from "@/lib/icons";
import { credentials, experience, experienceMetrics, stack } from "@/lib/data";

export default function ExperienceTab({ openEnquiry }) {
  return (
    <TabGrid>
      <Card className="flex flex-col gap-4 rounded-[32px] border border-card-border bg-card p-5 sm:p-6 lg:col-span-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Eyebrow className="flex items-center gap-2 text-neutral-700">
              <PulseDot className="bg-emerald-500" /> Career Trajectory
            </Eyebrow>
            <h3 className="mt-1 text-2xl font-black">Work Experience</h3>
          </div>
          <Pill>3+ Years Pro</Pill>
        </div>

        <ol className="flex flex-1 flex-col gap-5">
          {experience.map((job) => (
            <li key={job.company + job.role} className="relative border-l-2 border-neutral-900/40 pl-5">
              <span className={`absolute top-1.5 -left-[6px] size-2.5 rounded-full ring-4 ring-card ${job.dot}`} />
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-[17px] font-extrabold">{job.company}</h4>
                {job.badge && (
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-black tracking-wider ${job.badgeClass}`}>
                    {job.badge}
                  </span>
                )}
              </div>
              <p className="font-mono text-[11px] text-neutral-500">{job.dates}</p>
              <p className="mt-0.5 text-[13px] font-semibold text-emerald-600">{job.role}</p>
              <p className="mt-2 rounded-xl bg-white/60 p-2 text-[12.5px] leading-relaxed text-neutral-700">{job.desc}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-3 gap-2.5">
          {experienceMetrics.map((m) => (
            <div key={m.label} className="rounded-2xl bg-white/70 p-3 text-center">
              <p className={`text-xl font-black sm:text-2xl ${m.tone}`}>{m.value}</p>
              <p className="mt-1 font-mono text-[11px] leading-snug font-semibold tracking-wide text-zinc-600">{m.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex flex-col gap-3 lg:col-span-5">
        <Card className="rounded-[28px] border border-card-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <Eyebrow className="flex items-center gap-1.5">
              <GraduationCap className="size-3.5" /> Education &amp; Credentials
            </Eyebrow>
            <Pill>
              <ShieldCheck className="size-3" /> Verified
            </Pill>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-extrabold">{credentials.degree.title}</p>
              <span className="font-mono text-[11px] text-neutral-500">{credentials.degree.years}</span>
            </div>
            <p className="text-xs text-neutral-600">{credentials.degree.sub}</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {credentials.badges.map((b) => (
              <a
                key={b.title}
                href={b.href}
                target={b.href === "#" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-2xl bg-white/80 p-2.5 transition-colors hover:bg-white"
              >
                <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${b.tile}`}>
                  <Icon name={b.icon} className="size-4" />
                </span>
                <span className="min-w-0 leading-tight">
                  <b className="block truncate text-[12px] font-bold">{b.title}</b>
                  <span className="block truncate text-[10px] text-neutral-500">{b.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </Card>

        <Card className="flex flex-1 flex-col gap-2 rounded-[28px] border border-card-border bg-card p-4">
          <div className="flex items-center justify-between">
            <Eyebrow className="flex items-center gap-1.5">
              <Layers className="size-3.5" /> Interactive Tech Stack Matrix
            </Eyebrow>
            <Pill>20+ Tools</Pill>
          </div>
          {stack.map((cat) => (
            <div key={cat.title} className="rounded-2xl bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="flex items-center gap-1.5 text-[13px] font-extrabold">
                  <Icon name={cat.icon} className="size-3.5" /> {cat.title}
                </p>
                <span className="font-mono text-[10px] text-neutral-500">{cat.sub}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.chips.map(([label, cls]) => (
                  <span
                    key={label}
                    className={`rounded-md px-2 py-0.5 text-[10px] font-bold transition-transform hover:-translate-y-0.5 ${cls}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Card>

        <button
          type="button"
          onClick={() => openEnquiry("Web Development")}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-800"
        >
          Hire Me for Your Next Build <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </TabGrid>
  );
}
