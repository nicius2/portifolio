// src/App.jsx

import { Header } from "./components/Header";
import { SobreMim } from "./components/sobreMim";

export default function App() {
  return (
    // Adicione overflow-x-hidden aqui para garantir que não haja rolagem horizontal
    <div className="w-screen h-screen flex flex-col bg-zinc-900 overflow-x-hidden">
      <Header />
      <SobreMim />
    </div>
  )
}