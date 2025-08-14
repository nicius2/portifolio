import iconTtypescript from "../assets/iconTypescript.svg";
import iconReact from "../assets/React.svg";
import iconJava from "../assets/java.svg";
import iconTailwindcss from "../assets/tailwindcss.svg";
import iconNode from "../assets/node.svg";
import iconPostgress from "../assets/postgress.svg";
import iconMysql from "../assets/mysql.svg";
import iconDocker from "../assets/docker.svg";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AnimateScrollData = [
    { title: 'Typescript', icon: iconTtypescript },
    { title: 'React', icon: iconReact },
    { title: 'Java', icon: iconJava },
    { title: 'Tailwindcss', icon: iconTailwindcss },
    { title: 'Node', icon: iconNode },
    { title: 'Docker', icon: iconDocker },
    { title: 'Postgress', icon: iconPostgress },
    { title: 'Mysql', icon: iconMysql } // Corrigido o título
];

export function AnimateScroll() {
    const duplicatedData = [...AnimateScrollData, ...AnimateScrollData];
    const containerRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(20); // Duração inicial para desktop
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            // Ajusta a duração com base na largura da tela
            if (window.innerWidth < 768) {
                setDuration(30); // Velocidade para mobile
            } else {
                setDuration(40); // Velocidade para desktop
            }

            // Calcula a largura de uma única lista para a animação de loop
            if (containerRef.current) {
                // A largura da animação é a metade da largura total (lista duplicada)
                setWidth(containerRef.current.scrollWidth / 2);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="py-4 md:py-4 mt-4 bg-[#333333] w-full overflow-hidden shadow-2xl">
            <motion.div
                ref={containerRef}
                className="flex gap-20"
                // Animação de x de 0 até o negativo da largura de uma lista
                animate={{ x: [0, -width] }}
                transition={{ repeat: Infinity, ease: "linear", duration }}
            >
                {duplicatedData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-1 justify-center flex-shrink-0"
                    >
                        <img src={item.icon} alt={item.title} className="w-13" />
                        <h2 className="text-2xl font-semibold text-[#D9D9D9]">
                            {item.title}
                        </h2>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}