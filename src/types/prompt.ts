export type MediaType = 'Image' | 'Video';

export type CameraType = 'Retro' | 'Analog' | 'Digital' | 'Mirrorless' | 'DSLR' | 'Vintage' | '35mm' | 'Medium Format' | 'Large Format';

export type FilmStock = 'Kodak Portra 400' | 'Fujifilm Superia' | 'Black & White' | 'CineStill 800T' | 'Polaroid' | 'Technicolor' | 'Ektachrome' | 'Standard Digital' | 'VHS' | 'Super 8';

export type Perspective = 'Wide Shot' | 'Close-up' | 'Bird\'s Eye View' | 'Low Angle' | 'High Angle' | 'Eye Level' | 'Dutch Angle' | 'Macro' | 'Extreme Close-up' | 'Full Shot' | 'Medium Shot';

export interface Prompt {
  id: string;
  title: string;
  content: string;
  mediaType: MediaType;
  cameraType: CameraType;
  filmStock: FilmStock;
  perspective: Perspective;
  tags: string[];
  createdAt: string;
}
