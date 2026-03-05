"use client";

import Image from "next/image";
import { site } from "../../content/siteData";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Gold radial glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CTA section */}
        <div
          className="rounded-3xl p-10 md:p-16 mb-20 text-center"
          style={{
            border: "1px solid rgba(201,168,76,0.18)",
            background: "rgba(14,14,12,0.9)",
            boxShadow: "0 0 80px rgba(201,168,76,0.04) inset",
          }}
        >
          <span className="tag-pill mb-6 inline-block">Get in Touch</span>
          <h2
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              letterSpacing: "-0.035em",
              color: "var(--fg)",
            }}
          >
            Build the future of{" "}
            <span style={{ color: "var(--gold)" }}>music creation.</span>
          </h2>
          <p
            className="mx-auto mb-10 font-light"
            style={{
              color: "var(--fg-muted)",
              maxWidth: "520px",
              fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
              lineHeight: 1.7,
            }}
          >
            Whether you&apos;re a startup exploring AI music tools, a recruiter looking for full-stack audio engineering talent, or a researcher interested in the GAW category — let&apos;s talk. Reach out by email or phone.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Book a demo */}
            <a
              href={site.demoUrl}
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "var(--gold)",
                color: "#080808",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--gold)")}
            >
              Book a Demo
            </a>

            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                color: "var(--gold)",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.7)";
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {site.email}
            </a>

            {/* Phone */}
            <a
              href={`tel:${site.phone}`}
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                color: "var(--gold)",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.7)";
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {site.phone}
            </a>

            {/* GitHub */}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                border: "1px solid rgba(120,120,120,0.25)",
                color: "var(--fg-muted)",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(120,120,120,0.25)";
                (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
              }}
            >
              {/* GitHub icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/app-icon.png"
                alt="MODULO icon"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <span
              className="font-bold"
              style={{ color: "var(--gold)", letterSpacing: "0.1em", fontSize: "0.9rem" }}
            >
              MODULO
            </span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>{site.tagline}</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={site.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
            >
              Download
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
            >
              GitHub
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
            >
              Email
            </a>
            <a
              href={`tel:${site.phone}`}
              className="transition-colors duration-200"
              style={{ color: "var(--fg-muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")}
            >
              Phone
            </a>
          </div>

          <span style={{ opacity: 0.4 }}>
            &copy; {new Date().getFullYear()} MODULO &mdash; {site.version}
          </span>
        </div>
      </div>
    </footer>
  );
}
