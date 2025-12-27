import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SolarPage = () => {
    const navigate = useNavigate();
    return (
        // ADDED: px-6 md:px-12 to fix the edge spacing
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-7xl mx-auto relative z-10 pt-10 px-6 md:px-12"
        >
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-eco-dark hover:text-eco-green mb-8 font-bold group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Volver al Hub
            </button>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 min-h-[60vh] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="relative z-10">
                    <span className="text-eco-green font-bold tracking-widest uppercase text-sm mb-2 block">Tecnología SunPower</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-eco-dark mb-6">Solar <span className="text-eco-green">Integrada.</span></h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Olvida los paneles azules y los cables vistos.
                        Diseñamos instalaciones <strong>Full-Black</strong> que se funden con la arquitectura de tu cubierta.
                    </p>
                </div>
                {/* Decorative Element */}
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
            </div>
        </motion.div>
    );
};
