import React, { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Lightbulb, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

import Header from './Header';
import Footer from './Footer';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

const hoverScaleVariants: Variants = {
    hover: {
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const ProjectInitiation = () => {
    const navigate = useNavigate();
    const [isMeetingExpanding, setIsMeetingExpanding] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business_type: '',
        website: '',
        requirements: ''
    });

    // Removed local backend session check and login logic as we are switching to serverless/Supabase only.


    const handleInitiate = async () => {
        if (!formData.name || !formData.email || !formData.business_type || !formData.requirements) {
            alert('Please fill in all required fields.');
            return;
        }

        setFormStatus('loading');
        try {
            const { error } = await supabase
                .from('project_initiations')
                .insert([formData]);

            if (error) throw error;
            setFormStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus('error');
        }
    };

    return (
        <motion.div
            layoutId="project-initiation-container"
            className="min-h-screen bg-black overflow-x-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <div className="min-h-screen flex flex-col relative">
                <Header />
                {/* 1. Animated Background Text Layer */}
                <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                    <div className="relative w-[150%] h-[150%] -rotate-[15deg] flex flex-col gap-20">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="whitespace-nowrap text-[15vh] font-black uppercase leading-none bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent"
                                animate={{ x: i % 2 === 0 ? ["-20%", "0%"] : ["0%", "-20%"] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror", // Or "loop" for continuous
                                    duration: 10 + i * 2,
                                    ease: "linear"
                                }}
                            >
                                {Array(20).fill("YODADAYO").map((text, index) => (
                                    <span key={index} className="mx-8">{text}</span>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Glass Overlay Layer (Blur + Darken) */}
                {/* This sits on top of the text but behind the content to make content readable */}
                <div className="fixed inset-0 z-0 bg-zinc-950/70 backdrop-blur-sm pointer-events-none" />

                {/* Background Texture/Gradient (Optional, keeping subtle) */}
                <div className="fixed inset-0 bg-gradient-to-b from-zinc-900/30 to-black pointer-events-none z-0" />



                <div className="relative z-10 flex-grow pt-32 pb-20 px-4 md:px-8">
                    <motion.div
                        className="max-w-5xl mx-auto space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        {/* Header / Intro Card */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-colors duration-700" />

                            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight relative z-10">
                                Let's Talk <span className="italic">Ideas</span>
                                <span className="inline-block align-middle ml-4 bg-amber-400/20 p-2 rounded-2xl shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            repeatDelay: 3,
                                            duration: 1
                                        }}
                                    >
                                        <Lightbulb size={40} className="text-amber-400" fill="currentColor" />
                                    </motion.div>
                                </span>
                            </h2>
                            <p className="mt-6 text-zinc-400 max-w-xl mx-auto text-lg">
                                Ready to build something extraordinary? Fill out the details below and let's get started on your premium identity.
                            </p>
                        </motion.div>

                        {/* Main Content Grid */}
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Visual/Info Card */}
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                className="md:col-span-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-6 hover:border-white/20 transition-colors shadow-xl"
                            >
                                <motion.div
                                    variants={hoverScaleVariants}
                                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2"
                                >
                                    <Calendar size={32} className="text-black" />
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Book a Call</h3>
                                    <p className="text-zinc-500 text-sm">Prefer to talk live? Schedule a 15-min discovery session.</p>
                                </div>
                                {!isMeetingExpanding ? (
                                    <motion.button
                                        layoutId="meeting-transition-button"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMeetingExpanding(true)}
                                        className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-bold text-sm transition-colors relative z-10"
                                    >
                                        <motion.span layoutId="meeting-button-text">Schedule Meeting</motion.span>
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        layoutId="meeting-transition-button"
                                        className="fixed inset-0 z-[100] bg-zinc-950 flex items-center justify-center overflow-hidden"
                                        initial={{ borderRadius: "20px" }}
                                        animate={{ borderRadius: "0px" }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        onLayoutAnimationComplete={() => navigate('/meeting')}
                                    >
                                        <motion.span
                                            layoutId="meeting-button-text"
                                            className="text-white text-3xl font-bold"
                                            animate={{ opacity: 0, scale: 1.5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Schedule Meeting
                                        </motion.span>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Form Card */}
                            <motion.div
                                variants={itemVariants}
                                className="md:col-span-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                                        Share Your Logic
                                    </h3>
                                </div>

                                <AnimatePresence mode="wait">
                                    {formStatus === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="py-12 flex flex-col items-center text-center"
                                        >
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black mb-6">
                                                <CheckCircle size={40} />
                                            </div>
                                            <h3 className="text-3xl font-bold mb-2 text-white">Project Initiated!</h3>
                                            <p className="text-zinc-400">Your vision is in safe hands. We'll be in touch very soon.</p>
                                            <button
                                                onClick={() => setFormStatus('idle')}
                                                className="mt-8 text-sm font-bold text-zinc-500 hover:text-white transition-colors underline"
                                            >
                                                Start another project
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Name (Required)</label>
                                                    <motion.input
                                                        whileFocus={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        placeholder="John Doe"
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none transition-all text-white"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Email (Required)</label>
                                                    <motion.input
                                                        whileFocus={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        placeholder="john@company.com"
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none transition-all text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Business Type (Required)</label>
                                                    <motion.select
                                                        value={formData.business_type}
                                                        onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                                                        whileFocus={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none transition-all appearance-none text-white"
                                                    >
                                                        <option value="" className="bg-zinc-950 text-white">Select Sector</option>
                                                        <option value="E-commerce" className="bg-zinc-950 text-white">E-commerce</option>
                                                        <option value="SaaS" className="bg-zinc-950 text-white">SaaS</option>
                                                        <option value="Agency" className="bg-zinc-950 text-white">Agency</option>
                                                        <option value="Other" className="bg-zinc-950 text-white">Other</option>
                                                    </motion.select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Website (Optional)</label>
                                                    <motion.input
                                                        whileFocus={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
                                                        type="url"
                                                        value={formData.website}
                                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                        placeholder="https://"
                                                        className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none transition-all text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Requirements (Required)</label>
                                                <motion.textarea
                                                    whileFocus={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
                                                    rows={4}
                                                    value={formData.requirements}
                                                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                                    placeholder="Tell us about your project goals and scope..."
                                                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none transition-all resize-none text-white"
                                                />
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={formStatus === 'loading'}
                                                onClick={handleInitiate}
                                                className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors ${formStatus === 'loading'
                                                    ? 'bg-zinc-800 text-zinc-500'
                                                    : 'bg-white text-black hover:bg-zinc-200'
                                                    }`}
                                            >
                                                {formStatus === 'loading' ? 'Initiating...' : 'Initiate Launch'}
                                                <ArrowRight size={18} />
                                            </motion.button>

                                            {formStatus === 'error' && (
                                                <p className="text-center text-xs text-red-500 mt-4 font-bold">
                                                    Error initiating project. Please check your details and try again.
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-10">
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectInitiation;
