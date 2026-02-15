
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-zinc-950 text-xs font-black">Y</span>
            </div>
            <span className="font-serif">YodaDayo</span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            <Link to="/" className="hover:text-zinc-400 transition-colors">Methodology</Link>
            <a href="#" className="hover:text-zinc-400 transition-colors opacity-50 cursor-not-allowed">Branding</a>
            <a href="#" className="hover:text-zinc-400 transition-colors opacity-50 cursor-not-allowed">Development</a>
            <a href="#" className="hover:text-zinc-400 transition-colors opacity-50 cursor-not-allowed">Ads</a>
          </div>
          
          <button className="px-6 py-2 bg-zinc-100 text-zinc-950 text-xs font-bold uppercase tracking-widest hover:bg-zinc-300 transition-all rounded-sm">
            Contact
          </button>
        </nav>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif mb-6">Building the architectural foundations of the digital era.</h3>
            <p className="text-zinc-500 max-w-sm">YodaDayo is a strategic studio focused on premium digital experiences that scale. No fluff, just results.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>Visual Identity</li>
              <li>UI/UX Architecture</li>
              <li>Full-stack Development</li>
              <li>Precision Marketing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Twitter (X)</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between text-xs text-zinc-600">
          <p>© 2024 YodaDayo Studios. All rights reserved.</p>
          <p>Architected for performance.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
