import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Thermometer, Zap } from 'lucide-react';
import solarImg from '../assets/solar-card.png';
import climateImg from '../assets/climate-card.png';
import evImg from '../assets/ev-card.png';

const config = {
    solar: { img: solarImg, icon: Sun, color: 'text-yellow-500' },
    climate: { img: climateImg, icon: Thermometer, color: 'text-orange-500' },
    ev: { img: evImg, icon: Zap, color: 'text-blue-500' },
};

const SatelliteBlock = ({ type, title, status, isActive, onClick }) => {
    const { img, icon: Icon, color } = config[type];

    return (
        <motion.div
            className="relative rounded-[1.5rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="relative p-4 flex items-center gap-4 h-full z-10">
                <div className={`p-3 rounded-full bg-eco-cream ${isActive ? 'ring-2 ring-eco-green' : ''} transition-all`}>
                    <Icon size={24} className={color} />
                </div>
                <div>
                    <h3 className="font-semibold text-eco-dark font-sans">{title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{status}</p>
                </div>
                {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-eco-green shadow-[0_0_8px_rgba(76,175,80,0.8)] animate-pulse" />
                )}
            </div>
        </motion.div>
    );
};

export default SatelliteBlock;
