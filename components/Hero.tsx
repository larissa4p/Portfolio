"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const commands = [
  "git push origin main",
  "wp theme build --watch",
  "npm run deploy",
  "php artisan tinker",
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
      }
      const t = setTimeout(() => setPhase("waiting"), 1800);
      return () => clearTimeout(t);
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      }
      setCmdIndex((i) => (i + 1) % commands.length);
      setPhase("typing");
    }
  }, [displayed, phase, cmdIndex]);

  return (
    <span className="text-[#d4854a]" style={{ fontFamily: "var(--font-dm-mono)" }}>
      {displayed}
      <span className="inline-block w-[2px] h-[0.9em] bg-[#d4854a] ml-0.5 align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 45% at 68% 20%, rgba(212,133,74,0.07), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Metadata strip */}
        <motion.div
          className="flex items-center justify-between border-b border-[#2a2015] pb-4 mb-10"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span
            className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#4a3f35]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Disponível
          </span>
          <span className="hidden sm:block text-[10px] tracking-widest uppercase text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Brasília · BR
          </span>
          <span className="hidden sm:block text-[10px] tracking-widest uppercase text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Dev Web
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            2026
          </span>
        </motion.div>

        {/* Nome — largura total */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <h1
            className="font-black leading-[0.85] tracking-tighter uppercase text-[#f2ebe2]"
            style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(4.5rem, 13vw, 10rem)" }}
          >
            Larissa
          </h1>
          <h1
            className="font-black leading-[0.85] tracking-tighter uppercase"
            style={{
              fontFamily: "var(--font-bricolage)",
              fontSize: "clamp(4.5rem, 13vw, 10rem)",
              color: "transparent",
              WebkitTextStroke: "2px #f2ebe2",
            }}
          >
            Bessa
          </h1>
        </motion.div>

        {/* Bio + foto em 2 colunas */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Bio + typewriter + CTAs — desktop: col 1 | mobile: embaixo da foto */}
          <motion.div
            className="flex flex-col gap-5 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          >
            <p className="text-[#4a3f35] flex items-center gap-1 text-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>
              ~$ <Typewriter />
            </p>

            <p className="text-[#6a5f55] text-sm md:text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Quase 5 anos em PHP e WordPress de verdade: temas e plugins do zero, sem page builder.
              Salesforce, WhatsApp API, Supabase e Docker em produção. React e Next.js quando o projeto pede.
            </p>

            <div className="flex items-center gap-5 flex-wrap pt-2">
              <a
                href="#projects"
                className="bg-[#d4854a] text-[#0c0905] text-sm font-bold rounded-xl px-6 py-3 hover:bg-[#e8964f] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#d4854a]/20"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Ver projetos →
              </a>
              <a
                href="#contact"
                className="text-sm text-[#9a8f82] hover:text-[#d4854a] transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Entrar em contato
              </a>
            </div>
          </motion.div>

          {/* Foto — desktop: col 2 | mobile: acima do bio */}
          <motion.div
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#2a2015] max-w-xs mx-auto md:max-w-none">
              <Image
                src="/photo.png"
                alt="Larissa Bessa"
                width={500}
                height={650}
                className="w-full object-cover"
                priority
              />
            </div>
            {/* Badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141008] border border-[#2a2015] text-[10px] text-[#9a8f82] whitespace-nowrap shadow-xl"
              style={{ fontFamily: "var(--font-dm-mono)" }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.7 }}
            >
              <span className="relative w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                <span className="relative block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>
              Disponível para trabalho remoto
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
