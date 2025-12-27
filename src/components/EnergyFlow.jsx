import React from 'react';
import { motion } from 'framer-motion';
import { useEnergyStore } from '../store/useEnergyStore';

const EnergyFlow = () => {
    const { isSolarActive, isEvCharging, gridStatus } = useEnergyStore((state) => ({
        isSolarActive: state.solarOutput > 0,
        isEvCharging: state.evStatus === 'charging',
        gridStatus: state.gridStatus
    }));

    // Simplified coordinates based on the Bento Grid layout (Desktop)
    // Brain Center: X=62.5% (Start of col 3 + half col width), Y=50%
    // Satellites Center X=87.5% (Start of col 4 + half), Ys=[16%, 50%, 84%]
    // But strictly, we can draw lines relative to the Brain block if we place it there, or global overlay.
    // Global overlay is safer for "lines connecting modules".

    // We will assume desktop layout for the visualization for now.
    // Lines from Brain (Col 3) to Sats (Col 4).

    const connections = [
        { id: 'solar', start: { x: 68, y: 50 }, end: { x: 78, y: 16 }, active: isSolarActive, color: '#F59E0B' }, // Yellow
        { id: 'climate', start: { x: 68, y: 50 }, end: { x: 78, y: 50 }, active: true, color: '#F97316' }, // Orange
        { id: 'ev', start: { x: 68, y: 50 }, end: { x: 78, y: 84 }, active: isEvCharging, color: '#3B82F6' }, // Blue
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
            <svg className="w-full h-full">
                {connections.map((conn) => (
                    <g key={conn.id}>
                        {/* Base Line */}
                        <path
                            d={`M${conn.start.x}% ${conn.start.y}% C ${conn.start.x + 5}% ${conn.start.y}%, ${conn.end.x - 5}% ${conn.end.y}%, ${conn.end.x}% ${conn.end.y}%`}
                            fill="none"
                            stroke={conn.active ? conn.color : '#E5E7EB'}
                            strokeWidth="2"
                            strokeOpacity={conn.active ? 0.5 : 0.2}
                        />
                        {/* Animated Packet */}
                        {conn.active && (
                            <motion.circle
                                r="3"
                                fill={conn.color}
                                initial={{ offsetDistance: "0%" }}
                                animate={{ offsetDistance: "100%" }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "loop"
                                }}
                                style={{
                                    offsetPath: `path("M${conn.start.x}% ${conn.start.y}% C ${conn.start.x + 5}% ${conn.start.y}%, ${conn.end.x - 5}% ${conn.end.y}%, ${conn.end.x}% ${conn.end.y}%")`,
                                }}
                            />
                        )}
                        {/* Using Framer Motion pathLength for drawing line animation if needed, but particle flow is better for 'energy' */}
                        {conn.active && (
                            <motion.path
                                d={`M${conn.start.x}% ${conn.start.y}% C ${conn.start.x + 5}% ${conn.start.y}%, ${conn.end.x - 5}% ${conn.end.y}%, ${conn.end.x}% ${conn.end.y}%`}
                                fill="none"
                                stroke={conn.color}
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default EnergyFlow;
