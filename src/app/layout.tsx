import type { Metadata } from "next";
import "./globals.css";
import { site } from "../../content/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://modulo-landing-omega.vercel.app"),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  keywords: [
    "DAW",
    "AI music",
    "generative audio workstation",
    "JUCE",
    "Tracktion Engine",
    "music production",
    "C++ audio",
    "stem extraction",
    "chord generation",
    "audio to MIDI",
    "macOS DAW",
  ],
  authors: [{ name: "MODULO" }],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    images: [
      {
        url: "/assets/images/loading-screen.png",
        width: 1920,
        height: 1080,
        alt: "MODULO Loading Screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/assets/images/loading-screen.png"],
  },
  icons: {
    icon: "/assets/images/app-icon.png",
    apple: "/assets/images/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
