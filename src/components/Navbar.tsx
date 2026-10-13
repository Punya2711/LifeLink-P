import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, HeartHandshake, Search, AlertCircle } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'find-blood', label: 'Find Blood' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'donate', label: 'Donate' },
    { id: 'how-it-works', label: 'How It Works' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark with subtle glow */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3B4D] to-[#6E1020] p-0.5 shadow-md shadow-[#D7263D]/30 group-hover:shadow-[#FF3B4D]/60 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-[#FF3B4D] blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-full h-full bg-[#0E1322] rounded-[10px] flex items-center justify-center">
                <Droplet className="w-5 h-5 text-[#FF3B4D] fill-[#FF3B4D]/30 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider text-white">
                LIFE<span className="text-[#FF3B4D]">LINK</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean unboxed typography) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors hover:text-white whitespace-nowrap ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF3B4D] to-[#D7263D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('find-blood')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 text-slate-300" />
              <span>Find Blood</span>
            </button>
            <button
              onClick={() => handleLinkClick('donate')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white red-glow-btn rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Become a Donor</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('emergency')}
              className="p-2 text-[#FF3B4D] bg-[#6E1020]/30 rounded-lg border border-[#FF3B4D]/30"
              title="Emergency"
            >
              <AlertCircle className="w-5 h-5 animate-pulse" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B14]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#FF3B4D]/15 text-[#FF3B4D] font-semibold'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('find-blood')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-white/5 border border-white/10 rounded-xl"
            >
              <Search className="w-4 h-4" />
              <span>Find Blood</span>
            </button>
            <button
              onClick={() => handleLinkClick('donate')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white red-glow-btn rounded-xl"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Become a Donor</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
