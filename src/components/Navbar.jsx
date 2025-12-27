import React from 'react';
import { Zap } from 'lucide-react';

export const Navbar = () => (
    <nav className="flex justify-between items-center mb-8 max-w-7xl mx-auto relative z-10 px-4 md:px-0 pt-6">
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
            <Zap className="w-6 h-6 text-eco-green fill-current group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-bold text-white tracking-tight">DOMOTEKNIK</span>
        </a>
    </nav>
);
