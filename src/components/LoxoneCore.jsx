import React, { useState, useEffect } from 'react';
import { BentoCard } from './BentoCard';
import { Battery, Thermometer, Zap, Activity, ChevronRight, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LoxoneCore = () => {
    const navigate = useNavigate();
    const [kw, setKw] = useState(4.2);

    useEffect(() => {
        const interval = setInterval(() => setKw(prev => +(4.0 + Math.random() * 0.5).toFixed(2)), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div onClick={() => navigate('/loxone')} className="col-span-1 md:col-span-1 h-full cursor-pointer group/card">
            {/* BRAND UPDATE: Changed bg to #0b1d16 (Deep Emerald) and added green border glow on hover */}
            <BentoCard className="bg-[#0b1d16] flex flex-col relative overflow-hidden shadow-2xl p-0 h-full transition-colors" hoverEffect={false}>

                {/* Internal Ambient Glow (Brand Consistency) */}
                <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-transparent to-transparent pointer-events-none"></div>

                {/* HEADER */}
                <div className="flex justify-between items-center p-5 border-b border-white/5 bg-white/[0.02] z-20">
                    <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-eco-green" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">SISTEMA LOXONE</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-emerald-100/70 font-bold group-hover/card:text-eco-green transition-colors uppercase">
                        VER DETALLES <ChevronRight className="w-3 h-3" />
                    </div>
                </div>

                {/* MAIN GRAPH AREA */}
                <div className="relative flex-1 flex flex-col justify-end pb-0 z-10">
                    <div className="px-6 mb-4 z-10">
                        <div className="text-[10px] text-emerald-100/60 uppercase mb-1 flex items-center gap-2">
                            <BarChart3 className="w-3 h-3" /> Producción Solar Hoy
                        </div>
                        <div className="text-5xl font-mono font-bold text-white tracking-tighter drop-shadow-lg">
                            {kw}<span className="text-xl text-emerald-100/50 ml-1">kW</span>
                        </div>
                    </div>

                    {/* SVG WAVE CHART */}
                    <div className="relative w-full h-28 overflow-hidden">
                        <svg className="absolute bottom-0 left-0 w-[150%] h-full animate-[slide_12s_linear_infinite]" viewBox="0 0 1200 320" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#4CAF50" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3L1200,138.7L1200,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                fill="url(#waveGradient)"
                            />
                            <path
                                d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3L1200,138.7"
                                fill="none" stroke="#4CAF50" strokeWidth="3"
                            />
                        </svg>
                    </div>
                </div>

                {/* FOOTER WIDGETS */}
                <div className="grid grid-cols-3 gap-px bg-white/5 z-20 border-t border-white/5">
                    <div className="bg-[#0b1d16]/50 p-4 flex flex-col justify-between items-center backdrop-blur-sm">
                        <Battery className="w-4 h-4 text-eco-green mb-2 opacity-90" />
                        <div className="text-white font-bold text-sm">92%</div>
                        <div className="text-[8px] text-emerald-100/50 uppercase">Batería</div>
                    </div>
                    <div className="bg-[#0b1d16]/50 p-4 flex flex-col justify-between items-center backdrop-blur-sm">
                        <Thermometer className="w-4 h-4 text-blue-400 mb-2 opacity-90" />
                        <div className="text-white font-bold text-sm">21.5°</div>
                        <div className="text-[8px] text-emerald-100/50 uppercase">Clima</div>
                    </div>
                    <div className="bg-[#0b1d16]/50 p-4 flex flex-col justify-between items-center relative backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-orange-500 mb-2 opacity-90" />
                        <div className="text-white font-bold text-sm">7.4kW</div>
                        <div className="text-[8px] text-orange-500 uppercase animate-pulse font-bold">Cargando</div>
                    </div>
                </div>
            </BentoCard>
        </div>
    );
};
