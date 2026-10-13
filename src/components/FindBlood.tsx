import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Compass, 
  Droplet, 
  Building2, 
  Phone, 
  Clock, 
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Flame,
  Info
} from 'lucide-react';
import { BloodAvailabilityItem, BloodGroup } from '../types';
import { INITIAL_BLOOD_AVAILABILITY, BLOOD_GROUPS } from '../data/mockData';

interface FindBloodProps {
  onSelectDetails: (item: BloodAvailabilityItem) => void;
  onRequestBlood: (bloodGroup: string) => void;
}

export const FindBlood: React.FC<FindBloodProps> = ({ onSelectDetails, onRequestBlood }) => {
  const [selectedGroup, setSelectedGroup] = useState<BloodGroup>('All');
  const [searchLocation, setSearchLocation] = useState('Central District');
  const [selectedRadius, setSelectedRadius] = useState<number>(25);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredItems, setFilteredItems] = useState<BloodAvailabilityItem[]>(INITIAL_BLOOD_AVAILABILITY);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    setTimeout(() => {
      let results = INITIAL_BLOOD_AVAILABILITY;

      if (selectedGroup !== 'All') {
        results = results.filter((item) => item.bloodGroup === selectedGroup);
      }

      results = results.filter((item) => item.distanceKm <= selectedRadius);

      if (searchLocation.trim()) {
        const query = searchLocation.toLowerCase().trim();
        results = results.filter(
          (item) =>
            item.hospital.toLowerCase().includes(query) ||
            item.address.toLowerCase().includes(query) ||
            item.bloodGroup.toLowerCase().includes(query)
        );
      }

      setFilteredItems(results);
      setIsSearching(false);
    }, 300);
  };

  const getStatusBadge = (status: BloodAvailabilityItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        );
      case 'Limited':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Urgent':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF3B4D]">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>Urgent Shortage</span>
          </span>
        );
    }
  };

  return (
    <section id="find-blood" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF3B4D] mb-3">
          <Droplet className="w-3.5 h-3.5 fill-[#FF3B4D]/30" />
          <span>Real-Time Inventory</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Find the Blood You Need
        </h2>
        <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
          Search nearby blood availability and connect with potential donors and hospital reserves faster.
        </p>
      </div>

      {/* Large Glassmorphism Search Panel */}
      <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 mb-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            
            {/* Blood Group Selector */}
            <div className="md:col-span-4 space-y-2">
              <label htmlFor="blood-group-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Blood Group
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Droplet className="w-4 h-4 text-[#FF3B4D]" />
                </div>
                <select
                  id="blood-group-select"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value as BloodGroup)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F1D] border border-white/15 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF3B4D] focus:border-transparent transition-all cursor-pointer"
                >
                  {BLOOD_GROUPS.map((grp) => (
                    <option key={grp} value={grp} className="bg-[#0D1322] text-white">
                      {grp === 'All' ? 'All Blood Groups' : `Group ${grp}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Input */}
            <div className="md:col-span-5 space-y-2">
              <label htmlFor="location-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Location / Hospital
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <input
                  id="location-input"
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Enter city, district or hospital name"
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F1D] border border-white/15 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF3B4D] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Radius Selector */}
            <div className="md:col-span-3 space-y-2">
              <label htmlFor="radius-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Search Radius
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Compass className="w-4 h-4 text-amber-400" />
                </div>
                <select
                  id="radius-select"
                  value={selectedRadius}
                  onChange={(e) => setSelectedRadius(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0F1D] border border-white/15 rounded-xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF3B4D] focus:border-transparent transition-all cursor-pointer"
                >
                  <option value={5} className="bg-[#0D1322] text-white">Within 5 km</option>
                  <option value={10} className="bg-[#0D1322] text-white">Within 10 km</option>
                  <option value={25} className="bg-[#0D1322] text-white">Within 25 km</option>
                  <option value={50} className="bg-[#0D1322] text-white">Within 50 km</option>
                </select>
              </div>
            </div>

          </div>

          {/* Quick Group Filter Badges (interactive segmented buttons) */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Quick Filter:</span>
              {BLOOD_GROUPS.map((grp) => (
                <button
                  type="button"
                  key={grp}
                  onClick={() => setSelectedGroup(grp)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    selectedGroup === grp
                      ? 'bg-[#FF3B4D] text-white shadow-[0_0_12px_rgba(255,59,77,0.5)]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {grp}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white red-glow-btn transition-all duration-200 cursor-pointer disabled:opacity-50"
            >
              <Search className="w-4 h-4" />
              <span>{isSearching ? 'Searching Network...' : 'Search Availability'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="font-semibold text-white">{filteredItems.length}</span>
          <span>facilities found matching criteria</span>
          <span aria-hidden="true">·</span>
          <span className="text-xs text-slate-400">Radius: {selectedRadius} km</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>Demo database simulated for triage readiness</span>
        </div>
      </div>

      {/* Availability Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center border border-white/10">
          <Droplet className="w-12 h-12 text-[#FF3B4D]/50 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No Direct Matches Found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-1 mb-5">
            No blood banks matched this specific group and radius query. You can raise an immediate emergency broadcast.
          </p>
          <button
            onClick={() => onRequestBlood(selectedGroup !== 'All' ? selectedGroup : 'O-')}
            className="px-5 py-2.5 rounded-xl font-semibold text-white red-glow-btn cursor-pointer inline-flex items-center gap-2"
          >
            <span>Raise Emergency Request</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel group rounded-2xl p-5 border border-white/10 hover:border-[#FF3B4D]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(215,38,61,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Blood Group Pill & Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6E1020] to-[#1A0A10] border border-[#FF3B4D]/40 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <span className="font-display font-black text-xl text-[#FF3B4D] drop-shadow-[0_0_8px_rgba(255,59,77,0.5)]">
                        {item.bloodGroup}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Available Stock</div>
                      <div className="text-lg font-bold text-white tabular-nums">
                        {item.units} <span className="text-xs font-normal text-slate-300">units</span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                {/* Hospital Information */}
                <div className="space-y-2 mb-4">
                  <h4 className="font-display font-bold text-base text-white group-hover:text-red-300 transition-colors flex items-start gap-1.5">
                    <Building2 className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                    <span>{item.hospital}</span>
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 pl-5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{item.address}</span>
                  </div>
                </div>

                {/* Distance & Updated Time */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5 mb-4">
                  <span className="font-medium text-slate-300">{item.distance}</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>Verified {item.verifiedTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onSelectDetails(item)}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
                <button
                  onClick={() => onRequestBlood(item.bloodGroup)}
                  className="py-2 px-3 rounded-xl bg-[#D7263D]/20 hover:bg-[#D7263D]/40 border border-[#D7263D]/40 text-xs font-semibold text-[#FF6B7A] transition-colors cursor-pointer flex items-center gap-1"
                  title="Request this group"
                >
                  <Droplet className="w-3.5 h-3.5 fill-[#FF6B7A]" />
                  <span>Request</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
