import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Maximize2, ExternalLink } from "lucide-react";

const featuredWorksData = [
  {
    id: '#',
    title: "Extensão Foco Já",
    tecnologias: ['React', 'Tailwindcss', 'Figma', 'Typescript'],
    img: "https://i.ibb.co/bRC6MLbj/image-2.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: 'Extensão de organização com to-do list, pomodoro e notas, que podem ser exportadas em PDF.',
    linkProjeto: 'https://github.com/nicius2/Extensao-focoja',
    repositorio: 'https://github.com/nicius2/Extensao-focoja'
  },
  {
    id: '#',
    title: "API Rest - Delivery",
    tecnologias: ['Node.js', 'Express', 'Typescript', 'Prisma', "Postgress", 'Docker', 'JWT', 'Zod', 'Jest'],
    img: "https://i.ibb.co/355GqJwj/image-16.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description: 'Sistema completo de analytics com visualizações interativas.',
    linkProjeto: 'https://github.com/nicius2/delivery-security',
    repositorio: 'https://github.com/nicius2/delivery-security'
  },
  {
    id: '#',
    title: "Gerenciamento de Biblioteca",
    tecnologias: ['Java', 'Logica de Programação'],
    img: "https://i.ibb.co/kVkFVcDd/image-16-1.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: 'Plataforma completa de e-commerce com pagamentos integrados.',
    linkProjeto: 'https://github.com/nicius2/Gerenciamento-de-biblioteca',
    repositorio: 'https://github.com/nicius2/Gerenciamento-de-biblioteca'
  },
];

export function FeaturedWorks() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof featuredWorksData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // SOLUÇÃO: Tipar o useRef com Record<string, HTMLVideoElement>
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});
  const modalVideoRef = useRef<HTMLVideoElement>(null);

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

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  // Funções para controle de vídeo
  // SOLUÇÃO: Tipar os parâmetros `projectId` e `isEntering`
  const handleImageHover = (projectId: string, isEntering: boolean) => {
    if (isEntering) {
      setHoveredProject(projectId);
      const video = videoRefs.current[projectId];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => { });
      }
    } else {
      // SOLUÇÃO: Usar `hoveredProject` para pausar o vídeo
      if (hoveredProject) {
        const video = videoRefs.current[hoveredProject];
        if (video) {
          video.pause();
        }
      }
      setHoveredProject(null);
    }
  };

  const openModal = (project: typeof featuredWorksData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  return (
    <div className="flex flex-col justify-center items-center mt-12 gap-10 mb-10 px-4">
      <div className="flex w-fit mt-10 gap-2 items-center justify-center border-[0.5px] backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl p-2">
        <div className="ping-container">
          <span className="ping-wave"></span>
          <span className="ping-dot"></span>
        </div>
        <span className="text-white text-[12px]">
          Trabalhos em Destaque
        </span>
      </div>

      <div className="flex items-center gap-4 w-full max-w-5xl">
        {!isMobile && (
          <button
            onClick={prevSlide}
            className="text-white text-3xl px-2 bg-black/30 rounded-full h-10 w-10 flex items-center justify-center hover:bg-black/50 transition-colors"
          >
            ‹
          </button>
        )}

        <div
          className="relative w-full max-w-4xl flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => handleImageHover("no-id", false)}
        >
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
                  <div className="p-4 md:p-6 flex flex-col border-[0.5px] h-full min-h-[500px] gap-4 backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl mx-2 hover:border-[#919191]/50 transition-all duration-300">

                    <div
                      className="relative flex justify-center items-center overflow-hidden rounded-lg group cursor-pointer"
                      onMouseEnter={() => handleImageHover(item.title, true)}
                      onMouseLeave={() => handleImageHover(item.title, false)}
                      onClick={() => openModal(item)}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className={`w-full h-auto object-contain transition-opacity duration-300 ${hoveredProject === item.title ? 'opacity-0' : 'opacity-100'
                          }`}
                      />

                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[item.title] = el;
                          } else {
                            delete videoRefs.current[item.title];
                          }
                        }}
                        src={item.videoUrl}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredProject === item.title ? 'opacity-100' : 'opacity-0'
                          }`}
                        muted
                        loop
                        playsInline
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>

                      <button
                        className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item);
                        }}
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <h2 className="text-white text-2xl font-medium flex-1">{item.title}</h2>
                        <a
                          href={item.linkProjeto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-2 items-center py-2 text-sm md:px-4 cursor-pointer px-2 rounded-sm bg-white hover:bg-gray-100 transition-colors"
                        >
                          <span className="hidden md:flex">Ver Projeto</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
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

        {!isMobile && (
          <button
            onClick={nextSlide}
            className="text-white text-3xl px-2 bg-black/30 rounded-full h-10 w-10 flex items-center justify-center hover:bg-black/50 transition-colors"
          >
            ›
          </button>
        )}
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

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent z-10 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-xl font-semibold">{selectedProject.title}</h3>
                    <p className="text-white/70 text-sm">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <video
                ref={modalVideoRef}
                src={selectedProject.videoUrl}
                className="w-full h-auto max-h-[70vh] object-contain"
                controls
                autoPlay
                muted
              />

              <div className="p-6 bg-gray-800">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={selectedProject.linkProjeto} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </a>
                  <a href={selectedProject.repositorio} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}