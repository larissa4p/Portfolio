export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl font-semibold text-[#e8e8e8] leading-snug mb-6">
              Developer who delivers,<br />not just codes.
            </h2>
            <div className="space-y-4 text-[#888] leading-relaxed text-sm">
              <p>
                I&apos;ve spent the last 4 years building real web projects
                for real clients — from institutional sites to complex
                e-commerce platforms and systems with external API integrations.
              </p>
              <p>
                My main focus is WordPress and PHP, where I develop custom
                themes from scratch (no page builders), build custom plugins,
                and integrate with services like Salesforce, WhatsApp,
                RD Station and SendGrid.
              </p>
              <p>
                I also work with React.js, Next.js and Node.js, and have
                experience deploying with Docker and hosting on cloud platforms.
                I&apos;m comfortable working across the full project lifecycle —
                from structure to production.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "17+", label: "Projects delivered" },
              { number: "4+", label: "Years of experience" },
              { number: "8+", label: "WooCommerce stores" },
              { number: "5+", label: "API integrations" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#161616] border border-[#252525] rounded-xl p-6 hover:border-[#a78bfa]/20 transition-colors duration-300"
              >
                <p className="text-3xl font-semibold text-[#a78bfa]">
                  {stat.number}
                </p>
                <p className="text-sm text-[#666] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
