"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Texto */}
          <motion.div
            className="flex flex-col gap-6 flex-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase"
            >
              Disponível para trabalho remoto · Brasília, DF
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase"
            >
              CONSTRUINDO A WEB<br />
              QUE FUNCIONA<span className="text-[#a78bfa]">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-lg text-[#777] text-sm leading-relaxed"
            >
              Sou Larissa Bessa, desenvolvedora web com 4+ anos de experiência
              entregando projetos reais. Especializada em WordPress, PHP e React —
              de temas customizados a integrações complexas com APIs. Levo projetos
              da ideia à produção.
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-center gap-3 flex-wrap pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-[#a78bfa] text-[#0d0d0d] rounded-lg text-sm font-bold hover:bg-[#c4b5fd] transition-colors duration-200"
              >
                Ver meus projetos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#2a2a2a] text-[#999] rounded-lg text-sm font-medium hover:border-[#a78bfa]/40 hover:text-[#e8e8e8] transition-all duration-200"
              >
                Entrar em contato
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-5 pt-2"
            >
              <a href="https://github.com/larissa4p" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/larissa4p" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono">
                LinkedIn ↗
              </a>
              <a href="mailto:larissabessa4@gmail.com"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono">
                Email ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Foto */}
          <motion.div
            className="shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="relative">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/photo.jpg"
                  alt="Larissa Bessa"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-[#a78bfa]/10 blur-xl -z-10"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
