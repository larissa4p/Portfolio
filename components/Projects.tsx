"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const ease = [0.21, 0.47, 0.32, 0.98] as const;
const SPEED = 52; // px/s

interface Project {
  num: string;
  name: string;
  type: string;
  description: string;
  highlights: string[];
  url: string | null;
  urlLabel?: string;
  tags: string[];
  screenshot: string;
}

const projects: Project[] = [
  {
    num: "01",
    name: "MTEC",
    type: "Plataforma",
    description: "Plataforma de catálogo para Atas de Registro de Preços com 900+ listagens, sistema de filtros avançado e integrações com múltiplos serviços externos.",
    highlights: [
      "900+ listagens com filtros em tempo real",
      "12+ endpoints REST customizados no WordPress",
      "Integração bidirecional com Salesforce via REST API",
      "Pipeline de imagens automatizado com Node.js e IA",
      "Geração de PDF e envios transacionais via SendGrid",
    ],
    url: "https://mtec.com.vc",
    urlLabel: "mtec.com.vc",
    tags: ["WordPress", "PHP", "Tailwind CSS", "REST API", "Salesforce", "Node.js", "ACF", "WooCommerce"],
    screenshot: "/screenshots/mtec.png",
  },
  {
    num: "02",
    name: "DOQ.APP",
    type: "SaaS",
    description: "Plataforma SaaS de atendimento ao cliente com integração WhatsApp Business API, painel kanban e automação de mensagens.",
    highlights: [
      "Painel kanban com 15+ handlers AJAX customizados",
      "Chatbot WhatsApp com gestão de filas de atendimento",
      "Backend Supabase com autenticação e realtime",
      "Deploy containerizado com Docker e Fly.io",
    ],
    url: "https://doq.app",
    urlLabel: "doq.app",
    tags: ["WordPress", "PHP", "WhatsApp API", "Supabase", "JavaScript", "Docker", "Fly.io"],
    screenshot: "/screenshots/doq.png",
  },
  {
    num: "03",
    name: "SINDJUS",
    type: "Portal",
    description: "Portal do Sindicato dos Servidores do Poder Judiciário e do MPU no DF, com área restrita para associados e transmissão ao vivo.",
    highlights: [
      "Transmissão ao vivo integrada via YouTube API",
      "Área do associado com 20+ handlers AJAX",
      "Drag-and-drop de conteúdo via Sortable.js",
      "Sistema completo de boletins e benefícios",
    ],
    url: "https://sindjus.org",
    urlLabel: "sindjus.org",
    tags: ["WordPress", "PHP", "Tailwind CSS", "AJAX", "Sortable.js", "ACF"],
    screenshot: "/screenshots/sindjus.png",
  },
  {
    num: "04",
    name: "ANED",
    type: "E-commerce",
    description: "Associação com loja WooCommerce e sistema automatizado de renovação de filiação por e-mail.",
    highlights: [
      "Loja WooCommerce com assinaturas e renovação automática",
      "Envios transacionais via SendGrid",
      "CRM conectado via RD Station Conversions API",
      "Busca avançada com Select2",
    ],
    url: "https://aned.org",
    urlLabel: "aned.org",
    tags: ["WordPress", "PHP", "WooCommerce", "SendGrid", "RD Station", "ACF"],
    screenshot: "/screenshots/aned.png",
  },
  {
    num: "05",
    name: "Conexão Procópio",
    type: "EAD",
    description: "Plataforma de capacitação para profissionais que trabalham com TEA, com cursos por assinatura e rastreamento de progresso.",
    highlights: [
      "Plataforma de cursos com WooCommerce Subscriptions",
      "Progresso de aulas rastreado via AJAX",
      "Galeria de conteúdo com Slick Slider",
    ],
    url: null,
    tags: ["WordPress", "PHP", "WooCommerce", "AJAX", "Slick Slider"],
    screenshot: "/screenshots/conexao-procopio.png",
  },
  {
    num: "06",
    name: "Carol Sacramento",
    type: "Landing Page",
    description: "Site para terapeuta integrativa com venda de consultas online e produtos físicos via WooCommerce.",
    highlights: [
      "Venda de consultas e produtos via WooCommerce",
      "Busca de CEP integrada via AJAX",
      "Design focado em conversão",
    ],
    url: null,
    tags: ["WordPress", "PHP", "WooCommerce", "AJAX"],
    screenshot: "/screenshots/carol-sacramento.png",
  },
  {
    num: "07",
    name: "Territorial Sindical",
    type: "Portal",
    description: "Portal sindical para servidores públicos com portal de notícias, editais, eventos e área do filiado.",
    highlights: [
      "Portal de notícias com categorias e busca",
      "Sistema de editais, eventos e vídeos",
      "Área restrita para filiados",
    ],
    url: "https://territorialsindical.org.br",
    urlLabel: "territorialsindical.org.br",
    tags: ["WordPress", "PHP", "Tema Customizado"],
    screenshot: "/screenshots/territorial-sindical.png",
  },
  {
    num: "08",
    name: "CAEFE",
    type: "Institucional",
    description: "Site para caixa de assistência de empregados com área de benefícios, seguros e geração de boletos.",
    highlights: [
      "Sistema de benefícios e seguros",
      "Área de notícias com categorias",
      "Geração de boletos integrada",
    ],
    url: "https://caefe.com.br",
    urlLabel: "caefe.com.br",
    tags: ["WordPress", "PHP", "ACF"],
    screenshot: "/screenshots/caefe.png",
  },
];

const openSource = [
  {
    name: "slotly",
    description: "API de agendamento com Fastify, TypeScript, Prisma e MySQL. Auth com JWT, Zod, Swagger e testes com Vitest.",
    url: "https://github.com/larissa4p/slotly",
    tags: ["Fastify", "TypeScript", "Prisma", "MySQL", "Vitest"],
  },
  {
    name: "seven-panel",
    description: "Painel SaaS para WhatsApp via Evolution API. Next.js 16, TypeScript, Supabase, Recharts e auth SSR.",
    url: "https://github.com/larissa4p/seven-panel",
    tags: ["Next.js", "TypeScript", "Supabase", "Recharts"],
  },
  {
    name: "leads-to-rd",
    description: "Plugin WordPress que sincroniza leads do CF7/WPForms com a RD Station via Conversions API. Inclui PHPUnit.",
    url: "https://github.com/larissa4p/leads-to-rd",
    tags: ["WordPress", "PHP", "PHPUnit", "RD Station"],
  },
  {
    name: "wc-whatsapp-notifications",
    description: "Plugin WooCommerce com notificações de pedidos por WhatsApp e widget de chat flutuante.",
    url: "https://github.com/larissa4p/wc-whatsapp-notifications",
    tags: ["WordPress", "PHP", "WooCommerce", "WhatsApp API"],
  },
  {
    name: "create-wp-theme",
    description: "CLI Node.js para scaffolding de temas WordPress com Underscores + Tailwind. Suporte a Sass e WooCommerce.",
    url: "https://github.com/larissa4p/create-wp-theme",
    tags: ["Node.js", "CLI", "WordPress", "Tailwind CSS"],
  },
  {
    name: "7six5",
    description: "SDK Node.js para WhatsApp via Evolution API. Texto, mídia, botões, listas e middleware Express.",
    url: "https://github.com/larissa4p/7six5",
    tags: ["Node.js", "SDK", "WhatsApp API", "TypeScript"],
  },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "0") { setScale(1); setPos({ x: 0, y: 0 }); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const clampPos = (x: number, y: number, s: number) => {
    const el = containerRef.current;
    if (!el) return { x, y };
    const maxX = (el.offsetWidth  * (s - 1)) / 2;
    const maxY = (el.offsetHeight * (s - 1)) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    setScale((prev) => {
      const next = Math.max(1, Math.min(5, prev + delta));
      if (next === 1) setPos({ x: 0, y: 0 });
      else setPos((p) => clampPos(p.x, p.y, next));
      return next;
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    dragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    setPos((p) => clampPos(p.x + dx, p.y + dy, scale));
  };

  const onMouseUp = () => { dragging.current = false; };

  const onDoubleClick = () => {
    if (scale > 1) { setScale(1); setPos({ x: 0, y: 0 }); }
    else { setScale(2.5); }
  };

  const cursorStyle = scale > 1
    ? (dragging.current ? "grabbing" : "grab")
    : "zoom-in";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center overflow-hidden"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onWheel={onWheel}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Controls */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 px-4 py-2 rounded-full bg-[#141008]/80 border border-[#2a2015] backdrop-blur-sm">
        <span className="text-[10px] text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
          scroll para zoom · arrastar para mover · duplo clique para reset
        </span>
        {scale > 1 && (
          <span className="text-[10px] text-[#d4854a]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            {Math.round(scale * 100)}%
          </span>
        )}
      </div>

      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#141008] border border-[#2a2015] text-[#9a8f82] hover:text-[#f2ebe2] transition-all text-sm"
        aria-label="Fechar"
      >
        ✕
      </button>

      <img
        src={src}
        alt={alt}
        draggable={false}
        onMouseDown={onMouseDown}
        onDoubleClick={onDoubleClick}
        className="max-w-[90vw] max-h-[90vh] rounded-xl border border-[#2a2015] shadow-2xl object-contain select-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: dragging.current ? "none" : "transform 0.15s ease",
          cursor: cursorStyle,
        }}
      />
    </div>
  );
}

function ModalContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <>
      {/* Close button */}
      <motion.button
        onClick={onClose}
        className="fixed top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1208]/80 border border-[#2a2015] text-[#9a8f82] hover:text-[#f2ebe2] hover:border-[#d4854a]/50 backdrop-blur-sm transition-all text-sm"
        aria-label="Fechar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        ✕
      </motion.button>

      <div className="h-full overflow-y-auto overscroll-contain">

        {/* Hero: screenshot full-width + nome sobreposto */}
        <motion.div
          className="relative w-full cursor-zoom-in group/hero"
          style={{ height: "clamp(280px, 55vh, 580px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setLightbox(true)}
        >
          <Image
            src={project.screenshot}
            alt={project.name}
            fill
            sizes="100vw"
            className="object-cover object-top transition-transform duration-700 group-hover/hero:scale-[1.02]"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b07] via-[#0e0b07]/30 to-transparent" />

          {/* Zoom hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/hero:opacity-100 transition-opacity duration-200">
            <span className="bg-black/50 text-[#f2ebe2] text-xs px-4 py-2 rounded-full border border-[#f2ebe2]/15 backdrop-blur-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>
              ver completo ↗
            </span>
          </div>

          {/* Project name overlaid on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 md:px-14 md:pb-10">
            <span className="text-[10px] text-[#d4854a] tracking-widest uppercase mb-2 block" style={{ fontFamily: "var(--font-dm-mono)" }}>
              {project.num} — {project.type}
            </span>
            <h3
              className="font-black text-[#f2ebe2] leading-[0.9] tracking-tighter uppercase"
              style={{ fontFamily: "var(--font-bricolage)", fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              {project.name}
            </h3>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-3xl mx-auto px-8 md:px-14 py-12 flex flex-col gap-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >

          {/* Description */}
          <p className="text-base md:text-lg text-[#9a8f82] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div>
            <p className="text-[10px] text-[#4a3f35] tracking-widest uppercase mb-5" style={{ fontFamily: "var(--font-dm-mono)" }}>
              O que foi feito
            </p>
            <ul className="flex flex-col">
              {project.highlights.map((h, i) => (
                <li
                  key={h}
                  className="flex items-start gap-4 py-4 border-b border-[#1e1710]"
                >
                  <span className="text-[10px] text-[#2a2015] tabular-nums mt-0.5 shrink-0 w-5" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#c8bfb5] leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags + CTA */}
          <div className="flex flex-col gap-6 pb-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-3 py-1 rounded-full bg-[#0c0905] border border-[#2a2015] text-[#4a3f35] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#d4854a] text-[#0c0905] font-bold text-sm hover:bg-[#e8964f] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#d4854a]/20 self-start"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Visitar {project.urlLabel ?? project.url} ↗
              </a>
            ) : (
              <button
                onClick={() => setLightbox(true)}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#141008] border border-[#2a2015] text-[#9a8f82] hover:border-[#d4854a]/40 hover:text-[#d4854a] text-sm transition-colors self-start"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Ver screenshot completo ↗
              </button>
            )}
          </div>

        </motion.div>
      </div>

      {/* Lightbox com zoom + pan */}
      {lightbox && (
        <Lightbox src={project.screenshot} alt={project.name} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [originRect, setOriginRect] = useState<DOMRect | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const viewRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const holdRef = useRef(false);
  const hoverRef = useRef(false);
  const downRef = useRef(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const lastActiveRef = useRef(-1);
  const lastTimeRef = useRef(0);
  const stepRef = useRef(0);
  const halfWidthRef = useRef(0);
  const inViewRef = useRef(false);

  const measure = () => {
    if (!trackRef.current) return;
    const kids = trackRef.current.children;
    if (kids.length >= 2) {
      stepRef.current = (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft;
    }
    halfWidthRef.current = trackRef.current.scrollWidth / 2;
  };

  const applyTransform = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px,0,0)`;
    }
  };

  const normalizeOffset = () => {
    if (!halfWidthRef.current) return;
    offsetRef.current = ((offsetRef.current % halfWidthRef.current) + halfWidthRef.current) % halfWidthRef.current;
  };

  const updateDots = () => {
    if (!viewRef.current || !stepRef.current) return;
    const centerLeft = offsetRef.current + viewRef.current.offsetWidth / 2 - stepRef.current / 2;
    const idx = (Math.round(centerLeft / stepRef.current) % projects.length + projects.length) % projects.length;
    if (idx !== lastActiveRef.current) {
      lastActiveRef.current = idx;
      setActiveIdx(idx);
    }
  };

  const goToCard = (i: number) => {
    if (!viewRef.current || !stepRef.current || !halfWidthRef.current) return;
    const viewCenter = viewRef.current.offsetWidth / 2;
    const targetNorm = i * stepRef.current + stepRef.current / 2 - viewCenter;
    const currentNorm = offsetRef.current % halfWidthRef.current;
    let diff = targetNorm - currentNorm;
    if (diff > halfWidthRef.current / 2) diff -= halfWidthRef.current;
    if (diff < -halfWidthRef.current / 2) diff += halfWidthRef.current;

    holdRef.current = true;
    const startVal = offsetRef.current;
    const endVal = offsetRef.current + diff;
    const duration = 900;
    const startT = performance.now();

    const anim = (t: number) => {
      const p = Math.min((t - startT) / duration, 1);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      offsetRef.current = startVal + (endVal - startVal) * e;
      normalizeOffset();
      applyTransform();
      updateDots();
      if (p < 1) requestAnimationFrame(anim);
      else holdRef.current = false;
    };
    requestAnimationFrame(anim);
  };

  useEffect(() => {
    measure();

    const observer = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (viewRef.current) observer.observe(viewRef.current);

    const tick = (time: number) => {
      if (inViewRef.current && lastTimeRef.current > 0) {
        const dt = Math.min(time - lastTimeRef.current, 50);
        if (!holdRef.current && !hoverRef.current && !downRef.current) {
          offsetRef.current += SPEED * dt / 1000;
          normalizeOffset();
          applyTransform();
          updateDots();
        }
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    holdRef.current = true;
    downRef.current = true;
    draggingRef.current = false;
    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!downRef.current) return;
    const dx = startXRef.current - e.clientX;
    if (Math.abs(dx) > 6) draggingRef.current = true;
    if (draggingRef.current) {
      offsetRef.current = startOffsetRef.current + dx;
      normalizeOffset();
      applyTransform();
      updateDots();
    }
  };

  const onPointerUp = () => {
    downRef.current = false;
    setTimeout(() => {
      draggingRef.current = false;
      holdRef.current = false;
    }, 50);
  };

  return (
    <section id="projects" className="py-28 border-t border-[#2a2015]" style={{ backgroundColor: "#0e0b07" }}>

      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <AnimateIn>
          <p className="text-xs text-[#d4854a] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            04 — Projetos
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>
            <span className="text-[#f2ebe2]">Projetos </span>
            <span className="text-[#d4854a]">reais</span>
            <span className="text-[#d4854a]">.</span>
          </h2>
          <p className="text-xs text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Arraste ou clique em um card para ver os detalhes
          </p>
        </AnimateIn>
      </div>

      {/* Carousel */}
      <div
        ref={viewRef}
        className="overflow-hidden select-none py-8 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onMouseEnter={() => { hoverRef.current = true; }}
        onMouseLeave={() => { hoverRef.current = false; }}
      >
        <div ref={trackRef} className="flex gap-6 w-max" style={{ willChange: "transform" }}>
          {[...projects, ...projects].map((project, i) => {
            const realIdx = i % projects.length;
            const isActive = realIdx === activeIdx;
            return (
              <article
                key={i}
                onClick={(e) => {
                  if (!draggingRef.current) {
                    setOriginRect((e.currentTarget as HTMLElement).getBoundingClientRect());
                    setSelected(project);
                  }
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const r = el.getBoundingClientRect();
                  const rx = ((e.clientX - r.left) / r.width - 0.5) * 10;
                  const ry = ((e.clientY - r.top) / r.height - 0.5) * -8;
                  el.style.transform = `perspective(800px) rotateY(${rx}deg) rotateX(${ry}deg)`;
                  el.style.transition = "transform 0.15s ease";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
                  e.currentTarget.style.transition = "transform 0.6s cubic-bezier(0.21,0.47,0.32,0.98)";
                }}
                className={`group relative flex-none rounded-[28px] border p-2.5 cursor-pointer transition-all duration-500
                  ${isActive
                    ? "opacity-100 border-[#d4854a]/50"
                    : "opacity-50 border-[#2a2015] hover:opacity-100 hover:border-[#d4854a]/30"
                  }`}
                style={{
                  width: "min(78vw, 420px)",
                  background: "rgba(242,235,226,0.04)",
                  boxShadow: isActive ? "0 30px 70px -30px rgba(212,133,74,0.35)" : undefined,
                  willChange: "transform",
                }}
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(200px,30vh,275px)" }}>
                  <Image
                    src={project.screenshot}
                    alt={project.name}
                    fill
                    sizes="420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0c0905]/90 text-[#f2ebe2] text-[10px] border border-[#2a2015]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {project.num}
                  </span>
                  <span
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#0c0905]/90 border border-[#2a2015] text-[#f2ebe2] text-sm transition-transform duration-300 group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 pt-4 pb-3 flex flex-col gap-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full border border-[#2a2015] text-[10px] text-[#4a3f35] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-2xl font-black text-[#f2ebe2] leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm text-[#6a5f55] leading-relaxed line-clamp-3"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center border-t border-[#2a2015] pt-3">
                    <span
                      className="text-[10px] text-[#4a3f35] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      Ver detalhes
                    </span>
                    <span className="text-[#d4854a] text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center items-center gap-1.5 mt-2">
        {projects.map((_, i) => {
          let dist = Math.abs(i - activeIdx);
          dist = Math.min(dist, projects.length - dist);
          return (
            <button
              key={i}
              onClick={() => goToCard(i)}
              className="w-5 h-5 flex items-center justify-center"
              aria-label={`Projeto ${i + 1}`}
            >
              <span
                className="rounded-full transition-all duration-300"
                style={{
                  width:   dist === 0 ? 10 : dist === 1 ? 7 : 5,
                  height:  dist === 0 ? 10 : dist === 1 ? 7 : 5,
                  backgroundColor: dist === 0 ? "#d4854a" : "#f2ebe2",
                  opacity: dist === 0 ? 1   : dist === 1 ? 0.5 : 0.2,
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Open Source */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <AnimateIn delay={0.1}>
          <p className="text-xs text-[#d4854a] tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Open Source
          </p>
        </AnimateIn>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {openSource.map((project) => (
            <motion.a
              key={project.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#141008] border border-[#2a2015] rounded-xl p-5 flex flex-col gap-4 hover:border-[#d4854a]/20 hover:bg-[#180e08] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#f2ebe2]" style={{ fontFamily: "var(--font-dm-mono)" }}>{project.name}</h3>
                <span className="text-[#3a3025] group-hover:text-[#d4854a] transition-colors text-sm">↗</span>
              </div>
              <p className="text-xs text-[#6a5f55] leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-[#0c0905] border border-[#221808] text-[#4a3f35]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (() => {
          const iw = typeof window !== "undefined" ? window.innerWidth : 1200;
          const ih = typeof window !== "undefined" ? window.innerHeight : 800;
          const fromClip = originRect
            ? `inset(${Math.round(originRect.top)}px ${Math.round(iw - originRect.right)}px ${Math.round(ih - originRect.bottom)}px ${Math.round(originRect.left)}px round 28px)`
            : `inset(45% 50% 45% 50% round 20px)`;
          return (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 bg-[#0e0b07] overflow-hidden"
              initial={{ clipPath: fromClip }}
              animate={{ clipPath: "inset(0px 0px 0px 0px round 0px)" }}
              exit={{ clipPath: fromClip }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            >
              <ModalContent project={selected} onClose={() => setSelected(null)} />
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
