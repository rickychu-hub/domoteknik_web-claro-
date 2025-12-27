import React from 'react';
import { motion } from 'framer-motion';
import heroPoster from '../assets/hero-poster.png';

const HeroBlock = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden group"
        >
            {/* Background Image / Video Loop */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroPoster}
                    alt="Modern Villa at Golden Hour"
                    className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 z-10 text-white">
                <motion.h1
                    className="text-4xl md:text-5xl font-light tracking-tight mb-4 max-w-md font-sans"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Engineering <br />
                    <span className="font-bold text-eco-green">Autonomy</span>
                </motion.h1>
                <p className="text-white/80 max-w-sm text-sm font-light leading-relaxed backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/10">
                    Not just installation. We engineer complete energy ecosystems for the modern luxury home.
                </p>
            </div>
        </motion.div>
    );
};

export default HeroBlock;
