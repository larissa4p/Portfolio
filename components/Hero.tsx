import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Photo */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#252525] ring-4 ring-[#a78bfa]/10">
              <Image
                src="/photo.jpg"
                alt="Larissa Bessa"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div>
              <p className="font-mono text-sm text-[#a78bfa] mb-3 tracking-widest uppercase">
                Available for remote work
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold text-[#e8e8e8] leading-tight tracking-tight">
                Larissa Bessa
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-[#777] font-light">
                Web Developer · WordPress & PHP · React
              </p>
            </div>

            <p className="max-w-xl text-base text-[#888] leading-relaxed">
              4+ years building real projects — custom WordPress themes from
              scratch, WooCommerce stores, API integrations and front-end
              interfaces. Based in Brasília, open to remote opportunities.
            </p>

            <div className="flex items-center gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-[#a78bfa] text-[#0d0d0d] rounded-lg text-sm font-semibold hover:bg-[#c4b5fd] transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-[#252525] text-[#e8e8e8] rounded-lg text-sm font-medium hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/5 transition-all duration-200"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/larissa4p"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[#252525] text-[#777] rounded-lg text-sm font-medium hover:text-[#e8e8e8] hover:border-[#333] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-24 flex justify-center md:justify-start">
          <div className="flex flex-col items-center gap-2 text-[#444]">
            <div className="w-px h-12 bg-gradient-to-b from-[#444] to-transparent" />
            <span className="font-mono text-xs tracking-widest">scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
