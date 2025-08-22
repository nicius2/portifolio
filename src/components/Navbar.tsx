import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import backgroundPraia from "../assets/background.mp4";

import { ResponsiveNavbar } from './responsiveNavbar';
import { AnimatedHamburger } from './animateHamburguer';

const navbarData = [
  { id: '#sobremim', link: 'Sobre mim' },
  { id: '#projetos', link: 'Projetos' },
  { id: '#certificados', link: 'Certificados' },
];

const NavItem = ({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) => {
  const baseClass = 'flex items-center justify-center rounded-xl transition-all duration-300 p-2 hover:scale-105 hover:px-4 cursor-pointer';
  return (
    <div
      className={`${baseClass} ${active ? '' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export function Navbar() {
  const [activeItem, setActiveItem] = useState('#sobremim');
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let timer: number;
    if (!hovering) {
      timer = window.setTimeout(() => setShowVideo(true), 5000);
    } else {
      setShowVideo(false);
    }
    return () => clearTimeout(timer);
  }, [hovering]);

  return (
    <div
      className="w-full flex justify-center"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative items-center justify-center border border-[#919191]/30 bg-white/4 py-3 px-4 backdrop-blur-[1.5px] rounded-2xl overflow-hidden">

        {/* 🎥 Video de fundo */}
        <AnimatePresence>
          {showVideo && (
            <motion.video
              src={backgroundPraia}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-2xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>

        {/* Navbar Desktop */}
        <div className="hidden md:flex gap-10 relative z-10">
          {navbarData.map((item) => (
            <NavItem
              key={item.id}
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
            >
              <a href={item.id} className="text-gray-200 text-sm font-semibold">
                {item.link}
              </a>
            </NavItem>
          ))}

          <div className="flex gap-1 ml-4">
            <NavItem>
              <a href="https://github.com/nicius2" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-6 h-6" />
              </a>
            </NavItem>
            <NavItem>
              <a href="https://www.linkedin.com/in/vin%C3%ADcius-campos-b08978236/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </NavItem>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className="md:hidden flex items-center justify-between gap-10 relative z-10">
          <img src="https://aw6znvsusli6h8pi.public.blob.vercel-storage.com/perfilNavbar.svg" alt="Perfil" className="w-10 h-10" />
          <div className="flex gap-1">
            <NavItem>
              <a href="https://github.com/nicius2" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-6 h-6" />
              </a>
            </NavItem>
            <NavItem>
              <a href="https://www.linkedin.com/in/vin%C3%ADcius-campos-b08978236/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </NavItem>
          </div>
          <AnimatedHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}
