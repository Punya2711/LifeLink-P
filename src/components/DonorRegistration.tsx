import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Heart, 
  BellRing, 
  Users2, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Phone, 
  MapPin, 
  User, 
  Droplet,
  CheckCircle2
} from 'lucide-react';
import { DonorRegistrationData } from '../types';

interface DonorRegistrationProps {
  onRegisterDonor: (data: DonorRegistrationData) => void;
}

export const DonorRegistration: React.FC<DonorRegistrationProps> = ({ onRegisterDonor }) => {
  const [formData, setFormData] = useState<DonorRegistrationData>({
    fullName: '',
    age: '',
    bloodGroup: 'O+',
    location: '',
    phoneNumber: '',
    lastDonationDate: '',
    eligibleConfirmed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMsg('Please enter your contact phone number.');
      return;
    }
    if (!formData.eligibleConfirmed) {
      setErrorMsg('Please confirm blood donation eligibility guidelines.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
      onRegisterDonor(formData);
    }, 500);
  };

  return (
    <section id="donate" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF6B7A] mb-3">
          <Heart className="w-3.5 h-3.5 text-[#FF3B4D] fill-[#FF3B4D]" />
          <span>Donor Community</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Be Someone’s Reason to Live.
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
          One donation can help save multiple lives. Join our verified registry of on-call emergency lifesavers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        
        {/* Left Column: Visual of Glowing Blood Drop & 3 Benefit Cards */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Futuristic Visual Drop Graphic Card */}
          <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden text-center group">
            <div 
              aria-hidden="true" 
              className="absolute -top-20 -right-20 w-52 h-52 bg-[#FF3B4D]/20 rounded-full blur-2xl group-hover:bg-[#FF3B4D]/35 transition-all" 
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#6E1020] via-[#D7263D] to-[#FF6B7A] p-1 shadow-[0_0_40px_rgba(215,38,61,0.5)] mb-4 animate-float">
                <div className="w-full h-full rounded-full bg-[#0E1322] flex items-center justify-center relative">
                  <Droplet className="w-12 h-12 text-[#FF3B4D] fill-[#FF3B4D]/40" />
                  <Heart className="w-5 h-5 text-white absolute bottom-4 fill-white" />
                </div>
              </div>

              <h3 className="font-display font-extrabold text-xl text-white">
                Every Donor is a Guardian
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-xs leading-relaxed">
                When critical trauma cases occur, seconds count. LifeLink routes real-time SMS alerts to donors within proximity.
              </p>
            </div>
          </div>

          {/* Three Benefit Cards */}
          <div className="grid grid-cols-1 gap-3.5">
            
            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-[#FF3B4D]/30 transition-colors">
              <div className="p-2.5 rounded-xl bg-[#6E1020]/40 text-[#FF6B7A] shrink-0 border border-[#FF3B4D]/20">
                <Heart className="w-5 h-5 fill-[#FF6B7A]/40" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  SAVE LIVES
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Your single whole blood or platelet donation can separate into red cells, plasma, and platelets to help multiple patients.
                </p>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-[#FF3B4D]/30 transition-colors">
              <div className="p-2.5 rounded-xl bg-cyan-950/40 text-cyan-400 shrink-0 border border-cyan-500/20">
                <BellRing className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  GET NOTIFIED
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Receive discreet, instant emergency alerts only when a verified hospital in your area requires your specific blood match.
                </p>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-[#FF3B4D]/30 transition-colors">
              <div className="p-2.5 rounded-xl bg-purple-950/40 text-purple-400 shrink-0 border border-purple-500/20">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  BUILD COMMUNITY
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Become an integral part of a modern, technology-driven mutual safety net protecting families in your area.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Registration Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-9 border border-white/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Donor Registration
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Join the emergency registry in less than 60 seconds.
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>

            {errorMsg && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            {isRegistered ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Welcome to LifeLink, {formData.fullName}!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  You are now registered as a demo on-call donor for group{' '}
                  <span className="font-bold text-[#FF6B7A]">{formData.bloodGroup}</span>. 
                  Thank you for stepping up to make a difference.
                </p>
                <button
                  onClick={() => setIsRegistered(false)}
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 cursor-pointer"
                >
                  Register Another Donor
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-fullname" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="donor-fullname"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-age" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Age (18-65) *
                    </label>
                    <input
                      id="donor-age"
                      type="number"
                      min={18}
                      max={65}
                      required
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 28"
                      className="w-full px-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Blood Group */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-bloodgroup" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Blood Group *
                    </label>
                    <div className="relative">
                      <Droplet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF3B4D]" />
                      <select
                        id="donor-bloodgroup"
                        value={formData.bloodGroup}
                        onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#FF3B4D] cursor-pointer"
                      >
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                          <option key={bg} value={bg} className="bg-[#0D1322] text-white">
                            Group {bg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-location" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      City / Neighborhood *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="donor-location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Eastside Metropolitan"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Phone Number (For Alerts) *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="donor-phone"
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="e.g. +1 (555) 782-9014"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                  {/* Last Donation Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="donor-lastdate" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Last Donation Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="donor-lastdate"
                        type="date"
                        value={formData.lastDonationDate}
                        onChange={(e) => setFormData({ ...formData, lastDonationDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18] border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                </div>

                {/* Eligibility Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.eligibleConfirmed}
                      onChange={(e) => setFormData({ ...formData, eligibleConfirmed: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-white/20 text-[#FF3B4D] focus:ring-[#FF3B4D] bg-[#090D18] cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-normal">
                      I confirm that I am eligible to donate blood (weigh &ge; 50kg, in good general health, and have not donated in the past 90 days).
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-display font-bold text-white text-sm red-glow-btn transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Registering...' : 'Register as Donor'}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Animated Statistic Strip (Sample / Demo Data clearly communicated) */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Sparkles className="w-4 h-4 text-[#FF3B4D]" />
            <span>Community Impact Metric Counter</span>
          </div>
          <span className="text-[11px] text-slate-500 italic">
            * Sample metrics representing network capacity benchmarks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
              10,000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              Verified Donors Registered
            </div>
            <div className="text-[11px] text-slate-500">
              Across 48 regional trauma nodes
            </div>
          </div>

          <div className="space-y-1 md:border-x md:border-white/10">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#FF6B7A] tabular-nums tracking-tight">
              25,000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              Lives Supported
            </div>
            <div className="text-[11px] text-slate-500">
              Emergency transfusions facilitated
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-cyan-300 tabular-nums tracking-tight">
              500+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">
              Emergency Requests Handled
            </div>
            <div className="text-[11px] text-slate-500">
              Average 8.4 min first-response time
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
