// src/components/Header.jsx

import { Navbar } from "./Navbar";
import { EmojiDevelopment } from "./EmojiDevelopment";
import { ArrowDown } from "lucide-react";
import meuEmoji from "../assets/emojiVini.svg";
import fotoDePerfil from "../assets/Foto-de-Perfil-Desktop.svg";
import fotoDePerfilMobile from "../assets/Foto-de-Perfil-Mobile.svg";
import iconDownload from "../assets/download.svg";
import { AnimateScroll } from "../hooks/animateScroll";


export function Header() {
  return (
    // Remova a classe h-screen para permitir que o conteúdo se expanda e a página role
    <div className="relative bg-mobile w-screen pt-10">
      <Navbar />

      {/* Header Desktop */}
      <div className="hidden md:flex mt-20 justify-center">
        <div className="flex min-w-5xl justify-between bg-desktop">

          <div className="flex flex-col gap-2 mt-12">
            <div>
              <h3 className="text-gray-200 text-xl font-jaldi-regular">
                Óla, eu sou Vinícius Campos
              </h3>

              <EmojiDevelopment meuEmoji={meuEmoji} titulo="Desenvolvedor Full-Stack" />
            </div>

            <h1 className="text-3xl text-white font-semibold tracking-[0.50px]">Desenvolvo aplicações <br />
              e transformo suas ideias <br />
              em soluções digitais
            </h1>

            <button className="w-fit flex gap-2 mt-8 bg-gray-200 hover:bg-gray-300 transition ease-linear px-3.5 py-2 rounded-[8px]
            text-sm font-semibold text-[#333333] justify-center items-center">
              Baixar Curriculo
              <span><img src={iconDownload} alt="Icone de Download" className="text-[#333333]" /></span>
            </button>
          </div>

          <img
            src={fotoDePerfil}
            alt="imagem de perfil"
            className="w-100 h-100" />
        </div>
      </div>

      {/* Header Mobile */}
      <div className="flex md:hidden flex-col items-center mt-10">
        <h3 className="text-gray-200 text-xl font-jaldi-regular">
          Óla, eu sou Vinícius Campos
        </h3>

        <EmojiDevelopment meuEmoji={meuEmoji} titulo="Desenvolvedor Full-Stack" />

        <div className="flex mt-4 justify-center">
          <img src={fotoDePerfilMobile} alt="foto de perfil mobile" className="w-30" />
        </div>

        <h1 className="mt-7 flex justify-center text-center w-[300px] text-white font-semibold text-xl tracking-[0.50px]">Desenvolvo aplicações
          e transformo suas ideias
          em soluções digitais
        </h1>

      </div>

      <div className="flex items-center mt-8 justify-center md:mt-10 flex-col gap-2">
        <span className="text-zinc-300/90 text-sm font-jaldi-regular">Saber mais</span>
        <ArrowDown size={16} color="#FFFF" className="lucide lucide-arrow-down animate-bounce" />
      </div>

      <AnimateScroll />

    </div >
  );
}