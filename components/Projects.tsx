const featured = [
  {
    name: "MTEC",
    description:
      "Catalog platform for public procurement records (Atas de Registro de Preços) with 900+ listings. Custom WordPress theme built from scratch with Tailwind CSS, advanced filtering system, Salesforce integration via REST API, RD Station, SendGrid, and an automated image pipeline using Node.js and AI.",
    url: "https://mtec.com.vc",
    tags: ["WordPress", "PHP", "Tailwind CSS", "Salesforce", "Node.js", "ACF", "WooCommerce"],
    type: "Platform",
  },
  {
    name: "DOQ.APP",
    description:
      "Customer service platform with WhatsApp integration. Developed the WordPress theme and the frontend integration with WhatsApp Business API (Evolution API). Features a kanban-style service panel, queue management and message automation. Deployed with Docker and Fly.io.",
    url: "https://doq.app",
    tags: ["WordPress", "PHP", "WhatsApp API", "JavaScript", "Docker", "Fly.io"],
    type: "SaaS",
  },
];

const other = [
  {
    name: "SINDJUS",
    description: "Custom WordPress theme for a public sector union, with restricted member area and content management.",
    url: "https://sindjus.org",
    tags: ["WordPress", "PHP", "Tailwind CSS", "ACF"],
  },
  {
    name: "ANED",
    description: "WooCommerce e-commerce platform with automated membership renewal system via email.",
    url: "https://aned.org",
    tags: ["WordPress", "WooCommerce", "Tailwind CSS", "ACF"],
  },
  {
    name: "Territorial Sindical",
    description: "Institutional WordPress site with custom theme and content management.",
    url: "https://territorialsindical.org.br",
    tags: ["WordPress", "PHP", "Custom Theme"],
  },
  {
    name: "CAEFE",
    description: "Institutional website with custom WordPress theme and ACF integration.",
    url: "https://caefe.com.br",
    tags: ["WordPress", "PHP", "ACF"],
  },
  {
    name: "Cantin",
    description: "WordPress site with iterative theme development across multiple versions.",
    url: "https://cantinbr.com.br",
    tags: ["WordPress", "PHP", "Custom Theme"],
  },
  {
    name: "CLIFALI",
    description: "Institutional WordPress website with custom theme and advanced custom fields.",
    url: "https://clifali.com.br",
    tags: ["WordPress", "PHP", "ACF"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
          Projects
        </p>
        <h2 className="text-3xl font-semibold text-[#e8e8e8] mb-14">
          Selected work
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
