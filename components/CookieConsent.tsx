
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { getConsent, setConsent } from '../lib/consent';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth page entrance
        const timer = setTimeout(() => {
            const consent = getConsent();
            if (consent === 'none') {
                setIsVisible(true);
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setConsent('granted');
        setIsVisible(false);
    };

    const handleReject = () => {
        setConsent('denied');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 left-6 right-6 z-[9999] flex justify-center pointer-events-none"
                >
                    <div className="glass p-6 md:p-8 rounded-[2rem] border border-white/10 w-full max-w-4xl pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-2xl bg-black/40">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] -translate-y-1/2 translate-x-1/2" />

                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <ShieldCheck className="text-zinc-400" size={24} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-sm font-bold tracking-widest uppercase text-white">Privacy Protocol</h4>
                                <p className="text-zinc-500 text-xs leading-relaxed max-w-xl">
                                    This architecture uses essential cookies for performance integrity. By accepting, you consent to our logic-driven tracking protocols (Meta Pixel & GA) to enhance the user ecosystem.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 shrink-0">
                            <button
                                onClick={handleReject}
                                className="px-6 py-3 rounded-full border border-zinc-800 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-8 py-3 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all"
                            >
                                Accept All
                            </button>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-zinc-700 hover:text-white transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
