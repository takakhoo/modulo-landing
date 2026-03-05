// ─────────────────────────────────────────────────────────────────────────────
// MODULO Landing Page — Central Content File
// Edit this file to update all copy, links, and feature lists.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "MODULO",
  acronym: "Musician-Owned DAW for User-Led Orchestration",
  tagline: "The Generative Audio Workstation",
  subtagline:
    "AI generation, music-theory reasoning, and production-grade DAW engineering — in one continuous creative surface.",
  description:
    "MODULO (Musician-Owned DAW for User-Led Orchestration) is a macOS-first standalone Generative Audio Workstation built from scratch in C++/JUCE/Tracktion Engine. AI generation, harmonic reasoning, and professional mixing — one timeline. Beta 1.0 available now.",
  githubUrl: "https://github.com/takakhoo/MODULO_DAW_AI",
  // Direct DMG download — updated with each beta push.
  downloadUrl:
    "https://github.com/takakhoo/MODULO_DAW_AI/raw/main/beta/MODULO_BETA_1.0/Modulo-3.2.0-universal.dmg",
  checksumUrl:
    "https://github.com/takakhoo/MODULO_DAW_AI/raw/main/beta/MODULO_BETA_1.0/SHA256SUMS.txt",
  email: "takakhoo@gmail.com",
  phone: "+1 (310) 739-1223",
  demoUrl: "#contact",
  version: "Beta 1.0",
  platform: "macOS (Apple Silicon + Intel Universal)",
};

export const heroWords = ["Generate.", "Arrange.", "Master."];

export const betaNotice = {
  label: "Active Development",
  headline: "This is real software in active development — not a polished product.",
  body: "MODULO Beta 1.0 is functional end-to-end: you can open sessions, generate audio, edit chords, run Audio-to-MIDI, and mix in the timeline. But it is still early. Some workflows are rough, some features are still being hardened, and Apple notarization is not yet obtained — so macOS will ask you to bypass Gatekeeper to run it. If you're the kind of person who finds that exciting rather than alarming, this is for you.",
};

export const whatIs = {
  headline: "Not AI bolted onto a DAW.\nAI built into the DAW.",
  body: "MODULO — Musician-Owned DAW for User-Led Orchestration — was built by a lifelong musician who is also a computer engineer. A musician thinks in chord inversions, scale degrees, and harmonic flow. Every DAW built since 1989 was designed for recording engineers and then retrofitted for AI. MODULO started from the musician's mental model and built outward: generative AI, theory reasoning, and production-grade engineering as first-class primitives in the same timeline.",
  stats: [
    { value: "C++ / JUCE", label: "Core Engine" },
    { value: "Tracktion Engine", label: "Audio Backend" },
    { value: "< 10 ms", label: "Roundtrip Latency" },
    { value: "macOS Universal", label: "Platform" },
  ],
};

export const founder = {
  name: "Taka Khoo",
  title: "Builder — MODULO",
  bio: [
    "MODULO is a solo project. Every system — audio engine, AI integration, signal flow, music theory layer, UI — designed and built by one person.",
    "Double Bachelors with Honors from Dartmouth College in Computer Engineering and Music. Now a Masters student in Computer Engineering at Dartmouth, working out of a small campus lab, applying everything accumulated across two disciplines.",
    "The technical foundation draws on conference-level deep learning and signal processing research, audio codec and restoration system work, and hands-on production engineering inside Grammy-winning studio environments.",
    "The musical foundation is lifelong: multi-instrument practice, advanced harmony and composition, and years of DAW production and mastering work — the kind that reveals exactly where existing tools fail musicians.",
    "The question MODULO answers: what would music software look like if it were designed from day one for generative AI and for musicians — not retrofitted after the fact by engineers who don't play?",
  ],
};

export const competitive = [
  {
    name: "Suno / Udio / Stable Audio",
    category: "Web AI Music Tools",
    strength: "Fast generation from text prompts.",
    gap: "Output is a non-editable audio artifact. No arrangement control, no harmonic intent, no mix pipeline. Generation is completely detached from production — you get a clip, not a record.",
    modulo: "MODULO generates into an editable timeline. The output is tracks, not a rendered file. Every generated clip is immediately routable, arrangeable, and mixable inside the same session.",
  },
  {
    name: "RipX DAW (Hit'n'Mix)",
    category: "AI Deconstruction DAW",
    strength: "Strong in deconstruction workflows: import audio → separate stems → note-level audio edits in Rip representation.",
    gap: "Optimized for taking things apart, not building them. Limited harmonic intelligence, no generative construction pipeline, no AI-native composition or chord reasoning.",
    modulo: "MODULO is a construction workflow: plan → generate → arrange → mix. Harmony intelligence and production routing are first-class, not bolt-ons.",
  },
  {
    name: "WavTool",
    category: "Browser AI DAW",
    strength: "Compelling browser-native AI-assisted workflow with good UX.",
    gap: "Web-only architecture limits local performance, routing depth, long-session semantics, and native plugin hosting.",
    modulo: "MODULO is a native standalone macOS application — full plugin hosting, real-time routing, no browser constraints.",
  },
  {
    name: "Logic / Ableton / Pro Tools",
    category: "Traditional DAWs",
    strength: "Deep production tooling, massive plugin ecosystems, industry-standard workflows.",
    gap: "AI is mostly bolt-on and assistive. AI lives outside the timeline context and requires constant context-switching.",
    modulo: "MODULO treats AI actions as timeline primitives. Generation, transcription, harmonization, and stem decomposition are wired directly into the session state.",
  },
];

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
    headline: "A real mixer. Not a mockup.",
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
    desc: "U / D transpose the selected track up or down by a full octave. C opens Chord Workshop. P opens the piano roll. Q quantizes. Every workflow is one key away from the transport.",
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

export const gettingStarted = {
  headline: "How to get set up",
  subhead: "MODULO needs three things to run fully: the app itself, an ElevenLabs API key for AI music generation, and Splice for plugin sounds. Here's exactly how to get each one.",
  steps: [
    {
      number: "01",
      title: "Download & open MODULO",
      color: "#C9A84C",
      items: [
        "Click Download Beta above — the DMG downloads directly from GitHub.",
        "Open the DMG and drag MODULO into your Applications folder.",
        "On first launch, macOS will block it because Apple notarization is not yet obtained for this beta.",
        "To bypass: go to System Settings → Privacy & Security → scroll down to the MODULO blocked message → click Open Anyway.",
        "You only need to do this once. After that, MODULO opens normally.",
      ],
    },
    {
      number: "02",
      title: "Get an ElevenLabs API key",
      color: "#60A5FA",
      items: [
        "Go to elevenlabs.io and create an account (free tier available).",
        "Once logged in, click your profile icon in the top right → select API Keys from the dropdown.",
        "Click Create API Key and give it a name (e.g. 'MODULO').",
        "A permissions checklist will appear. You only need to enable three: Audio Isolation, Music Generation, and Sound Effects. Leave everything else off.",
        "Click Create — your key appears once. Copy it immediately and store it somewhere safe (a password manager or notes app). You cannot view it again after closing that dialog.",
        "In MODULO, open Preferences and paste the key into the ElevenLabs API Key field. Hit Save.",
        "The free tier includes a limited monthly credit allowance — enough to explore. For serious session work, a paid ElevenLabs subscription unlocks significantly more generation credits and higher quality output.",
      ],
    },
    {
      number: "03",
      title: "Install Splice for instruments & plugins",
      color: "#4ADE80",
      items: [
        "Go to splice.com and create a free Splice account.",
        "Download the Splice desktop app and run through the full installation process — it installs the Splice app and a background plugin helper.",
        "Open the Splice app and sign in with your account.",
        "Browse the Plugins tab to find instruments and effects. Many have free trials; install any VST/AU you want.",
        "Back in MODULO, open Settings → Plugin Manager (or Scan for Plugins) and run a rescan. MODULO will detect any newly installed Splice plugins automatically.",
        "To use a Splice instrument in your session, select it from MODULO's instrument list. Splice will open its activation window — sign in there too, and you'll have full access to your installed plugins.",
        "The free Splice tier includes a solid selection of free instrument packs, which work great for MIDI track playback inside MODULO. A paid Splice subscription unlocks unlimited instrument packs and the full plugin library.",
        "Splice is optional — MODULO works with any VST/AU you already have installed, or fully standalone.",
      ],
    },
  ],
};

export const screenshots = [
  {
    src: "/assets/images/modulo-main-shot.png",
    alt: "MODULO Full DAW Session — Timeline, AI Controls, Mixer",
    caption: "Full Live Session — Timeline, Mixer, Native EQ, AI Controls",
    wide: true,
    w: 3439,
    h: 1439,
  },
  {
    src: "/assets/images/fullscreen.png",
    alt: "MODULO Full DAW View",
    caption: "Full Session — Timeline, Tracks, and Transport",
    wide: true,
    w: 1911,
    h: 941,
  },
  {
    src: "/assets/images/top-bar.png",
    alt: "MODULO Top Bar Controls",
    caption: "Unified Control Surface — All AI Actions at Reach",
    wide: true,
    w: 1919,
    h: 168,
  },
  {
    src: "/assets/images/chord-workshop.png",
    alt: "Chord Workshop with Annotated Piano Roll",
    caption: "Chord Workshop — Theory + Inversions + Piano Roll in One Loop",
    wide: false,
    w: 0,
    h: 0,
  },
  {
    src: "/assets/images/harmonies.png",
    alt: "Harmony Generation",
    caption: "Generate Harmony — Up to 5 Lines from Source Melody",
    wide: false,
    w: 0,
    h: 0,
  },
  {
    src: "/assets/images/gen-music.png",
    alt: "Full AI Music Generation",
    caption: "Generate Music — Full Song to Editable Timeline",
    wide: false,
    w: 0,
    h: 0,
  },
  {
    src: "/assets/images/native-fx.png",
    alt: "Native EQ and FX",
    caption: "Native FX — Custom EQ Built Into the App",
    wide: false,
    w: 0,
    h: 0,
  },
  {
    src: "/assets/images/plugins.png",
    alt: "External Plugin Hosting",
    caption: "Plugin Hosting — VST/AU Inside the AI Workflow",
    wide: false,
    w: 0,
    h: 0,
  },
  {
    src: "/assets/images/gen-fx.png",
    alt: "Generate SFX",
    caption: "Generate SFX — Design Layers as Timeline Material",
    wide: false,
    w: 0,
    h: 0,
  },
];

export const roadmap = [
  {
    phase: "Now — Beta 1.0",
    status: "shipped" as const,
    items: [
      "Full-song AI generation via Composition Plan (requires ElevenLabs API key)",
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
      "Apple notarization — removes the Open Anyway Gatekeeper step",
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
    headline: "A musician who built the tool they needed.",
    body: "Lifelong multi-instrumentalist. Double Bachelors with Honors from Dartmouth College in Computer Engineering and Music. Now a Masters student in Computer Engineering at Dartmouth — working out of a small campus lab, pulling from deep learning, signal processing, composition, production, and years inside Grammy-winning studio environments.",
  },
  {
    headline: "Built from a musician's mental model.",
    body: "Most DAW engineers don't play. MODULO was designed by someone who does — which is why chord inversions, scale-degree visual feedback, octave-transpose hotkeys, and harmonic reasoning are core features, not plugins. The tool matches how musicians actually think.",
  },
  {
    headline: "An early working blueprint for a new category.",
    body: "MODULO is a functional Generative Audio Workstation — plugin hosting, real-time mixing, multi-track editing, and five AI workflow systems working end-to-end at Beta 1.0. It is early, it is rough in places, and it is actively being developed. But it works, and it is real.",
  },
];
