"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projetos", href: "#projects", id: "projects" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div
        className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#161616]/90 backdrop-blur-md border border-[#252525] shadow-lg"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <a
          href="#hero"
          className="font-mono text-sm text-[#a78bfa] tracking-wider hover:opacity-70 transition-opacity px-3 py-1"
        >
          larissa4p.dev
        </a>

        <div className="w-px h-4 bg-[#2a2a2a]" />

        <nav className="flex items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 text-xs font-mono tracking-widest uppercase transition-colors duration-200 rounded-lg"
              style={{ color: active === link.id ? "#e8e8e8" : "#555" }}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-[#a78bfa]/10 border border-[#a78bfa]/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
