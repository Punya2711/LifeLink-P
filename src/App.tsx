import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FindBlood } from './components/FindBlood';
import { EmergencyRequest } from './components/EmergencyRequest';
import { DonorRegistration } from './components/DonorRegistration';
import { HowItWorks } from './components/HowItWorks';
import { TrustAndFooter } from './components/TrustAndFooter';
import { DetailsModal } from './components/DetailsModal';
import { Toast } from './components/Toast';
import { 
  BloodAvailabilityItem, 
  EmergencyRequestData, 
  DonorRegistrationData, 
  ToastMessage 
} from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedFacility, setSelectedFacility] = useState<BloodAvailabilityItem | null>(null);
  const [emergencyPrefillGroup, setEmergencyPrefillGroup] = useState('O+');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toast dispatcher
  const addToast = (title: string, message: string, type: 'success' | 'emergency' | 'info' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'find-blood', 'emergency', 'donate', 'how-it-works', 'trust'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers for cross-section actions
  const handleRequestFromCard = (bloodGroup: string, hospital?: string) => {
    setEmergencyPrefillGroup(bloodGroup);
    scrollToSection('emergency');
    if (hospital) {
      addToast(
        'Emergency Form Updated',
        `Pre-selected ${bloodGroup} blood requirement for ${hospital}.`,
        'info'
      );
    }
  };

  const handleEmergencySubmit = (data: EmergencyRequestData) => {
    addToast(
      'Emergency Broadcast Transmitted',
      `High-priority alert for ${data.requiredUnits} unit(s) of ${data.bloodGroup} for ${data.patientName} at ${data.hospital} has been broadcast to 7 nearby donors. (Frontend Prototype)`,
      'emergency'
    );
  };

  const handleDonorRegister = (data: DonorRegistrationData) => {
    addToast(
      'Donor Registered Successfully',
      `Thank you ${data.fullName}! You are registered on the LifeLink priority donor roster for Group ${data.bloodGroup}.`,
      'success'
    );
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-slate-100 flex flex-col selection:bg-[#D7263D]/30 selection:text-white relative">
      
      {/* Sticky Navigation Bar */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero / Emergency Landing */}
        <Hero
          onFindBlood={() => scrollToSection('find-blood')}
          onBecomeDonor={() => scrollToSection('donate')}
        />

        {/* Section 2: Find Blood */}
        <FindBlood
          onSelectDetails={(item) => setSelectedFacility(item)}
          onRequestBlood={(bloodGroup) => handleRequestFromCard(bloodGroup)}
        />

        {/* Section 3: Emergency Request */}
        <EmergencyRequest
          initialBloodGroup={emergencyPrefillGroup}
          onSubmitRequest={handleEmergencySubmit}
        />

        {/* Section 4: Become a Donor */}
        <DonorRegistration
          onRegisterDonor={handleDonorRegister}
        />

        {/* Section 5: How It Works */}
        <HowItWorks />

        {/* Section 6: Trust / Final CTA / Footer */}
        <TrustAndFooter
          onFindBlood={() => scrollToSection('find-blood')}
          onBecomeDonor={() => scrollToSection('donate')}
          onNavigate={scrollToSection}
        />
      </main>

      {/* Facility Details Modal */}
      <DetailsModal
        item={selectedFacility}
        onClose={() => setSelectedFacility(null)}
        onRequestThisGroup={handleRequestFromCard}
      />

      {/* Floating Toast Notification Stack */}
      <Toast toasts={toasts} onDismiss={removeToast} />

    </div>
  );
}
