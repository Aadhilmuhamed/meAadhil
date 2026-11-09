"use client";

import { motion } from "motion/react";
import { BookUser, Headphones, House, Layers, MessageSquare } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const DOCK_ITEMS = [
  { id: "home", label: "Home", icon: House },
  { id: "services", label: "My Service", icon: Headphones },
  { id: "experience", label: "My Experience & Stack", icon: Layers },
  { id: "contact", label: "My Contact", icon: BookUser },
  { id: "enquiry", label: "Project Enquiry", icon: MessageSquare },
];

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
        className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-fit gap-2 rounded-full border border-dock-border bg-dock p-1.5 shadow-lg sm:hidden"
      >
        {DOCK_ITEMS.map((item) => (
          <DockButton key={item.id} item={item} active={active === item.id} onSelect={onSelect} layoutId="dock-bottom" />
        ))}
      </nav>
    </>
  );
}
