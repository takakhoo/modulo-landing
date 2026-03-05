"use client";

import { useEffect, useRef } from "react";
import { features } from "../../content/siteData";

const iconMap: Record<string, React.ReactNode> = {
  MusicNote: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
    </svg>
  ),
  Piano: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Waveform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9V4.5M15 9h4.5M15 9l5.25-5.25M15 15v4.5M15 15h4.5M15 15l5.25 5.25" />
    </svg>
  ),
  Harmony: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
      <circle cx="7" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="13" cy="12" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="18" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Stems: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 12m0 0 3.75 3M12 12V3m-5.25 9.75h10.5" />
    </svg>
  ),
  Mixer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M3 12h18M3 16.5h18" />
      <circle cx="7" cy="7.5" r="2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="9" cy="16.5" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  Hotkeys: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="3" y="4" width="18" height="14" rx="2" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 12h4m4 0h.01M12 15h.01" />
    </svg>
  ),
  Plugin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
    </svg>
  ),
};

export default function Features() {
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
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-6">
          <span className="tag-pill">Built for Musicians</span>
        </div>
        <h2
          className="reveal text-center font-bold mb-6"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
        >
          AI power. Musician logic.
        </h2>
        <p
          className="reveal text-center mx-auto mb-20 font-light"
          style={{
            color: "var(--fg-muted)",
            maxWidth: "540px",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
          }}
        >
          Every capability is wired directly into project state — designed by a lifelong musician who knows what musicians actually need in a DAW.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative p-7 rounded-2xl cursor-default transition-all duration-400"
              style={{
                transitionDelay: `${i * 60}ms`,
                border: "1px solid rgba(201,168,76,0.1)",
                background: "rgba(14,14,14,0.8)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(201,168,76,0.35)";
                el.style.background = "rgba(20,18,12,0.9)";
                el.style.boxShadow = "0 0 32px rgba(201,168,76,0.06), 0 4px 24px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(201,168,76,0.1)";
                el.style.background = "rgba(14,14,14,0.8)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  color: "var(--gold)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                {iconMap[f.icon] ?? <span className="text-xl">{f.icon}</span>}
              </div>

              {/* Title */}
              <h3
                className="font-semibold mb-3 transition-colors duration-300"
                style={{
                  fontSize: "1rem",
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                className="font-light leading-relaxed"
                style={{ color: "var(--fg-muted)", fontSize: "0.9rem" }}
              >
                {f.desc}
              </p>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
                  borderRadius: "0 1rem 0 0",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="divider mt-32" />
    </section>
  );
}
