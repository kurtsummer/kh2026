export interface Song {
  title: string;
  artist: string;
  category: 'Evergreens' | 'Internationale Klassiker' | 'Romantik' | 'Stimmung & Party';
}

export const REPERTOIRE: Song[] = [
  // Deutsche Evergreens
  { title: "Aber bitte mit Sahne", artist: "Udo Jürgens", category: "Evergreens" },
  { title: "Griechischer Wein", artist: "Udo Jürgens", category: "Evergreens" },
  { title: "Atemlos durch die Nacht", artist: "Helene Fischer", category: "Evergreens" },
  { title: "Verdammt ich lieb dich", artist: "Matthias Reim", category: "Evergreens" },
  { title: "Wahnsinn", artist: "Wolfgang Petry", category: "Evergreens" },
  { title: "Marmor, Stein und Eisen bricht", artist: "Drafi Deutscher", category: "Evergreens" },
  { title: "Eine neue Liebe ist wie ein neues Leben", artist: "Jürgen Marcus", category: "Evergreens" },
  
  // Internationale Klassiker
  { title: "Sweet Caroline", artist: "Neil Diamond", category: "Internationale Klassiker" },
  { title: "Let It Be", artist: "The Beatles", category: "Internationale Klassiker" },
  { title: "Country Roads", artist: "John Denver", category: "Internationale Klassiker" },
  { title: "Wonderwall", artist: "Oasis", category: "Internationale Klassiker" },
  { title: "Summer of '69", artist: "Bryan Adams", category: "Internationale Klassiker" },
  { title: "Sway", artist: "Michael Bublé", category: "Internationale Klassiker" },
  
  // Romantik
  { title: "Hallelujah", artist: "Leonard Cohen", category: "Romantik" },
  { title: "Perfect", artist: "Ed Sheeran", category: "Romantik" },
  { title: "Can You Feel the Love Tonight", artist: "Elton John", category: "Romantik" },
  { title: "You Are the Reason", artist: "Calum Scott", category: "Romantik" },
  { title: "Das Beste", artist: "Silbermond", category: "Romantik" },
  
  // Stimmung & Party
  { title: "I Will Survive", artist: "Gloria Gaynor", category: "Stimmung & Party" },
  { title: "YMCA", artist: "Village People", category: "Stimmung & Party" },
  { title: "Walking on Sunshine", artist: "Katrina and the Waves", category: "Stimmung & Party" },
  { title: "Simply the Best", artist: "Tina Turner", category: "Stimmung & Party" },
  { title: "Cordula Grün", artist: "Josh.", category: "Stimmung & Party" },
];
