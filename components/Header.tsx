import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';



const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: { id: string, path?: string }) => {
    setIsOpen(false);

    // If the item has a specific path (like /about or /plans)
    if (item.path && item.path !== '/') {
      navigate(item.path);
      return;
    }

    // Currently on Home Page (/)
    if (location.pathname === '/') {
      // If it's the 'hero' (Home) link
      if (item.id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Scroll to specific section
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Not on Home Page -> Navigate to Home with hash
      navigate(`/#${item.id}`);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <Logo className="text-2xl" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
          <motion.button
            layoutId="project-initiation-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/start')}
            className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full"
          >
            Start Project
          </motion.button>
        </nav>

        {/* Mobile Trigger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 h-screen"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavigation(item)}
                className="text-3xl font-bold tracking-tight hover:text-zinc-500 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/start');
              }}
              className="text-3xl font-bold tracking-tight text-white hover:text-zinc-500 transition-colors mt-8"
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
