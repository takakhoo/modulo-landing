# MODULO — Landing Page

Marketing site for **MODULO**, a native macOS Generative Audio Workstation built from scratch in C++, JUCE, and Tracktion Engine.

Live: [modulo-landing-omega.vercel.app](https://modulo-landing-omega.vercel.app)
Main repo: [github.com/takakhoo/MODULO_DAW_AI](https://github.com/takakhoo/MODULO_DAW_AI)

---

## What is MODULO?

MODULO (Musician-Owned DAW for User-Led Orchestration) is a standalone Generative Audio Workstation for macOS. It treats AI generation, harmonic reasoning, and professional mixing as first-class timeline primitives — not bolted-on features.

The name comes from the `%` operator in computer science: modulo returns the **remainder**. After years studying music theory, the most interesting creative territory turned out to be the unexplored remainder of harmonic and compositional space that conventional tools never reach. MODULO is the interface built to navigate it.

Key capabilities in Beta 1.0:
- Full-song AI generation via structured Composition Plan (ElevenLabs Music v1)
- **Chord Workshop™** — Reinforcement Learning harmonic exploration via ReaLChords, with live MIDI preview and inversion editing
- Audio → MIDI via Spotify Basic Pitch deep learning transcription
- Melody-aware harmonization (up to 5 lines)
- Stem extraction, SFX generation, audio isolation
- Production mixer: track/bus/master routing, send/return, automation lanes
- Native custom-built EQ and FX modules
- VST/AU plugin hosting
- `.modx` native session format — encodes timeline, mixer state, and AI parameters in one file

---

## This Repo

Next.js landing page. Deployed on Vercel.

**Stack:** Next.js 16 · Tailwind v4 · GSAP · Framer Motion

**Content:** All copy, links, feature lists, and roadmap live in one file:

```
content/siteData.ts
```

Edit there. Components pull from it. Nothing is hardcoded in JSX.

**Sections (in order):**

```
NavBar → Hero → HeroShot → WhatIsModulo → OriginStory →
PinnedNarrative → Features → TechStack → Screenshots →
Roadmap → GetStarted → Footer
```

**OriginStory** is a GSAP-pinned scroll narrative (8 steps, ~850vh total) walking through the conceptual origin of the product name and symbol: physics → signal theory → music theory → modular arithmetic → philosophy → medium → the remainder insight → the symbol.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying

```bash
npm run build           # verify before pushing
vercel --prod --yes     # deploy to production
```

> Note: if you hit a TLS error locally, prefix with `NODE_TLS_REJECT_UNAUTHORIZED=0`.

---

## Project Structure

```
src/
  app/
    layout.tsx          # metadata, favicon, global fonts
    page.tsx            # section order
    globals.css         # design tokens, utilities
  components/
    NavBar.tsx
    Hero.tsx
    HeroShot.tsx
    WhatIsModulo.tsx
    OriginStory.tsx     # pinned scroll narrative, GSAP
    PinnedNarrative.tsx # feature walkthroughs, GSAP
    Features.tsx
    TechStack.tsx
    Screenshots.tsx     # lightbox + horizontal scroll rail
    Roadmap.tsx
    GetStarted.tsx
    Footer.tsx
    BoldText.tsx        # auto-bolds technical buzzwords in body copy
content/
  siteData.ts           # single source of truth for all content
public/
  assets/
    images/             # DAW screenshots
    origin/             # Origin story narrative images (01–09)
    brand/              # App icon, .modx file icon
```

---

## Design System

Tokens defined in `globals.css`:

| Token | Value |
|---|---|
| `--bg` | `#080808` |
| `--bg-2` | `#0e0e0e` |
| `--gold` | `#C9A84C` |
| `--gold-light` | `#E8C97A` |
| `--fg` | `#F0DDB3` |
| `--fg-muted` | `#7A7264` |

---

## Contact

Taka Khoo — [takakhoo@gmail.com](mailto:takakhoo@gmail.com)
Dartmouth College — Computer Engineering + Music (B.A. with Honors) · M.S. Computer Engineering
