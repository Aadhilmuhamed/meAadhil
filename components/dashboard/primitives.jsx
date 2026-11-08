"use client";

import { motion } from "motion/react";

import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { cn } from "@/lib/utils";

export const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 26 } },
};

export const SPOT_MINT = "rgba(52, 182, 137, 0.28)";
export const SPOT_LIGHT = "rgba(255, 255, 255, 0.22)";

const MotionSpotlight = motion.create(SpotlightCard);

// Bento card: staggered entry + React Bits spotlight
export function Card({ className, spotlight = SPOT_MINT, children, ...props }) {
  return (
    <MotionSpotlight variants={itemVariants} spotlightColor={spotlight} className={className} {...props}>
      {children}
    </MotionSpotlight>
  );
}

export function TabGrid({ className, children }) {
  return (
    <motion.div
      variants={tabVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={cn("grid min-h-[640px] grid-cols-1 items-stretch gap-3 sm:gap-3.5 lg:grid-cols-12", className)}
    >
      {children}
    </motion.div>
  );
}

export function PulseDot({ className }) {
  return <span className={cn("inline-block size-2 rounded-full bg-emerald-400 animate-pulse-dot", className)} />;
}

export function Eyebrow({ className, children }) {
  return (
    <p className={cn("font-mono text-[10px] font-semibold tracking-[0.18em] text-neutral-500 uppercase", className)}>
      {children}
    </p>
  );
}

export function Pill({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-mint-border bg-mint px-2.5 py-0.5 text-[11px] font-bold text-mint-ink",
        className
      )}
    >
      {children}
    </span>
  );
}

// Plain staggered item (no spotlight) for text blocks
export function Item({ className, children, ...props }) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
