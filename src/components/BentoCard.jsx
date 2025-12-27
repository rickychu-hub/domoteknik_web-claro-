import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const BentoCard = ({ children, className = "", hoverEffect = true }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}
        >
            {hoverEffect && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 175, 80, 0.15), transparent 40%)` }}
                />
            )}
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
};
