import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileBarChart, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const phases = [
    {
        id: 'design',
        label: '01. ESTUDIO',
        icon: FileBarChart,
        title: 'Ingeniería de Dimensionado',
        description: 'No presupuestamos "a ojo". Realizamos un estudio vectorial de tu cubierta para calcular la producción exacta y el ahorro real mes a mes antes de poner un solo tornillo.',
        specs: ['Cálculo de curva de producción', 'Análisis de retorno (ROI)', 'Dimensionado de baterías'],
        // IMAGEN: Tablet con planos técnicos (Transmite precisión y estudio previo)
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop'
    },
    {
        id: 'execution',
        label: '02. EJECUCIÓN',
        icon: Wrench,
        title: 'Instalación "Quirófano"',
        description: 'Nuestra firma es el orden. Instalamos los equipos buscando la armonía visual con tu vivienda. Sin cables colgando, sin polvo y con la máxima seguridad.',
        specs: [
            'Baterías Huawei LUNA2000',          // Hardware específico
            'Integración estética (Sin cables)', // Promesa visual
            'Protecciones de Gama Industrial'
        ],
        // IMAGEN: Batería blanca minimalista en pared limpia (Estética idéntica a Huawei LUNA)
        image: 'https://plus.unsplash.com/premium_photo-1679917152960-b9e6456ba1d2?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'guarantee',
        label: '03. VIDA ÚTIL',
        icon: ShieldCheck,
        title: 'Monitorización Activa',
        description: 'Tu instalación nos habla. Recibimos alertas de rendimiento en tiempo real para solucionar incidencias antes de que tú las notes. Control total desde tu móvil.',
        specs: ['App Loxone Personalizada', 'Control remoto 24/7', 'Informes mensuales de ahorro'],
        // IMAGEN: Mano sosteniendo móvil con App de control (Transmite control total)
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop'
    }
];

export const ProcessSection = () => {
    const [activeTab, setActiveTab] = useState(phases[0]);

    return (
        <section className="py-24 bg-[#F9F9F7] relative">
            <div className="max-w-6xl mx-auto px-4">

                {/* SECTION HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0b1d16] mb-4">
                        Ingeniería en Profundidad.
                    </h2>
                    <p className="text-gray-500">Explora nuestro proceso estándar.</p>
                </div>

                {/* THE CONSOLE CONTAINER */}
                <div className="bg-[#0b1d16] rounded-[2rem] p-2 md:p-4 shadow-2xl overflow-hidden relative">

                    {/* 1. NAVIGATION TABS */}
                    <div className="flex flex-col md:flex-row gap-2 mb-4 p-2">
                        {phases.map((phase) => {
                            const isActive = activeTab.id === phase.id;
                            return (
                                <button
                                    key={phase.id}
                                    onClick={() => setActiveTab(phase)}
                                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 font-bold text-sm tracking-widest uppercase ${isActive
                                            ? 'bg-eco-green text-white shadow-lg shadow-eco-green/20'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <phase.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                    {phase.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. DYNAMIC CONTENT AREA */}
                    <div className="bg-[#121f1a] rounded-[1.5rem] overflow-hidden min-h-[500px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row h-full"
                            >

                                {/* LEFT: INFO */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-eco-green/10 rounded-lg text-eco-green">
                                            <activeTab.icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-xs font-mono text-eco-green border border-eco-green/30 px-2 py-1 rounded">
                                            ESTÁNDAR DOMOTEKNIK
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        {activeTab.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                        {activeTab.description}
                                    </p>

                                    <div className="space-y-4 border-t border-white/10 pt-6">
                                        {activeTab.specs.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                                <CheckCircle2 className="w-5 h-5 text-eco-green shrink-0" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT: IMAGE */}
                                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                                    <img
                                        src={activeTab.image}
                                        alt={activeTab.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient for seamless blend */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#121f1a] via-[#121f1a]/50 to-transparent"></div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 text-[#0b1d16] font-bold border-b-2 border-[#0b1d16] pb-1 hover:text-eco-green hover:border-eco-green transition-all">
                        SOLICITAR AUDITORÍA TÉCNICA <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
};