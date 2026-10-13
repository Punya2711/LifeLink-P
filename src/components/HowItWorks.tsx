import React, { useState } from 'react';
import { 
  Search, 
  GitBranch, 
  PhoneCall, 
  HeartPulse, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Search',
      description: 'Search for the required blood group, hospital facility, or geographical area radius.',
      icon: Search,
      highlight: 'Real-time inventory lookup',
    },
    {
      number: '02',
      title: 'Match',
      description: 'The algorithm identifies compatible nearby verified donors and active blood bank reserves.',
      icon: GitBranch,
      highlight: 'ABO/Rh compatibility engine',
    },
    {
      number: '03',
      title: 'Connect',
      description: 'Instantly notify on-call donors or coordinate direct dispatch with the verified blood bank.',
      icon: PhoneCall,
      highlight: 'Direct triage communication',
    },
    {
      number: '04',
      title: 'Save a Life',
      description: 'Get the blood where it is needed without life-threatening delays or bureaucratic friction.',
      icon: HeartPulse,
      highlight: 'Rapid transfusional delivery',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B7A] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#FF3B4D]" />
          <span>The LifeLink Protocol</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          How LifeLink Works
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
          Four automated steps engineered to minimize discovery and dispatch delays in critical emergencies.
        </p>
      </div>

      {/* 4-Step Process Container */}
      <div className="relative">
        
        {/* Animated Glowing Connecting Line (Desktop) */}
        <div 
          aria-hidden="true" 
          className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] z-0 overflow-hidden"
        >
          {/* Base Track Line */}
          <div className="absolute inset-0 bg-white/10" />
          
          {/* Active Glowing Flow Line */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#D7263D] via-[#FF3B4D] to-[#FF6B7A] transition-opacity duration-500"
            style={{
              boxShadow: hoveredStep !== null ? '0 0 16px rgba(255,59,77,0.8)' : '0 0 8px rgba(215,38,61,0.4)',
              opacity: hoveredStep !== null ? 1 : 0.7,
            }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`glass-panel rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${
                  isHovered
                    ? 'border-[#FF3B4D]/60 -translate-y-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(215,38,61,0.25)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Large Numbered Circle with Icon */}
                <div className="relative mb-6">
                  {/* Outer pulse aura on hover */}
                  <div 
                    className={`absolute inset-0 rounded-full bg-[#FF3B4D] blur-md transition-opacity duration-300 ${
                      isHovered ? 'opacity-60 scale-125' : 'opacity-0'
                    }`} 
                  />

                  {/* Circle Body */}
                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-br from-[#FF3B4D] to-[#6E1020] scale-110 shadow-lg shadow-[#FF3B4D]/40'
                        : 'bg-[#10172A] border border-white/15'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-300 ${
                        isHovered
                          ? 'text-white scale-110 rotate-3'
                          : 'text-[#FF6B7A] group-hover:text-white'
                      }`}
                    />
                  </div>

                  {/* Step Number Tag */}
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#080B14] text-white border border-white/20">
                    STEP {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#FF6B7A] transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 flex-grow">
                  {step.description}
                </p>

                {/* Step Highlight Footer */}
                <div className="pt-3 border-t border-white/5 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Statement */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#FF3B4D]" />
          <span>Technology that helps blood reach people faster.</span>
        </div>
      </div>

    </section>
  );
};
