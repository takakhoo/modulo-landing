"use client";

import { useEffect, useRef } from "react";
import { gettingStarted, site } from "../../content/siteData";

const stepColors: Record<string, { border: string; bg: string; dot: string; num: string }> = {
  "#C9A84C": {
    border: "rgba(201,168,76,0.25)",
    bg: "rgba(201,168,76,0.04)",
    dot: "#C9A84C",
    num: "rgba(201,168,76,0.15)",
  },
  "#60A5FA": {
    border: "rgba(96,165,250,0.2)",
    bg: "rgba(96,165,250,0.03)",
    dot: "#60A5FA",
    num: "rgba(96,165,250,0.12)",
  },
  "#4ADE80": {
    border: "rgba(74,222,128,0.2)",
    bg: "rgba(74,222,128,0.03)",
    dot: "#4ADE80",
    num: "rgba(74,222,128,0.12)",
  },
};

export default function GetStarted() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add("visible")),
      { threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="get-started"
      className="py-32 md:py-44 px-6"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-6">
          <span className="tag-pill">Get Started</span>
        </div>
        <h2
          className="reveal text-center font-bold mb-5"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          {gettingStarted.headline}
        </h2>
        <p
          className="reveal text-center mx-auto mb-16 font-light"
          style={{
            color: "var(--fg-muted)",
            maxWidth: "560px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
            lineHeight: 1.7,
          }}
        >
          {gettingStarted.subhead}
        </p>

        {/* Beta warning banner */}
        <div
          className="reveal mb-14 rounded-2xl px-8 py-6 flex gap-5 items-start"
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div
            className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
          >
            !
          </div>
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: "var(--gold)", fontSize: "0.85rem", letterSpacing: "0.02em" }}
            >
              Apple Gatekeeper — one-time bypass required
            </p>
            <p style={{ color: "var(--fg-muted)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              MODULO Beta 1.0 is not yet Apple-notarized. On first launch, macOS will show a{" "}
              <em>&ldquo;cannot be opened&rdquo;</em> warning. Go to{" "}
              <strong style={{ color: "var(--fg)" }}>
                System Settings → Privacy &amp; Security
              </strong>{" "}
              → scroll to the blocked app entry → click{" "}
              <strong style={{ color: "var(--fg)" }}>Open Anyway</strong>. You only do this once.
              Notarization is on the near-term roadmap.
            </p>
          </div>
        </div>

        {/* Step cards */}
        <div className="space-y-6">
          {gettingStarted.steps.map((step, i) => {
            const c = stepColors[step.color] ?? stepColors["#C9A84C"];
            return (
              <div
                key={i}
                className="reveal rounded-2xl p-8"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  border: `1px solid ${c.border}`,
                  background: "rgba(8,8,8,0.7)",
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold"
                    style={{
                      background: c.num,
                      color: step.color,
                      fontSize: "0.75rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.number}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold mb-5"
                      style={{
                        color: "var(--fg)",
                        fontSize: "1rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h3>

                    <ul className="space-y-3">
                      {step.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3"
                          style={{ color: "var(--fg-muted)", fontSize: "0.875rem", lineHeight: 1.65 }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: c.dot, opacity: 0.7 }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href={site.downloadUrl}
            className="btn-shine inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm"
            style={{
              background: "var(--gold)",
              color: "#080808",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold)")}
          >
            {/* Download icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Beta 1.0 — macOS DMG
          </a>
          <p
            className="mt-4"
            style={{ color: "var(--fg-muted)", fontSize: "0.78rem" }}
          >
            Universal binary · Apple Silicon + Intel · ~98 MB
          </p>
        </div>
      </div>

      <div className="divider mt-32" />
    </section>
  );
}
