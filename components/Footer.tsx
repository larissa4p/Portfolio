export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[#444]">
          © {new Date().getFullYear()} Larissa Bessa
        </p>
        <p className="font-mono text-xs text-[#333]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
