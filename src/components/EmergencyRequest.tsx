import React, { useState } from 'react';
import { 
  AlertOctagon, 
  Send, 
  Activity, 
  Radio, 
  Users, 
  Clock, 
  Hospital, 
  User, 
  Phone, 
  Flame, 
  ShieldAlert,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { EmergencyRequestData, UrgencyLevel } from '../types';

interface EmergencyRequestProps {
  initialBloodGroup?: string;
  onSubmitRequest: (data: EmergencyRequestData) => void;
}

export const EmergencyRequest: React.FC<EmergencyRequestProps> = ({
  initialBloodGroup = 'O+',
  onSubmitRequest,
}) => {
  const [formData, setFormData] = useState<EmergencyRequestData>({
    patientName: '',
    bloodGroup: initialBloodGroup || 'O+',
    requiredUnits: 2,
    hospital: '',
    contactNumber: '',
    urgency: 'Critical',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBroadcast, setActiveBroadcast] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const urgencyLevels: UrgencyLevel[] = ['Normal', 'Urgent', 'Critical'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName.trim()) {
      setErrorMsg('Please enter patient or guardian name.');
      return;
    }
    if (!formData.hospital.trim()) {
      setErrorMsg('Please specify the hospital or clinical unit.');
      return;
    }
    if (!formData.contactNumber.trim()) {
      setErrorMsg('Please provide a direct contact telephone.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setActiveBroadcast(true);
      onSubmitRequest(formData);
    }, 600);
  };

  const handleResetBroadcast = () => {
    setActiveBroadcast(false);
    setFormData({
      patientName: '',
      bloodGroup: 'O+',
      requiredUnits: 2,
      hospital: '',
      contactNumber: '',
      urgency: 'Critical',
      notes: '',
    });
  };

  return (
    <section id="emergency" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambience for Emergency Section */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-radial from-[#6E1020]/25 via-transparent to-transparent opacity-80"
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E1020]/50 border border-[#FF3B4D]/50 text-xs font-bold text-[#FF6B7A] tracking-wider uppercase mb-3 shadow-[0_0_20px_rgba(255,59,77,0.3)]">
          <AlertOctagon className="w-3.5 h-3.5 text-[#FF3B4D] animate-pulse" />
          <span>Priority Emergency Dispatch</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Need Blood Urgently?
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
          Raise an emergency request and reach nearby compatible donors and hospital dispatchers faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Large Emergency Request Card with Pulse Border */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#FF3B4D]/60 via-[#6E1020]/40 to-transparent shadow-[0_0_50px_rgba(215,38,61,0.25)]">
            <div className="glass-emergency rounded-[22px] p-6 sm:p-8 relative overflow-hidden">
              
              {/* Subtle top indicator bar */}
              <div className="flex items-center justify-between pb-5 border-b border-[#FF3B4D]/25 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF3B4D] animate-ping" />
                  <span className="font-display font-bold text-lg text-white">
                    Emergency Broadcast Ticket
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-300 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                  CODE-RED PROTOCOL
                </span>
              </div>

              {errorMsg && (
                <div className="mb-5 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Patient Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="patient-name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Patient Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="patient-name"
                        type="text"
                        required
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div className="space-y-1.5">
                    <label htmlFor="blood-group-req" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Blood Group *
                    </label>
                    <select
                      id="blood-group-req"
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#FF3B4D] cursor-pointer"
                    >
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                        <option key={bg} value={bg} className="bg-[#0D1322] text-white">
                          Group {bg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Required Units */}
                  <div className="space-y-1.5">
                    <label htmlFor="req-units" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Required Units (Pints/Bags) *
                    </label>
                    <input
                      id="req-units"
                      type="number"
                      min={1}
                      max={15}
                      required
                      value={formData.requiredUnits}
                      onChange={(e) => setFormData({ ...formData, requiredUnits: parseInt(e.target.value) || 1 })}
                      className="w-full px-3 py-2.5 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                    />
                  </div>

                  {/* Hospital Location */}
                  <div className="space-y-1.5">
                    <label htmlFor="hospital-name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Hospital / Location *
                    </label>
                    <div className="relative">
                      <Hospital className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="hospital-name"
                        type="text"
                        required
                        value={formData.hospital}
                        onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                        placeholder="e.g. St. Mary ICU Ward 4"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Contact Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Emergency Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        placeholder="e.g. +1 (555) 019-2831"
                        className="w-full pl-9 pr-3 py-2.5 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                      />
                    </div>
                  </div>

                  {/* Urgency Level Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {urgencyLevels.map((lvl) => {
                        const isSelected = formData.urgency === lvl;
                        const isCritical = lvl === 'Critical';
                        return (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setFormData({ ...formData, urgency: lvl })}
                            className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? isCritical
                                  ? 'bg-[#FF3B4D] text-white border-[#FF3B4D] shadow-[0_0_15px_rgba(255,59,77,0.8)] animate-pulse'
                                  : 'bg-amber-600 text-white border-amber-500 shadow-md'
                                : 'bg-black/40 text-slate-300 border-white/10 hover:border-white/20'
                            }`}
                          >
                            {lvl}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div className="space-y-1.5">
                  <label htmlFor="clinical-notes" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Physician Notes (Optional)
                  </label>
                  <input
                    id="clinical-notes"
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Surgery scheduled within 2 hours, acute trauma unit"
                    className="w-full px-3 py-2 bg-[#090D18]/90 border border-white/15 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D]"
                  />
                </div>

                {/* Main Action Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden py-4 px-6 rounded-2xl font-display font-black text-white text-base tracking-wide bg-gradient-to-r from-[#FF3B4D] via-[#D7263D] to-[#991B1B] shadow-[0_0_35px_rgba(255,59,77,0.6)] hover:shadow-[0_0_45px_rgba(255,59,77,0.85)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
                      <span>{isSubmitting ? 'TRANSMITTING EMERGENCY ALERT...' : '🚨 Send Emergency Request'}</span>
                    </div>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        {/* Right Column: Live-Looking Emergency Status Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel-elevated rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Panel Top Heading */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FF3B4D] animate-pulse" />
                <h3 className="font-display font-bold text-white text-base">
                  Emergency Network
                </h3>
              </div>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                RADAR: ONLINE
              </span>
            </div>

            {/* Simulated ECG Heartbeat Wave SVG */}
            <div className="py-3">
              <div className="text-[11px] font-semibold text-slate-400 mb-1 flex items-center justify-between">
                <span>TELEMETRY ECG HARMONIC</span>
                <span className="text-emerald-400 font-mono">78 BPM NORMAL</span>
              </div>
              <div className="h-16 w-full bg-[#070B14] rounded-xl border border-white/10 overflow-hidden relative flex items-center">
                <div className="absolute inset-0 bg-radial from-[#FF3B4D]/10 to-transparent pointer-events-none" />
                <svg viewBox="0 0 400 60" className="w-full h-full text-[#FF3B4D]" fill="none">
                  <path
                    d="M0 30 L50 30 L60 30 L70 10 L80 50 L90 20 L100 35 L110 30 L180 30 L195 8 L205 52 L215 18 L225 36 L235 30 L320 30 L335 12 L345 48 L355 24 L365 30 L400 30"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-ecg drop-shadow-[0_0_6px_#FF3B4D]"
                  />
                </svg>
              </div>
            </div>

            {/* Request Status indicator */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-4">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Request Status
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B4D] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3B4D]" />
                </span>
                <span className="font-display font-black text-sm tracking-wide text-white">
                  {activeBroadcast ? 'BROADCAST ACTIVE · 5 DONORS RESPONDING' : 'SEARCHING FOR DONORS'}
                </span>
              </div>
              {activeBroadcast && (
                <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3 units matched at Metropolitan Trauma Bank</span>
                </div>
              )}
            </div>

            {/* Three key telemetry numbers */}
            <div className="grid grid-cols-3 gap-3 text-center mb-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Nearby Donors</div>
                <div className="text-2xl font-display font-extrabold text-white mt-1 tabular-nums animate-pulse">
                  07
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Compatible</div>
                <div className="text-2xl font-display font-extrabold text-[#FF6B7A] mt-1 tabular-nums">
                  04
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Est. Response</div>
                <div className="text-2xl font-display font-extrabold text-cyan-300 mt-1 tabular-nums">
                  08 <span className="text-xs font-normal">min</span>
                </div>
              </div>
            </div>

            {/* Demo Reset button if broadcasted */}
            {activeBroadcast && (
              <button
                onClick={handleResetBroadcast}
                className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Demo Broadcast</span>
              </button>
            )}

            {/* Prototype transparency statement */}
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 leading-normal">
              Note: This interface represents a rapid prototype demonstration. Telemetry metrics and response timings are simulated for UX review.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
