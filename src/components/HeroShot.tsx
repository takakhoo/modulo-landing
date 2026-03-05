"use client";

import Image from "next/image";

export default function HeroShot() {
  return (
    <section
      className="relative px-4 md:px-8"
      style={{ background: "var(--bg)", paddingTop: "0", marginTop: "-2px" }}
    >
      {/* Top fade from hero */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-6 pt-8">
          <span className="tag-pill">Beta 1.0 — Live Session</span>
        </div>

        {/* Main shot container — natural 3439×1439 ratio */}
        <div
          className="relative w-full rounded-2xl overflow-hidden group"
          style={{
            border: "1px solid rgba(201,168,76,0.22)",
            boxShadow:
              "0 0 0 1px rgba(201,168,76,0.06), 0 32px 80px rgba(0,0,0,0.6), 0 0 120px rgba(201,168,76,0.06)",
            background: "#050505",
          }}
        >
          <Image
            src="/assets/images/modulo-main-shot.png"
            alt="MODULO DAW — Full Session View with Timeline and Mixer"
            width={3439}
            height={1439}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.012]"
            sizes="(max-width: 768px) 100vw, 90vw"
            priority
          />

          {/* Subtle bottom vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 40%)",
            }}
          />

          {/* Corner glow accents */}
          <div
            className="absolute top-0 left-0 w-64 h-32 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 0% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-32 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Caption bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)",
            }}
          >
            <span style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}>
              MODULO — Timeline, AI Controls, Mixer, Native EQ · Beta 1.0
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "var(--gold)",
              }}
            >
              macOS Universal
            </span>
          </div>
        </div>

        {/* Stat strip below image */}
        <div
          className="grid grid-cols-3 mt-5 rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(201,168,76,0.1)" }}
        >
          {[
            { value: "Timeline + AI", label: "Unified surface" },
            { value: "Mixer + Send/Bus", label: "Pro signal flow" },
            { value: "Native EQ + FX", label: "Built-in processing" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 text-center"
              style={{
                background: "rgba(14,14,14,0.8)",
                borderRight:
                  i < 2 ? "1px solid rgba(201,168,76,0.08)" : "none",
              }}
            >
              <span
                className="font-semibold mb-1"
                style={{ color: "var(--gold)", fontSize: "0.9rem" }}
              >
                {item.value}
              </span>
              <span
                className="uppercase tracking-widest"
                style={{ color: "var(--fg-muted)", fontSize: "0.6rem", letterSpacing: "0.1em" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
