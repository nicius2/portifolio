import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import imgPerfilNavbar from '../assets/perfilNavbar.svg';

import { ResponsiveNavbar } from './responsiveNavbar';
import { AnimatedHamburger } from './animateHamburguer';

const navbarData = [
  { id: '1', link: 'Sobre mim' },
  { id: '2', link: 'Projetos' },
  { id: '3', link: 'Certificados' },
];

const NavItem = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => {
  const baseClass =
    'flex items-center justify-center rounded-xl transition-all duration-300 p-2 hover:scale-105 hover:px-4 cursor-pointer';

  return (
    <div
      className={`${baseClass} ${active ? '' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
        }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export function Navbar() {
  const [activeItem, setActiveItem] = useState('1');
  const [isOpen, setIsOpen] = useState(false); // O estado agora fica aqui

  return (
    <div className="w-full flex justify-center">
      <div className="items-center justify-center border border-[#919191]/30 bg-white/4 py-3 px-4 backdrop-blur-[1.5px] rounded-2xl">
        {/* Navbar para Desktop */}
        <div className="hidden md:flex gap-10">
          {navbarData.map(item => (
            <NavItem
              key={item.id}
              active={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
            >
              <a href={item.id} className="text-gray-200 text-md font-semibold text-sm">
                {item.link}
              </a>
            </NavItem>
          ))}

          <div className="flex gap-1 ml-4">
            <NavItem>
              <a
                href="https://github.com/nicius2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="ícone do github" className="w-6 h-6" />
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-campos-b08978236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="ícone do linkedin" className="w-6 h-6" />
              </a>
            </NavItem>
          </div>
        </div>

        {/* Navbar para Mobile */}
        <div className="md:hidden flex items-center justify-between gap-10">
          <div>
            <img src={imgPerfilNavbar} alt="minha imagem pequena" className='w-10 h-10' />
          </div>

          <div className="flex gap-1">
            <NavItem>
              <a
                href="https://github.com/nicius2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="ícone do github" className="w-6 h-6" />
              </a>
            </NavItem>
            <NavItem>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-campos-b08978236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="ícone do linkedin" className="w-6 h-6" />
              </a>
            </NavItem>
          </div>

          <div className="flex items-center">
            <AnimatedHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* A navegação mobile é renderizada com base no estado 'isOpen' */}
        {isOpen && <ResponsiveNavbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
}