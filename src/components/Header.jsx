import React, { useState } from 'react';
import { Menu, X, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* HEADER FIJO CON FONDO SIEMPRE VISIBLE (NO TRANSPARENTE) */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f4f0]/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-4 transition-all">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

                    {/* LOGOTIPO */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-9 h-9 bg-[#0b1d16] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            D
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#0b1d16]">
                            DOMOTEKNIK
                        </span>
                    </div>

                    {/* MENÚ DESKTOP */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Solar', 'Climatización', 'Cargadores', 'Proyectos'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-bold text-gray-500 hover:text-[#0b1d16] hover:bg-white/50 px-3 py-1 rounded-md transition-all uppercase tracking-wide"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* BOTÓN CTA */}
                    <div className="hidden md:block">
                        <Link
                            to="/configurador"
                            className="inline-flex items-center gap-2 bg-[#84cc16] text-[#0b1d16] px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-[#65a30d] hover:scale-105 transition-all shadow-lg shadow-lime-500/20"
                        >
                            <Play className="w-3 h-3 fill-current" /> SIMULA TU ECOSISTEMA
                        </Link>
                    </div>

                    {/* MENÚ MOVIL (HAMBURGER) */}
                    <button
                        className="md:hidden p-2 text-[#0b1d16] hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* OVERLAY MOVIL */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#f4f4f0] pt-28 px-6 md:hidden">
                    <nav className="flex flex-col gap-6 text-2xl font-bold text-[#0b1d16]">
                        <a href="#" className="border-b border-gray-200 pb-4">Solar</a>
                        <a href="#" className="border-b border-gray-200 pb-4">Climatización</a>
                        <a href="#" className="border-b border-gray-200 pb-4">Cargadores</a>
                        <a href="#" className="border-b border-gray-200 pb-4">Proyectos</a>
                    </nav>
                </div>
            )}
        </>
    );
};
