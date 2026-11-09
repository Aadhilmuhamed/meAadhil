"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, ListChecks, Mail, Send, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Card, Eyebrow, PulseDot, SPOT_LIGHT, TabGrid } from "@/components/dashboard/primitives";
import { Icon } from "@/lib/icons";
import { deliverables, profile, services } from "@/lib/data";
import portrait from "@/public/assets/Aadhil2.jpg";

export default function ServicesTab({ openEnquiry }) {
  return (
    <TabGrid>
      <Card
        spotlight={SPOT_LIGHT}
        className="relative flex flex-col justify-between gap-5 overflow-hidden rounded-[32px] border border-clay-border bg-neutral-900 p-5 text-white sm:p-6 lg:col-span-4"
      >
        <Image
          src={portrait}
          alt=""
          placeholder="blur"
          sizes="(min-width: 1024px) 420px, 100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/60 to-neutral-950/90" />

        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-neutral-900/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Zap className="size-3.5 text-amber-300" /> High-Impact Delivery
          </span>
          <span className="font-mono text-[11px] text-white/80">Available Now</span>
        </div>

        <div className="relative">
          <h2 className="text-3xl leading-tight font-extrabold">
            Web, AI SaaS &amp; E-Commerce
            <span className="block font-serif text-4xl font-normal italic">What I Build</span>
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-white/85">
            AI-powered SaaS platforms, fast business websites, WooCommerce stores and safe website migrations, built
            for speed, scale and growth.
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
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-600/80 py-2.5 text-sm font-semibold transition-colors hover:bg-emerald-600"
          >
            <FaWhatsapp className="size-4" /> Chat on WhatsApp
          </a>
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

        <Card className="flex flex-col gap-3 rounded-[26px] border border-card-border bg-card-2 p-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
              <PulseDot className="bg-emerald-500" /> Available for New Projects &amp; Migrations
            </span>
            <h3 className="mt-2 text-[17px] font-extrabold">Have a website to build, upgrade or migrate?</h3>
            <p className="text-[12.5px] text-neutral-700">
              Send your project details on WhatsApp or email and get a clear timeline and quote within 24 hours.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-emerald-700"
            >
              <FaWhatsapp className="size-4" /> WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-neutral-900 bg-white py-2 text-[13px] font-bold transition-colors hover:bg-neutral-900 hover:text-white"
            >
              <Mail className="size-4" /> Email Me
            </a>
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-neutral-800"
            >
              <Send className="size-4" /> Send Enquiry
            </button>
          </div>
        </Card>
      </div>
    </TabGrid>
  );
}
