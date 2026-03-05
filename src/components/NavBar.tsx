"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "../../content/siteData";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#tech" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.08)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/assets/images/app-icon.png"
              alt="MODULO"
              fill
              className="object-contain"
              sizes="28px"
            />
          </div>
          <span
            className="font-bold tracking-wider transition-colors duration-300 group-hover:text-gold"
            style={{ color: "var(--gold)", letterSpacing: "0.1em", fontSize: "0.95rem" }}
          >
            MODULO
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
            style={{
              color: "var(--fg-muted)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.15)";
            }}
          >
            GitHub
          </a>
          <a
            href={site.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
            style={{
              background: "var(--gold)",
              color: "#080808",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold)")}
          >
            Download Beta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className="block h-px w-full transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: open ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="block h-px w-full transition-all duration-300"
            style={{
              background: "var(--gold)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-full transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: open ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium py-2"
              style={{ color: "var(--fg-muted)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            <a
              href={site.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 rounded-full font-semibold text-sm"
              style={{ background: "var(--gold)", color: "#080808" }}
            >
              Download Beta 1.0
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3 rounded-full font-semibold text-sm"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)" }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
