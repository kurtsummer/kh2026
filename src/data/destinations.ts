export interface Destination {
  id: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  rating: number;
  imageUrl: string;
  category: 'Strand' | 'Stadt' | 'Kreuzfahrt' | 'Abenteuer';
  tags: string[];
}

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Traumstrände auf den Malediven',
    location: 'Ari Atoll, Malediven',
    price: 2499,
    duration: '10 Tage',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    category: 'Strand',
    tags: ['All-Inclusive', 'Flug inkl.', 'Luxury'],
  },
  {
    id: '2',
    title: 'New York City Entdecker',
    location: 'Manhattan, USA',
    price: 1290,
    duration: '7 Tage',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    category: 'Stadt',
    tags: ['Zentrales Hotel', 'Sightseeing', 'Shopping'],
  },
  {
    id: '3',
    title: 'Mittelmeer Kreuzfahrt',
    location: 'Mittelmeer ab Palma',
    price: 899,
    duration: '8 Tage',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
    category: 'Kreuzfahrt',
    tags: ['Vollpension', 'Wellness', 'Familie'],
  },
  {
    id: '4',
    title: 'Safari in Südafrika',
    location: 'Krüger Nationalpark',
    price: 3150,
    duration: '14 Tage',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    category: 'Abenteuer',
    tags: ['Rundreise', 'Natur', 'Big Five'],
  },
  {
    id: '5',
    title: 'Santorini Sonnenuntergang',
    location: 'Oia, Griechenland',
    price: 1150,
    duration: '7 Tage',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    category: 'Strand',
    tags: ['Boutique Hotel', 'Romantik', 'Frühstück'],
  },
  {
    id: '6',
    title: 'Tokio & Kyoto Rundreise',
    location: 'Japan',
    price: 2890,
    duration: '12 Tage',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    category: 'Stadt',
    tags: ['Kultur', 'High-Speed Zug', 'Guide'],
  },
];
