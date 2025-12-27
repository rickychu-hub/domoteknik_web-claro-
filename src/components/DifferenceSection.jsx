import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonCard = ({ title, items, isPremium = false }) => (
    <div
        className={`p-8 rounded-[2rem] h-full flex flex-col justify-center transition-all duration-300 relative overflow-hidden ${isPremium
                ? 'bg-[#0b1d16] border border-eco-green/30 shadow-2xl group' // CHANGED: Deep Emerald Green (Not Black)
                : 'bg-white text-gray-500 border border-gray-200 shadow-sm'
            }`}
    >
        {/* Premium Background Effects */}
        {isPremium && (
            <>
                {/* Internal Gradient Mesh to give it life (Not flat) */}
                <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                {/* Top Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-eco-green/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
            </>
        )}

        <h3 className={`text-2xl font-bold mb-8 relative z-10 ${isPremium ? 'text-white' : 'text-gray-400'}`}>
            {title}
        </h3>

        <div className="space-y-6 relative z-10">
            {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div className={`mt-1 min-w-[24px] h-6 rounded-full flex items-center justify-center ${isPremium
                            ? 'bg-eco-green text-white shadow-[0_0_15px_rgba(76,175,80,0.5)]' // Brighter Glow
                            : 'bg-red-50 text-red-400'
                        }`}>
                        {isPremium ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                    </div>

                    {/* Text Content */}
                    <div>
                        <p className={`font-medium text-lg leading-tight ${isPremium ? 'text-white' : 'text-gray-500'}`}>{item.text}</p>
                        <p className={`text-sm mt-1 leading-relaxed ${isPremium ? 'text-emerald-100/70' : 'text-gray-400/70'}`}>{item.sub}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const DifferenceSection = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="mb-16 md:max-w-3xl">
                    <span className="px-3 py-1 bg-white border border-gray-200 text-eco-dark rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm mb-4 inline-block">
                        Análisis de Valor
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mb-6 leading-tight">
                        ¿Por qué otros son <br />más baratos?
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        La diferencia entre una instalación estándar y una ingeniería integral no se ve en el presupuesto, se nota viviendo en la casa.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

                    {/* THE STANDARD WAY */}
                    <ComparisonCard
                        title="Instalación Estándar"
                        items={[
                            { text: "Ecosistema Fragmentado", sub: "3 apps distintas: una para ver el sol, otra para cargar el coche, y mandos físicos para el clima." },
                            { text: "Energía Reactiva (Pasiva)", sub: "Tú tienes que decidir cuándo poner la lavadora para ahorrar. La casa no te ayuda." },
                            { text: "Estética Industrial", sub: "Tubos vistos, canaletas de plástico y cajas de registro externas." }
                        ]}
                    />

                    {/* THE DOMOTEKNIK WAY */}
                    <ComparisonCard
                        isPremium={true}
                        title="Ingeniería Domoteknik"
                        items={[
                            { text: "Un Solo Cerebro (Loxone)", sub: "Solar, Clima y Carga unificados en una sola interfaz de grado industrial." },
                            { text: "Gestión Activa (IA)", sub: "La casa decide desviar energía al suelo radiante o al coche automáticamente." },
                            { text: "Integración Invisible", sub: "Diseño limpio. Sin cables. Tecnología que se siente pero no se ve." }
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};
