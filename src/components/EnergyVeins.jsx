import React from 'react';
import { motion } from 'framer-motion';

export const EnergyVeins = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-30">
            <defs>
                <linearGradient id="energy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0" />
                    <stop offset="50%" stopColor="#4CAF50" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
                </linearGradient>
            </defs>
            {/* Animated Path: From Hero (Top Left) to Loxone (Right) */}
            <motion.path
                d="M 20% 400 Q 50% 400, 80% 300"
                fill="none"
                stroke="url(#energy-gradient)"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Add particles moving along the path */}
            <circle r="3" fill="#4CAF50">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 20% 400 Q 50% 400, 80% 300" />
            </circle>
        </svg>
    </div>
);
