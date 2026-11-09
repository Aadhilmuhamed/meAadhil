"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { BsOpenai } from "react-icons/bs";
import { FaNodeJs, FaReact, FaWordpressSimple } from "react-icons/fa6";
import { SiElementor, SiFirebase, SiStripe, SiWoocommerce } from "react-icons/si";

import { profile, withBase } from "@/lib/data";

const pillButton =
  "group inline-flex items-center gap-2 rounded-full border-2 border-neutral-900 bg-white px-4 py-2 text-[13px] font-bold transition-colors hover:bg-neutral-900 hover:text-white sm:px-5";

function StackLogos() {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1">
      <span className="grid size-5 place-items-center rounded-full bg-neutral-900 text-[10px] font-black text-white">N</span>
      <FaReact className="size-4 animate-spin-slow text-sky-500" />
      <FaNodeJs className="size-4 text-emerald-600" />
      <span className="grid size-5 place-items-center rounded bg-indigo-600 text-white" title="Stripe">
        <SiStripe className="size-3" />
      </span>
      <span className="grid size-5 place-items-center rounded bg-blue-600 text-[8px] font-black text-white">TS</span>
      <span className="grid size-5 place-items-center rounded-full bg-sky-700 text-white">
        <FaWordpressSimple className="size-3" />
      </span>
      <span className="grid size-5 place-items-center rounded-full bg-rose-600 text-white" title="Elementor">
        <SiElementor className="size-3" />
      </span>
      <SiWoocommerce className="size-5 text-purple-700" title="WooCommerce" />
      <span className="grid size-5 place-items-center rounded-full bg-neutral-900 text-white" title="OpenAI">
        <BsOpenai className="size-3" />
      </span>
      <SiFirebase className="size-4 text-amber-500" title="Firebase" />
    </div>
  );
}

export default function TopBar({ go, openEnquiry }) {
  return (
    <header className="z-30 flex w-full items-center justify-between gap-3 px-4 pt-4 pb-2.5 sm:px-6">
      <a href={withBase(profile.cv)} download className={pillButton}>
        <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
        Download CV
      </a>

      <button
        type="button"
        onClick={() => go("experience")}
        className="hidden items-center gap-4 rounded-full border border-mint-border bg-mint px-4 py-1.5 transition-shadow hover:shadow-md md:flex"
      >
        <span className="text-xs font-bold">Stacks</span>
        <StackLogos />
        <span className="h-5 w-px bg-emerald-300" />
        <span className="text-left leading-tight">
          <span className="block font-mono text-[9px] text-neutral-500">since {profile.since}</span>
          <span className="block text-xs font-bold">Experience</span>
        </span>
        <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold">
          <b className="font-black">{profile.years}</b> YEARS
        </span>
      </button>

      <button type="button" onClick={() => openEnquiry("Web Development")} className={pillButton}>
        Hire Me
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </header>
  );
}
