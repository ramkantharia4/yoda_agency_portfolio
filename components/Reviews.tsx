import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
    return (
        <section
            id="reviews"
            className="relative py-32 px-6 bg-black overflow-hidden">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto text-center mb-20">
                <span className="text-zinc-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Client Feedback</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                    What Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
                </h2>
                <p className="text-zinc-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                    Real experiences from real partners. Unfiltered insights from brands we've helped scale.
                </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            className="group relative p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <Quote
                                    size={32}
                                    className="text-zinc-800 group-hover:text-zinc-700 transition-colors"
                                    style={{ color: `${review.color}40` }}
                                />
                            </div>

                            {/* Review Text */}
                            <p className="text-zinc-300 text-base leading-relaxed mb-8 text-justify">
                                "{review.text}"
                            </p>

                            {/* Author Info */}
                            <div className="border-t border-white/5 pt-6">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                                        style={{
                                            background: `linear-gradient(135deg, ${review.color}40, ${review.color}20)`,
                                            color: review.color
                                        }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                                        <p className="text-zinc-500 text-xs">
                                            {review.role} • {review.company}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Gradient Accent */}
                            <div
                                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                    background: `linear-gradient(90deg, ${review.color}, transparent)`
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default Reviews;
