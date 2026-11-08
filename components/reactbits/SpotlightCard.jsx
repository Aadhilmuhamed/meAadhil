"use client";

// React Bits — Spotlight Card (https://reactbits.dev/components/spotlight-card)
// Extended with `as` + ref forwarding so motion.create() can animate it.
import { useCallback, useRef } from "react";

import { cn } from "@/lib/utils";

export default function SpotlightCard({
  as: Tag = "div",
  ref: forwardedRef,
  children,
  className,
  spotlightColor = "rgba(52, 182, 137, 0.25)",
  onMouseMove,
  ...props
}) {
  const localRef = useRef(null);

  const setRef = useCallback(
    (node) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  const handleMouseMove = (e) => {
    const el = localRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      el.style.setProperty("--spotlight-color", spotlightColor);
    }
    onMouseMove?.(e);
  };

  return (
    <Tag ref={setRef} onMouseMove={handleMouseMove} className={cn("card-spotlight", className)} {...props}>
      {children}
    </Tag>
  );
}
