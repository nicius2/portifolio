import { Header } from "./components/Header";
import { FeaturedWorks } from "./components/FeaturedWorks";
import { SobreMim } from "./components/sobreMim";
import { Experience } from "./components/Experience";
import { Academico } from "./components/Academico";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    // Adicione overflow-x-hidden aqui para garantir que não haja rolagem horizontal
    <div className="w-screen h-screen flex flex-col bg-zinc-900 overflow-x-hidden">
      <Header />
      <SobreMim />  
      <FeaturedWorks />
      <Skills />
      <Experience />
      <Academico />
    </div>
  )
}