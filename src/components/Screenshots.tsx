"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { screenshots } from "../../content/siteData";

export default function Screenshots() {
  const ref = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add("visible")),
      { threshold: 0.05 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null)
        setLightbox((lightbox + 1) % screenshots.length);
      if (e.key === "ArrowLeft" && lightbox !== null)
        setLightbox((lightbox - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  // Split into wide (full-width) and normal
  const wideShots = screenshots.filter((s) => s.wide);
  const gridShots = screenshots.filter((s) => !s.wide);

  return (
    <section
      ref={ref}
      className="py-32 md:py-44 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-6">
          <span className="tag-pill">Screenshots</span>
        </div>
        <h2
          className="reveal text-center font-bold mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          See it in action
        </h2>
        <p
          className="reveal text-center mx-auto mb-20 font-light"
          style={{
            color: "var(--fg-muted)",
            maxWidth: "480px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          Every screenshot is from a live Beta 1.0 session — real features, real UI.
        </p>

        {/* Wide shots — each rendered at its own natural aspect ratio */}
        <div className="space-y-6 mb-6">
          {wideShots.map((shot, i) => {
            const globalIdx = screenshots.indexOf(shot);
            const hasNaturalSize = shot.w && shot.h;
            return (
              <div
                key={i}
                className="reveal group relative w-full rounded-2xl overflow-hidden cursor-zoom-in"
                style={{
                  border: "1px solid rgba(201,168,76,0.12)",
                  background: "#050505",
                  // Use natural ratio if provided, else fall back to 21/9
                  aspectRatio: hasNaturalSize ? `${shot.w}/${shot.h}` : "21/9",
                }}
                onClick={() => setLightbox(globalIdx)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(201,168,76,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
                {/* Caption overlay */}
                <div
                  className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="font-medium"
                    style={{ color: "var(--fg-muted)", fontSize: "0.85rem" }}
                  >
                    {shot.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grid shots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gridShots.map((shot, i) => {
            const globalIdx = screenshots.indexOf(shot);
            return (
              <div
                key={i}
                className="reveal group relative rounded-xl overflow-hidden cursor-zoom-in"
                style={{
                  transitionDelay: `${i * 50}ms`,
                  border: "1px solid rgba(201,168,76,0.1)",
                  aspectRatio: "4/3",
                  background: "#050505",
                }}
                onClick={() => setLightbox(globalIdx)}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(201,168,76,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 60%)",
                  }}
                >
                  <span style={{ color: "var(--fg-muted)", fontSize: "0.72rem" }}>
                    {shot.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          style={{ background: "rgba(0,0,0,0.93)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(201,168,76,0.2)",
              aspectRatio: "16/9",
              boxShadow: "0 0 120px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {/* Nav arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}
            onClick={() => setLightbox((lightbox - 1 + screenshots.length) % screenshots.length)}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}
            onClick={() => setLightbox((lightbox + 1) % screenshots.length)}
          >
            →
          </button>
          {/* Caption */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
            style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}
          >
            {screenshots[lightbox].caption} &nbsp;·&nbsp; {lightbox + 1} / {screenshots.length}
          </div>
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{ background: "rgba(255,255,255,0.08)", color: "var(--fg-muted)" }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}

      <div className="divider mt-32" />
    </section>
  );
}
