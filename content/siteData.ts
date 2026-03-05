// ─────────────────────────────────────────────────────────────────────────────
// MODULO Landing Page — Central Content File
// Edit this file to update all copy, links, and feature lists.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "MODULO",
  tagline: "The Generative Audio Workstation",
  subtagline:
    "AI generation, music-theory reasoning, and production-grade DAW engineering — in one continuous creative surface.",
  description:
    "MODULO is a macOS-first standalone DAW built from scratch in C++/JUCE/Tracktion Engine where AI generation, harmonic reasoning, and professional mixing coexist in a single timeline.",
  githubUrl: "https://github.com/takakhoo/MODULO_DAW_AI",
  downloadUrl:
    "https://github.com/takakhoo/MODULO_DAW_AI/raw/main/beta/MODULO_BETA_1.0/Modulo-3.2.0-universal.dmg",
  email: "taka@modulo.audio",
  demoUrl: "#contact",
  version: "Beta 1.0",
  platform: "macOS (Apple Silicon + Intel Universal)",
};

export const heroWords = ["Generate.", "Arrange.", "Master."];

export const whatIs = {
  headline: "Not AI bolted onto a DAW.\nAI built into the DAW.",
  body: "Every DAW since 1989 was designed for recordings, then retrofitted for AI. MODULO was designed the other way around: generative AI as a first-class workflow primitive, wired directly into the timeline, mixer, and harmonic reasoning layer.",
  stats: [
    { value: "C++ / JUCE", label: "Core Engine" },
    { value: "Tracktion Engine", label: "Audio Backend" },
    { value: "< 10 ms", label: "Roundtrip Latency" },
    { value: "macOS Universal", label: "Platform" },
  ],
};

export const narrative = [
  {
    id: "composition",
    eyebrow: "Structured Composition Engine",
    headline: "A song plan, not a prompt.",
    body: "Composition Plan converts a text prompt into a structured section plan with duration logic, transition intelligence, and production-context inference. Output arrives as editable timeline content — not locked audio.",
    image: "/assets/images/composition-plan.png",
    tag: "LLM + Section-Aware Arrangement",
  },
  {
    id: "chords",
    eyebrow: "Reinforcement-Learning Harmony",
    headline: "Ranked chords, not random suggestions.",
    body: "ReaLChords-powered harmonic exploration treats chord generation as a ranked search problem evaluated against melodic compatibility, stylistic coherence, and musical plausibility. Every option is editable after generation.",
    image: "/assets/images/gen-chords.png",
    tag: "ReaLChords RL Model",
  },
  {
    id: "audio-to-midi",
    eyebrow: "Audio Intelligence Pipeline",
    headline: "From raw audio to editable MIDI in one step.",
    body: "Deep-learning transcription via Spotify Basic Pitch converts any audio to MIDI with chord inference and harmonic labeling — directly inside the project timeline. No roundtripping to external tools.",
    image: "/assets/images/audio-to-midi.png",
    tag: "Spotify Basic Pitch + Chord Inference",
  },
  {
    id: "stems",
    eyebrow: "Stem Decomposition",
    headline: "Stems become production lanes.",
    body: "Extract Stems turns any rendered source into isolated instrument tracks, imported directly into the DAW routing architecture for remixing, rebalancing, and downstream processing.",
    image: "/assets/images/extract-stems.png",
    tag: "AI Stem Separation",
  },
  {
    id: "mixer",
    eyebrow: "Production-Grade Signal Flow",
    headline: "A real mixer. Not a demo.",
    body: "Track/bus/master architecture, send and return routing, automation-ready lane behavior, and metering built for gain staging. Every AI output flows directly into the mix.",
    image: "/assets/images/mixer.png",
    tag: "DAW-Grade Routing",
  },
];

export const features = [
  {
    icon: "MusicNote",
    title: "Full-Song AI Generation",
    desc: "Generate complete multi-track arrangements from a prompt. Output is importable, editable timeline material — not locked audio clips.",
  },
  {
    icon: "Piano",
    title: "Chord Workshop",
    desc: "Theory-aware chord editing with chord name / scale-degree context, note-level piano roll edits, and immediate auditory feedback.",
  },
  {
    icon: "Waveform",
    title: "Audio to MIDI",
    desc: "Deep-learning pitch transcription via Basic Pitch converts any audio source to editable MIDI with chord inference — inside the timeline.",
  },
  {
    icon: "Harmony",
    title: "Melody-Aware Harmonization",
    desc: "Generate up to 5 harmony lines from a source melody with key-aware style modes and temporal alignment to the source phrasing.",
  },
  {
    icon: "Stems",
    title: "Stem Extraction",
    desc: "Decompose any audio source into production lanes — vocals, drums, bass, melodics — imported directly into the track architecture.",
  },
  {
    icon: "Plugin",
    title: "External Plugin Hosting",
    desc: "Host VST/AU instruments and effects inside MODULO's AI-native workflow. Blend professional chains with generative systems.",
  },
];

export const techStack = [
  {
    layer: "Audio Engine",
    color: "gold" as const,
    items: [
      "Tracktion Engine (C++)",
      "JUCE application framework",
      "Low-latency timeline & transport",
      "Edit graph — clip / track abstraction",
      "Real-time plugin hosting (VST/AU)",
    ],
  },
  {
    layer: "AI Systems",
    color: "blue" as const,
    items: [
      "ElevenLabs Music v1 (composition + audio)",
      "Spotify Basic Pitch (DL transcription)",
      "ReaLChords RL model (harmonic exploration)",
      "Local AI Worker (Python, HTTP JSON v1 protocol)",
      "Retry-hardened inference pipeline",
    ],
  },
  {
    layer: "Music Intelligence",
    color: "green" as const,
    items: [
      "Chord inference from MIDI + audio",
      "Theory-aware harmony generation",
      "Section-aware arrangement planner",
      "Key-aware style mode system",
      "Temporal alignment engine",
    ],
  },
  {
    layer: "Signal Processing",
    color: "purple" as const,
    items: [
      "Track / bus / master routing graph",
      "Send and return architecture",
      "Automation-ready lane system",
      "Native EQ and FX modules",
      "Real-time metering + gain staging",
    ],
  },
];

export const screenshots = [
  {
    src: "/assets/images/fullscreen.png",
    alt: "MODULO Full DAW View",
    caption: "Full Session — Timeline, Tracks, and Transport",
    wide: true,
  },
  {
    src: "/assets/images/top-bar.png",
    alt: "MODULO Top Bar Controls",
    caption: "Unified Control Surface — All AI Actions at Reach",
    wide: true,
  },
  {
    src: "/assets/images/chord-workshop.png",
    alt: "Chord Workshop with Annotated Piano Roll",
    caption: "Chord Workshop — Theory + Piano Roll in One Loop",
    wide: false,
  },
  {
    src: "/assets/images/harmonies.png",
    alt: "Harmony Generation",
    caption: "Generate Harmony — Up to 5 Lines from Source Melody",
    wide: false,
  },
  {
    src: "/assets/images/gen-music.png",
    alt: "Full AI Music Generation",
    caption: "Generate Music — Full Song to Editable Timeline",
    wide: false,
  },
  {
    src: "/assets/images/native-fx.png",
    alt: "Native EQ and FX",
    caption: "Native FX — Custom EQ Built Into the App",
    wide: false,
  },
  {
    src: "/assets/images/plugins.png",
    alt: "External Plugin Hosting",
    caption: "Plugin Hosting — VST/AU Inside the AI Workflow",
    wide: false,
  },
  {
    src: "/assets/images/gen-fx.png",
    alt: "Generate SFX",
    caption: "Generate SFX — Design Layers as Timeline Material",
    wide: false,
  },
];

export const roadmap = [
  {
    phase: "Now — Beta 1.0",
    status: "shipped" as const,
    items: [
      "Full-song AI generation via Composition Plan",
      "Audio to MIDI with Basic Pitch + chord inference",
      "ReaLChords harmonic exploration (RL-ranked candidates)",
      "Stem extraction, SFX generation, audio isolation",
      "Production mixer with bus/send routing",
      "Plugin hosting (VST/AU), native EQ + FX",
      "Local AI Worker v1 (versioned HTTP job protocol)",
    ],
  },
  {
    phase: "Near-Term",
    status: "active" as const,
    items: [
      "Notarized distribution + App Store submission",
      "Cloud session sync and project sharing",
      "Extended quantization and groove templates",
      "MIDI controller mapping and live performance mode",
      "Developer API / SDK for AI workflow integrations",
    ],
  },
  {
    phase: "Horizon",
    status: "planned" as const,
    items: [
      "Multi-model AI routing (local + cloud model selection)",
      "Fine-tuned style models per genre / artist persona",
      "Collaborative real-time session editing",
      "Mobile companion for sketch-to-desktop transfer",
      "Open plugin SDK for third-party AI modules",
    ],
  },
];

export const whyItMatters = [
  {
    headline: "Solo-built. Production-ready.",
    body: "Every system — audio engine, AI integration, signal flow, UI — engineered by one person with a background in ML/DSP research, audio codec systems, and Grammy-winning studio practice.",
  },
  {
    headline: "A blueprint, not a demo.",
    body: "MODULO is a fully functional DAW with plugin hosting, real-time mixing, multi-track editing, and five AI workflow systems all working end-to-end at Beta 1.0.",
  },
  {
    headline: "Defining a new category.",
    body: "MODULO is a concrete, working implementation of the Generative Audio Workstation — where generative AI, music theory, and professional production tooling converge in one system.",
  },
];
