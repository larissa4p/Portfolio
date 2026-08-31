"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);

    // Hide default cursor on desktop
    document.documentElement.style.cursor = "none";
    document.documentElement.style.setProperty("--cursor-hidden", "none");

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.style.cursor = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#a78bfa] rounded-full pointer-events-none z-[9999]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.4 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#a78bfa]/50"
        animate={{
          x: pos.x - (hovering ? 22 : 16),
          y: pos.y - (hovering ? 22 : 16),
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          opacity: hovering ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.8 }}
      />
    </>
  );
}
