import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';
import { resetConsent } from '../lib/consent';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string, path?: string) => {
    // If specific path (and not just root '/')
    if (path && path !== '/') {
      navigate(path);
      window.scrollTo(0, 0);
      return;
    }

    // If on home page
    if (location.pathname === '/') {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 100);
    }
  };

  return (
    <footer className="bg-black pt-20 pb-10 px-6 lg:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Logo className="text-3xl mb-6" />
            <p className="text-zinc-500 max-sm leading-relaxed mb-8">
              A premium agency for high-performance development and elite identities. We build for the future.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/yodadayo34?igsh=MTZxZTByM3R5dXN0cA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all"><Instagram size={18} /></a>
              <a href="mailto:yodadayorp@gmail.com" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-6">Explore</h4>
            <ul className="space-y-3 text-sm font-medium">
              {/* Use a subset for footer or all NAV_ITEMS depending on design. Keeping it semantic with NAV_ITEMS but filtering if needed. */}
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNavigation(item.id, item.path)} className="text-zinc-400 hover:text-white transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="text-zinc-400">yodadayorp@gmail.com</li>
              <li className="text-zinc-400">+91 9004043732 • +91 9920980109</li>
              <li><button onClick={() => handleNavigation('contact')} className="text-zinc-400 hover:text-white transition-colors">Schedule a Call</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} YodaDayo Creative Agency. All Rights Reserved.
          </p>
          <button
            onClick={resetConsent}
            className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            Cookie Preferences
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
