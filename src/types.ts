export type BloodGroup = 'All' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type AvailabilityStatus = 'Available' | 'Limited' | 'Urgent';

export type UrgencyLevel = 'Normal' | 'Urgent' | 'Critical';

export interface BloodAvailabilityItem {
  id: string;
  bloodGroup: string;
  status: AvailabilityStatus;
  hospital: string;
  distance: string;
  distanceKm: number;
  units: number;
  address: string;
  contactNumber: string;
  verifiedTime: string;
  compatibleWith: string[];
}

export interface EmergencyRequestData {
  patientName: string;
  bloodGroup: string;
  requiredUnits: number;
  hospital: string;
  contactNumber: string;
  urgency: UrgencyLevel;
  notes?: string;
}

export interface DonorRegistrationData {
  fullName: string;
  age: string;
  bloodGroup: string;
  location: string;
  phoneNumber: string;
  lastDonationDate: string;
  eligibleConfirmed: boolean;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'emergency' | 'info';
}
