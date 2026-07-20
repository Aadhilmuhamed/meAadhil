"use client";
import { useEffect, useRef } from "react";
import "./MagnetLines.css";

const MagnetLines = ({
  rows = 10,
  columns = 20,
  lineColor = "rgba(255, 255, 255, 0.35)",
  lineWidth = "0.35vmin",
  lineHeight = "2.5vmin",
  baseAngle = -10,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll("span");
    if (!items || items.length === 0) return;

    const onPointerMove = (pointer) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          (Math.acos(b / c) * 180) / Math.PI * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  const total = rows * columns;

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        "--rows": rows,
        "--columns": columns,
        ...style,
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            backgroundColor: lineColor,
            width: lineWidth,
            height: lineHeight,
            "--rotate": `${baseAngle}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default MagnetLines;
