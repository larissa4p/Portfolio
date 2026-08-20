const skillGroups = [
  {
    category: "WordPress & PHP",
    skills: [
      "WordPress",
      "PHP",
      "Custom Themes",
      "Custom Plugins",
      "WooCommerce",
      "ACF",
      "Custom Post Types",
      "REST API",
    ],
  },
  {
    category: "Front-End",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    category: "Back-End & Integrations",
    skills: [
      "Node.js",
      "Laravel",
      "Salesforce API",
      "WhatsApp API",
      "RD Station",
      "SendGrid",
      "REST APIs",
      "n8n",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Fly.io",
      "AWS S3",
      "MySQL",
      "Figma",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs text-[#a78bfa] tracking-widest uppercase mb-4">
          Skills
        </p>
        <h2 className="text-3xl font-semibold text-[#e8e8e8] mb-14">
          Technologies & tools
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-mono text-[#555] uppercase tracking-widest mb-4">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-[#888]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#a78bfa] shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
