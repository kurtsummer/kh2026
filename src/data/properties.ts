export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: 'sale' | 'rent';
  category: 'Haus' | 'Wohnung' | 'Grundstück' | 'Gewerbe';
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Moderne Villa am See',
    location: 'Am See 12, Musterhausen',
    price: 1250000,
    bedrooms: 5,
    bathrooms: 3,
    area: 280,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    type: 'sale',
    category: 'Haus',
  },
  {
    id: '2',
    title: 'Penthouse mit Weitblick',
    location: 'Zentrum 5, Musterhausen',
    price: 890000,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    imageUrl: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800',
    type: 'sale',
    category: 'Wohnung',
  },
  {
    id: '3',
    title: 'Gemütliches Stadthaus',
    location: 'Altstadt 8, Musterhausen',
    price: 540000,
    bedrooms: 4,
    bathrooms: 2,
    area: 180,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    type: 'sale',
    category: 'Haus',
  },
  {
    id: '4',
    title: 'Helle 3-Zimmer Wohnung',
    location: 'Parkweg 1, Musterhausen',
    price: 1800,
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    type: 'rent',
    category: 'Wohnung',
  },
  {
    id: '5',
    title: 'Exklusives Baugrundstück',
    location: 'Wiesenhang 4, Musterhausen',
    price: 320000,
    bedrooms: 0,
    bathrooms: 0,
    area: 600,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    type: 'sale',
    category: 'Grundstück',
  },
  {
    id: '6',
    title: 'Büroetage in Bestlage',
    location: 'Businesspark 2, Musterhausen',
    price: 4500,
    bedrooms: 0,
    bathrooms: 2,
    area: 210,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    type: 'rent',
    category: 'Gewerbe',
  },
];
