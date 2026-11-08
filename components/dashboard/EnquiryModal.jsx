"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "radix-ui";
import { ArrowRight, CircleCheck, Clock, Loader2, MessageSquare, Save, X } from "lucide-react";
import { toast } from "sonner";

import { Icon } from "@/lib/icons";
import { budgets, enquiryServices, profile, timelines } from "@/lib/data";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { cn } from "@/lib/utils";

const DRAFT_KEY = "enquiry-draft";
const MAX_MSG = 300;
const EMPTY = {
  services: ["Web Development", "UI/UX Design"],
  budget: "$500 - $2,000",
  timeline: "1-month",
  name: "",
  email: "",
  message: "",
};

function readDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : null;
  } catch {
    return null;
  }
}

function scoreOf(f) {
  return (
    (f.services.length ? 30 : 0) +
    (f.budget ? 20 : 0) +
    (f.name.trim() ? 15 : 0) +
    (f.email.includes("@") ? 15 : 0) +
    (f.message.trim().length > 10 ? 20 : 0)
  );
}

function Section({ step, title, hint, children }) {
  return (
    <fieldset className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
      <legend className="sr-only">{title}</legend>
      <div className="mb-2.5 flex items-center justify-between">
        <p className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.16em] text-neutral-600 uppercase">
          <span className="grid size-4 place-items-center rounded-full bg-neutral-900 text-[9px] text-white">{step}</span>
          {title}
        </p>
        <span className="text-[10px] text-neutral-400">{hint}</span>
      </div>
      {children}
    </fieldset>
  );
}

const inputCls =
  "w-full rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-[13px] outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900";

// Mounted fresh on every open, so the draft + preset are read once in the initializer
function initialForm(preset) {
  const base = readDraft() ?? EMPTY;
  const services = preset && !base.services.includes(preset) ? [...base.services, preset] : base.services;
  return { ...base, services };
}

function EnquiryForm({ preset, onClose }) {
  const [form, setForm] = useState(() => initialForm(preset));
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleService = (value) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(value) ? f.services.filter((s) => s !== value) : [...f.services, value],
    }));

  const score = scoreOf(form);

  const saveDraft = () => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
      toast.success("Project draft saved to local browser cache.");
    } catch {
      toast.error("Could not save draft in this browser.");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.services.length) {
      toast.error("Pick at least one service.");
      return;
    }
    setSending(true);
    try {
      await submitEnquiry(form);
      try {
        localStorage.removeItem(DRAFT_KEY);
      } catch {}
      toast.success("Inquiry sent successfully!", {
        description: `${profile.first} will reach out within 2 hours.`,
      });
      setTimeout(onClose, 900);
    } catch (err) {
      toast.error("Could not send enquiry.", {
        description: err.message,
        action: { label: "Email instead", onClick: () => (window.location.href = `mailto:${profile.email}`) },
      });
    } finally {
      setSending(false);
    }
  };

  return (
              <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="flex max-h-[96%] w-full max-w-3xl flex-col rounded-[30px] border-2 border-neutral-900 bg-white p-4 shadow-2xl sm:rounded-[36px] sm:p-6"
              >
                {/* Header */}
                <div className="mb-3 flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-neutral-900 text-white">
                    <MessageSquare className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Dialog.Title className="text-lg font-extrabold sm:text-xl">
                        Start a Project / Hire {profile.first}
                      </Dialog.Title>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-mint-border bg-mint px-2 py-0.5 text-[10px] font-bold text-mint-ink">
                        <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Open Slot
                      </span>
                    </div>
                    <p id="enquiry-desc" className="text-[12px] text-neutral-500">
                      Direct collaboration &amp; fast delivery • Typically responds in &lt; 2 hrs
                    </p>
                  </div>
                  <Dialog.Close
                    aria-label="Close"
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
                  >
                    <X className="size-4" />
                  </Dialog.Close>
                </div>

                {/* Body */}
                <div className="custom-scroll -mr-2 flex-1 space-y-2.5 overflow-y-auto pr-2">
                  <Section step="1" title="Services Selection" hint="Select one or multiple">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                      {enquiryServices.map((s) => {
                        const on = form.services.includes(s.value);
                        return (
                          <button
                            key={s.value}
                            type="button"
                            aria-pressed={on}
                            onClick={() => toggleService(s.value)}
                            className={cn(
                              "flex items-center gap-2 rounded-xl px-3 py-2 text-[12px] font-bold transition-colors",
                              on
                                ? "border-2 border-neutral-900 bg-neutral-900 text-white"
                                : "border-2 border-neutral-300 bg-white hover:border-neutral-500"
                            )}
                          >
                            <Icon name={s.icon} className={cn("size-3.5", on ? s.on : "text-neutral-400")} />
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </Section>

                  <Section step="2" title="Budget & Target Timeline" hint="Estimated project scale">
                    <div className="grid gap-2 sm:grid-cols-12">
                      <div role="radiogroup" aria-label="Budget" className="grid grid-cols-2 gap-2 sm:col-span-8 sm:grid-cols-4">
                        {budgets.map((b) => {
                          const on = form.budget === b.value;
                          return (
                            <button
                              key={b.value}
                              type="button"
                              role="radio"
                              aria-checked={on}
                              onClick={() => setForm((f) => ({ ...f, budget: b.value }))}
                              className={cn(
                                "rounded-xl border-2 px-2 py-1.5 text-center transition-colors",
                                on ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white hover:border-neutral-500"
                              )}
                            >
                              <b className="block text-[13px]">{b.label}</b>
                              <span className={cn("block text-[10px]", on ? "text-white/70" : "text-neutral-500")}>{b.sub}</span>
                            </button>
                          );
                        })}
                      </div>
                      <label className="sm:col-span-4">
                        <span className="sr-only">Timeline</span>
                        <select value={form.timeline} onChange={set("timeline")} className={cn(inputCls, "h-full font-semibold")}>
                          {timelines.map((t) => (
                            <option key={t.value} value={t.value}>
                              Timeline: {t.label}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </Section>

                  <Section step="3" title="Contact & Project Scope" hint="step 3 of 3">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <input
                        required
                        aria-label="Your name or company"
                        autoComplete="name"
                        maxLength={120}
                        placeholder="Your Name or Company"
                        value={form.name}
                        onChange={set("name")}
                        className={inputCls}
                      />
                      <input
                        required
                        type="email"
                        aria-label="Email"
                        autoComplete="email"
                        maxLength={160}
                        placeholder="your.email@company.com"
                        value={form.email}
                        onChange={set("email")}
                        className={inputCls}
                      />
                    </div>
                    <div className="relative mt-2">
                      <textarea
                        rows={2}
                        aria-label="Project summary"
                        maxLength={MAX_MSG}
                        placeholder="Briefly outline your needs (Web App, WordPress/WooCommerce, UI/UX, SEO, or Marketing goals & links)..."
                        value={form.message}
                        onChange={set("message")}
                        className={cn(inputCls, "resize-none pb-6")}
                      />
                      <span className="absolute right-3 bottom-2 font-mono text-[10px] text-neutral-400">
                        {form.message.length}/{MAX_MSG}
                      </span>
                    </div>
                  </Section>
                </div>

                {/* Footer */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-3">
                  <div className="flex items-center gap-3">
                    <div className="leading-none">
                      <b className="text-sm tabular-nums">{score}%</b>
                      <span className="block font-mono text-[9px] text-neutral-500">
                        {score === 100 ? "READY" : "COMPLETE"}
                      </span>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-neutral-200 sm:w-32">
                      <motion.div
                        className="h-full rounded-full bg-emerald-500"
                        animate={{ width: `${score}%` }}
                        transition={{ type: "spring", stiffness: 200, damping: 26 }}
                      />
                    </div>
                    <span className="hidden items-center gap-3 text-[11px] font-semibold text-neutral-500 md:flex">
                      <span className="inline-flex items-center gap-1">
                        <CircleCheck className="size-3.5" /> NDA Safe
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" /> Fixed quote in 24h
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={saveDraft}
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-neutral-300 px-4 py-2 text-[13px] font-bold transition-colors hover:border-neutral-900"
                    >
                      <Save className="size-4" /> Save Draft
                    </button>
                    <button
                      type="submit"
                      disabled={sending}
                      className="group inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-neutral-800 disabled:opacity-70"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Send Request <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
  );
}

export default function EnquiryModal({ open, preset, onClose, container }) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount container={container}>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-neutral-900/50 backdrop-blur-md lg:absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              forceMount
              aria-describedby="enquiry-desc"
              onClick={(e) => e.target === e.currentTarget && onClose()}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:absolute"
            >
              <EnquiryForm preset={preset} onClose={onClose} />
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
