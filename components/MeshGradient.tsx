import React from 'react';
import { motion } from 'framer-motion';

const MeshGradient: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#050505]">
            {/* Primary Atmospheric Blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[150px] rounded-full"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-zinc-800/20 blur-[120px] rounded-full"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -60, 60, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Fine Detail: Sparse Starfield/Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default MeshGradient;
