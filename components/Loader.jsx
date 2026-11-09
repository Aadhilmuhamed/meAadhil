"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const LINES = [
  "$ ssh aadhil@scripterlab.dev -p 2022",
  "> handshake ........................ OK",
  "> decrypting payload [AES-256] ...... OK",
  "> mounting modules: react next node supabase",
  "> injecting ui://bento-dashboard",
  "> bypassing firewall ............... DONE",
  "> ACCESS GRANTED. welcome, visitor_",
];
const GLYPHS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789{}[]<>/=+*$#@ABCDEF";
const DURATION = 2600;

function MatrixRain() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const size = 16;
    let drops = [];
    let raf;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / size) }, () => Math.random() * -40);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 40) return;
      last = t;
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${size}px var(--font-jetbrains), monospace`;
      drops.forEach((y, i) => {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = Math.random() > 0.96 ? "#d7ffe6" : "#00ff66";
        ctx.fillText(ch, i * size, y * size);
        drops[i] = y * size > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" />;
}

export default function Loader({ onDone }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const total = reduce ? 600 : DURATION;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(Math.max((now - start) / total, 0), 1);
      setProgress(p);
      setShown(Math.ceil(p * LINES.length));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 250);
    };
    raf = requestAnimationFrame(tick);

    const skip = () => setVisible(false);
    window.addEventListener("keydown", skip);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", skip);
    };
  }, [reduce]);

  const pct = Math.round(progress * 100);
  const blocks = Math.round(progress * 24);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label={`Loading ${pct}%`}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black font-mono text-hack"
          exit={{ clipPath: "inset(50% 0 50% 0)", opacity: 0.4 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          {!reduce && <MatrixRain />}
          {/* scanlines + vignette */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,.6) 0 1px, transparent 1px 3px)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.9)_100%)]" />

          <div className="relative w-full max-w-xl px-5">
            <p className="mb-4 text-xs tracking-[0.3em] text-hack/70 uppercase">root@aadhil:~#</p>
            <div className="min-h-[13.5rem] space-y-1.5 text-sm sm:text-[15px]">
              {LINES.slice(0, shown).map((line, i) => (
                <p key={line} className={i === LINES.length - 1 ? "font-bold text-white hack-glow" : "hack-glow"}>
                  {line}
                  {i === shown - 1 && <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-hack" />}
                </p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm hack-glow">
              <span className="whitespace-pre">
                [{"█".repeat(blocks)}
                {"░".repeat(24 - blocks)}]
              </span>
              <span className="tabular-nums">{String(pct).padStart(3, " ")}%</span>
            </div>
            <p className="mt-4 text-[11px] text-hack/50">press any key to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
