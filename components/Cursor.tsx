"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const x = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.8 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    let visible = false;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 18);
      rawY.set(e.clientY - 18);
      if (!visible && cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        visible = true;
      }
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.documentElement.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-9 h-9 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{ x, y, opacity: 0 }}
    />
  );
}
