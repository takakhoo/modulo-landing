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
  // ↓ Points to GitHub releases — always shows the latest available beta DMG.
  downloadUrl: "https://github.com/takakhoo/MODULO_DAW_AI/releases",
  email: "takakhoo@gmail.com",
  phone: "+1 (310) 739-1223",
  demoUrl: "#contact",
  version: "Beta 1.0",
  platform: "macOS (Apple Silicon + Intel Universal)",
};

export const heroWords = ["Generate.", "Arrange.", "Master."];

export const whatIs = {
  headline: "Not AI bolted onto a DAW.\nAI built into the DAW.",
  body: "Every DAW since 1989 was designed for recording engineers, then retrofitted for AI. MODULO started from the other direction: built by a lifelong musician who also happens to be a computer engineer — someone who knows that musicians think in chord inversions, scale degrees, and harmonic flow, not patch cables and MIDI CC lanes. The result is a system where AI actions, theory reasoning, and production engineering are first-class primitives in the same timeline.",
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
    body: "ReaLChords-powered harmonic exploration treats chord generation as a ranked search problem — evaluated against melodic compatibility, stylistic coherence, and musical plausibility. Chord cells highlight in red when a voicing falls outside the active key, giving instant visual theory feedback. Every option stays editable after generation.",
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
    body: "Track/bus/master architecture with send and return routing, automation-ready lane behavior, real-time metering for gain staging, and native built-in EQ and FX modules — all designed so every AI output flows directly into the mix without leaving the session.",
    image: "/assets/images/mixer.png",
    tag: "Bus / Send / Native EQ",
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
    title: "Chord Workshop + Inversions",
    desc: "Theory-aware editing with chord names, scale-degree context, and full inversion support. Chord cells turn red when a voicing leaves the active key — instant visual harmonic feedback. Edit notes in the piano roll or drag inversions live.",
  },
  {
    icon: "Waveform",
    title: "Audio to MIDI",
    desc: "Deep-learning pitch transcription via Basic Pitch converts any audio source to editable MIDI with chord inference — inside the timeline. No external tools, no roundtripping.",
  },
  {
    icon: "Harmony",
    title: "Melody-Aware Harmonization",
    desc: "Generate up to 5 harmony lines from a source melody with key-aware style modes and temporal alignment to the source phrasing. Outputs drop into arrangement lanes immediately.",
  },
  {
    icon: "Mixer",
    title: "Pro Mixer — Sends, Buses, Native EQ",
    desc: "Full track/bus/master architecture with send and return routing, real-time metering, automation lanes, and custom-built native EQ and FX modules. Every AI output routes directly into the professional mix graph.",
  },
  {
    icon: "Hotkeys",
    title: "Musician-Optimized Hotkeys",
    desc: "Hotkeys designed for how musicians think. U / D transpose the selected track up or down by a full octave. C opens Chord Workshop. P opens the piano roll. Q quantizes. Every workflow is one key away from the transport.",
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
      "Theory-aware harmony generation (inversions, voicings)",
      "Section-aware arrangement planner",
      "Key-aware style mode system",
      "Visual harmonic feedback (red = out of key)",
    ],
  },
  {
    layer: "Signal Processing",
    color: "purple" as const,
    items: [
      "Track / bus / master routing graph",
      "Send and return architecture",
      "Automation-ready lane system",
      "Native EQ and FX modules (custom-built)",
      "Real-time metering + gain staging",
    ],
  },
];

export const hotkeys = [
  { key: "U / D", action: "Transpose selected track up / down by octave" },
  { key: "C", action: "Open Chord Workshop" },
  { key: "P", action: "Open piano roll for selected clip" },
  { key: "Q", action: "Quantize selected notes" },
  { key: "Space", action: "Play / pause transport" },
  { key: "R", action: "Toggle record" },
  { key: "I", action: "Add idea marker at playhead" },
  { key: "L", action: "Duplicate selected MIDI clip forward" },
  { key: "S", action: "Toggle solo on selected track" },
  { key: "M", action: "Context-aware mute behavior" },
  { key: "Delete", action: "Context delete (marker / chord / note / clip)" },
  { key: "Cmd+Z", action: "Undo" },
  { key: "Cmd+D", action: "Duplicate selected track" },
  { key: "Cmd+A", action: "Select all notes (piano roll)" },
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
    caption: "Chord Workshop — Theory + Inversions + Piano Roll in One Loop",
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
      "Chord Workshop with inversions + visual key feedback (red = out of key)",
      "Stem extraction, SFX generation, audio isolation",
      "Production mixer with bus/send routing + native EQ",
      "Plugin hosting (VST/AU)",
      "Musician hotkeys: U/D octave, C chord workshop, P piano roll, Q quantize",
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
    headline: "Built by a musician.",
    body: "MODULO was built by a lifelong multi-instrumentalist who also holds a computer engineering background. The design question was always: what does a musician actually need — not what does an audio engineer need. That means chord inversions, scale-degree context, octave hotkeys, and harmonic feedback are first-class features, not afterthoughts.",
  },
  {
    headline: "Grammy-winning studio experience.",
    body: "The engineering behind MODULO draws on hands-on experience in Grammy-winning studio environments, conference-level ML/DSP research, and audio codec and restoration system work. It is an end-to-end production tool designed by someone who has shipped recordings, not just demos.",
  },
  {
    headline: "Defining a new category.",
    body: "MODULO is a concrete, working implementation of the Generative Audio Workstation — where AI generation, music theory reasoning, and professional production tooling converge in a single timeline. A fully functional DAW with plugin hosting, real mixing, and five AI workflow systems working end-to-end.",
  },
];
