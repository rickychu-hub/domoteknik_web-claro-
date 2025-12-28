import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// IMPORT VIDEOS
import studyVideo from '../assets/process-study.webm';
import executionVideo from '../assets/process-execution.webm';
import lifespanVideo from '../assets/process-lifespan.webm';

const phases = [
    {
        id: 'estudio',
        number: '01',
        title: 'Ingeniería de Precisión',
        description: 'No improvisamos. Aplicamos el Estándar Domoteknik para analizar cada variable antes de mover un solo cable. El éxito se define en el papel para garantizarse en la obra.',
        video: studyVideo
    },
    {
        id: 'ejecucion',
        number: '02',
        title: 'Materialización Exacta',
        description: 'Transición sin fricción del diseño a la realidad. Nuestros equipos técnicos ejecutan la instalación siguiendo rigurosamente la ingeniería aprobada, sin sorpresas ni sobrecostes.',
        video: executionVideo
    },
    {
        id: 'vida-util',
        number: '03',
        title: 'Operación Continua',
        description: 'La entrega no es el final. Aseguramos el rendimiento a largo plazo, el mantenimiento preventivo y la eficiencia energética durante todo el ciclo de vida del sistema.',
        video: lifespanVideo
    }
];

const PhaseBlock = ({ phase, activePhase, setActivePhase, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActivePhase(phase.id);
        }
    }, [isInView, phase.id, setActivePhase]);

    const isActive = activePhase === phase.id;

    return (
        <div ref={ref} className={`min-h-[80vh] flex flex-col justify-center p-8 md:p-16 border-l md:border-l-0 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-30 blur-[1px]'}`}>
            <span className="text-eco-green font-mono text-xl mb-4 tracking-widest block">{phase.number}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">{phase.title}</h3>
            <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-md">{phase.description}</p>

            {/* Mobile Video (Visible only on small screens) */}
            <div className="md:hidden mt-8 rounded-2xl overflow-hidden aspect-video relative bg-white shadow-lg">
                <video
                    src={phase.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload={index === 0 ? "auto" : "none"} // Preload only first one
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export const ProcessJourney = () => {
    const [activePhase, setActivePhase] = useState(phases[0].id);

    return (
        <div className="bg-[#F5F5F7] text-[#1A1A1A] w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

                {/* LEFT COLUMN: STICKY FLOATING CARD (Desktop only) */}
                <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center p-8">
                    <div className="w-full h-full max-h-[700px] relative overflow-hidden bg-white rounded-[32px] shadow-2xl">
                        <AnimatePresence mode='wait'>
                            {phases.map((phase) => (
                                phase.id === activePhase && (
                                    <motion.div
                                        key={phase.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <video
                                            src={phase.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT COLUMN: SCROLLING NARRATIVE */}
                <div className="w-full md:w-1/2">
                    {phases.map((phase, index) => (
                        <PhaseBlock
                            key={phase.id}
                            phase={phase}
                            activePhase={activePhase}
                            setActivePhase={setActivePhase}
                            index={index}
                        />
                    ))}
                    {/* Extra padding at bottom to ensure last item can be centered */}
                    <div className="h-[20vh] hidden md:block" />
                </div>

            </div>
        </div>
    );
};
