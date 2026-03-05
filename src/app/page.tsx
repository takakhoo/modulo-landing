import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhatIsModulo from "@/components/WhatIsModulo";
import PinnedNarrative from "@/components/PinnedNarrative";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Screenshots from "@/components/Screenshots";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhatIsModulo />
      <PinnedNarrative />
      <div id="features">
        <Features />
      </div>
      <div id="tech">
        <TechStack />
      </div>
      <div id="screenshots">
        <Screenshots />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <Footer />
    </main>
  );
}
