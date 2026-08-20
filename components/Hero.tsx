import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-10"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Texto */}
          <div className="flex flex-col gap-6 flex-1">
            <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase">
              Disponível para trabalho remoto · Brasília, DF
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight uppercase">
              CONSTRUINDO A WEB<br />
              QUE FUNCIONA<span className="text-[#a78bfa]">.</span>
            </h1>

            <p className="max-w-lg text-[#777] text-sm leading-relaxed">
              Sou Larissa Bessa, desenvolvedora web com 4+ anos de experiência
              entregando projetos reais. Especializada em WordPress, PHP e React —
              de temas customizados a integrações complexas com APIs. Levo projetos
              da ideia à produção.
            </p>

            <div className="flex items-center gap-3 flex-wrap pt-2">
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
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:larissabessa4@gmail.com"
                className="text-xs text-[#555] hover:text-[#a78bfa] transition-colors font-mono"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="shrink-0 flex justify-center">
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
              <div className="absolute -inset-1 rounded-2xl bg-[#a78bfa]/10 blur-xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
