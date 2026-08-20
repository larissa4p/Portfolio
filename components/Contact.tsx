import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <AnimateIn>
            <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
              Contato
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-4">
              VAMOS TRABALHAR JUNTOS<span className="text-[#a78bfa]">.</span>
            </h2>
            <p className="text-[#777] text-sm leading-relaxed mb-10">
              Estou aberta a novas oportunidades — remoto ou híbrido,
              baseada em Brasília. Se você tem um projeto ou uma vaga que pode
              fazer sentido, fique à vontade para entrar em contato.
            </p>
          </AnimateIn>

          <div className="flex flex-col gap-4">
            <AnimateIn delay={0.1}>
              <a
                href="mailto:larissabessa4@gmail.com"
                className="group flex items-center gap-4 p-5 bg-[#161616] border border-[#252525] rounded-xl hover:border-[#a78bfa]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#a78bfa] text-sm">@</span>
                </div>
                <div>
                  <p className="text-xs text-[#555] mb-0.5">E-mail</p>
                  <p className="text-sm text-[#e8e8e8] group-hover:text-[#a78bfa] transition-colors">
                    larissabessa4@gmail.com
                  </p>
                </div>
              </a>
            </AnimateIn>

            <AnimateIn delay={0.18}>
              <a
                href="https://linkedin.com/in/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#161616] border border-[#252525] rounded-xl hover:border-[#a78bfa]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#a78bfa] text-sm font-bold">in</span>
                </div>
                <div>
                  <p className="text-xs text-[#555] mb-0.5">LinkedIn</p>
                  <p className="text-sm text-[#e8e8e8] group-hover:text-[#a78bfa] transition-colors">
                    linkedin.com/in/larissa4p
                  </p>
                </div>
              </a>
            </AnimateIn>

            <AnimateIn delay={0.26}>
              <a
                href="https://github.com/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#161616] border border-[#252525] rounded-xl hover:border-[#a78bfa]/30 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#a78bfa]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#a78bfa] text-sm font-mono">gh</span>
                </div>
                <div>
                  <p className="text-xs text-[#555] mb-0.5">GitHub</p>
                  <p className="text-sm text-[#e8e8e8] group-hover:text-[#a78bfa] transition-colors">
                    github.com/larissa4p
                  </p>
                </div>
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
