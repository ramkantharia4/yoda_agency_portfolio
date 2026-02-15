import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const springConfig = { damping: 20, stiffness: 200 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group ${className}`}
        >
            {/* Dynamic Glow Border */}
            <motion.div
                className="absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2) 0%, transparent 80%)`,
                }}
                onUpdate={(latest) => {
                    // We'll update the CSS variables for the gradient center
                    if (ref.current) {
                        ref.current.style.setProperty('--mouse-x', `${mouseX.get() + (ref.current.offsetWidth / 2)}px`);
                        ref.current.style.setProperty('--mouse-y', `${mouseY.get() + (ref.current.offsetHeight / 2)}px`);
                    }
                }}
            />
            <div className="relative z-10 w-full h-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 rounded-[inherit] overflow-hidden">
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
