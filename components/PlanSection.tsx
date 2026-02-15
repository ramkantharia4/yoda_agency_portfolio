import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FeatureCategory {
    category: string;
    items: string[];
}

interface PlanProps {
    name: string;
    price: string;
    description: string;
    categories: FeatureCategory[];
    isFeatured?: boolean;
    cta: string;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, description, categories, isFeatured, cta }) => (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 border ${isFeatured
        ? 'bg-gradient-to-b from-blue-600/10 to-transparent border-blue-500/50 scale-105 shadow-2xl shadow-blue-500/10 z-10'
        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
        }`}>
        {isFeatured && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Transformative
            </span>
        )}
        <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
        <div className="flex items-baseline gap-1 mb-4">
            <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
            <span className="text-slate-400 text-sm">{price !== 'Custom' ? '/quarter' : ''}</span>
        </div>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed h-12">{description}</p>

        <div className="flex-grow">
            <div className="space-y-6 mb-8">
                {categories.map((cat, idx) => (
                    <div key={idx}>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/80 mb-3">{cat.category}</p>
                        <ul className="space-y-2">
                            {cat.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[13px] text-slate-300 leading-tight">
                                    <span className="text-blue-500 mt-1">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <button className={`w-full py-4 rounded-xl font-semibold transition-all ${isFeatured
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
            : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}>
            {cta}
        </button>
    </div>
);

export const PlanSection: React.FC = () => {
    const navigate = useNavigate();

    const plans: PlanProps[] = [
        {
            name: "The Blueprint",
            price: "Custom",
            description: "Best for: Early-stage founders who just need a clean brand launch + an online presence.",
            categories: [
                {
                    category: "Branding",
                    items: ["Primary Logo", "Core Color Palette", "Typography System", "Brand Usage Basics (mini guideline)"]
                },
                {
                    category: "Website",
                    items: ["Single Landing Page", "Essential Integrations (contact form, CTA tracking)", "Basic SEO Setup"]
                },
                {
                    category: "Content",
                    items: ["1-Week Content Calendar (Launch-focused)"]
                }
            ],
            cta: "Get The Blueprint"
        },
        {
            name: "The Authority",
            price: "Custom",
            description: "Best for: Small businesses needing a fully functional website + stronger brand identity.",
            categories: [
                {
                    category: "Branding",
                    items: ["Full Brand Identity", "Main Logo + Variations", "Color System + Typography", "Full Brand Guidelines"]
                },
                {
                    category: "Website",
                    items: ["Multi-Page Website (up to 5 pages)", "Fully Integrated Backend", "SEO Foundation (keyword mapping)"]
                },
                {
                    category: "Content",
                    items: ["1-Month Content Calendar", "3–5 Social Media Templates"]
                },
                {
                    category: "Ad Support",
                    items: ["1-Campaign Setup"]
                }
            ],
            isFeatured: true,
            cta: "Become The Authority"
        },
        {
            name: "The Empire",
            price: "Custom",
            description: "Best for: Businesses ready to scale with a complete digital system.",
            categories: [
                {
                    category: "Branding",
                    items: ["Premium Brand System", "Custom Icon Set"]
                },
                {
                    category: "Website",
                    items: ["Full Website Setup", "Advanced Integrations & CRM", "Full SEO Optimization Report"]
                },
                {
                    category: "Content",
                    items: ["Growth Content Strategy", "5–7 Custom Social Templates"]
                },
                {
                    category: "Ad Support (Guidance)",
                    items: ["Meta Ads Tech Setup", "Pixel & Event Config", "Creative Strategy Session"]
                }
            ],
            cta: "Build Your Empire"
        }
    ];

    return (
        <section id="plans" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    {plans.map((plan, idx) => (
                        <PlanCard key={idx} {...plan} />
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-slate-900/50 to-blue-900/20 border border-slate-700/50 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <h4 className="text-3xl font-bold mb-4 text-white relative z-10">Customize a Plan</h4>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg relative z-10">
                        Don't see exactly what you need? Let's build a bespoke package tailored to your specific goals and requirements.
                    </p>

                    <button
                        onClick={() => navigate('/meeting')}
                        className="relative z-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-lg shadow-white/10"
                    >
                        Schedule a Meet
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
