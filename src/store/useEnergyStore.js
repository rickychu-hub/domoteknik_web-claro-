import { create } from 'zustand';

export const useEnergyStore = create((set) => ({
    batteryLevel: 68,
    solarOutput: 4.2, // kW
    gridStatus: 'idle', // 'importing', 'exporting', 'idle'
    evStatus: 'charging', // 'charging', 'disconnected', 'full'
    homeConsumption: 1.5, // kW

    // Actions
    setEvStatus: (status) => set({ evStatus: status }),
    toggleGrid: () => set((state) => ({ gridStatus: state.gridStatus === 'idle' ? 'importing' : 'idle' })),
    updateBattery: (delta) => set((state) => ({ batteryLevel: Math.min(100, Math.max(0, state.batteryLevel + delta)) })),
}));
