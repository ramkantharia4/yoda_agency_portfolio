import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Palette, Code, TrendingUp,
    CheckCircle2, ArrowRight, Sparkles
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ServicesPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mainServices = [
        {
            id: 'branding',
            title: 'Brand Identity',
            icon: <Palette className="w-6 h-6" />,
            tagline: 'Visual Sovereignty',
            description: 'Craft a commanding presence through strategic visual architecture that defines market authority.',
            color: 'from-blue-500 to-cyan-500',
            features: [
                { title: 'Logo System', items: ['Primary + Variations', 'Sub-marks & Icon Marks', 'Monochrome Versions', 'Responsive Scaling'] },
                { title: 'Color Architecture', items: ['Primary & Secondary Palette', 'Application Rules', 'Digital & Print Codes', 'Accessibility Standards'] },
                { title: 'Typography System', items: ['Heading & Body Fonts', 'Hierarchy Framework', 'Tone Guidelines', 'Optical Sizing'] },
                { title: 'Brand Guidelines', items: ['Visual Identity Rules', 'Usage Guidelines', 'Photography Style', 'Social Media Standards'] },
                { title: 'Brand Strategy', items: ['Brand Personality', 'Tone of Voice', 'Customer Personas', 'Competitive Positioning'] },
                { title: 'Social Media Kit', items: ['Profile Pictures', 'Highlight Covers', 'Cover Banners', 'Story Templates'] }
            ]
        },
        {
            id: 'web-dev',
            title: 'Web Development',
            icon: <Code className="w-6 h-6" />,
            tagline: 'Digital Engineering',
            description: 'High-performance ecosystems engineered for speed, conversion, and infinite scalability.',
            color: 'from-purple-500 to-pink-500',
            features: [
                { title: 'UI/UX Design', items: ['Wireframing', 'Mobile-First Layout', 'Interactive Elements', 'Component Library'] },
                { title: 'Full-Stack Development', items: ['Static & Dynamic Pages', 'Custom Front-End', 'Backend Integration', 'CMS Setup'] },
                { title: 'Landing Pages', items: ['High-Conversion Layout', 'Funnel Structure', 'Form Automation', 'Analytics Integration'] },
                { title: 'Advanced Backend', items: ['User Authentication', 'Admin Dashboards', 'Role-Based Access', 'APIs & Microservices'] },
                { title: 'SEO & Performance', items: ['Core Web Vitals', 'Schema Markup', 'Load Optimization', 'Image Compression'] },
                { title: 'Maintenance', items: ['Hosting Management', 'Regular Backups', 'Bug Fixes', 'Security Patches'] }
            ]
        },
        {
            id: 'meta-ads',
            title: 'Growth & Meta Ads',
            icon: <TrendingUp className="w-6 h-6" />,
            tagline: 'Targeted Momentum',
            description: 'Data-driven campaign architectures that convert attention into scalable revenue streams.',
            color: 'from-pink-500 to-rose-500',
            features: [
                { title: 'Pixel & Setup', items: ['Pixel Installation', 'Event Tracking', 'Custom Conversions', 'Domain Verification'] },
                { title: 'Campaign Strategy', items: ['Objective Selection', 'Ad Set Structuring', 'Interest Targeting', 'Lookalike Audiences'] },
                { title: 'Creative Direction', items: ['Concept Development', 'Copywriting', 'Creative Guidelines', 'Ad Formatting'] },
                { title: 'Campaign Management', items: ['Daily Optimization', 'Budget Scaling', 'A/B Testing', 'Performance Reports'] },
                { title: 'Funnel Integration', items: ['TOF/MOF/BOF Flows', 'Retention Strategy', 'Landing Page Sync', 'UGC Integration'] },
                { title: 'Analytics', items: ['Weekly/Monthly Reports', 'ROAS Analysis', 'Audience Insights', 'Funnel Analysis'] }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Header />

            <main className="pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400 mb-8">
                            Our Capabilities
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                            Premium <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital solutions engineered for high-growth brands.
                            From identity design to performance marketing, we build for dominance.
                        </p>
                    </motion.div>
                </div>

                {/* Main Services Grid */}
                <div className="max-w-7xl mx-auto px-6 space-y-20">
                    {mainServices.map((service, idx) => (
                        <motion.section
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            id={service.id}
                            className="relative">
                            {/* Service Header */}
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-5xl font-bold tracking-tight mb-2">{service.title}</h2>
                                        <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">{service.tagline}</p>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                                    {service.description}
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.features.map((feature, f_idx) => (
                                    <motion.div
                                        key={f_idx}
                                        whileHover={{ y: -5 }}
                                        className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-white/20 transition-all duration-300 group">
                                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                                            <Sparkles className="w-4 h-4" />
                                            {feature.title}
                                        </h3>
                                        <ul className="space-y-2.5">
                                            {feature.items.map((item, i_idx) => (
                                                <li key={i_idx} className="flex items-start gap-2.5 text-slate-400 text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-zinc-600 mt-0.5 shrink-0" />
                                                    <span className="leading-tight">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Service CTA */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => navigate('/start')}
                                    className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full font-semibold transition-all duration-300 group">
                                    Inquire about {service.title}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Divider */}
                            {idx < mainServices.length - 1 && (
                                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            )}
                        </motion.section>
                    ))}
                </div>

                {/* Final CTA */}
                <section className="max-w-7xl mx-auto px-6 mt-40">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter relative z-10">
                            Ready to scale your <span className="text-blue-500">empire?</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                            <button
                                onClick={() => navigate('/start')}
                                className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                Start Your Project
                            </button>
                            <button
                                onClick={() => navigate('/meeting')}
                                className="px-10 py-5 bg-transparent border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <motion.div
                className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Grain Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default ServicesPage;
