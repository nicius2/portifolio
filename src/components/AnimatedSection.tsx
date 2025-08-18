// src/components/AnimatedSection.jsx
import { motion, AnimatePresence, easeOut } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut // Import and use the function directly
        }
    },
};

export function AnimatedSection({ children }: any) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // A animação roda uma única vez quando 30% do componente está visível
        >
            {children}
        </motion.div>
    );
}