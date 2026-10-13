import React from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Droplet, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { BloodAvailabilityItem } from '../types';

interface DetailsModalProps {
  item: BloodAvailabilityItem | null;
  onClose: () => void;
  onRequestThisGroup: (bloodGroup: string, hospital: string) => void;
}

export const DetailsModal: React.FC<DetailsModalProps> = ({
  item,
  onClose,
  onRequestThisGroup,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="glass-panel-elevated w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(215,38,61,0.25)] relative text-left"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Lockup */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6E1020] to-[#1A0A10] border border-[#FF3B4D]/50 flex items-center justify-center shrink-0 shadow-lg">
            <span className="font-display font-black text-2xl text-[#FF3B4D]">
              {item.bloodGroup}
            </span>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Verified Reserve Details
            </div>
            <h3 id="modal-title" className="font-display font-bold text-xl text-white mt-0.5">
              {item.hospital}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
              <span className="text-emerald-400 font-medium">● Status: {item.status}</span>
              <span aria-hidden="true">·</span>
              <span>{item.distance}</span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="space-y-4 mb-6 text-sm">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-xs text-slate-400">Facility Location</div>
              <div className="text-white font-medium">{item.address}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Droplet className="w-4 h-4 text-[#FF3B4D] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Available Stock</div>
                <div className="text-white font-bold tabular-nums">{item.units} Pints</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-slate-400">Last Verified</div>
                <div className="text-white font-medium">{item.verifiedTime}</div>
              </div>
            </div>
          </div>

          {/* Compatibility Breakdown */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-400 mb-1.5">Compatible Recipients:</div>
            <div className="flex flex-wrap gap-1.5">
              {item.compatibleWith.map((comp) => (
                <span
                  key={comp}
                  className="px-2.5 py-0.5 rounded-md bg-[#0D1527] text-slate-200 text-xs font-mono border border-white/10"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Hotline */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs">{item.contactNumber}</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold uppercase">Direct Line</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onRequestThisGroup(item.bloodGroup, item.hospital);
              onClose();
            }}
            className="flex-1 py-3 px-4 rounded-xl font-display font-bold text-white text-xs red-glow-btn flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request {item.bloodGroup} from Facility</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
