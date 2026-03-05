"use client";

import { useEffect, useRef } from "react";
import { techStack, whyItMatters } from "../../content/siteData";

const layerColors = {
  gold:   { border: "rgba(201,168,76,0.3)",  bg: "rgba(201,168,76,0.04)",  dot: "#C9A84C", label: "rgba(201,168,76,0.6)" },
  blue:   { border: "rgba(96,165,250,0.2)",  bg: "rgba(96,165,250,0.03)",  dot: "#60A5FA", label: "rgba(96,165,250,0.6)" },
  green:  { border: "rgba(74,222,128,0.2)",  bg: "rgba(74,222,128,0.03)",  dot: "#4ADE80", label: "rgba(74,222,128,0.6)" },
  purple: { border: "rgba(167,139,250,0.2)", bg: "rgba(167,139,250,0.03)", dot: "#A78BFA", label: "rgba(167,139,250,0.6)" },
};

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-32 md:py-44 px-6"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-6">
          <span className="tag-pill">Architecture</span>
        </div>
        <h2
          className="reveal text-center font-bold mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          Tech Stack & Architecture
        </h2>
        <p
          className="reveal text-center mx-auto mb-20 font-light"
          style={{
            color: "var(--fg-muted)",
            maxWidth: "540px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          Production-grade engineering from the audio engine to the AI inference layer, designed for zero-roundtrip creative flow.
        </p>

        {/* Stack cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {techStack.map((layer, i) => {
            const colors = layerColors[layer.color];
            return (
              <div
                key={layer.layer}
                className="reveal group p-7 rounded-2xl cursor-default transition-all duration-400"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  border: `1px solid ${colors.border}`,
                  background: "rgba(8,8,8,0.7)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = colors.bg;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(8,8,8,0.7)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Layer label */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: colors.dot, boxShadow: `0 0 8px ${colors.dot}` }}
                  />
                  <span
                    className="font-bold uppercase tracking-widest"
                    style={{ fontSize: "0.7rem", color: colors.label }}
                  >
                    {layer.layer}
                  </span>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {layer.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3"
                      style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: colors.dot, opacity: 0.6 }}
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Why it matters */}
        <div className="reveal">
          <div className="text-center mb-12">
            <span className="tag-pill">Why it matters</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItMatters.map((item, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-xl text-center"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  border: "1px solid rgba(201,168,76,0.08)",
                  background: "rgba(14,14,14,0.6)",
                }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ color: "var(--gold)", fontSize: "1rem", letterSpacing: "-0.01em" }}
                >
                  {item.headline}
                </h3>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider mt-32" />
    </section>
  );
}
