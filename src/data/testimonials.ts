export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Medical Director',
    company: 'Metro Health Systems',
    quote:
      'JPT USA has been instrumental in ensuring our critical medical supplies arrive on time, every time. Their Stat Service has literally saved lives in emergency situations.',
    image: '/images/testimonials/medical-director.jpg',
  },
  {
    name: 'James Rodriguez',
    title: 'Chief Operations Officer',
    company: 'AeroTech Solutions',
    quote:
      'When we have an AOG situation, every minute counts. JPT USA understands the urgency and consistently delivers aircraft parts faster than any other courier we\'ve used.',
    image: '/images/testimonials/tech-coo.jpg',
  },
  {
    name: 'Michelle Park',
    title: 'Supply Chain Manager',
    company: 'Northeast Pharmaceuticals',
    quote:
      'The cold-chain handling and compliance documentation JPT USA provides gives us complete confidence in the integrity of our temperature-sensitive shipments.',
    image: '/images/testimonials/retail-manager.jpg',
  },
];
