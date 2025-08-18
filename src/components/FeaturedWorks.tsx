import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion"; // Use 'import type' para o tipo
import projeto1 from "../assets/projeto1.svg";
import webProject from '../assets/webProject.svg'
const featuredWorksData = [
  {
    id: '#',
    title: "Extensão Foco Já",
    tecnologias: ['React', 'Tailwindcss', 'Figma', 'Typescript'],
    img: projeto1,
    description: 'Extensão de organização com todo-list, pomodoro e notas que pode ser exportado como PDF.'
  },
  {
    id: '#',
    title: "Projeto 3",
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    img: projeto1,
    description: 'Descrição do terceiro projeto.'
  },
  {
    id: '#',
    title: "Projeto 4",
    tecnologias: ['Vue.js', 'Firebase', 'GraphQL'],
    img: projeto1,
    description: 'Descrição do quarto projeto.'
  },
];

export function FeaturedWorks() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = featuredWorksData.length;

  const nextSlide = () => {
    setOffset((prev) => prev + 1);
  };

  const prevSlide = () => {
    setOffset((prev) => prev - 1);
  };

  // Animação automática que pausa no hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setOffset((prev) => prev + 1);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const slidePercentage = isMobile ? 100 : 50;

  const handleDragEnd = (_event: MouseEvent, info: PanInfo) => {
    const swipeThreshold = 50; // Em pixels
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 gap-10 mb-10 px-4">
      <div className="flex w-fit gap-2 items-center justify-center border-[0.5px] backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl p-2">
        <div className="ping-container">
          <span className="ping-wave"></span>
          <span className="ping-dot"></span>
        </div>
        <span className="text-white text-[12px]">
          Trabalhos em Destaque
        </span>
      </div>

      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isMobile && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl px-2 bg-black/30 rounded-full h-10 w-10 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl px-2 bg-black/30 rounded-full h-10 w-10 flex items-center justify-center"
            >
              ›
            </button>
          </>
        )}

        <div className="overflow-hidden relative h-auto w-full">
          <motion.div
            className="flex w-full"
            drag={isMobile ? "x" : false}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${(offset % totalSlides) * slidePercentage}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {featuredWorksData.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 flex-shrink-0"
              >
                <div className="p-4 md:p-6 flex flex-col border-[0.5px] gap-4 backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl mx-2">
                  <div className="flex justify-center items-center overflow-hidden rounded-lg">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <h2 className="text-white text-2xl font-medium">{item.title}</h2>
                        <button className="flex gap-2 items-center text-sm md:px-4 cursor-pointer px-2 rounded-sm bg-white">
                          <span className="hidden md:flex">Ver Projeto</span>
                          <span className=""><img src={webProject} alt="icone de abrir projeto" className=""/></span>
                          </button>
                    </div>
                    <p className="text-sm text-white/80">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="backdrop-blur-[1.5px] bg-white/4 border-[0.5px] border-transparent transition ease-linear hover:border-[#919191]/30 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex gap-2">
        {featuredWorksData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${(offset % totalSlides) === index ? 'bg-white' : 'bg-white/30'
              }`}
          />
        ))}
      </div>
    </div>
  );
}