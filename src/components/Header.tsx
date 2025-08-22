// src/components/Header.jsx
import { Navbar } from "./Navbar";
import { EmojiDevelopment } from "./EmojiDevelopment";
import { ArrowDown } from "lucide-react";
import meuEmoji from "../assets/emojiVini.svg";
import fotoDePerfil from "../assets/Foto-de-Perfil-Desktop.svg";
import iconDownload from "../assets/download.svg";
import { AnimateScroll } from "../hooks/animateScroll";
import { motion } from "framer-motion";

export function Header() {
  return (
    <div className="relative bg-mobile w-screen pt-10">
      <Navbar />

      {/* Header Desktop */}
      <div className="hidden md:flex mt-20 justify-center">
        <div className="flex min-w-5xl justify-between bg-desktop">

          {/* Texto com animação */}
          <motion.div
            className="flex flex-col gap-2 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-gray-200 text-xl font-jaldi-regular">
                Óla, eu sou Vinícius Campos
              </h3>

              <EmojiDevelopment meuEmoji={meuEmoji} titulo="Desenvolvedor Full-Stack" />
            </div>

            <motion.h1
              className="text-3xl text-white font-semibold tracking-[0.50px]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Desenvolvo aplicações <br />
              e transformo suas ideias <br />
              em soluções digitais
            </motion.h1>

            <motion.a
              href="https://drive.google.com/file/d/1YJluqetsRlRdLrRlEbByi3HuONmI-LQO/view?usp=sharing"
              className="w-fit flex gap-2 mt-8 p-0 gradient-button-stroke button-shadow rounded-[8px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-full flex gap-2 px-3.5 py-2 rounded-[6px] gradient-button-fill text-zinc-900 justify-center items-center">
                <span className="font-semibold text-shadow">Baixar Curriculo</span>
                <span><img src={iconDownload} alt="Icone de Download" className="text-[#333333]" /></span>
              </div>
            </motion.a>

          </motion.div>

          {/* Imagem com animação */}
          <motion.img
            src={fotoDePerfil}
            alt="imagem de perfil"
            className="w-100 h-100"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Header Mobile */}
      <motion.div
        className="flex md:hidden flex-col items-center mt-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h3 className="text-gray-200 text-xl font-jaldi-regular">
          Óla, eu sou Vinícius Campos
        </h3>

        <EmojiDevelopment meuEmoji={meuEmoji} titulo="Desenvolvedor Full-Stack" />

        <div className="flex mt-4 justify-center">
          <img src="https://aw6znvsusli6h8pi.public.blob.vercel-storage.com/perfilNavbar.svg" alt="foto de perfil mobile" className="w-30" />
        </div>

        <h1 className="mt-7 flex justify-center text-center w-[300px] text-white font-semibold text-xl tracking-[0.50px]">
          Desenvolvo aplicações
          e transformo suas ideias
          em soluções digitais
        </h1>
      </motion.div>

      <div className="flex items-center mt-8 justify-center md:mt-10 flex-col gap-2">
        <span className="text-zinc-300/90 text-xs">Saber mais</span>
        <ArrowDown size={16} color="#FFFF" className="lucide lucide-arrow-down animate-bounce" />
      </div>

      <AnimateScroll />
    </div>
  );
}
