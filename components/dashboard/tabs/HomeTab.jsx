"use client";

import Image from "next/image";
import { ArrowRight, BadgeCheck, CheckCircle2, Code, GraduationCap, Award, CheckCheck, Zap } from "lucide-react";

import { Card, Eyebrow, Item, PulseDot, SPOT_LIGHT, TabGrid } from "@/components/dashboard/primitives";
import { Icon } from "@/lib/icons";
import { coreExpertise, credentials, featuredBuilds, miniStats, profile, terminalLines } from "@/lib/data";
import portrait from "@/public/assets/Aadhil2.jpg";

function HeroCard() {
  return (
    <Card
      spotlight={SPOT_LIGHT}
      className="group relative flex min-h-[600px] flex-col justify-between overflow-hidden rounded-[32px] p-4 text-white sm:p-5 lg:col-span-5"
      style={{ background: "linear-gradient(145deg, #fbcfe8 0%, #f472b6 22%, #fed7aa 48%, #bbf7d0 78%, #86efac 100%)" }}
    >
      <Image
        src={portrait}
        alt="Portrait of Aadhil Muhamed"
        priority
        placeholder="blur"
        sizes="(min-width: 1024px) 520px, 100vw"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f472b6]/25 via-transparent to-neutral-950/70" />

      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900/60 px-3 py-1 text-xs font-semibold backdrop-blur-md">
          <PulseDot />
          {profile.status}
        </span>
        <span className="rounded-full bg-white px-3 py-1 font-mono text-[11px] font-semibold text-neutral-900">
          {profile.location}
        </span>
      </div>

      <div className="relative space-y-3">
        <div className="rounded-[24px] border border-white/10 bg-neutral-950/60 p-4 backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500/80 to-emerald-500/80 px-2.5 py-0.5 text-[11px] font-bold">
              <Code className="size-3" /> {profile.tag}
              <span className="grid size-4 place-items-center rounded-full bg-emerald-500">
                <CheckCircle2 className="size-3" />
              </span>
            </span>
            <span className="text-[11px] font-semibold text-white/70">{profile.role}</span>
          </div>
          <h3 className="text-2xl font-extrabold sm:text-3xl">{profile.name}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/80">{profile.bio}</p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-neutral-950/75 p-3 font-mono text-[11px]">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="ml-2 text-white/50">stack-orchestrator.ts</span>
          </div>
          {terminalLines.map((l) => (
            <p key={l.text} className={l.tone}>
              {l.text}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function HomeTab({ go, openEnquiry }) {
  return (
    <TabGrid>
      <HeroCard />

      <div className="flex flex-col justify-between gap-3 sm:gap-3.5 lg:col-span-7">
        <Item className="px-1">
          <h1 className="text-3xl font-normal sm:text-4xl lg:text-[46px] lg:leading-[1.1]">
            I&apos;m <span className="font-serif italic">{profile.first}</span>
          </h1>
          <h2 className="text-2xl font-extrabold tracking-tight lg:text-3xl">{profile.role}</h2>
        </Item>

        <Card className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[22px] border border-card-border bg-card px-4 py-2.5">
          <Eyebrow className="inline-flex items-center gap-2 text-neutral-700">
            <PulseDot className="bg-emerald-500" /> Production Focus
          </Eyebrow>
          <span className="text-[13px] font-semibold">• AI SaaS, Next.js Web Apps, WooCommerce &amp; Migrations</span>
          <span className="ml-auto rounded-full border border-emerald-200 bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
            99.9% Uptime
          </span>
        </Card>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Card className="flex-1 rounded-[26px] border border-card-border bg-card p-4">
            <p className="text-[14px] leading-relaxed text-neutral-800">{profile.pitch}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-semibold">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-600" /> AI &amp; SaaS Ready
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-600" /> WordPress &amp; WooCommerce
              </span>
            </div>
          </Card>
          <Card className="flex flex-col justify-between rounded-[26px] border border-card-border bg-card p-4 sm:w-44">
            <Eyebrow>Fast Delivery</Eyebrow>
            <p className="flex items-center gap-1.5 text-4xl font-black">
              30% <Zap className="size-6 fill-amber-400 text-amber-500" />
            </p>
            <p className="text-xs font-semibold text-neutral-600">Faster APIs &amp; Load</p>
          </Card>
        </div>

        <Card className="flex flex-wrap items-center gap-2 rounded-[24px] border border-card-border bg-card px-4 py-3">
          <Eyebrow className="mr-1">Core Expertise</Eyebrow>
          {coreExpertise.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => go("services")}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold transition-colors hover:bg-neutral-900 hover:text-white"
            >
              {chip}
            </button>
          ))}
        </Card>

        <div className="grid grid-cols-3 gap-2.5">
          {miniStats.map((s) => (
            <Card key={s.label} className="flex items-center gap-2.5 rounded-[20px] border border-card-border bg-card p-2.5">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-white">
                <Icon name={s.icon} className="size-4" />
              </span>
              <span className="min-w-0 leading-tight">
                <b className="block truncate text-sm font-black">{s.value}</b>
                <span className="block truncate text-[10px] font-semibold text-neutral-600">{s.label}</span>
              </span>
            </Card>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-12">
          <Card
            as="button"
            type="button"
            onClick={() => go("experience")}
            className="rounded-[26px] border border-card-border bg-card p-4 text-left transition-colors hover:border-neutral-400 sm:col-span-5"
          >
            <Eyebrow className="flex items-center gap-1.5">
              <GraduationCap className="size-3.5" /> Qualifications
            </Eyebrow>
            <p className="mt-2 text-[15px] font-extrabold">{credentials.degree.title}</p>
            <p className="text-xs text-neutral-600">Higher National Diploma ({credentials.degree.years})</p>
            <div className="my-3 h-px bg-neutral-400/40" />
            <p className="flex items-center gap-1.5 text-xs font-bold">
              <Award className="size-3.5 text-amber-600" /> IBM Enterprise Thinking
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-bold">
              <CheckCheck className="size-3.5 text-emerald-600" /> freeCodeCamp Full-Stack
            </p>
          </Card>

          <Card className="flex flex-col gap-2 rounded-[26px] border border-card-border bg-card-2 p-4 sm:col-span-7">
            <div className="flex items-center justify-between">
              <Eyebrow>Featured Builds</Eyebrow>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-bold">
                <BadgeCheck className="size-3 text-emerald-600" /> Production Ready
              </span>
            </div>
            {featuredBuilds.map((b) => (
              <button
                key={b.title}
                type="button"
                onClick={() => openEnquiry("Web Development")}
                className="group/row flex items-center gap-3 rounded-xl bg-white/80 p-2 text-left transition-colors hover:bg-white"
              >
                <span
                  className={`grid size-9 place-items-center rounded-lg text-white ${b.dark ? "bg-neutral-900" : "bg-emerald-600"}`}
                >
                  <Icon name={b.icon} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-[13px] font-bold">{b.title}</b>
                  <span className="block truncate font-mono text-[10px] text-neutral-500">{b.stack}</span>
                </span>
                <ArrowRight className="size-4 transition-transform group-hover/row:translate-x-1" />
              </button>
            ))}
            <div className="mt-auto flex items-center justify-between pt-1 text-xs">
              <span className="text-neutral-600">Looking for an engineer?</span>
              <button type="button" onClick={() => go("contact")} className="font-bold underline underline-offset-4">
                Get in touch →
              </button>
            </div>
          </Card>
        </div>
      </div>
    </TabGrid>
  );
}
