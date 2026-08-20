export default function About() {
  return (
    <section id="about" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
          Sobre
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-14">
          DESENVOLVEDORA QUE ENTREGA<span className="text-[#a78bfa]">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 text-[#888] leading-relaxed text-sm">
            <p>
              Nos últimos 4 anos construí projetos web reais para clientes reais —
              desde sites institucionais até plataformas de e-commerce e sistemas
              com integrações externas.
            </p>
            <p>
              Meu foco principal é WordPress e PHP, onde desenvolvo temas
              customizados do zero (sem construtores de página), crio plugins
              personalizados e integro com serviços como Salesforce, WhatsApp,
              RD Station e SendGrid.
            </p>
            <p>
              Também trabalho com React.js, Next.js e Node.js, e tenho
              experiência com deploy usando Docker e hospedagem em cloud.
              Me sinto confortável em todo o ciclo do projeto —
              da estrutura à produção.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "17+", label: "Projetos entregues" },
              { number: "4+", label: "Anos de experiência" },
              { number: "8+", label: "Lojas WooCommerce" },
              { number: "5+", label: "Integrações com APIs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#161616] border border-[#252525] rounded-xl p-6 hover:border-[#a78bfa]/20 transition-colors duration-300"
              >
                <p className="text-3xl font-black text-[#a78bfa]">
                  {stat.number}
                </p>
                <p className="text-xs text-[#555] mt-1 font-mono uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
