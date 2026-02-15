import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, ArrowRight, Loader2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAIRecommendation, PLAN_DATA } from '../lib/recommendationRules';
import { motion, AnimatePresence } from 'framer-motion';

export const RecommendationTool: React.FC = () => {
    const navigate = useNavigate();
    const [goal, setGoal] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [recommendedPlan, setRecommendedPlan] = useState<'starter' | 'growth' | 'premium' | null>(null);
    const [confidence, setConfidence] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Real-time analysis with debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            if (goal.trim().length > 3) {
                setIsAnalyzing(true);
                // Simulate processing
                setTimeout(() => {
                    const aiResult = getAIRecommendation(goal);
                    setResult(aiResult.text);
                    setRecommendedPlan(aiResult.plan);
                    setConfidence(aiResult.confidence);
                    setIsAnalyzing(false);
                }, 600);
            } else {
                setResult(null);
                setRecommendedPlan(null);
                setConfidence(0);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [goal]);

    const handleInitializeProject = () => {
        // Pass the recommended plan state if your project initiation page supports it
        // For now just navigation
        navigate('/start');
    };

    return (
        <section className="py-24 px-6 border-t border-white/5 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Input Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                                <Sparkles size={12} />
                                AI Strategy Engine
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Find your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Perfect Protocol.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Describe your current stage, challenges, or goals. Our engine will analyze your inputs in real-time to recommend the optimal engagement model.
                            </p>
                        </motion.div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
                            <div className="relative bg-zinc-900 rounded-2xl p-1">
                                <div className="absolute top-4 left-4 text-zinc-600">
                                    <Terminal size={20} />
                                </div>
                                <textarea
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    placeholder="Type here... (e.g., 'I run a SaaS startup needing a full rebrand and a high-converting marketing site to raise Series A.')"
                                    className="w-full bg-zinc-950/50 rounded-xl p-6 pl-14 text-zinc-200 placeholder:text-zinc-700 outline-none resize-none h-48 font-mono text-sm leading-relaxed border border-white/5 focus:border-white/10 transition-colors"
                                />
                                <div className="absolute bottom-4 right-4">
                                    {isAnalyzing ? (
                                        <div className="flex items-center gap-2 text-xs text-blue-400 font-mono animate-pulse">
                                            <Loader2 size={12} className="animate-spin" />
                                            ANALYZING_INPUT_STREAM...
                                        </div>
                                    ) : goal.length > 0 ? (
                                        <div className="flex items-center gap-2 text-xs text-green-500 font-mono">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            SYSTEM_READY
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-xs text-zinc-700 font-mono">
                                            AWAITING_INPUT
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="h-full"
                                >
                                    <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">

                                        {/* Status Header */}
                                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                    <Zap size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Analysis Complete</div>
                                                    <div className="text-white font-bold">Optimal Path Identified</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Confidence</div>
                                                <div className="text-green-500 font-mono font-bold">{confidence.toFixed(1)}%</div>
                                            </div>
                                        </div>

                                        {/* Recommendation Content */}
                                        <div className="flex-1 space-y-6">
                                            <div className="prose prose-invert prose-sm">
                                                <p className="text-zinc-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                                    {result.split("Want to discuss")[0]}
                                                    {/* Truncate the hardcoded CTA from the helper function since we have a custom button below */}
                                                </p>
                                            </div>

                                            {recommendedPlan && (
                                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-2">Recommended Strategy</div>
                                                    <div className="text-xl font-bold text-white">{PLAN_DATA[recommendedPlan].name}</div>
                                                    <div className="text-sm text-zinc-400 mt-1">{PLAN_DATA[recommendedPlan].description}</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action */}
                                        <div className="mt-8 pt-8 border-t border-white/5">
                                            <button
                                                onClick={handleInitializeProject}
                                                className="w-full group relative px-6 py-4 bg-white text-black rounded-xl font-bold overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                <span className="relative flex items-center justify-center gap-2">
                                                    Initialize {recommendedPlan ? PLAN_DATA[recommendedPlan].name : 'Project'}
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </button>
                                        </div>

                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-zinc-800 rounded-3xl bg-zinc-950/30"
                                >
                                    <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-700 mb-6">
                                        <Terminal size={32} />
                                    </div>
                                    <h3 className="text-zinc-500 font-bold text-xl mb-2">System Standby</h3>
                                    <p className="text-zinc-600 max-w-xs">
                                        Begin typing your requirements to active the neural recommendation engine.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};
