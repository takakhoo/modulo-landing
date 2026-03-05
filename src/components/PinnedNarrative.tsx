"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { narrative } from "../../content/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedNarrative() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = narrative.length;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalSlides * 100}%`,
        pin: stickyRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * totalSlides),
            totalSlides - 1
          );
          setActiveIndex(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const active = narrative[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{
        height: `${narrative.length * 100}vh`,
        background: "var(--bg-2)",
        position: "relative",
      }}
    >
      {/* Sticky container — pinned by GSAP */}
      <div
        ref={stickyRef}
        className="w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ willChange: "transform" }}
      >
        {/* Background subtle gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: text panel */}
          <div className="flex flex-col justify-center">
            {/* Progress dots */}
            <div className="flex gap-2 mb-10">
              {narrative.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "24px" : "6px",
                    height: "6px",
                    background:
                      i === activeIndex
                        ? "var(--gold)"
                        : "rgba(201,168,76,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Eyebrow */}
            <div className="mb-4">
              <span className="tag-pill">{active.tag}</span>
            </div>

            {/* Eyebrow category */}
            <p
              className="mb-3 font-semibold uppercase tracking-widest"
              style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}
            >
              {active.eyebrow}
            </p>

            {/* Headline */}
            <h2
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
                letterSpacing: "-0.03em",
                color: "var(--fg)",
              }}
            >
              {active.headline}
            </h2>

            {/* Body */}
            <p
              className="font-light leading-relaxed"
              style={{
                color: "var(--fg-muted)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                maxWidth: "480px",
              }}
            >
              {active.body}
            </p>

            {/* Step counter */}
            <div
              className="mt-12 font-mono"
              style={{ color: "var(--fg-dim)", fontSize: "0.75rem" }}
            >
              {String(activeIndex + 1).padStart(2, "0")} &mdash;{" "}
              {String(narrative.length).padStart(2, "0")}
            </div>
          </div>

          {/* Right: screenshot */}
          <div className="relative flex items-center justify-center">
            <div
              className="relative w-full rounded-2xl overflow-hidden glow-gold transition-all duration-700"
              style={{
                aspectRatio: "16/10",
                border: "1px solid rgba(201,168,76,0.15)",
                background: "#0a0a0a",
              }}
            >
              <Image
                src={active.image}
                alt={active.headline}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={activeIndex === 0}
              />
              {/* Screen glare */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating label */}
            <div
              className="absolute -bottom-5 left-4 right-4 flex justify-center"
              style={{ pointerEvents: "none" }}
            >
              <span
                className="rounded-full px-4 py-1 text-xs font-medium"
                style={{
                  background: "rgba(8,8,8,0.9)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--fg-muted)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {active.eyebrow}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint at bottom */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{ color: "var(--fg-muted)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
        >
          SCROLL TO EXPLORE
        </div>
      </div>
    </section>
  );
}
