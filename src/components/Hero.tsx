import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Activity, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Radio
} from 'lucide-react';

interface HeroProps {
  onFindBlood: () => void;
  onBecomeDonor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindBlood, onBecomeDonor }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden medical-grid-bg">
      {/* Background Ambient Glows and Gradient Blobs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#D7263D]/25 via-[#6E1020]/15 to-transparent rounded-full blur-3xl opacity-60"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-[650px] h-[650px] bg-gradient-to-bl from-[#FF3B4D]/20 via-[#991B1B]/10 to-transparent rounded-full blur-[140px] opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-gradient-to-t from-[#6E1020]/20 to-transparent rounded-full blur-3xl opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#180E1C] border border-[#FF3B4D]/30 shadow-[0_0_15px_rgba(255,59,77,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B4D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3B4D]" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase font-sans">
                EMERGENCY BLOOD NETWORK
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Every Second Matters.{' '}
              <span className="bg-gradient-to-r from-[#FF3B4D] via-[#FF6B7A] to-[#F43F5E] bg-clip-text text-transparent">
                Every Drop Saves a Life.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Find compatible blood donors and nearby blood bank availability when you need it most. 
              Built for rapid, verified medical emergency coordination.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onFindBlood}
                className="group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white red-glow-btn transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              >
                <span>Find Blood Now</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBecomeDonor}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 glass-panel hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-[#FF3B4D]" />
                <span>Become a Donor</span>
              </button>
            </div>

            {/* Trust Indicator Line (Zero-Pill discipline: clean unboxed metadata with separators) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">Verified Donors</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-[#FF3B4D] animate-pulse" />
                <span className="text-slate-300">Real-Time Availability</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">24/7 Emergency Support</span>
              </div>
            </div>

            {/* Prototype Transparency Notice */}
            <p className="text-[11px] text-slate-500 italic pt-1">
              * Live interactive frontend demonstration. Compatible donor and inventory data are simulated for rapid response testing.
            </p>
          </div>

          {/* Right Column: Futuristic 3D-Style Medical Blood Orb & Floating Emergency Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Outer Pulsing Radial Rings */}
              <div className="absolute inset-0 rounded-full border border-[#FF3B4D]/20 animate-pulse-ring pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-[#FF3B4D]/15 pointer-events-none" />
              <div className="absolute inset-16 rounded-full border border-white/5 pointer-events-none" />

              {/* Ambient Red Core Glow */}
              <div className="absolute w-64 h-64 bg-gradient-to-tr from-[#D7263D] via-[#FF3B4D] to-[#6E1020] rounded-full blur-2xl opacity-40 animate-heartbeat" />

              {/* Central Glowing 3D Glass Blood Drop Orb */}
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-b from-[#FF6B7A]/40 via-[#D7263D]/20 to-transparent shadow-[0_0_60px_rgba(215,38,61,0.5)]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A0A12] via-[#0D1222] to-[#200A13] flex flex-col items-center justify-center relative overflow-hidden border border-[#FF3B4D]/30 backdrop-blur-xl">
                  
                  {/* Subtle Blood Flow Gradient Inside */}
                  <div className="absolute inset-0 bg-radial from-[#FF3B4D]/25 via-transparent to-transparent opacity-80" />

                  {/* Animated Heartbeat ECG Line across orb */}
                  <div className="absolute w-full top-1/2 -translate-y-1/2 opacity-75 pointer-events-none">
                    <svg viewBox="0 0 300 80" className="w-full h-16 text-[#FF3B4D]" fill="none">
                      <path
                        d="M0 40 L70 40 L85 15 L100 65 L115 30 L125 45 L135 40 L200 40 L215 20 L228 60 L240 38 L300 40"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-ecg drop-shadow-[0_0_8px_#FF3B4D]"
                      />
                    </svg>
                  </div>

                  {/* Central Iconic Crystal Droplet */}
                  <div className="relative z-10 animate-heartbeat flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                      <svg width="72" height="96" viewBox="0 0 72 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_25px_rgba(255,59,77,0.8)]">
                        <path 
                          d="M36 2C36 2 4 48 4 64C4 81.673 18.327 94 36 94C53.673 94 68 81.673 68 64C68 48 36 2 36 2Z" 
                          fill="url(#dropletGradient)" 
                        />
                        <path 
                          d="M36 6C36 6 10 49 10 64C10 78.359 21.641 88 36 88C50.359 88 62 78.359 62 64C62 49 36 6 36 6Z" 
                          stroke="rgba(255,255,255,0.4)" 
                          strokeWidth="1.5" 
                        />
                        <ellipse cx="26" cy="62" rx="6" ry="12" transform="rotate(-30 26 62)" fill="white" fillOpacity="0.4" />
                        <defs>
                          <linearGradient id="dropletGradient" x1="36" y1="2" x2="36" y2="94" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6B7A" />
                            <stop offset="0.4" stopColor="#FF3B4D" />
                            <stop offset="0.8" stopColor="#D7263D" />
                            <stop offset="1" stopColor="#6E1020" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="mt-2 text-[11px] font-mono tracking-widest uppercase text-slate-300">
                      LIVE RADAR
                    </span>
                  </div>

                  {/* Orbiting Blood Type Indicators */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-red-400 border border-red-500/30">
                    O-
                  </div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-white/20">
                    AB+
                  </div>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-red-400 border border-red-500/30">
                    A+
                  </div>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 text-slate-300 border border-white/20">
                    B+
                  </div>
                </div>
              </div>

              {/* Floating Emergency Card (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 glass-panel-elevated p-3.5 rounded-2xl max-w-[210px] border border-[#FF3B4D]/30 shadow-2xl animate-float">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF3B4D] flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#FF3B4D] animate-ping inline-block" />
                    Emergency Request
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">Just now</span>
                </div>
                <div className="font-display font-bold text-sm text-white">
                  O+ Blood Required
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <Users className="w-3 h-3" />
                  <span>3 Donors Nearby</span>
                </div>
              </div>

              {/* Floating Status Card (Bottom Right) */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-8 z-20 glass-panel-elevated p-3.5 rounded-2xl max-w-[200px] border border-white/10 shadow-2xl"
                style={{ animation: 'float-gentle 4s ease-in-out infinite 2s' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Donor Verified</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  LifeCare Metro Blood Hub
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  12 Units In Reserve
                </div>
              </div>

              {/* Floating Secondary Beacon (Bottom Left) */}
              <div className="hidden sm:flex absolute bottom-2 -left-8 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E1528]/80 border border-cyan-500/30 text-[11px] text-cyan-300 backdrop-blur-md">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>ETA: 08 min dispatch</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
