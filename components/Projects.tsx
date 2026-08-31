"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import AnimateIn from "./AnimateIn";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const featured = [
  {
    name: "MTEC",
    description:
      "Plataforma de catálogo para Atas de Registro de Preços com 900+ listagens. Tema WordPress customizado do zero com Tailwind CSS, 12+ endpoints REST customizados, sistema de filtros avançado, integração com Salesforce via REST API, RD Station, SendGrid, geração de PDF e pipeline automatizado de imagens com Node.js e IA.",
    url: "https://mtec.com.vc",
    tags: ["WordPress", "PHP", "Tema Customizado", "Tailwind CSS", "REST API", "Salesforce", "jQuery", "Swiper", "Gravity Forms", "Node.js", "ACF", "WooCommerce"],
    type: "Plataforma",
    screenshot: "/screenshots/mtec.png",
  },
  {
    name: "DOQ.APP",
    description:
      "Plataforma de atendimento ao cliente com integração WhatsApp. Desenvolvi o tema WordPress customizado do zero, chatbot customizado, painel estilo kanban com 15+ handlers AJAX, gestão de filas e automação de mensagens. Backend com Supabase. Deploy com Docker e Fly.io.",
    url: "https://doq.app",
    tags: ["WordPress", "PHP", "Tema Customizado", "WhatsApp API", "Supabase", "JavaScript", "AJAX", "Docker", "Fly.io"],
    type: "SaaS",
    screenshot: "/screenshots/doq.png",
  },
];

const openSource = [
  {
    name: "slotly",
    description: "API de agendamento construída do zero com Fastify, TypeScript, Prisma e MySQL. Auth com JWT, validação com Zod, docs com Swagger e testes de integração com Vitest.",
    url: "https://github.com/larissa4p/slotly",
    tags: ["Fastify", "TypeScript", "Prisma", "MySQL", "JWT", "Zod", "Vitest"],
  },
  {
    name: "seven-panel",
    description: "Painel SaaS para gerenciar mensagens WhatsApp via Evolution API. Next.js 16, TypeScript, Supabase, gráficos com Recharts e autenticação com SSR.",
    url: "https://github.com/larissa4p/seven-panel",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts"],
  },
  {
    name: "leads-to-rd",
    description: "Plugin WordPress que sincroniza leads de formulários (CF7 e WPForms) com o CRM da RD Station via Conversions API. Inclui log de envios e suite de testes com PHPUnit.",
    url: "https://github.com/larissa4p/leads-to-rd",
    tags: ["WordPress", "PHP", "PHPUnit", "Contact Form 7", "WPForms", "RD Station"],
  },
  {
    name: "wc-whatsapp-notifications",
    description: "Plugin WordPress com notificações automáticas de pedidos WooCommerce por WhatsApp e widget de chat flutuante configurável, via Evolution API.",
    url: "https://github.com/larissa4p/wc-whatsapp-notifications",
    tags: ["WordPress", "PHP", "WooCommerce", "WhatsApp API", "PHPUnit"],
  },
  {
    name: "create-wp-theme",
    description: "CLI em Node.js para scaffolding de temas WordPress com Underscores + Tailwind CSS. Suporte a Sass, WooCommerce e modo interativo.",
    url: "https://github.com/larissa4p/create-wp-theme",
    tags: ["Node.js", "CLI", "WordPress", "Tailwind CSS"],
  },
  {
    name: "7six5",
    description: "SDK Node.js para WhatsApp via Evolution API. Suporte a texto, mídia, botões, listas e middleware para webhooks Express. Sem dependências externas.",
    url: "https://github.com/larissa4p/7six5",
    tags: ["Node.js", "SDK", "WhatsApp API", "TypeScript"],
  },
];

const other = [
  {
    name: "Conexão Procópio",
    description: "Tema WordPress customizado do zero para plataforma de capacitação de profissionais que trabalham com TEA, com WooCommerce Subscriptions para assinaturas de cursos, Slick Slider e handlers AJAX para progresso de aulas.",
    url: null,
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "Slick Slider", "AJAX"],
    screenshot: "/screenshots/conexao-procopio.png",
  },
  {
    name: "Carol Sacramento",
    description: "Landing page com tema WordPress customizado do zero para terapeuta integrativa, com WooCommerce para venda de consultas e produtos, e busca de CEP via AJAX.",
    url: null,
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "AJAX", "Landing Page"],
    screenshot: "/screenshots/carol-sacramento.png",
  },
  {
    name: "SINDJUS",
    description: "Tema WordPress customizado do zero para sindicato nacional com portal de notícias, TV online, área do associado com 20+ handlers AJAX, drag-and-drop de conteúdo via Sortable.js, boletins e benefícios.",
    url: "https://sindjus.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "Tailwind CSS", "AJAX", "Sortable.js", "ACF"],
    screenshot: "/screenshots/sindjus.png",
  },
  {
    name: "ANED",
    description: "Tema WordPress customizado do zero e loja WooCommerce com Select2, sistema automatizado de renovação de associação por e-mail via SendGrid e integração com RD Station.",
    url: "https://aned.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "Select2", "SendGrid", "RD Station", "ACF"],
    screenshot: "/screenshots/aned.png",
  },
  {
    name: "Territorial Sindical",
    description: "Tema WordPress customizado do zero para sindicato de servidores públicos, com portal de notícias, editais, eventos, vídeos e área do filiado.",
    url: "https://territorialsindical.org.br",
    tags: ["WordPress", "PHP", "Tema Customizado"],
    screenshot: "/screenshots/territorial-sindical.png",
  },
  {
    name: "CAEFE",
    description: "Tema WordPress customizado do zero para caixa de assistência de empregados, com área de benefícios, seguros, notícias e geração de boletos.",
    url: "https://caefe.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado", "ACF"],
    screenshot: "/screenshots/caefe.png",
  },
  {
    name: "CLIFALI",
    description: "Tema WordPress customizado do zero com conteúdo dinâmico via ACF para site institucional.",
    url: "https://clifali.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado", "ACF"],
    screenshot: null,
  },
];

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-28 border-t border-[#1a1a1a] bg-[#0b0b12]">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-14">
            PROJETOS SELECIONADOS<span className="text-[#a78bfa]">.</span>
          </h2>
        </AnimateIn>

        {/* Featured */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 mb-10"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featured.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              className="group bg-[#161616] border border-[#252525] rounded-xl overflow-hidden hover:border-[#a78bfa]/30 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col"
            >
              {project.screenshot && (
                <button
                  onClick={() => setLightbox({ src: project.screenshot!, alt: project.name })}
                  className="relative w-full h-44 overflow-hidden block cursor-zoom-in"
                  aria-label={`Ver screenshot de ${project.name}`}
                >
                  <Image
                    src={project.screenshot}
                    alt={`Screenshot do projeto ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161616]/60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-full border border-white/20">
                      ver completo ↗
                    </span>
                  </div>
                </button>
              )}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-[#a78bfa] tracking-widest uppercase">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-semibold text-[#e8e8e8] mt-1">
                      {project.name}
                    </h3>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444] hover:text-[#a78bfa] transition-colors text-lg shrink-0"
                      aria-label={`Visitar ${project.name}`}
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="text-sm text-[#777] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-[#0d0d0d] border border-[#252525] text-[#555]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other projects grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {other.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              className="group bg-[#161616] border border-[#252525] rounded-xl overflow-hidden hover:border-[#a78bfa]/20 hover:bg-[#181818] transition-all duration-300 flex flex-col"
            >
              {project.screenshot && (
                <button
                  onClick={() => setLightbox({ src: project.screenshot!, alt: project.name })}
                  className="relative w-full h-32 overflow-hidden block cursor-zoom-in"
                  aria-label={`Ver screenshot de ${project.name}`}
                >
                  <Image
                    src={project.screenshot}
                    alt={`Screenshot do projeto ${project.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161616]/60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-black/60 text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/20">
                      ver completo ↗
                    </span>
                  </div>
                </button>
              )}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-[#e8e8e8]">
                    {project.name}
                  </h3>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333] hover:text-[#a78bfa] transition-colors text-sm shrink-0"
                      aria-label={`Visitar ${project.name}`}
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-[#333] shrink-0">offline</span>
                  )}
                </div>
                <p className="text-xs text-[#666] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0d0d0d] border border-[#222] text-[#444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Source */}
        <AnimateIn delay={0.1}>
          <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mt-16 mb-6">
            Open Source
          </p>
        </AnimateIn>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
            {openSource.map((project) => (
              <motion.a
                key={project.name}
                variants={cardVariant}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#161616] border border-[#252525] rounded-xl p-5 flex flex-col gap-4 hover:border-[#a78bfa]/20 hover:bg-[#181818] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#e8e8e8] font-mono">{project.name}</h3>
                  <span className="text-[#333] group-hover:text-[#a78bfa] transition-colors text-sm">↗</span>
                </div>
                <p className="text-xs text-[#666] leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#0d0d0d] border border-[#222] text-[#444]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
        </motion.div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
