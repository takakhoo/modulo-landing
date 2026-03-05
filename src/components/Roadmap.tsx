"use client";

import { useEffect, useRef } from "react";
import { roadmap } from "../../content/siteData";

const statusConfig = {
  shipped: { label: "Shipped", color: "#4ADE80", bg: "rgba(74,222,128,0.08)", border: "rgba(74,222,128,0.25)" },
  active:  { label: "In Progress", color: "#C9A84C", bg: "rgba(201,168,76,0.08)", border: "rgba(201,168,76,0.25)" },
  planned: { label: "Planned", color: "#A78BFA", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.18)" },
} as const;

export default function Roadmap() {
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
      className="py-32 md:py-44 px-6 radial-gold-bottom"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-6">
          <span className="tag-pill">Roadmap</span>
        </div>
        <h2
          className="reveal text-center font-bold mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          Where this is going.
        </h2>
        <p
          className="reveal text-center mx-auto mb-24 font-light"
          style={{
            color: "var(--fg-muted)",
            maxWidth: "480px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          MODULO is under active development. Beta 1.0 is functional — the next phases unlock the full GAW vision.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.25) 10%, rgba(201,168,76,0.25) 90%, transparent)" }}
          />

          <div className="space-y-10 md:space-y-0">
            {roadmap.map((phase, i) => {
              const cfg = statusConfig[phase.status];
              const isRight = i % 2 === 0;

              return (
                <div
                  key={phase.phase}
                  className={`reveal relative md:grid md:grid-cols-2 md:gap-16 items-start ${isRight ? "" : "md:direction-rtl"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Dot on the timeline */}
                  <div
                    className="absolute left-0 md:left-1/2 top-7 w-3 h-3 -ml-1.5 md:-ml-1.5 rounded-full hidden md:block"
                    style={{
                      background: cfg.color,
                      boxShadow: `0 0 12px ${cfg.color}`,
                      zIndex: 1,
                    }}
                  />

                  {/* Content card — alternates left/right */}
                  <div className={`${isRight ? "md:col-start-1 md:text-right md:pr-8" : "md:col-start-2 md:pl-8"} pb-12`}>
                    {/* Phase header */}
                    <div className={`flex items-center gap-3 mb-4 ${isRight ? "md:justify-end" : ""}`}>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: cfg.bg,
                          border: `1px solid ${cfg.border}`,
                          color: cfg.color,
                        }}
                      >
                        {cfg.label}
                      </span>
                    </div>

                    <h3
                      className="font-bold mb-5"
                      style={{
                        fontSize: "clamp(1rem, 2vw, 1.4rem)",
                        color: "var(--fg)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {phase.phase}
                    </h3>

                    {/* Items */}
                    <ul className={`space-y-2 ${isRight ? "md:items-end" : ""}`}>
                      {phase.items.map((item, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-2.5 ${isRight ? "md:flex-row-reverse" : ""}`}
                          style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}
                        >
                          <span
                            className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: cfg.color, opacity: 0.7 }}
                          />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
