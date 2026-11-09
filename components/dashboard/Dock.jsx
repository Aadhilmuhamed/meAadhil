"use client";

import { motion } from "motion/react";
import { BookUser, Headphones, House, Layers, MessageSquare } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const DOCK_ITEMS = [
  { id: "home", label: "Home", short: "Home", icon: House },
  { id: "services", label: "Services", short: "Services", icon: Headphones },
  { id: "experience", label: "Experience & Stack", short: "Stack", icon: Layers },
  { id: "contact", label: "Contact", short: "Contact", icon: BookUser },
  { id: "enquiry", label: "Project Enquiry", short: "Enquire", icon: MessageSquare },
];

// Phone bottom bar: icon + visible text label so tabs are obvious without tooltips
function MobileDockButton({ item, active, onSelect }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={() => onSelect(item.id)}
      className={cn(
        "relative flex h-12 min-w-14 flex-col items-center justify-center gap-0.5 rounded-full px-2 transition-colors",
        active ? "text-white" : "text-neutral-800"
      )}
    >
      {active && (
        <motion.span
          layoutId="dock-bottom"
          className="absolute inset-0 rounded-full bg-neutral-900"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      )}
      <Icon className="relative size-4" aria-hidden="true" />
      <span className="relative text-[9px] leading-none font-bold">{item.short}</span>
    </button>
  );
}

function DockButton({ item, active, onSelect, layoutId }) {
  const Icon = item.icon;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={item.label}
          aria-current={active ? "page" : undefined}
          onClick={() => onSelect(item.id)}
          className={cn(
            "relative grid size-10 place-items-center rounded-full transition-[transform,color] hover:scale-105 sm:size-9",
            active ? "text-white" : "bg-white/70 text-neutral-800 hover:bg-white"
          )}
        >
          {active && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 rounded-full bg-neutral-900"
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
            />
          )}
          <Icon className="relative size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side={layoutId === "dock-side" ? "right" : "top"}>{item.label}</TooltipContent>
    </Tooltip>
  );
}

// Vertical dock on desktop, horizontal bottom bar on phones
export default function Dock({ active, onSelect }) {
  return (
    <>
      <aside className="hidden self-center sm:flex">
        <nav aria-label="Dashboard" className="flex flex-col gap-3 rounded-full border border-dock-border bg-dock p-2">
          {DOCK_ITEMS.map((item) => (
            <DockButton key={item.id} item={item} active={active === item.id} onSelect={onSelect} layoutId="dock-side" />
          ))}
        </nav>
      </aside>
      <nav
        aria-label="Dashboard"
        className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-fit gap-1 rounded-full border border-dock-border bg-dock p-1.5 shadow-lg sm:hidden"
      >
        {DOCK_ITEMS.map((item) => (
          <MobileDockButton key={item.id} item={item} active={active === item.id} onSelect={onSelect} />
        ))}
      </nav>
    </>
  );
}
