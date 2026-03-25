import {
  Compass,
  Bus,
  BadgeCheck,
  MapPinned,
  Plane,
  ShieldCheck,
  Users,
  Clock3,
  Star,
  PhoneCall,
} from 'lucide-react';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'packages', label: 'Packages' },
  { id: 'guides', label: 'Guides' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '2,500+', label: 'Happy Travelers' },
  { value: '120+', label: 'Curated Tours' },
  { value: '45+', label: 'Local Guides' },
];

export const services = [
  {
    title: 'Tour Packages',
    description:
      'Private, family, luxury, and adventure tours with ready-made itineraries and custom planning.',
    icon: Compass,
  },
  {
    title: 'Tour Guides',
    description:
      'Licensed multilingual guides for heritage, wildlife, food, and city experiences.',
    icon: BadgeCheck,
  },
  {
    title: 'Transport Services',
    description:
      'Airport pickups, day-trip vehicles, chauffeur-driven vans, and premium tourist transport.',
    icon: Bus,
  },
  {
    title: 'Travel Agent Support',
    description:
      'Hotel booking, ticketing, visa guidance, and end-to-end trip coordination.',
    icon: Plane,
  },
];

export const packages = [
  {
    title: 'Coastal Escape',
    duration: '3 Days / 2 Nights',
    price: '$290',
    highlight: 'Beach stays, sunset cruise, seafood trail',
    image: '/images/mirissa.jpg'
  },
  {
    title: 'Hill Country Discovery',
    duration: '4 Days / 3 Nights',
    price: '$420',
    highlight: 'Tea estates, train ride, waterfalls, cool climate',
    image: '/images/mirissa.jpg'
  },
  {
    title: 'Culture & Wildlife',
    duration: '5 Days / 4 Nights',
    price: '$560',
    highlight: 'Ancient cities, safari, village experience',
    image: '/images/mirissa.jpg'
  },
];

export const guides = [
  {
    name: 'Nadisha Perera',
    specialty: 'Heritage & City Tours',
    text: 'Excellent for cultural storytelling, museums, and hidden local spots.',
  },
  {
    name: 'Ravin Dissanayake',
    specialty: 'Adventure & Nature Trails',
    text: 'Best for trekking, wildlife spotting, and active outdoor groups.',
  },
  {
    name: 'Farah Nazeem',
    specialty: 'Luxury & Family Travel',
    text: 'Great with premium itineraries, families, and smooth logistics.',
  },
];

export const features = [
  { icon: ShieldCheck, text: 'Trusted commercial travel operations' },
  { icon: MapPinned, text: 'Locally designed routes and experiences' },
  { icon: Users, text: 'Corporate, family, solo, and group tours' },
  { icon: Clock3, text: 'Fast response for trip planning and booking' },
  { icon: Star, text: 'Premium hospitality and curated service' },
  { icon: PhoneCall, text: 'Dedicated support before and during travel' },
];
