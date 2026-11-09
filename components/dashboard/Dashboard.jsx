"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";

import Loader from "@/components/Loader";
import SplashCursor from "@/components/reactbits/SplashCursor";
import Dock from "@/components/dashboard/Dock";
import EnquiryModal from "@/components/dashboard/EnquiryModal";
import TopBar from "@/components/dashboard/TopBar";
import ContactTab from "@/components/dashboard/tabs/ContactTab";
import ExperienceTab from "@/components/dashboard/tabs/ExperienceTab";
import HomeTab from "@/components/dashboard/tabs/HomeTab";
import ServicesTab from "@/components/dashboard/tabs/ServicesTab";
import { cn } from "@/lib/utils";

const TABS = { home: HomeTab, services: ServicesTab, experience: ExperienceTab, contact: ContactTab };

export default function Dashboard() {
  const reduce = useReducedMotion();
  const [booted, setBooted] = useState(false);
  const [tab, setTab] = useState("home");
  const [enquiry, setEnquiry] = useState({ open: false, preset: null });
  const [workspace, setWorkspace] = useState(null);
  const [contentEl, setContentEl] = useState(null);

  const go = useCallback(
    (next) => {
      setTab(next);
      contentEl?.scrollTo({ top: 0, behavior: "smooth" });
      if (window.innerWidth < 1024) window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [contentEl]
  );
  const openEnquiry = useCallback((preset = null) => setEnquiry({ open: true, preset }), []);
  const closeEnquiry = useCallback(() => setEnquiry((e) => ({ ...e, open: false })), []);

  const onDock = (id) => (id === "enquiry" ? openEnquiry() : go(id));
  const ActiveTab = TABS[tab];
  // Fluid cursor only on fine pointers (desktop) and when motion is allowed
  const splash = booted && !reduce && typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

  return (
    <>
      <Loader onDone={() => setBooted(true)} />
      {splash && <SplashCursor />}

      <div className="flex min-h-dvh items-center justify-center p-2 pb-20 sm:p-4 md:p-6">
        <main className="frame-glow relative flex w-full max-w-[1340px] flex-col overflow-hidden rounded-[40px] border-[8px] border-neutral-900 bg-white sm:rounded-[44px] sm:border-[10px] lg:h-[min(940px,calc(100dvh-3rem))] lg:min-h-[790px]">
          <TopBar go={go} openEnquiry={openEnquiry} />

          <div ref={setWorkspace} className="relative flex min-h-0 flex-1 gap-3.5 px-3 pt-1 pb-4 sm:px-6 sm:pb-5">
            <Dock active={enquiry.open ? "enquiry" : tab} onSelect={onDock} />

            <div
              ref={setContentEl}
              className={cn(
                "custom-scroll relative min-w-0 flex-1 overflow-y-auto transition-[filter] duration-300",
                enquiry.open && "pointer-events-none blur-[2.5px] select-none"
              )}
            >
              <AnimatePresence mode="wait">
                <ActiveTab key={tab} go={go} openEnquiry={openEnquiry} />
              </AnimatePresence>
            </div>

            <EnquiryModal open={enquiry.open} preset={enquiry.preset} onClose={closeEnquiry} container={workspace} />
          </div>
        </main>
      </div>
    </>
  );
}
