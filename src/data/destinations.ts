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
  description: string;
  highlights: string[];
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
    description: 'Erleben Sie das Paradies auf Erden. Unsere exklusive Auswahl an Resorts auf dem Ari Atoll bietet Ihnen kristallklares Wasser, weißen Sandstrand und erstklassigen Service.',
    highlights: ['Privater Bungalow am Wasser', 'Schnorcheln mit Mantarochen', 'Gourmet-Küche inklusive', 'Spa & Wellness direkt am Ozean'],
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
    description: 'Die Stadt, die niemals schläft, wartet auf Sie. Entdecken Sie die ikonischen Sehenswürdigkeiten von Manhattan, shoppen Sie auf der 5th Avenue und genießen Sie den Central Park.',
    highlights: ['Eintritt zum Empire State Building', 'Geführte Tour durch Greenwich Village', 'Abendessen in einem Rooftop-Restaurant', 'Direkte Flugverbindung ab Frankfurt'],
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
    description: 'Kommen Sie an Bord eines modernen Kreuzfahrtschiffes und entdecken Sie die Schätze des Mittelmeers. Jeden Tag ein neuer Hafen, jeden Tag ein neues Abenteuer.',
    highlights: ['Modernste Schiffs-Infrastruktur', 'Entertainment-Shows auf Weltniveau', 'Inkludierte Landausflüge in Rom & Barcelona', 'Kids Club & Familienbereiche'],
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
    description: 'Eine Reise zu den Ursprüngen der Natur. Begleiten Sie uns auf eine unvergessliche Safari durch den Krüger Nationalpark und erleben Sie die Big Five hautnah.',
    highlights: ['Übernachtung in luxuriösen Lodges', 'Tägliche Pirschfahrten mit Rangern', 'Traditionelle Braai-Abende am Lagerfeuer', 'Besuch des Blyde River Canyons'],
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
    description: 'Die Kykladen-Insel Santorini ist berühmt für ihre blau-weißen Häuser und die spektakulären Sonnenuntergänge in Oia. Perfekt für einen romantischen Rückzugsort.',
    highlights: ['Privater Pool mit Caldera-Blick', 'Weinprobe lokaler Sorten', 'Bootsfahrt zu den Vulkaninseln', 'Inkludierter Mietwagen für 3 Tage'],
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
    description: 'Japan ist ein Land der Kontraste – zwischen futuristischen Metropolen und uralten Traditionen. Erleben Sie Tokio, den Fuji und die Tempel von Kyoto.',
    highlights: ['Fahrt mit dem Shinkansen (Schnellzug)', 'Teazeremonie in Kyoto', 'Elektronik-Viertel Akihabara in Tokio', 'Ausflug zum heiligen Berg Fuji'],
  },
];
