export interface Metro {
  name: string;
  tier: 'primary' | 'secondary';
}

export interface Region {
  name: string;
  state: string;
  description: string;
  metros: Metro[];
  airports: string[];
  status: 'active' | 'coming-soon';
}

export const regions: Region[] = [
  {
    name: 'New York Tri-State',
    state: 'NY / NJ / CT',
    description:
      'Our flagship region covering all five NYC boroughs, Northern New Jersey, and Southern Connecticut with immediate-response capability.',
    metros: [
      { name: 'Manhattan', tier: 'primary' },
      { name: 'Brooklyn', tier: 'primary' },
      { name: 'Queens', tier: 'primary' },
      { name: 'The Bronx', tier: 'primary' },
      { name: 'Staten Island', tier: 'primary' },
      { name: 'Long Island', tier: 'secondary' },
      { name: 'Westchester', tier: 'secondary' },
      { name: 'Northern NJ', tier: 'secondary' },
      { name: 'Southern CT', tier: 'secondary' },
    ],
    airports: ['JFK', 'EWR', 'LGA'],
    status: 'active',
  },
  {
    name: 'Philadelphia',
    state: 'PA',
    description:
      'Expanding coverage to the greater Philadelphia area including key pharmaceutical and medical corridors.',
    metros: [
      { name: 'Center City', tier: 'primary' },
      { name: 'King of Prussia', tier: 'secondary' },
      { name: 'Cherry Hill', tier: 'secondary' },
    ],
    airports: ['PHL'],
    status: 'coming-soon',
  },
  {
    name: 'Chicago',
    state: 'IL',
    description:
      'Central hub expansion covering the greater Chicago metropolitan area and key logistics corridors.',
    metros: [
      { name: 'Downtown Chicago', tier: 'primary' },
      { name: 'Suburbs', tier: 'secondary' },
    ],
    airports: ['ORD'],
    status: 'coming-soon',
  },
  {
    name: 'Atlanta',
    state: 'GA',
    description:
      'Southeast regional coverage centered on Atlanta\'s major medical and technology corridors.',
    metros: [
      { name: 'Metro Atlanta', tier: 'primary' },
      { name: 'Marietta', tier: 'secondary' },
    ],
    airports: ['ATL'],
    status: 'coming-soon',
  },
  {
    name: 'South Florida',
    state: 'FL',
    description:
      'Coverage across the Miami-Fort Lauderdale metropolitan corridor serving the biotech and cruise industries.',
    metros: [
      { name: 'Miami', tier: 'primary' },
      { name: 'Fort Lauderdale', tier: 'secondary' },
    ],
    airports: ['MIA', 'FLL'],
    status: 'coming-soon',
  },
];
