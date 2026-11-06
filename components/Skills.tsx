"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const techs = [
  { name: "WordPress",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" },
  { name: "PHP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "jQuery",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Fastify",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" },
  { name: "Prisma",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Supabase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Figma",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "AWS S3",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Laravel",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PostCSS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg" },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-[#2a2015]">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <p className="text-xs text-[#d4854a] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#f2ebe2] uppercase tracking-tight mb-14" style={{ fontFamily: "var(--font-bricolage)" }}>
            MINHAS ESPECIALIDADES<span className="text-[#d4854a]">.</span>
          </h2>
        </AnimateIn>

        <motion.div
          className="grid md:grid-cols-2 gap-x-10"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={rowVariants}
              className="group relative overflow-hidden border-b border-[#2a2015] flex items-center gap-5 py-4 cursor-default"
            >
              {/* Fill: rises from bottom on hover */}
              <div className="absolute inset-0 bg-[#d4854a] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]" />

              {/* Number */}
              <span
                className="relative z-10 text-[10px] text-[#2a2015] group-hover:text-[#0c0905]/40 w-7 shrink-0 tabular-nums transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-5 h-5 shrink-0">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  unoptimized
                  style={{
                    filter:
                      tech.name === "GitHub" || tech.name === "Fastify" || tech.name === "Prisma"
                        ? "invert(1)"
                        : undefined,
                  }}
                />
              </div>

              {/* Name */}
              <span
                className="relative z-10 flex-1 text-sm font-bold uppercase tracking-wide text-[#f2ebe2] group-hover:text-[#0c0905] transition-colors duration-300"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {tech.name}
              </span>

              {/* Arrow — appears on hover */}
              <span
                className="relative z-10 text-transparent group-hover:text-[#0c0905]/50 group-hover:translate-x-0.5 transition-all duration-300 text-sm"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
