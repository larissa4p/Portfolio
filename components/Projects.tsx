"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const featured = [
  {
    name: "MTEC",
    description:
      "Plataforma de catálogo para Atas de Registro de Preços com 900+ listagens. Tema WordPress customizado do zero com Tailwind CSS, sistema de filtros avançado, integração com Salesforce via REST API, RD Station, SendGrid e pipeline automatizado de imagens com Node.js e IA.",
    url: "https://mtec.com.vc",
    tags: ["WordPress", "PHP", "Tailwind CSS", "Salesforce", "Node.js", "ACF", "WooCommerce"],
    type: "Plataforma",
    screenshot: "/screenshots/mtec.png",
  },
  {
    name: "DOQ.APP",
    description:
      "Plataforma de atendimento ao cliente com integração WhatsApp. Desenvolvi o tema WordPress customizado do zero e a integração frontend com a WhatsApp Business API (Evolution API). Inclui painel estilo kanban, gestão de filas e automação de mensagens. Deploy com Docker e Fly.io.",
    url: "https://doq.app",
    tags: ["WordPress", "PHP", "Tema Customizado", "WhatsApp API", "JavaScript", "Docker", "Fly.io"],
    type: "SaaS",
    screenshot: "/screenshots/doq.png",
  },
];

const other = [
  {
    name: "Conexão Procópio",
    description: "Tema WordPress customizado do zero para plataforma de capacitação de profissionais que trabalham com TEA, com integração WooCommerce para venda de cursos e conteúdos.",
    url: null,
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce"],
    screenshot: "/screenshots/conexao-procopio.png",
  },
  {
    name: "Carol Sacramento",
    description: "Landing page com tema WordPress customizado do zero para terapeuta integrativa, com loja WooCommerce para venda de consultas e produtos naturais.",
    url: null,
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "Landing Page"],
    screenshot: "/screenshots/carol-sacramento.png",
  },
  {
    name: "SINDJUS",
    description: "Tema WordPress customizado do zero para sindicato nacional com portal completo de notícias, TV online, área do associado, benefícios, boletins e serviços.",
    url: "https://sindjus.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "Tailwind CSS", "ACF"],
    screenshot: "/screenshots/sindjus.png",
  },
  {
    name: "ANED",
    description: "Tema WordPress customizado do zero e loja WooCommerce com sistema automatizado de renovação de associação por e-mail.",
    url: "https://aned.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "Tailwind CSS", "ACF"],
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
    name: "Cantin",
    description: "Tema WordPress customizado do zero para plataforma de impacto social que conecta pessoas trans a terreiros afro-brasileiros inclusivos em todo o Brasil.",
    url: "https://cantinbr.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado"],
    screenshot: "/screenshots/cantin.png",
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
    <section id="projects" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
          Projetos
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-14">
          PROJETOS SELECIONADOS<span className="text-[#a78bfa]">.</span>
        </h2>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {featured.map((project) => (
            <div
              key={project.name}
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
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project) => (
            <div
              key={project.name}
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
            </div>
          ))}
        </div>
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
