import { BloodAvailabilityItem } from '../types';

export const INITIAL_BLOOD_AVAILABILITY: BloodAvailabilityItem[] = [
  {
    id: 'b-1',
    bloodGroup: 'O+',
    status: 'Available',
    hospital: 'Metropolitan Central Trauma Center',
    distance: '2.4 km away',
    distanceKm: 2.4,
    units: 12,
    address: '450 Mercy Parkway, Suite 100',
    contactNumber: '+1 (555) 234-8901',
    verifiedTime: '8 mins ago',
    compatibleWith: ['O+', 'A+', 'B+', 'AB+']
  },
  {
    id: 'b-2',
    bloodGroup: 'A+',
    status: 'Available',
    hospital: 'LifeCare Regional Blood Institute',
    distance: '4.1 km away',
    distanceKm: 4.1,
    units: 8,
    address: '880 Health Science Blvd',
    contactNumber: '+1 (555) 872-3312',
    verifiedTime: '15 mins ago',
    compatibleWith: ['A+', 'AB+']
  },
  {
    id: 'b-3',
    bloodGroup: 'B-',
    status: 'Urgent',
    hospital: 'St. Jude Emergency Medical Center',
    distance: '6.2 km away',
    distanceKm: 6.2,
    units: 2,
    address: '120 Hope Avenue, West Wing',
    contactNumber: '+1 (555) 901-4478',
    verifiedTime: '3 mins ago',
    compatibleWith: ['B-', 'B+', 'AB-', 'AB+']
  },
  {
    id: 'b-4',
    bloodGroup: 'O-',
    status: 'Urgent',
    hospital: 'University Red Cross Center',
    distance: '3.8 km away',
    distanceKm: 3.8,
    units: 3,
    address: '310 Academic Hospital Drive',
    contactNumber: '+1 (555) 432-8890',
    verifiedTime: '12 mins ago',
    compatibleWith: ['All Blood Groups (Universal Donor)']
  },
  {
    id: 'b-5',
    bloodGroup: 'AB+',
    status: 'Available',
    hospital: 'Memorial General Hospital',
    distance: '7.5 km away',
    distanceKm: 7.5,
    units: 15,
    address: '742 Victoria Lane, Building C',
    contactNumber: '+1 (555) 678-1122',
    verifiedTime: '24 mins ago',
    compatibleWith: ['AB+ Only (Universal Recipient)']
  },
  {
    id: 'b-6',
    bloodGroup: 'B+',
    status: 'Limited',
    hospital: 'Apex Community Blood Bank',
    distance: '5.0 km away',
    distanceKm: 5.0,
    units: 5,
    address: '190 North Ridge Road',
    contactNumber: '+1 (555) 321-7788',
    verifiedTime: '18 mins ago',
    compatibleWith: ['B+', 'AB+']
  },
  {
    id: 'b-7',
    bloodGroup: 'A-',
    status: 'Limited',
    hospital: 'St. Vincent Cardiovascular Institute',
    distance: '8.9 km away',
    distanceKm: 8.9,
    units: 4,
    address: '556 Rivercrest Drive',
    contactNumber: '+1 (555) 789-6655',
    verifiedTime: '30 mins ago',
    compatibleWith: ['A-', 'A+', 'AB-', 'AB+']
  },
  {
    id: 'b-8',
    bloodGroup: 'AB-',
    status: 'Urgent',
    hospital: 'Children’s Mercy Urgent Pavilion',
    distance: '9.4 km away',
    distanceKm: 9.4,
    units: 1,
    address: '900 Pediatric Parkway',
    contactNumber: '+1 (555) 456-9900',
    verifiedTime: '5 mins ago',
    compatibleWith: ['AB-', 'AB+']
  }
];

export const BLOOD_GROUPS = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;
