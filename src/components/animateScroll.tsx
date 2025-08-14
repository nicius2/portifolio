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
    { title2: 'Mysql', icon: iconMysql }
];
export function AnimateScroll() {
    const duplicatedData = [...AnimateScrollData, ...AnimateScrollData];
    const containerRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(8); // velocidade mobile
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDuration(30); // mais rápido ainda
            } else {
                setDuration(40);
            }

            if (containerRef.current) {
                setWidth(containerRef.current.scrollWidth / 1); // metade da lista
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
                animate={{ x: [-0, -width] }}
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