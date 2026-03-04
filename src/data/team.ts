export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Troy Perfect',
    role: 'Founder & CEO',
    bio: 'Founded Just Perfect Transportation in 2013, Troy grew the company from a small NYC operation to the rebranded Modal Global, serving thousands of businesses across the Tri-State region and specializing in high-criticality logistics.',
  },
  {
    name: 'Operations Team',
    role: 'Dispatch & Logistics',
    bio: 'Our 24-hour dispatch team ensures every delivery is coordinated with precision, from route optimization to real-time tracking and communication.',
  },
  {
    name: 'Driver Network',
    role: 'Certified Couriers',
    bio: 'Our professional couriers are trained in hazmat handling, cold-chain protocols, and chain-of-custody procedures to ensure every package receives expert care.',
  },
];

export const companyStats = [
  { label: 'Founded', value: '2013', icon: 'Calendar' },
  { label: 'Deliveries Completed', value: '50000', suffix: '+', icon: 'Package' },
  { label: 'On-Time Rate', value: '99.2', suffix: '%', icon: 'Clock' },
  { label: 'Active Clients', value: '500', suffix: '+', icon: 'Users' },
];

export const companyValues = [
  {
    title: 'Customized',
    description: 'We create tailored solutions that fit our client\'s direct needs, from service level to handling protocols.',
    icon: 'Settings',
  },
  {
    title: 'Professional',
    description: 'Our success is built on conscientious business standards, performance metrics, and quality management systems.',
    icon: 'Award',
  },
  {
    title: 'Reliable',
    description: 'Every package is handled with caution and care — our CPR promise ensures consistent, dependable delivery.',
    icon: 'ShieldCheck',
  },
];
