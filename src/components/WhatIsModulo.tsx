"use client";

import { useEffect, useRef } from "react";
import { whatIs } from "../../content/siteData";

export default function WhatIsModulo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const lines = whatIs.headline.split("\n");

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-6 radial-gold"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <div className="reveal flex justify-center mb-10">
          <span className="tag-pill">What is MODULO</span>
        </div>

        {/* Headline */}
        <div className="reveal text-center mb-12">
          <h2
            className="font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--fg)",
            }}
          >
            {lines.map((line, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 0 ? (
                  line
                ) : (
                  <span style={{ color: "var(--gold)" }}>{line}</span>
                )}
              </span>
            ))}
          </h2>
        </div>

        {/* Body */}
        <div className="reveal flex justify-center mb-20">
          <p
            className="text-center max-w-2xl font-light leading-relaxed"
            style={{
              color: "var(--fg-muted)",
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            }}
          >
            {whatIs.body}
          </p>
        </div>

        {/* Stats bar */}
        <div className="reveal">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
            style={{
              border: "1px solid rgba(201,168,76,0.15)",
              background: "rgba(201,168,76,0.08)",
            }}
          >
            {whatIs.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 text-center transition-all duration-300 group cursor-default"
                style={{ background: "rgba(8,8,8,0.7)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(201,168,76,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(8,8,8,0.7)";
                }}
              >
                <span
                  className="font-bold mb-2 transition-colors duration-300 group-hover:text-gold"
                  style={{
                    fontSize: "clamp(0.9rem, 1.8vw, 1.25rem)",
                    color: "var(--gold)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="uppercase tracking-widest"
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--fg-muted)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold line accent */}
      <div className="absolute bottom-0 left-0 right-0 divider" />
    </section>
  );
}
