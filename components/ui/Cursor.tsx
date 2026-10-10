"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "hover" | "label";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, input, textarea, select"
      );
      const text = el?.dataset.cursor;
      if (text) {
        setVariant("label");
        setLabel(text);
      } else if (el) {
        setVariant("hover");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "label" ? 92 : variant === "hover" ? 56 : 34;
  const isLabel = variant === "label";

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] ${isLabel ? "" : "mix-blend-difference"}`}
      >
        <motion.div
          animate={{ width: size, height: size, opacity: hidden ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-wider ${
            isLabel ? "bg-accent text-white" : variant === "hover" ? "bg-white" : "border border-white"
          }`}
        >
          {isLabel ? label : null}
        </motion.div>
      </motion.div>

      <motion.div aria-hidden style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference">
        <div
          className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity ${
            hidden || variant !== "default" ? "opacity-0" : "opacity-100"
          }`}
        />
      </motion.div>
    </>
  );
}
