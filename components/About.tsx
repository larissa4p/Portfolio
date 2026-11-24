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
    <p ref={ref} className="text-3xl font-black text-[#d4854a]" style={{ fontFamily: "var(--font-bricolage)" }}>
      {count}{suffix}
    </p>
  );
}

const stats = [
  { raw: 23, suffix: "",  label: "Projetos entregues" },
  { raw: 5,  suffix: "",  label: "Anos de experiência" },
  { raw: 8,  suffix: "+", label: "Lojas WooCommerce" },
  { raw: 10, suffix: "+", label: "Integrações com APIs" },
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-[#2a2015]" style={{ backgroundColor: "#0e0b07" }}>
      <div className="max-w-5xl mx-auto px-6">
        <AnimateIn>
          <p className="text-xs text-[#d4854a] tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Sobre
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#f2ebe2] uppercase tracking-tight mb-14" style={{ fontFamily: "var(--font-bricolage)" }}>
            DESENVOLVEDORA QUE ENTREGA<span className="text-[#d4854a]">.</span>
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AnimateIn delay={0.1}>
            <div className="space-y-4 text-[#9a8f82] leading-relaxed text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                Nos últimos 5 anos construí projetos web reais para clientes reais,
                desde sites institucionais até plataformas SaaS com integrações externas.
              </p>
              <p>
                Meu foco principal é WordPress e PHP: temas customizados do zero,
                sem page builder, e integrações em produção com Salesforce,
                WhatsApp Business via Evolution API, n8n, RD Station, SendGrid,
                Supabase e Docker. Já integrei WordPress com base de dados Firebird legada.
              </p>
              <p>
                Quando o projeto precisa de front-end mais robusto,
                uso React, Next.js e TypeScript.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={0.15 + i * 0.08}>
                <div className="bg-[#141008] border border-[#2a2015] rounded-xl p-6 hover:border-[#d4854a]/20 transition-colors duration-300">
                  <Counter value={stat.raw} suffix={stat.suffix} />
                  <p className="text-xs text-[#4a3f35] mt-1 uppercase tracking-widest" style={{ fontFamily: "var(--font-dm-mono)" }}>
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
