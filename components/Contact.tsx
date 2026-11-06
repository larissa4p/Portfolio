import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-[#2a2015]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <AnimateIn>
            <p className="text-xs text-[#d4854a] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Contato
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#f2ebe2] uppercase tracking-tight mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
              VAMOS TRABALHAR JUNTOS<span className="text-[#d4854a]">.</span>
            </h2>
            <p className="text-[#9a8f82] text-sm leading-relaxed mb-10" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Estou aberta a novas oportunidades — remoto ou híbrido,
              baseada em Brasília. Se você tem um projeto ou uma vaga que pode
              fazer sentido, fique à vontade para entrar em contato.
            </p>
          </AnimateIn>

          <div className="flex flex-col gap-4">
            <AnimateIn delay={0.1}>
              <a
                href="mailto:larissabessa4@gmail.com"
                className="group flex items-center gap-4 p-5 bg-[#141008] border border-[#2a2015] rounded-xl hover:bg-[#d4854a] hover:border-[#d4854a] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d4854a]/10 group-hover:bg-[#0c0905]/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <span className="text-[#d4854a] group-hover:text-[#0c0905] text-sm transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>@</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#4a3f35] group-hover:text-[#0c0905]/50 mb-0.5 transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>E-mail</p>
                  <p className="text-sm text-[#f2ebe2] group-hover:text-[#0c0905] font-medium transition-colors duration-300" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    larissabessa4@gmail.com
                  </p>
                </div>
                <span className="text-[#2a2015] group-hover:text-[#0c0905]/60 group-hover:translate-x-0.5 transition-all duration-300 text-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>→</span>
              </a>
            </AnimateIn>

            <AnimateIn delay={0.18}>
              <a
                href="https://linkedin.com/in/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#141008] border border-[#2a2015] rounded-xl hover:bg-[#d4854a] hover:border-[#d4854a] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d4854a]/10 group-hover:bg-[#0c0905]/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <span className="text-[#d4854a] group-hover:text-[#0c0905] text-sm font-bold transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>in</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#4a3f35] group-hover:text-[#0c0905]/50 mb-0.5 transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>LinkedIn</p>
                  <p className="text-sm text-[#f2ebe2] group-hover:text-[#0c0905] font-medium transition-colors duration-300" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    linkedin.com/in/larissa4p
                  </p>
                </div>
                <span className="text-[#2a2015] group-hover:text-[#0c0905]/60 group-hover:translate-x-0.5 transition-all duration-300 text-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>→</span>
              </a>
            </AnimateIn>

            <AnimateIn delay={0.26}>
              <a
                href="https://github.com/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[#141008] border border-[#2a2015] rounded-xl hover:bg-[#d4854a] hover:border-[#d4854a] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#d4854a]/10 group-hover:bg-[#0c0905]/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <span className="text-[#d4854a] group-hover:text-[#0c0905] text-sm transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>gh</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#4a3f35] group-hover:text-[#0c0905]/50 mb-0.5 transition-colors duration-300" style={{ fontFamily: "var(--font-dm-mono)" }}>GitHub</p>
                  <p className="text-sm text-[#f2ebe2] group-hover:text-[#0c0905] font-medium transition-colors duration-300" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    github.com/larissa4p
                  </p>
                </div>
                <span className="text-[#2a2015] group-hover:text-[#0c0905]/60 group-hover:translate-x-0.5 transition-all duration-300 text-sm" style={{ fontFamily: "var(--font-dm-mono)" }}>→</span>
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
