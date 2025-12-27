import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LoxonePage = () => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-7xl mx-auto relative z-10 pt-10 px-6 md:px-12"
        >
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-eco-dark hover:text-eco-green mb-8 font-bold group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Volver al Hub
            </button>

            <div className="bg-[#121212] rounded-[3rem] p-8 md:p-12 min-h-[60vh] shadow-xl border border-gray-800 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <Cpu className="w-16 h-16 text-eco-green mb-6" />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">El Cerebro <span className="text-eco-green">Loxone.</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Aquí explicaremos cómo el Miniserver unifica Solar, Clima y Carga.
                        Mostraremos la App, los Touch Switches y la lógica de automatización.
                    </p>
                </div>
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            </div>
        </motion.div>
    );
};
