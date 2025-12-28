import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProcessJourney } from './ProcessJourney';

export const ProcessSection = () => {
    return (
        <section className="bg-[#F5F5F7] py-20 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* SECTION HEADER */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                        Ingeniería en Profundidad.
                    </h2>
                    <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                        Estándares industriales aplicados al ámbito residencial.
                    </p>
                </div>

            </div>

            {/* PROCESS JOURNEY (SCROLLYTELLING) */}
            <ProcessJourney />

            {/* CTA FOOTER */}
            <div className="max-w-7xl mx-auto px-4 mt-20 text-center">
                <button className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold border-b-2 border-eco-green pb-1 hover:text-eco-green transition-all uppercase tracking-widest text-sm">
                    SOLICITAR AUDITORÍA TÉCNICA <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};