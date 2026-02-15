import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
    const [animationKey, setAnimationKey] = useState(0);

    return (
        <motion.div
            key={animationKey}
            onHoverStart={() => setAnimationKey(prev => prev + 1)}
            className={`logo-animate font-bold tracking-tighter cursor-pointer ${className}`}
        >
            YODADAYO<span className="text-zinc-500">.</span>
        </motion.div>
    );
};

export default Logo;
