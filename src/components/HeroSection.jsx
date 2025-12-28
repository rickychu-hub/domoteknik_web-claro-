import React from 'react';
import { BentoCard } from './BentoCard';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => (
    <BentoCard
        className="bg-gray-900 col-span-1 md:col-span-2 min-h-[400px] relative overflow-hidden shadow-2xl p-0 border-none"
        hoverEffect={false}
    >
        {/* CSS FIX: Custom object-position to frame both car (bottom) and solar panels (top) */}
        <img
            src="/hero-gen-v2.png"
            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop'}
            alt="Domoteknik System"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 75%' }}
        />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 top-0 p-8 md:p-12 flex flex-col justify-center max-w-lg z-10">
            <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    Ecosistema Domótico
                </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
                Tu Hogar,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green to-emerald-300">Autosuficiente.</span>
            </h2>

            <p className="text-gray-200 text-lg mb-8 max-w-sm leading-relaxed font-medium drop-shadow-md">
                Integramos Solar, Aerotermia y Vehículo Eléctrico bajo un mismo cerebro.
            </p>

            <button className="w-fit bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:bg-[#84cc16] hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                SOLICITA TU ESTUDIO
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    </BentoCard>
);
