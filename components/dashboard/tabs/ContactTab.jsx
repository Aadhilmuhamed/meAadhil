"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  History,
  Mail,
  MapPin,
  Send,
  Share2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Card, Eyebrow, Pill, PulseDot, SPOT_LIGHT, TabGrid } from "@/components/dashboard/primitives";
import { Icon } from "@/lib/icons";
import { engagementModels, profile, socials } from "@/lib/data";
import portrait from "@/public/assets/Aadhil2.jpg";

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold transition-colors hover:bg-white hover:text-neutral-900"
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function ContactTab({ openEnquiry }) {
  return (
    <TabGrid>
      <Card
        spotlight={SPOT_LIGHT}
        className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-[32px] border border-clay-border bg-neutral-900 p-5 text-white sm:p-6 lg:col-span-5"
      >
        <Image
          src={portrait}
          alt=""
          placeholder="blur"
          sizes="(min-width: 1024px) 520px, 100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/60 to-neutral-950/90" />

        <div className="relative flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900/30 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <PulseDot /> Available for New Projects &amp; Contract Roles
          </span>
          <span className="font-mono text-[11px] text-white/80">Open to Remote</span>
        </div>

        <div className="relative">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase">Direct Reach</p>
            <h3 className="flex items-center gap-2 text-2xl font-extrabold">
              {profile.name}
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500" title="Verified">
                <Check className="size-3" />
              </span>
            </h3>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-white/85">
              <CheckCircle2 className="size-3.5" /> {profile.role}
            </p>
          </div>
        </div>

        <div className="relative -mx-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-5 pt-10 sm:-mx-6 sm:px-6">
          <h2 className="text-[26px] leading-tight font-extrabold">Let’s build, scale, or migrate your website.</h2>
          <p className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-3 text-[13px] leading-relaxed text-white/90 backdrop-blur-sm">
            Available for AI-powered SaaS products, custom Next.js websites, WordPress &amp; WooCommerce stores and full
            website migrations. Reach out directly for a fast quote.
          </p>
        </div>

        <div className="relative space-y-3 rounded-2xl border border-white/10 bg-neutral-950/30 p-3.5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-white/60 uppercase">Location &amp; Work Model</p>
              <p className="text-[12.5px] font-semibold">
                Colombo, Sri Lanka (GMT+5:30) · Open to Global Remote &amp; Relocation
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="size-4 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[9px] tracking-[0.18em] text-white/60 uppercase">Direct Email</p>
              <a href={`mailto:${profile.email}`} className="block truncate text-[13px] font-bold hover:underline">
                {profile.email}
              </a>
            </div>
            <CopyEmail />
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-3 lg:col-span-7">
        <div className="grid gap-3 sm:grid-cols-2">
          <Card
            as="a"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-[22px] border border-emerald-300 bg-emerald-50 p-3 transition-colors hover:bg-emerald-100"
          >
            <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white">
              <FaWhatsapp className="size-5" />
              <PulseDot className="absolute -top-0.5 -right-0.5 bg-emerald-400 ring-2 ring-emerald-50" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <b className="block text-[13px]">WhatsApp Direct</b>
              <span className="block truncate font-mono text-[11px] text-neutral-600">{profile.phone}</span>
            </span>
            <Pill className="border-emerald-300 bg-white">Online</Pill>
          </Card>
          <Card
            as="a"
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-[22px] border border-sky-200 bg-sky-50 p-3 transition-colors hover:bg-sky-100"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-700 text-white">
              <Mail className="size-5" />
            </span>
            <span className="min-w-0 flex-1 leading-tight">
              <b className="block text-[13px]">Email Project Details</b>
              <span className="block font-mono text-[10px] tracking-tight break-all text-neutral-600">{profile.email}</span>
            </span>
            <Pill className="shrink-0 border-sky-200 bg-white text-sky-800">24h Reply</Pill>
          </Card>
        </div>

        <Card className="rounded-[26px] border border-card-border bg-card p-3.5">
          <div className="mb-2.5 flex items-center justify-between">
            <Eyebrow className="flex items-center gap-1.5">
              <Share2 className="size-3.5" /> Direct Channels &amp; Social Profiles
            </Eyebrow>
            <Pill>{socials.length} Active Profiles</Pill>
          </div>
          <div className="grid w-full grid-cols-3 gap-2">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target={s.href === "#" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-[22px] bg-white/80 p-2.5 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <span className={`grid size-8 place-items-center rounded-xl text-white ${s.tile}`}>
                    <Icon name={s.key} className="size-4" />
                  </span>
                  <ExternalLink className="size-3 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                </div>
                <span className="leading-tight">
                  <b className="block text-[12px] font-bold">{s.name}</b>
                  <span className="block truncate text-[10px] text-neutral-500">{s.handle}</span>
                </span>
                <span className="flex items-center justify-between border-t border-neutral-200 pt-1.5 text-[10px]">
                  <span className="text-neutral-500">{s.metaLabel}</span>
                  <b>{s.meta}</b>
                </span>
              </a>
            ))}
          </div>
        </Card>

        <Card className="rounded-[26px] border border-card-border bg-card p-3.5">
          <div className="mb-2.5 flex items-center justify-between">
            <Eyebrow>Available Engagement Models</Eyebrow>
            <Pill>Immediate Start</Pill>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {engagementModels.map((m) => (
              <button
                key={m.title}
                type="button"
                onClick={() => openEnquiry(m.service)}
                className="flex flex-col gap-1 rounded-2xl border border-transparent bg-white/80 p-2.5 text-left transition-colors hover:border-neutral-900 hover:bg-white"
              >
                <span className="flex items-center gap-1.5 text-[12px] font-bold">
                  <span className={`size-2 rounded-full ${m.dot}`} /> {m.title}
                </span>
                <span className="text-[11px] leading-snug text-neutral-600">{m.desc}</span>
                <span className="mt-auto w-fit rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-bold">{m.pill}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="flex flex-wrap items-center gap-3 rounded-[26px] border border-card-border bg-card p-3.5">
          <span className="grid size-9 place-items-center rounded-xl bg-white">
            <History className="size-4" />
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <b className="flex items-center gap-2 text-[13px]">
              Working Hours &amp; Response SLA <Pill className="py-0">⚡ Priority Reply</Pill>
            </b>
            <span className="block text-[11px] text-neutral-600">
              Monday – Friday (08:00 – 19:00 GMT+5:30) · Emergency escalations supported
            </span>
          </span>
          <span className="inline-flex items-center rounded-full bg-white px-3.5 py-2 text-[12px] leading-none font-bold">
            Reply within 24h
          </span>
        </Card>


        <Card className="rounded-[26px] border border-card-border bg-card-2 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <b className="text-[15px]">Direct Scheduling &amp; Quick Message</b>
              <p className="text-[12px] text-neutral-600">
                Choose your preferred interaction method to get started right away.
              </p>
            </div>
            <Pill>Zero Obligation</Pill>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => openEnquiry("Web Development")}
              className="group flex items-center gap-3 rounded-2xl bg-white p-3 text-left transition-colors hover:bg-neutral-900 hover:text-white"
            >
              <CalendarCheck className="size-5 text-amber-500" />
              <span className="flex-1 leading-tight">
                <b className="block text-[13px]">Request a Discovery Call</b>
                <span className="block text-[11px] opacity-70">Google Meet or Zoom sync</span>
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => openEnquiry()}
              className="group flex items-center gap-3 rounded-2xl bg-neutral-900 p-3 text-left text-white transition-colors hover:bg-neutral-800"
            >
              <Send className="size-5 text-emerald-400" />
              <span className="flex-1 leading-tight">
                <b className="block text-[13px]">Send a Project Enquiry</b>
                <span className="block text-[11px] text-white/70">60-second interactive brief</span>
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Card>
      </div>
    </TabGrid>
  );
}
