import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import x from '../assets/x.svg';

const navbarData = [
  { id: '1', link: 'Sobre mim' },
  { id: '2', link: 'Projetos' },
  { id: '3', link: 'Certificados' },
];

interface ResponsiveNavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function ResponsiveNavbar({ setIsOpen }: ResponsiveNavbarProps) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '100%' }}
      transition={{ type: 'tween', stiffness: 200, damping: 25 }}
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-opacity-75 z-40 md:hidden"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="absolute bottom-0 right-0 h-[80%] border-t-2 border-zinc-700 w-full bg-zinc-800/70 rounded-t-3xl shadow-lg p-4 flex flex-col backdrop-blur-md transform translate-z-0"
      >
        {/* Adicione a barrinha aqui */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-1.5 bg-zinc-700 rounded-full" />
        </div>
        
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl transition-colors border-1 border-gray-500">
            <img src={x} alt="botao para fechar a navegação" />
          </button>
        </div>
        
        <h2 className='text-gray-100 font-bold text-2xl my-4'>Menu</h2>

        <ul className="text-white text-semibold text-xl flex flex-col gap-2 w-full">
          {navbarData.map(item => (
            <li key={item.id} className="py-2">
              <a href={item.id} onClick={() => setIsOpen(false)}>
                {item.link}
              </a>
            </li>
          ))}
          <li className="py-2 mt-4">
            <button
              className="bg-gray-100 text-zinc-900 font-bold px-6 py-2 rounded-2xl w-full"
              onClick={() => setIsOpen(false)}
            >
              <a href="https://drive.google.com/file/d/1YJluqetsRlRdLrRlEbByi3HuONmI-LQO/view?usp=sharing">Curriculo</a> 
            </button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}