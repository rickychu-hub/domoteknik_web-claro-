import React from 'react';
import { motion } from 'framer-motion';
import { Server, Activity } from 'lucide-react';
import { useEnergyStore } from '../store/useEnergyStore';

const BrainBlock = () => {
    const { batteryLevel, homeConsumption } = useEnergyStore();

    return (
        <div className="relative md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-6 flex flex-col items-center justify-between shadow-sm border border-eco-cream overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-eco-cream/30 z-0" />

            {/* Header */}
            <div className="w-full flex justify-between items-center z-10">
                <span className="text-xs font-bold tracking-widest text-eco-green uppercase">Loxone Core</span>
                <Activity size={16} className="text-eco-green animate-pulse" />
            </div>

            {/* Central Visual */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
                <div className="relative w-32 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-inner border border-white flex flex-col items-center p-4">
                    {/* Server Lights */}
                    <div className="w-full flex justify-end gap-1 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <Server size={48} className="text-gray-400 mb-2 opacity-50" />
                    <div className="mt-auto w-full text-center">
                        <span className="text-[10px] text-gray-400 font-mono">MS-GEN2</span>
                    </div>

                    {/* Battery Visual Overlay */}
                    <div className="absolute -bottom-4 bg-eco-dark text-white text-xs px-3 py-1 rounded-full shadow-lg">
                        {batteryLevel}% Battery
                    </div>
                </div>
            </div>

            {/* Footer Stats */}
            <div className="w-full z-10 bg-white/50 backdrop-blur-md rounded-xl p-3 border border-white/20">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Consumption</span>
                    <span className="font-bold text-eco-dark">{homeConsumption} kW</span>
                </div>
            </div>
        </div>
    );
};

export default BrainBlock;
