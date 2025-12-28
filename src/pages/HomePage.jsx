import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Thermometer, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { LoxoneCore } from '../components/LoxoneCore';
import { BentoCard } from '../components/BentoCard';
import { DifferenceSection } from '../components/DifferenceSection';
import { ProcessSection } from '../components/ProcessSection'; // IMPORT

// Service Card Component (Kept same as before)
const ServiceCard = ({ icon: Icon, title, subtitle, path }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(path)} className="h-full">
            <BentoCard className="bg-white shadow-sm border border-gray-100 flex flex-col justify-between group cursor-pointer h-full hover:border-eco-green/50 hover:shadow-lg transition-all p-6">
                <div className="w-12 h-12 rounded-full bg-eco-cream flex items-center justify-center mb-6 group-hover:bg-eco-green group-hover:text-white transition-colors duration-300 text-eco-dark">
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-eco-green transition-colors">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>
                </div>
            </BentoCard>
        </div>
    );
};

export const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto relative z-10 px-4 md:px-6"
        >
            {/* SECTION 1: HERO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] mb-10">
                <HeroSection />
                <LoxoneCore />
                <ServiceCard icon={Sun} title="Solar Integrada" subtitle="Paneles Full-Black invisibles. Estética sin compromisos." path="/solar" />
                <ServiceCard icon={Thermometer} title="Clima Invisible" subtitle="Aerotermia de diseño y suelo radiante." path="/clima" />
                <ServiceCard icon={Zap} title="Carga V.E." subtitle="Gestión inteligente de excedentes." path="/cargador" />
            </div>

            {/* SECTION 2: THE DIFFERENCE (Dark) */}
            <DifferenceSection />

            {/* SECTION 3: THE PROCESS (Light) */}
            <ProcessSection />

        </motion.div>
    );
};
