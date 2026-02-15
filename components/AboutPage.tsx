import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Story from './Story';
import Growth from './Growth';
import Team from './Team';

const AboutPage: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const titleLetters = "Our Story".split("");

    return (
        <div className="min-h-screen bg-black text-white relative selection:bg-blue-500/30">
            <Header />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[1000]"
                style={{ scaleX }}
            />

            {/* Background Atmosphere */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <main className="pt-40 relative z-10">
                <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400 mb-8"
                    >
                        Inside YodaDayo
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter flex justify-center overflow-hidden">
                        {titleLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: i * 0.05,
                                    duration: 0.8,
                                    ease: [0.33, 1, 0.68, 1]
                                }}
                                className={letter === " " ? "mx-4" : i > 3 ? "text-blue-500" : ""}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Architecting the future of digital identity through <span className="text-white italic">technical precision</span> and raw momentum.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                        className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16"
                    />
                </div>

                <Story />
                <Growth />
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
                    <Team />
                </div>
            </main>

            <Footer />

            {/* Global Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default AboutPage;
