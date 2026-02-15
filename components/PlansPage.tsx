import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PlanSection } from './PlanSection';
import { RecommendationTool } from './RecommendationTool';

// Reusing the page layout approach
const PlansPage: React.FC = () => {

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white relative">
            <Header />
            {/* Note: onStartProject logic might need to be passed down or handled via context if we want the overlay to work here too */}

            <main className="pt-32">
                <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Choose Your <span className="text-blue-500">Path</span></h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">Flexible engagement models designed to match your stage of growth and digital ambition.</p>
                </div>

                <PlanSection />
                <RecommendationTool />
            </main>

            <Footer />

            {/* Global Grain Overlay for Texture Consistency */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default PlansPage;
