"use client";

import { useEffect, useRef } from "react";
import { site, heroWords } from "../../content/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero and drive scroll-based transforms
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Content fades and moves up
      tl.to(contentRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.96,
        ease: "none",
      }, 0);

      // Background scales up slightly (parallax depth)
      tl.to(bgRef.current, {
        scale: 1.06,
        opacity: 0.4,
        ease: "none",
      }, 0);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url(/assets/images/loading-screen.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.55,
          transform: "scale(1.0)",
        }}
      />

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, transparent 30%, transparent 60%, rgba(8,8,8,0.95) 100%)",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 55%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto will-change-transform"
      >
        {/* Beta pill */}
        <div className="flex justify-center mb-8">
          <span className="tag-pill">
            {site.version} &mdash; {site.platform}
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-bold tracking-tight leading-none mb-4"
          style={{
            fontSize: "clamp(4rem, 14vw, 12rem)",
            color: "var(--fg)",
            letterSpacing: "-0.04em",
          }}
        >
          <span className="glow-gold-text" style={{ color: "var(--gold)" }}>
            {site.name}
          </span>
        </h1>

        {/* Animated words */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 mb-8"
          style={{
            fontSize: "clamp(1.25rem, 3.5vw, 2.5rem)",
            color: "var(--fg-muted)",
            letterSpacing: "-0.02em",
            fontWeight: 300,
          }}
        >
          {heroWords.map((word, i) => (
            <span
              key={word}
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: 0,
                animation: `fadeInUp 0.8s ease ${i * 0.2 + 0.3}s forwards`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <p
          className="mx-auto mb-12 font-light"
          style={{
            maxWidth: "640px",
            color: "var(--fg-muted)",
            fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
            lineHeight: 1.7,
            opacity: 0,
            animation: "fadeInUp 0.8s ease 0.9s forwards",
          }}
        >
          {site.subtagline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-4"
          style={{
            opacity: 0,
            animation: "fadeInUp 0.8s ease 1.1s forwards",
          }}
        >
          <a
            href={site.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: "var(--gold)",
              color: "#080808",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold-light)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            }}
          >
            Download Beta 1.0
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold)",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.8)";
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        aria-label="Scroll down"
        style={{ opacity: 0, animation: "fadeInUp 1s ease 1.6s forwards" }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--fg-muted)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
