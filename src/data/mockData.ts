import { Prompt } from '../types/prompt';

export const mockPrompts: Prompt[] = [
  {
    id: '1',
    title: 'Vintage Sunset Portra',
    content: 'High-resolution professional photograph of a golden hour portrait of a woman standing in a wheat field. The scene is eye-level perspective, creating a direct connection, captured using a classic analog camera. The visual style is defined by Kodak Portra 400, warm skin tones, fine grain, bathed in warm golden hour light, long soft shadows, all contributing to a evoking a sense of nostalgia and memory feeling. Extremely detailed textures, hyper-realistic, volumetric lighting, photorealistic rendering, 8k resolution, masterfully composed.',
    mediaType: 'Bild',
    cameraType: 'Analog',
    filmStock: 'Kodak Portra 400',
    perspective: 'Augenhöhe',
    lighting: 'Goldene Stunde',
    mood: 'Nostalgisch',
    tags: ['portrait', 'sunset', 'warm'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Cyberpunk Tokyo Rain',
    content: 'Cinematic high-quality video footage of neon lights reflecting in puddles, busy street in Tokyo. The scene is wide angle lens, capturing the vast environment, captured using a high-end digital sensor. The visual style is defined by Standard Digital, sharp digital clarity, clean professional look, vibrant neon lights, Cyberpunk aesthetic, glowing reflections, all contributing to a sleek futuristic aesthetic, clean lines, advanced tech feel feeling. Extremely detailed textures, hyper-realistic, volumetric lighting, photorealistic rendering, 8k resolution, masterfully composed.',
    mediaType: 'Video',
    cameraType: 'Digital',
    filmStock: 'Standard Digital',
    perspective: 'Weitwinkel',
    lighting: 'Neon-Licht',
    mood: 'Futuristisch',
    tags: ['cyberpunk', 'city', 'night'],
    createdAt: new Date().toISOString(),
  },
];
