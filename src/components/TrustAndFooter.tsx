import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  AlertTriangle, 
  Droplet, 
  HeartHandshake, 
  ArrowRight,
  Heart,
  Linkedin,
  Instagram,
  Github
} from 'lucide-react';

interface TrustAndFooterProps {
  onFindBlood: () => void;
  onBecomeDonor: () => void;
  onNavigate: (sectionId: string) => void;
}

export const TrustAndFooter: React.FC<TrustAndFooterProps> = ({
  onFindBlood,
  onBecomeDonor,
  onNavigate,
}) => {
  return (
    <section id="trust" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Ambient background glow for final call to action */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#6E1020]/25 via-[#D7263D]/10 to-transparent blur-3xl rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Cards Section: "Built for faster emergency coordination." */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B7A] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF3B4D]" />
            <span>High-Assurance Infrastructure</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-12">
            Built for faster emergency coordination.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="glass-panel-elevated rounded-3xl p-7 border border-white/10 hover:border-[#FF3B4D]/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                VERIFIED DONORS
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Designed to support safer donor coordination with rigorous phone identity confirmation and health safety eligibility screening.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-panel-elevated rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                REAL-TIME SEARCH
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Quickly locate nearby blood availability across private and public trauma banks with instant distance calculations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-panel-elevated rounded-3xl p-7 border border-white/10 hover:border-[#FF3B4D]/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#6E1020]/50 border border-[#FF3B4D]/30 flex items-center justify-center text-[#FF6B7A] mb-5 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-6 h-6 text-[#FF3B4D]" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                EMERGENCY FIRST
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Designed specifically around urgent blood requirements, cutting down notification latency to on-call lifesavers.
              </p>
            </div>
          </div>
        </div>

        {/* Final Conversion Block */}
        <div className="glass-emergency rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto mb-24 border border-[#FF3B4D]/30 shadow-[0_0_60px_rgba(215,38,61,0.2)] relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/40 border border-[#FF3B4D]/40 text-[#FF3B4D] mx-auto">
              <Droplet className="w-6 h-6 fill-[#FF3B4D]/30" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Your Blood Could Be Someone’s Tomorrow.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join the network. Donate when you can. Respond when someone needs you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onBecomeDonor}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-white text-sm red-glow-btn transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Become a Donor</span>
              </button>

              <button
                onClick={onFindBlood}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-slate-200 text-sm glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Find Blood</span>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Footer */}
        <footer className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Left: Brand & Description */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF3B4D] to-[#6E1020] p-0.5 shadow-md shadow-[#D7263D]/40">
                  <div className="w-full h-full bg-[#0E1322] rounded-[10px] flex items-center justify-center">
                    <Droplet className="w-4 h-4 text-[#FF3B4D] fill-[#FF3B4D]/30" />
                  </div>
                </div>
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  LIFE<span className="text-[#FF3B4D]">LINK</span>
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Connecting blood donors, hospitals, and people in need through verified real-time emergency healthcare networks.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#trust"
                  aria-label="LinkedIn profile"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#trust"
                  aria-label="Instagram profile"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#trust"
                  aria-label="GitHub repository"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Navigation Mirror */}
            <div className="md:col-span-6 flex flex-col md:items-end space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Quick Navigation
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 md:justify-end">
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => onNavigate('find-blood')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Find Blood
                </button>
                <button
                  onClick={() => onNavigate('emergency')}
                  className="hover:text-[#FF3B4D] transition-colors cursor-pointer"
                >
                  Emergency
                </button>
                <button
                  onClick={() => onNavigate('donate')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Donate
                </button>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Mission Notice */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; 2026 LifeLink. Frontend prototype.
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#FF3B4D] fill-[#FF3B4D]" />
              <span>for a life-saving purpose.</span>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};
