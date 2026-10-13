import React from 'react';
import { CheckCircle2, AlertOctagon, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const isEmergency = toast.type === 'emergency';
        const isSuccess = toast.type === 'success';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto rounded-2xl p-4 shadow-2xl backdrop-blur-xl border transition-all duration-300 animate-in slide-in-from-bottom-5 fade-in ${
              isEmergency
                ? 'bg-[#18090E]/95 border-[#FF3B4D] text-white shadow-[0_10px_30px_rgba(255,59,77,0.4)]'
                : isSuccess
                ? 'bg-[#0A1714]/95 border-emerald-500/50 text-white shadow-[0_10px_30px_rgba(16,185,129,0.3)]'
                : 'bg-[#0F172A]/95 border-white/20 text-white'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                {isEmergency && <AlertOctagon className="w-5 h-5 text-[#FF3B4D] animate-pulse" />}
                {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {!isEmergency && !isSuccess && <Info className="w-5 h-5 text-cyan-400" />}
              </div>

              <div className="flex-1 pr-2">
                <h4 className="text-sm font-bold text-white font-display">
                  {toast.title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => onDismiss(toast.id)}
                className="shrink-0 text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
