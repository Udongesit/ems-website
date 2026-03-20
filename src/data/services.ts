import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'personal-assistant',
    icon: 'UserCheck',
    title: 'Personal Assistant',
    description: 'Dedicated support for your daily schedule, communications, and personal organisation needs.',
    features: ['Calendar management', 'Call handling', 'Travel planning', 'Personal scheduling'],
  },
  {
    id: 'everyday-errands',
    icon: 'ShoppingBag',
    title: 'Everyday Errands',
    description: 'All the routine tasks handled so you can focus on what truly matters.',
    features: ['Grocery shopping', 'Bill payments', 'Package deliveries', 'Bank runs'],
  },
  {
    id: 'special-requests',
    icon: 'Sparkles',
    title: 'Special Requests',
    description: 'Custom and one-off tasks tailored exactly to your unique needs.',
    features: ['Bespoke errands', 'Urgent requests', 'Hard-to-find items', 'Custom projects'],
  },
  {
    id: 'senior-support',
    icon: 'Heart',
    title: 'Senior Citizen Support',
    description: 'Compassionate assistance for elderly loved ones to maintain independence and dignity.',
    features: ['Medication pickup', 'Doctor appointments', 'Companionship errands', 'Home supplies'],
  },
  {
    id: 'business-support',
    icon: 'Briefcase',
    title: 'Business Support',
    description: 'Operational errands for busy professionals and growing companies.',
    features: ['Document delivery', 'Office procurement', 'Courier services', 'Staff support'],
  },
  {
    id: 'event-assistance',
    icon: 'CalendarCheck',
    title: 'Event Assistance',
    description: 'Seamless event logistics so your occasion goes off without a hitch.',
    features: ['Vendor sourcing', 'Supply runs', 'Setup coordination', 'Last-minute items'],
  },
  {
    id: 'concierge',
    icon: 'Crown',
    title: 'Concierge Services',
    description: 'Premium lifestyle management for those who demand the very best.',
    features: ['VIP requests', 'Luxury sourcing', 'Priority handling', 'Lifestyle curation'],
  },
];
