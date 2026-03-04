export interface Industry {
  title: string;
  description: string;
  icon: string;
  packages: string[];
}

export const industries: Industry[] = [
  {
    title: 'Pharmaceutical',
    description:
      'Temperature-sensitive medications, clinical trial materials, and controlled substances delivered with full chain-of-custody compliance.',
    icon: 'Pill',
    packages: ['Medications', 'Clinical samples', 'Controlled substances', 'Lab specimens'],
  },
  {
    title: 'Medical',
    description:
      'Emergency medical supplies, surgical instruments, and diagnostic equipment transported with the urgency your patients depend on.',
    icon: 'Heart',
    packages: ['Surgical instruments', 'Diagnostic equipment', 'Emergency supplies', 'Implants'],
  },
  {
    title: 'Aerospace',
    description:
      'AOG (Aircraft on Ground) parts and MRO components delivered immediately to minimize downtime and get aircraft back in service.',
    icon: 'Plane',
    packages: ['AOG parts', 'MRO components', 'Avionics', 'Engine parts'],
  },
  {
    title: 'Technology',
    description:
      'Sensitive electronics, server components, and prototypes requiring careful handling and climate-controlled transport.',
    icon: 'Cpu',
    packages: ['Server components', 'Prototypes', 'Semiconductors', 'Networking equipment'],
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'High-value merchandise, time-sensitive inventory replenishment, and last-mile delivery for premium products.',
    icon: 'ShoppingBag',
    packages: ['High-value goods', 'Inventory replenishment', 'Premium products', 'Returns'],
  },
  {
    title: 'Government & Defense',
    description:
      'Classified materials, secure documents, and mission-critical supplies transported with the highest security protocols.',
    icon: 'Shield',
    packages: ['Classified materials', 'Secure documents', 'Mission-critical supplies'],
  },
];
