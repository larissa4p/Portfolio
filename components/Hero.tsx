"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const commands = [
  "git push origin main",
  "wp theme build --watch",
  "npm run deploy",
  "php artisan tinker",
];

// Fixed particle positions to avoid hydration mismatch
const particles = [
  { left: "8.7%",  delay: "3.47s", duration: "15.4s" },
  { left: "53.9%", delay: "3.68s", duration: "12.9s" },
  { left: "84.2%", delay: "2.18s", duration: "13.1s" },
  { left: "94.3%", delay: "5.86s", duration: "12.0s" },
  { left: "51.0%", delay: "2.27s", duration: "9.2s"  },
  { left: "25.7%", delay: "1.02s", duration: "14.2s" },
  { left: "5.5%",  delay: "2.96s", duration: "9.3s"  },
  { left: "75.3%", delay: "7.14s", duration: "8.7s"  },
  { left: "94.9%", delay: "3.21s", duration: "13.1s" },
  { left: "21.5%", delay: "3.64s", duration: "10.6s" },
  { left: "78.5%", delay: "7.69s", duration: "8.1s"  },
  { left: "90.2%", delay: "7.57s", duration: "14.2s" },
  { left: "48.4%", delay: "0.83s", duration: "13.3s" },
  { left: "74.6%", delay: "4.30s", duration: "10.1s" },
  { left: "30.1%", delay: "5.18s", duration: "10.3s" },
  { left: "86.9%", delay: "1.68s", duration: "8.7s"  },
  { left: "54.9%", delay: "7.69s", duration: "9.0s"  },
  { left: "77.1%", delay: "2.89s", duration: "14.6s" },
  { left: "68.4%", delay: "5.30s", duration: "12.0s" },
  { left: "31.5%", delay: "5.30s", duration: "15.7s" },
];

function Typewriter() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "erasing">("typing");

  useEffect(() => {
    const current = commands[cmdIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 1800);
        return () => clearTimeout(t);
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setCmdIndex((i) => (i + 1) % commands.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, cmdIndex]);

  return (
    <span className="text-[#a78bfa] text-sm md:text-base">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-[#a78bfa] ml-0.5 align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(167,139,250,0.12), transparent)" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute -z-10 bottom-0 w-1 h-1 bg-[#a78bfa] rounded-full animate-floating"
          style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 35%, black 15%, transparent 75%)",
        }}
      />


      <div className="relative max-w-2xl mx-auto px-6 w-full flex flex-col items-center text-center">

        {/* Foto */}
        <motion.div
          className="relative mb-2"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[3px] border-[#a78bfa]">
            <Image
              src="/photo.png"
              alt="Larissa Bessa"
              width={208}
              height={208}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Badge disponível */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#161616] border border-[#252525] text-xs text-[#888] -mt-4 relative">
              <span className="relative w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative block w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para trabalho remoto
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p variants={item} className="text-sm text-[#666]">
            Olá, mundo! 👋 Eu sou Larissa.
          </motion.p>

          {/* Título */}
          <motion.h1
            variants={item}
            className="text-3xl font-bold md:text-6xl text-white leading-tight tracking-tight"
          >
            Desenvolvedora{" "}
            <span className="whitespace-nowrap inline-block">Web</span>
          </motion.h1>

          {/* Terminal */}
          <motion.p variants={item} className="text-[#555] flex items-center gap-1">
            ~$<Typewriter />
          </motion.p>

          {/* Descrição */}
          <motion.p variants={item} className="text-[#666] text-sm leading-relaxed max-w-md">
            WordPress, PHP e React — de temas customizados do zero até integrações com APIs externas.
            Do briefing à produção.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex items-center gap-4 mt-2 flex-wrap justify-center">
            <a
              href="#projects"
              className="bg-[#a78bfa] text-[#0d0d0d] shadow-lg shadow-[#a78bfa]/50 hover:shadow-xl text-xs rounded-xl px-6 py-3 md:px-8 md:py-4 md:text-base font-bold hover:-translate-y-1 transition-all duration-200"
            >
              Ver meus projetos
            </a>
            <a
              href="#contact"
              className="bg-[#161616] border border-[#252525] hover:border-[#a78bfa] hover:text-[#a78bfa] flex items-center gap-2 text-xs rounded-xl px-6 py-3 md:px-8 md:py-4 md:text-base text-[#999] hover:-translate-y-1 transition-all duration-200"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0.7" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                <g id="Mail">
                  <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"/>
                </g>
              </svg>
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
