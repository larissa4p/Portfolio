"use client";

import { useEffect, useRef } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex justify-center overflow-y-auto"
      onClick={onClose}
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-[#999] hover:text-white hover:border-[#a78bfa]/50 transition-all text-sm"
        aria-label="Fechar"
      >
        ✕
      </button>

      {/* Instrução */}
      <p className="fixed bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-mono text-[#444] z-10 pointer-events-none">
        ESC ou clique fora para fechar · scroll para ver o site completo
      </p>

      {/* Imagem */}
      <div
        className="py-10 px-4 w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full rounded-xl shadow-2xl border border-[#2a2a2a]"
        />
      </div>
    </div>
  );
}
