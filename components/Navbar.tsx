import React, { useState, useEffect } from 'react';
import { ShieldCheck } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-trust-900 text-white p-1.5 rounded-lg">
             <span className="font-bold text-lg leading-none">P</span>
          </div>
          <div>
             <span className="block text-slate-900 font-bold leading-none">Prateek Kundu</span>
             <span className="block text-xs text-slate-500 uppercase tracking-widest mt-0.5">State Medical Field Underwriter</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
           <div className="flex items-center gap-1.5 text-xs font-medium text-white bg-trust-900 px-3 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NPN Verified: 21764476</span>
           </div>
           <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <span>Multi-State Authorized</span>
           </div>
        </div>
      </div>
    </nav>
  );
};