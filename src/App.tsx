import { Header } from "./components/Header";
import { FeaturedWorks } from "./components/FeaturedWorks";
import { SobreMim } from "./components/sobreMim";
import { Experience } from "./components/Experience";
import { Academico } from "./components/Academico";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Importe o novo componente
import { AnimatedSection } from "./components/AnimatedSection";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center flex-col bg-zinc-900 overflow-x-hidden scroll-smooth">
      <Header />
      <AnimatedSection>
        <SobreMim />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedWorks />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Academico />
      </AnimatedSection>
      <Footer />
      <Toaster />
    </div>
  );
}