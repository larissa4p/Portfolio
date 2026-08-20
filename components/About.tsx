"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <p ref={ref} className="text-3xl font-black text-[#a78bfa]">
      {count}{suffix}
    </p>
  );
}

const stats = [
  { raw: 17, suffix: "+", label: "Projetos entregues" },
  { raw: 4,  suffix: "+", label: "Anos de experiência" },
  { raw: 8,  suffix: "+", label: "Lojas WooCommerce" },
  { raw: 5,  suffix: "+", label: "Integrações com APIs" },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
            Sobre
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#e8e8e8] uppercase tracking-tight mb-14">
            DESENVOLVEDORA QUE ENTREGA<span className="text-[#a78bfa]">.</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn delay={0.1}>
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
          </AnimateIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={0.15 + i * 0.08}>
                <div className="bg-[#161616] border border-[#252525] rounded-xl p-6 hover:border-[#a78bfa]/20 transition-colors duration-300">
                  <Counter value={stat.raw} suffix={stat.suffix} />
                  <p className="text-xs text-[#555] mt-1 font-mono uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
