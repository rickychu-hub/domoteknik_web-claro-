import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    Sun, Battery, Wind, Zap, Home, X, Play, CheckCircle2
} from 'lucide-react';

// --- CONFIGURACIÓN DE DATOS (COLORES ECO ACTUALIZADOS) ---
const MODULES = [
    { id: 'solar', label: 'Solar', icon: Sun, color: '#facc15', savings: 850, angle: 225 }, // Yellow-400
    { id: 'battery', label: 'Batería', icon: Battery, color: '#a3e635', savings: 600, angle: 315 }, // Lime-400
    { id: 'aerotermia', label: 'Aerotermia', icon: Wind, color: '#2dd4bf', savings: 450, angle: 135 }, // Teal-400
    { id: 'charger', label: 'Cargador VE', icon: Zap, color: '#ffffff', savings: 320, angle: 45 }, // White
];

// --- CONTEXTO ---
const SimulatorContext = React.createContext(null);

const useSimulatorStateContext = () => {
    const context = React.useContext(SimulatorContext);
    if (!context) throw new Error("Simulator components must be within a context provider");
    return context;
}

// --- COMPONENTE PRINCIPAL ---
const SimulatorModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            {/* BOTÓN ACTIVADOR */}
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 bg-[#84cc16] text-[#0b1d16] px-6 py-3 rounded-full font-bold hover:bg-[#65a30d] hover:scale-105 transition-all shadow-lg shadow-lime-500/20"
            >
                <Play className="w-4 h-4 fill-current" /> SIMULA TU ECOSISTEMA
            </button>

            {/* PORTAL */}
            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">

                    {/* Fondo Oscuro (Backdrop) */}
                    <div
                        className="absolute inset-0 bg-[#000000]/80 backdrop-blur-xl transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Tarjeta del Simulador (Premium Glass Design) */}
                    <div className="relative w-full max-w-6xl bg-gradient-to-br from-[#022c22] to-[#000000] border border-white/10 rounded-[3rem] shadow-2xl shadow-lime-900/10 overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto md:overflow-visible group ring-1 ring-white/5">

                        {/* Inner Glow Effect */}
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.1),transparent_40%)]" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-50 p-3 bg-white/5 text-slate-400 hover:text-white hover:bg-red-500/20 rounded-full transition-colors backdrop-blur-md border border-white/5"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <EnergySimulatorWrapper>
                            {/* IZQUIERDA: GRÁFICO (Espacio expandido) */}
                            <div className="flex-1 p-10 md:p-16 relative flex items-center justify-center min-h-[500px] bg-black/20">
                                <EnergyGraph />
                            </div>

                            {/* DERECHA: RESULTADOS */}
                            <div className="md:w-[400px] bg-white/5 backdrop-blur-md border-l border-white/10 p-10 flex flex-col justify-center relative">
                                <ResultsPanel />
                            </div>
                        </EnergySimulatorWrapper>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

// --- SUBCOMPONENTES ---

const EnergySimulatorWrapper = ({ children }) => {
    const [activeModules, setActiveModules] = useState(['solar']);

    const toggleModule = (id) => {
        setActiveModules(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    const totalSavings = activeModules.reduce((acc, id) => {
        const mod = MODULES.find(m => m.id === id);
        return acc + (mod ? mod.savings : 0);
    }, 0);

    const independence = Math.min(100, activeModules.length * 25);

    return (
        <SimulatorContext.Provider value={{ activeModules, toggleModule, totalSavings, independence }}>
            {children}
        </SimulatorContext.Provider>
    );
};

const EnergyGraph = () => {
    const { activeModules, toggleModule } = useSimulatorStateContext();
    const CENTER = { x: 200, y: 200 }; // Expanded SVG canvas
    const RADIUS = 140; // Larger Radius

    const getPos = (angle) => {
        const rad = (angle * Math.PI) / 180;
        return {
            x: CENTER.x + RADIUS * Math.cos(rad),
            y: CENTER.y + RADIUS * Math.sin(rad)
        };
    };

    return (
        <div className="relative w-full max-w-[450px] aspect-square select-none">
            <style>{`
          @keyframes flow { to { stroke-dashoffset: -40; } }
          .energy-flow { animation: flow 1.5s linear infinite; }
        `}</style>
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 400 400">
                <defs>
                    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                {MODULES.map((mod) => {
                    const isActive = activeModules.includes(mod.id);
                    const pos = getPos(mod.angle);
                    return (
                        <g key={mod.id}>
                            {/* Static Line */}
                            <line
                                x1={pos.x} y1={pos.y} x2={CENTER.x} y2={CENTER.y}
                                stroke="white" strokeWidth="2" strokeOpacity={0.05}
                            />
                            {/* Active Flow */}
                            {isActive && (
                                <line
                                    x1={pos.x} y1={pos.y} x2={CENTER.x} y2={CENTER.y}
                                    stroke={mod.color} strokeWidth="3"
                                    strokeDasharray="8 12"
                                    className="energy-flow"
                                    filter="url(#glow)"
                                    strokeLinecap="round"
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* CENTER HUB */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#1a2e26] to-[#022c22] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(132,204,22,0.15)] z-10 relative">
                    <Home className="w-10 h-10 text-white/90" strokeWidth={1.5} />
                    {/* Breathing Glow */}
                    <div className="absolute inset-0 rounded-full bg-lime-500/10 animate-pulse blur-xl"></div>
                </div>
            </div>

            {/* SATELLITES */}
            {MODULES.map((mod) => {
                const pos = getPos(mod.angle);
                // Map 400x400 SVG coords to percentage
                const left = (pos.x / 400) * 100 + '%';
                const top = (pos.y / 400) * 100 + '%';
                const isActive = activeModules.includes(mod.id);
                return (
                    <button
                        key={mod.id}
                        onClick={() => toggleModule(mod.id)}
                        style={{ left, top }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-[2rem] flex flex-col items-center justify-center gap-2 border transition-all duration-500 z-20 cursor-pointer group hover:scale-105 ${isActive
                                ? 'bg-[#0f2820] border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                                : 'bg-white/5 border-transparent hover:bg-white/10 text-slate-500'
                            }`}
                    >
                        <mod.icon
                            className={`w-7 h-7 transition-all duration-500 ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'opacity-40 grayscale'}`}
                            style={{ color: isActive ? mod.color : 'currentColor' }}
                            strokeWidth={1.5}
                        />
                        <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-white' : 'text-slate-600'}`}>
                            {mod.label}
                        </span>

                        {/* Active Indicator Ring */}
                        {isActive && (
                            <div className="absolute inset-0 rounded-[2rem] border transition-all duration-500 opacity-100" style={{ borderColor: `${mod.color}40`, boxShadow: `inset 0 0 20px ${mod.color}10` }}></div>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const ResultsPanel = () => {
    const { totalSavings, independence } = useSimulatorStateContext();
    return (
        <div className="space-y-10">
            <div>
                <p className="text-lime-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                    Análisis en Tiempo Real
                </p>

                <h3 className="text-6xl md:text-7xl font-black tracking-tight mb-2 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
                    {totalSavings}€
                </h3>
                <p className="text-slate-400 text-sm font-medium">Ahorro anual estimado</p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">Independencia</span>
                    <span className={`font-mono text-2xl font-bold ${independence > 80 ? 'text-lime-400' : 'text-white'}`}>{independence}%</span>
                </div>
                {/* Custom Progress Bar */}
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div
                        className="h-full bg-gradient-to-r from-teal-500 to-lime-400 shadow-[0_0_15px_rgba(132,204,22,0.6)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{ width: `${independence}%` }}
                    />
                </div>
            </div>

            <div className="pt-4">
                <button className="group w-full bg-gradient-to-r from-[#84cc16] to-[#65a30d] py-5 rounded-2xl font-black text-lg tracking-wide text-[#0b1d16] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(132,204,22,0.5)]">
                    SOLICITAR ESTUDIO GRATUITO
                    <CheckCircle2 className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-slate-500 text-[10px] mt-4 uppercase tracking-wider">
                    Sin compromiso · Respuesta en 24h
                </p>
            </div>
        </div>
    );
};

export default SimulatorModal;
