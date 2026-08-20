const featured = [
  {
    name: "MTEC",
    description:
      "Plataforma de catálogo para Atas de Registro de Preços com 900+ listagens. Tema WordPress customizado do zero com Tailwind CSS, sistema de filtros avançado, integração com Salesforce via REST API, RD Station, SendGrid e pipeline automatizado de imagens com Node.js e IA.",
    url: "https://mtec.com.vc",
    tags: ["WordPress", "PHP", "Tailwind CSS", "Salesforce", "Node.js", "ACF", "WooCommerce"],
    type: "Plataforma",
  },
  {
    name: "DOQ.APP",
    description:
      "Plataforma de atendimento ao cliente com integração WhatsApp. Desenvolvi o tema WordPress customizado do zero e a integração frontend com a WhatsApp Business API (Evolution API). Inclui painel estilo kanban, gestão de filas e automação de mensagens. Deploy com Docker e Fly.io.",
    url: "https://doq.app",
    tags: ["WordPress", "PHP", "Tema Customizado", "WhatsApp API", "JavaScript", "Docker", "Fly.io"],
    type: "SaaS",
  },
];

const other = [
  {
    name: "SINDJUS",
    description: "Tema WordPress customizado do zero para sindicato do setor público, com área restrita para associados e gestão de conteúdo.",
    url: "https://sindjus.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "Tailwind CSS", "ACF"],
  },
  {
    name: "ANED",
    description: "Tema WordPress customizado do zero e loja WooCommerce com sistema automatizado de renovação de associação por e-mail.",
    url: "https://aned.org",
    tags: ["WordPress", "PHP", "Tema Customizado", "WooCommerce", "Tailwind CSS", "ACF"],
  },
  {
    name: "Territorial Sindical",
    description: "Tema WordPress customizado do zero para sindicato, com páginas institucionais e gestão de conteúdo.",
    url: "https://territorialsindical.org.br",
    tags: ["WordPress", "PHP", "Tema Customizado"],
  },
  {
    name: "CAEFE",
    description: "Tema WordPress customizado do zero para instituição de ensino, com áreas de conteúdo flexíveis via ACF.",
    url: "https://caefe.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado", "ACF"],
  },
  {
    name: "Cantin",
    description: "Tema WordPress customizado do zero, com múltiplas versões ao longo da evolução da marca.",
    url: "https://cantinbr.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado"],
  },
  {
    name: "CLIFALI",
    description: "Tema WordPress customizado do zero com conteúdo dinâmico via ACF para site institucional.",
    url: "https://clifali.com.br",
    tags: ["WordPress", "PHP", "Tema Customizado", "ACF"],
  },
];

export default function Projects() {
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
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#161616] border border-[#252525] rounded-xl p-7 hover:border-[#a78bfa]/30 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] text-[#a78bfa] tracking-widest uppercase">
                    {project.type}
                  </span>
                  <h3 className="text-lg font-semibold text-[#e8e8e8] mt-1 group-hover:text-[#a78bfa] transition-colors">
                    {project.name}
                  </h3>
                </div>
                <span className="text-[#444] group-hover:text-[#a78bfa] transition-colors text-lg shrink-0">
                  ↗
                </span>
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
            </a>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {other.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#161616] border border-[#252525] rounded-xl p-5 hover:border-[#a78bfa]/20 hover:bg-[#181818] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-[#e8e8e8] group-hover:text-[#a78bfa] transition-colors">
                  {project.name}
                </h3>
                <span className="text-[#333] group-hover:text-[#a78bfa] transition-colors text-sm shrink-0">
                  ↗
                </span>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
