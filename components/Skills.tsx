import Image from "next/image";

const techs = [
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "WooCommerce",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Supabase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "AWS S3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "PostCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postcss/postcss-original.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-14">
          MINHAS ESPECIALIDADES<span className="text-[#a78bfa]">.</span>
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 p-4 bg-[#161616] border border-[#252525] rounded-xl hover:border-[#a78bfa]/30 hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
                style={{ filter: tech.name === "GitHub" ? "invert(1)" : undefined }}
              />
              <span className="text-[10px] font-mono text-[#555] group-hover:text-[#888] transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
