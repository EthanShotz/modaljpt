export interface Service {
  id: string;
  title: string;
  responseTime: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  industries: string[];
}

export const services: Service[] = [
  {
    id: 'stat',
    title: 'Stat Services',
    responseTime: 'Immediate Response',
    shortDescription: 'Emergency dispatch for the most time-critical deliveries.',
    description:
      'Sometimes time itself is your most precious commodity. If you\'ve no time to spare, the JPT USA Stat Service is what you need. When our Stat Service is booked, we treat the delivery like the true emergency that we know it is. Our AOG clients and those in need of cold-chain transport often opt for this service.',
    icon: 'Zap',
    features: [
      'Immediate driver dispatch',
      'Single-entity dedicated delivery',
      'Real-time GPS tracking',
      'Priority routing algorithms',
      'Signature confirmation',
    ],
    industries: ['Aerospace', 'Pharmaceutical', 'Medical'],
  },
  {
    id: 'on-demand',
    title: 'On-Demand Services',
    responseTime: '1-2 Hour Response',
    shortDescription: 'Swift response for urgent critical package needs.',
    description:
      'The JPT USA On-Demand Service is our second swiftest available option. With this service, you are guaranteed an expedient response and a single entity delivery. As with all our services, you will receive all our care and concern for your critical delivery needs. This service is a favorite for our medical community.',
    icon: 'Clock',
    features: [
      '1-2 hour response window',
      'Dedicated single-entity delivery',
      'Full chain-of-custody tracking',
      'Temperature monitoring available',
      'Proof of delivery documentation',
    ],
    industries: ['Medical', 'Pharmaceutical', 'Technology'],
  },
  {
    id: 'rush',
    title: 'Rush-Hour Services',
    responseTime: '2-4 Hour Response',
    shortDescription: 'Expedited delivery for time-sensitive materials.',
    description:
      'Our Rush-hour drivers are dedicated to getting your package delivered along the swiftest route in a timely manner. This particular service is a favorite for the transportation of hazardous materials, temperature-sensitive tech, security packages, and medication.',
    icon: 'Truck',
    features: [
      '2-4 hour response window',
      'Hazmat-certified drivers available',
      'Temperature-controlled transport',
      'Optimized route planning',
      'Real-time status updates',
    ],
    industries: ['Pharmaceutical', 'Technology', 'Government'],
  },
  {
    id: 'same-day',
    title: 'Same-Day Services',
    responseTime: '4-8 Hour Response',
    shortDescription: 'Flexible same-day delivery within a 24-hour window.',
    description:
      'If you need to get your package from pick-up to drop off within a 24-hour window, the JPT USA Same-Day Service is for you. This offer extends all our standards of service for caution and care but allows for a bit more flexibility within our system. This is a great selection for an important but not vital service window.',
    icon: 'Package',
    features: [
      '4-8 hour response window',
      'Cost-effective option',
      'Full tracking and notifications',
      'Flexible scheduling',
      'Same standard of care',
    ],
    industries: ['Retail', 'Technology', 'Medical'],
  },
  {
    id: 'asset',
    title: 'Asset Services',
    responseTime: 'Custom Schedule',
    shortDescription: 'Specialized handling: cold-chain, repacking, hazmat, and more.',
    description:
      'At JPT USA we pride ourselves on being a customer-driven organization. We cater our services to directly fit and fulfill your needs. This is what Asset Services is all about. If your shipment needs specified care to ensure its safe and secure transport we are able to provide just that. Services include cold-chain management, re-packing, replenishment, and dangerous goods care.',
    icon: 'ShieldCheck',
    features: [
      'Cold-chain management',
      'Re-packing & replenishment',
      'Dangerous goods (DG) care',
      'Custom handling protocols',
      'Regulatory compliance',
    ],
    industries: ['Pharmaceutical', 'Aerospace', 'Government'],
  },
  {
    id: 'dedicated',
    title: 'Dedicated Routes',
    responseTime: 'Scheduled',
    shortDescription: 'Recurring scheduled routes for consistent delivery needs.',
    description:
      'For clients with regular, recurring delivery needs, our Dedicated Routes service provides consistent, reliable transportation on a fixed schedule. Ideal for businesses requiring daily or weekly pickups and deliveries between fixed locations.',
    icon: 'Route',
    features: [
      'Fixed schedule routing',
      'Dedicated driver assignment',
      'Volume-based pricing',
      'Consistent pickup windows',
      'Monthly reporting & analytics',
    ],
    industries: ['Medical', 'Pharmaceutical', 'Retail'],
  },
];
