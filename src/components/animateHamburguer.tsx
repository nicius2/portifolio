import { motion, type Variants } from 'framer-motion';
import { type Dispatch, type SetStateAction } from 'react';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const barVariants: Variants = {
  bar: (custom: number) => ({
    rotate: custom === 1 ? 45 : -45,
    y: custom === 1 ? 6 : -6,
    transition: { duration: 0.3 },
  }),
  middleBar: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export function AnimatedHamburger({ isOpen, setIsOpen }: AnimatedHamburgerProps) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center w-6 h-6 z-50 relative md:hidden"
    >
      <motion.div
        variants={barVariants}
        animate={isOpen ? 'bar' : 'closed'}
        custom={1}
        className="bg-gray-200 h-0.5 w-full rounded-sm my-[2px]" // removido 'absolute' e adicionado 'my-[2px]'
      />
      <motion.div
        variants={barVariants}
        animate={isOpen ? 'middleBar' : 'closed'}
        className="bg-gray-200 h-0.5 w-full rounded-sm my-[2px]" // removido 'absolute' e adicionado 'my-[2px]'
      />
      <motion.div
        variants={barVariants}
        animate={isOpen ? 'bar' : 'closed'}
        custom={-1}
        className="bg-gray-200 h-0.5 w-full rounded-sm my-[2px]" // removido 'absolute' e adicionado 'my-[2px]'
      />
    </button>
  );
}