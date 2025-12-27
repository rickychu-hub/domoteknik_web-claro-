import React from 'react';
import { ArrowUpRight, Zap, Battery, Home, TrendingDown } from 'lucide-react';

const ProjectCard = ({ title, location, image, stats, tags }) => (
    <div className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-eco-green/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer">

        {/* Image Container */}
        <div className="h-[300px] w-full relative overflow-hidden">
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d16] via-transparent to-transparent opacity-90"></div>

            <div className="absolute top-4 left-4 flex gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0b1d16]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="p-8 relative">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-eco-green transition-colors">{title}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        <Home className="w-3 h-3" /> {location}
                    </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-eco-green group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>

            {/* Engineering Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-400" /> Autarquía
                    </div>
                    <div className="text-xl font-mono font-bold text-white">{stats.autarchy}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Battery className="w-3 h-3 text-eco-green" /> Batería
                    </div>
                    <div className="text-xl font-mono font-bold text-white">{stats.battery}</div>
                </div>
            </div>

        </div>
    </div>
);

export const ProjectsSection = () => {
    return (
        <section className="py-24 bg-[#0b1d16] relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-eco-green font-bold tracking-widest uppercase text-xs mb-3 block">
                            Engineering Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Resultados Reales.
                        </h2>
                        <p className="text-xl text-gray-400">
                            Datos verificados de nuestras últimas intervenciones.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white font-bold border-b border-eco-green pb-1 hover:text-eco-green transition-all">
                        VER TODOS LOS PROYECTOS <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProjectCard
                        title="Villa Passivhaus"
                        location="La Moraleja, Madrid"
                        image="https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&w=2675&auto=format&fit=crop"
                        tags={['Solar', 'Loxone']}
                        stats={{ autarchy: '98%', battery: '30kWh' }}
                    />
                    <ProjectCard
                        title="Residencia Off-Grid"
                        location="Sant Josep, Ibiza"
                        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop"
                        tags={['Aislada', 'Tesla']}
                        stats={{ autarchy: '100%', battery: '45kWh' }}
                    />
                    <ProjectCard
                        title="Nave Industrial 4.0"
                        location="Sant Cugat, BCN"
                        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        tags={['Trifásica', 'Cargadores']}
                        stats={{ autarchy: '85%', battery: '60kWh' }}
                    />
                </div>

                {/* Mobile Button */}
                <div className="mt-12 md:hidden text-center">
                    <button className="text-white font-bold border-b border-eco-green pb-1">
                        VER TODOS LOS PROYECTOS
                    </button>
                </div>
            </div>
        </section>
    );
};
