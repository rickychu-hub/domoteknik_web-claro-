import React, { useState } from 'react';
import {
    Sun, Battery, Wind, Zap, BrainCircuit, CheckCircle2, ArrowRight, Home, Leaf, Trees
} from 'lucide-react';

const EcosystemWizard = () => {
    const [step, setStep] = useState(1);
    const [selectedModules, setSelectedModules] = useState(['solar']);
    const [propertyType, setPropertyType] = useState('house');
    const [monthlyBill, setMonthlyBill] = useState(150);

    // --- CONFIGURACIÓN DE DATOS ---
    const MODULES = [
        { id: 'solar', label: 'Solar', icon: Sun, color: 'text-amber-400', border: 'border-amber-400', desc: 'Pack Paneles AIKO N-Type (4kWp)' },
        { id: 'battery', label: 'Batería', icon: Battery, color: 'text-emerald-400', border: 'border-emerald-400', desc: 'Huawei LUNA2000 10kWh' },
        { id: 'aerotermia', label: 'Aerotermia', icon: Wind, color: 'text-sky-400', border: 'border-sky-400', desc: 'Daikin Altherma 3 (R32)' },
        { id: 'charger', label: 'Cargador', icon: Zap, color: 'text-purple-400', border: 'border-purple-400', desc: 'Wallbox Pulsar Plus 7.4kW' },
        { id: 'loxone', label: 'Loxone', icon: BrainCircuit, color: 'text-lime-400', border: 'border-lime-500', desc: 'Miniserver Gen2 (Gestión Total)' },
    ];

    const toggleModule = (id) => {
        setSelectedModules(prev =>
            prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
        );
    };

    const calculateSavings = () => {
        // Lógica simple de simulación
        let base = 0;
        if (selectedModules.includes('solar')) base += 900;
        if (selectedModules.includes('battery')) base += 500;
        if (selectedModules.includes('aerotermia')) base += 800;
        if (selectedModules.includes('charger')) base += 1200;
        // Ajuste por gasto actual
        return Math.floor(base * (monthlyBill / 100));
    };

    const savings = calculateSavings();

    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">

            {/* HEADER SIMPLE */}
            <div className="max-w-4xl w-full flex justify-between items-center mb-8">
                <div className="text-sm font-bold tracking-widest text-slate-400">CONFIGURADOR</div>
                <div className="flex gap-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-2 w-12 rounded-full transition-all ${i <= step ? 'bg-[#84cc16]' : 'bg-slate-200'}`} />
                    ))}
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">

                {/* PASO 1: SELECCIÓN */}
                {step === 1 && (
                    <div className="p-8 flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">

                        {/* SVG BACKGROUND CONNECTION LAYER */}
                        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
                            <defs>
                                <linearGradient id="lineSolar" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="lineBat" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="lineAero" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="lineCharge" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="lineLoxone" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#84cc16" /><stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Lines aiming for center (50% 50%) from approximate grid positions */}
                            {/* Desktop Layout Assumption: 5 cols. Mobile will look abstract/cool anyway. */}
                            <line x1="10%" y1="40%" x2="50%" y2="50%" stroke="url(#lineSolar)" strokeWidth="2" className="animate-pulse" />
                            <line x1="30%" y1="40%" x2="50%" y2="50%" stroke="url(#lineBat)" strokeWidth="2" className="animate-pulse delay-75" />
                            <line x1="50%" y1="35%" x2="50%" y2="50%" stroke="url(#lineAero)" strokeWidth="2" className="animate-pulse delay-150" />
                            <line x1="70%" y1="40%" x2="50%" y2="50%" stroke="url(#lineCharge)" strokeWidth="2" className="animate-pulse delay-200" />
                            <line x1="90%" y1="40%" x2="50%" y2="50%" stroke="url(#lineLoxone)" strokeWidth="2" className="animate-pulse delay-300" />
                        </svg>

                        <div className="relative z-10 flex flex-col h-full">
                            <h2 className="text-3xl font-bold text-[#0b1d16] mb-2 text-center">Diseña tu Ecosistema</h2>
                            <p className="text-slate-500 text-center mb-10">Selecciona los componentes que te interesan y conéctalos.</p>

                            <div className="flex-1 flex items-center justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl content-center">
                                    {MODULES.map(mod => (
                                        <button
                                            key={mod.id}
                                            onClick={() => toggleModule(mod.id)}
                                            className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 relative bg-white
                            ${selectedModules.includes(mod.id)
                                                    ? 'border-[#84cc16] shadow-xl shadow-lime-100 ring-4 ring-lime-50'
                                                    : 'border-slate-100 hover:border-slate-200 text-slate-400 grayscale'
                                                }`}
                                        >
                                            <div className={`p-4 rounded-full transition-colors ${selectedModules.includes(mod.id) ? 'bg-lime-50' : 'bg-slate-50'}`}>
                                                <mod.icon className={`w-8 h-8 ${selectedModules.includes(mod.id) ? 'text-[#84cc16]' : 'text-slate-400'}`} />
                                            </div>
                                            <span className={`font-bold ${selectedModules.includes(mod.id) ? 'text-[#0b1d16]' : 'text-slate-500'}`}>{mod.label}</span>
                                            {selectedModules.includes(mod.id) && (
                                                <div className="absolute -top-3 -right-3 bg-white p-1 rounded-full shadow-md">
                                                    <CheckCircle2 className="w-6 h-6 text-[#84cc16] fill-white" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button onClick={() => setStep(2)} className="bg-[#84cc16] text-[#0b1d16] px-8 py-4 rounded-xl font-bold hover:bg-[#65a30d] transition-all flex items-center gap-2 shadow-lg shadow-lime-200 z-20">
                                    Siguiente Paso <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* PASO 2: DATOS */}
                {step === 2 && (
                    <div className="p-12 flex flex-col items-center justify-center h-full animate-in fade-in slide-in-from-right-8 duration-500">
                        <h2 className="text-3xl font-bold text-[#0b1d16] mb-8">Tu Perfil Energético</h2>

                        <div className="w-full max-w-lg space-y-8">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-4">Tipo de Propiedad</label>
                                <div className="grid grid-cols-3 gap-4">
                                    {['Casa', 'Piso', 'Nave'].map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setPropertyType(type.toLowerCase())}
                                            className={`py-4 rounded-xl border-2 font-bold transition-all ${propertyType === type.toLowerCase() ? 'border-[#84cc16] bg-lime-50 text-[#0b1d16]' : 'border-slate-200 text-slate-400'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="text-sm font-bold text-slate-700">Gasto Mensual Aproximado</label>
                                    <span className="text-2xl font-black text-[#84cc16]">{monthlyBill}€</span>
                                </div>
                                <input
                                    type="range" min="50" max="600" step="10"
                                    value={monthlyBill} onChange={(e) => setMonthlyBill(e.target.value)}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#84cc16]"
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2">
                                    <span>50€</span>
                                    <span>600€+</span>
                                </div>
                            </div>

                            <button onClick={() => setStep(3)} className="w-full bg-[#84cc16] text-[#0b1d16] py-4 rounded-xl font-bold text-lg hover:bg-[#65a30d] transition-all shadow-lg shadow-lime-200">
                                Calcular Resultado
                            </button>
                        </div>
                    </div>
                )}

                {/* PASO 3: RESULTADOS - SPLIT & BAR LAYOUT */}
                {step === 3 && (
                    <div className="flex flex-col h-full animate-in zoom-in duration-500 gap-4 p-6">

                        {/* ZONA SUPERIOR: VISUALIZACIÓN Y CONFIGURACIÓN (GRID 50/50) */}
                        <div className="flex flex-col lg:flex-row gap-4 flex-1 min-h-0">

                            {/* COLUMNA IZQUIERDA: TECH HUB COMPACTO */}
                            <div className="lg:w-1/2 bg-[#0b1d16] rounded-2xl relative overflow-hidden flex items-center justify-center p-6 shadow-2xl border border-slate-800">
                                {/* Fondo y Decoración */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2e26] via-[#0b1d16] to-[#0b1d16] opacity-60"></div>
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                                {/* Hub Central Visual */}
                                <div className="relative w-full max-w-[320px] aspect-square">
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                                        <defs>
                                            <linearGradient id="gradSolar" x1="50%" y1="10%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#fbbf24" stopOpacity="1" /><stop offset="100%" stopColor="#84cc16" stopOpacity="0.2" /></linearGradient>
                                            <linearGradient id="gradBat" x1="90%" y1="50%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#34d399" stopOpacity="1" /><stop offset="100%" stopColor="#84cc16" stopOpacity="0.2" /></linearGradient>
                                            <linearGradient id="gradAero" x1="50%" y1="90%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#38bdf8" stopOpacity="1" /><stop offset="100%" stopColor="#84cc16" stopOpacity="0.2" /></linearGradient>
                                            <linearGradient id="gradCharge" x1="10%" y1="50%" x2="50%" y2="50%" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#c084fc" stopOpacity="1" /><stop offset="100%" stopColor="#84cc16" stopOpacity="0.2" /></linearGradient>
                                            <style>
                                                {`
                                                    @keyframes flow-energy {
                                                        to { stroke-dashoffset: 0; }
                                                    }
                                                    .energy-line {
                                                        stroke-dasharray: 20;
                                                        stroke-dashoffset: 100;
                                                        animation: flow-energy 1.5s linear infinite;
                                                        stroke-linecap: round;
                                                    }
                                                `}
                                            </style>
                                        </defs>
                                        {/* Líneas de Energía Sólidas con Animación de Flujo */}
                                        {selectedModules.includes('solar') && <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="url(#gradSolar)" strokeWidth="4" className="energy-line" />}
                                        {selectedModules.includes('battery') && <line x1="85%" y1="50%" x2="50%" y2="50%" stroke="url(#gradBat)" strokeWidth="4" className="energy-line" style={{ animationDelay: '0.2s' }} />}
                                        {selectedModules.includes('aerotermia') && <line x1="50%" y1="85%" x2="50%" y2="50%" stroke="url(#gradAero)" strokeWidth="4" className="energy-line" style={{ animationDelay: '0.4s' }} />}
                                        {selectedModules.includes('charger') && <line x1="15%" y1="50%" x2="50%" y2="50%" stroke="url(#gradCharge)" strokeWidth="4" className="energy-line" style={{ animationDelay: '0.6s' }} />}
                                    </svg>

                                    {/* CORE (CONDICIONAL: HOGAR vs CEREBRO) */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className={`w-24 h-24 rounded-full border-2 ${selectedModules.includes('loxone') ? 'border-[#84cc16] bg-[#0b1d16] shadow-[0_0_40px_rgba(132,204,22,0.5)]' : 'border-slate-600 bg-[#0b1d16] shadow-none'} flex flex-col items-center justify-center transition-all duration-500`}>
                                            {selectedModules.includes('loxone') ? (
                                                <>
                                                    <BrainCircuit className="w-8 h-8 text-[#84cc16] animate-pulse" />
                                                    <span className="text-[9px] font-bold text-[#84cc16] mt-1">LOXONE</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Home className="w-8 h-8 text-slate-400" />
                                                    <span className="text-[9px] font-bold text-slate-400 mt-1">HOGAR</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* SATÉLITES */}
                                    {selectedModules.includes('solar') && <div className="absolute top-[2%] left-1/2 -translate-x-1/2 z-20"><div className="p-3 rounded-xl bg-black/50 border border-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.2)]"><Sun className="w-6 h-6 text-amber-400" /></div></div>}
                                    {selectedModules.includes('battery') && <div className="absolute top-1/2 right-[2%] -translate-y-1/2 z-20"><div className="p-3 rounded-xl bg-black/50 border border-emerald-400/50 shadow-[0_0_15px_rgba(52,211,153,0.2)]"><Battery className="w-6 h-6 text-emerald-400" /></div></div>}
                                    {selectedModules.includes('aerotermia') && <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-20"><div className="p-3 rounded-xl bg-black/50 border border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]"><Wind className="w-6 h-6 text-sky-400" /></div></div>}
                                    {selectedModules.includes('charger') && <div className="absolute top-1/2 left-[2%] -translate-y-1/2 z-20"><div className="p-3 rounded-xl bg-black/50 border border-purple-400/50 shadow-[0_0_15px_rgba(192,132,252,0.2)]"><Zap className="w-6 h-6 text-purple-400" /></div></div>}
                                </div>
                            </div>

                            {/* COLUMNA DERECHA: ESPECIFICACIONES */}
                            <div className="lg:w-1/2 bg-slate-50 rounded-2xl border border-slate-200 p-6 pt-4 flex flex-col overflow-y-auto">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">TU CONFIGURACIÓN</h3>
                                    <button onClick={() => setStep(1)} className="text-xs font-bold text-[#84cc16] hover:text-[#65a30d] hover:underline transition-all">
                                        Editar
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto pr-2">
                                    <ul className="space-y-3">
                                        {MODULES.filter(m => selectedModules.includes(m.id)).map(m => (
                                            <li key={m.id} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                                <div className={`p-2 rounded-lg ${m.color.replace('text', 'bg').replace('400', '50')} ${m.color.replace('400', '600')}`}>
                                                    <m.icon size={18} />
                                                </div>
                                                <div>
                                                    <div className={`font-bold text-sm ${m.color.replace('400', '700')}`}>{m.label.toUpperCase()}</div>
                                                    <div className="text-xs text-slate-500">{m.desc}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <p className="text-[10px] text-slate-400 text-center leading-tight">
                                        Diseño preliminar basado en los datos proporcionados. Incluye instalación, puesta en marcha y app de control.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* ZONA INFERIOR: BARRA DE IMPACTO */}
                        <div className="bg-slate-100 w-full rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-inner border border-slate-200">

                            {/* DATO 1: AHORRO */}
                            <div className="text-center md:text-left">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Ahorro Estimado</span>
                                <div className="text-4xl font-black text-[#84cc16]">{savings}€<span className="text-lg text-slate-400 font-medium">/año</span></div>
                            </div>

                            {/* DATO 2: ECOLOGÍA */}
                            <div className="flex gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full shadow-sm"><Leaf className="w-5 h-5 text-[#84cc16]" /></div>
                                    <div>
                                        <div className="text-lg font-bold text-slate-700">{(savings * 0.003).toFixed(1)}t</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">CO2 Evitado</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full shadow-sm"><Trees className="w-5 h-5 text-[#84cc16]" /></div>
                                    <div>
                                        <div className="text-lg font-bold text-slate-700">x{Math.floor(savings / 50)}</div>
                                        <div className="text-[10px] uppercase font-bold text-slate-400">Árboles</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="bg-[#84cc16] hover:bg-[#65a30d] text-[#0b1d16] font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-lime-200 transition-all transform hover:scale-105 whitespace-nowrap">
                                SOLICITAR PRESUPUESTO TÉCNICO
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default EcosystemWizard;