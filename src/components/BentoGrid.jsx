import React from 'react';

export const BentoGrid = ({ children }) => {
    return (
        <main className="min-h-screen bg-eco-cream p-4 md:p-8 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-[1800px] h-full md:h-[90vh] grid grid-cols-1 md:grid-cols-4 grid-rows-12 md:grid-rows-2 gap-4 md:gap-6">
                {children}
            </div>
        </main>
    );
};
