import { Prompt } from '../types/prompt';

const generateMockPrompts = (): Prompt[] => {
  const basePrompts = [
    {
      title: "Cyberpunk Regen",
      subject: "A cyborg character walking through a rain-slicked Tokyo alley, neon signs reflecting in puddles",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Halbtotale", lighting: "Neon-Licht", mood: "Futuristisch", tags: ["cyberpunk", "regen", "nacht"]
    },
    {
      title: "Berghütte im Nebel",
      subject: "A lonely wooden cabin on a steep mountain ridge surrounded by thick morning mist",
      mediaType: "Bild", cameraType: "Mittelformat", filmStock: "Fujifilm Superia", perspective: "Weitwinkel", lighting: "Bewölkt", mood: "Raw/Authentisch", tags: ["natur", "berge", "nebel"]
    },
    {
      title: "80er Jahre Skatepark",
      subject: "Teens hanging out at a sunny California skatepark in 1985, wearing vintage fashion",
      mediaType: "Bild", cameraType: "Analog", filmStock: "Kodak Gold 200", perspective: "Schräger Winkel", lighting: "Goldene Stunde", mood: "Nostalgisch", tags: ["80s", "retro", "skate"]
    },
    {
      title: "Tiefsee Qualle",
      subject: "A bioluminescent jellyfish floating in the absolute darkness of the deep ocean",
      mediaType: "Bild", cameraType: "Spiegellos", filmStock: "Standard Digital", perspective: "Makro", lighting: "Neon-Licht", mood: "Ätherisch", tags: ["ozean", "qualle", "biolumineszenz"]
    },
    {
      title: "Wüstenkarawane",
      subject: "A long caravan of camels crossing the Sahara dunes during a sandstorm",
      mediaType: "Video", cameraType: "Großformat", filmStock: "Technicolor", perspective: "Vogelperspektive", lighting: "Hartes Licht", mood: "Professionell", tags: ["wüste", "kamele", "episch"]
    },
    {
      title: "Retro Autokino",
      subject: "Classic cars parked at a drive-in theater, a black and white movie playing on the large screen",
      mediaType: "Bild", cameraType: "35mm Film", filmStock: "Kodak Portra 400", perspective: "Totale", lighting: "Düster", mood: "Nostalgisch", tags: ["kino", "autos", "nacht"]
    },
    {
      title: "Zukunftstadt",
      subject: "Sleek white skyscrapers with floating gardens and flying vehicles in a utopian city",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Vogelperspektive", lighting: "Natürliches Licht", mood: "Futuristisch", tags: ["sci-fi", "utopie", "stadt"]
    },
    {
      title: "Waldgeist",
      subject: "A mystical creature made of moss and tree bark blending into an ancient forest",
      mediaType: "Bild", cameraType: "Spiegelreflex", filmStock: "CineStill 800T", perspective: "Nahaufnahme", lighting: "Weiches Licht", mood: "Traumhaft", tags: ["fantasy", "wald", "magie"]
    },
    {
      title: "Streetfood Markt",
      subject: "Busy night market in Bangkok, steam rising from woks, intense colors and motion",
      mediaType: "Video", cameraType: "GoPro", filmStock: "Standard Digital", perspective: "Ego-Perspektive", lighting: "Neon-Licht", mood: "Lebhaft", tags: ["food", "reise", "pov"]
    },
    {
      title: "Polar-Expedition",
      subject: "An icebreaker ship crushing through thick arctic ice under the northern lights",
      mediaType: "Bild", cameraType: "Spiegellos", filmStock: "Ektachrome", perspective: "Weitwinkel", lighting: "Düster", mood: "Raw/Authentisch", tags: ["arktis", "aurora", "schiff"]
    },
    {
      title: "Alter Jazzclub",
      subject: "A saxophone player performing on a dimly lit stage with cigarette smoke curling in the air",
      mediaType: "Bild", cameraType: "Vintage", filmStock: "Schwarz-Weiß", perspective: "Nahaufnahme", lighting: "Düster", mood: "Nostalgisch", tags: ["jazz", "musik", "club"]
    },
    {
      title: "Weltraum-Station",
      subject: "Interior of a high-tech space station corridor with curved walls and white lighting",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Totale", lighting: "Studio-Beleuchtung", mood: "Futuristisch", tags: ["weltraum", "innenraum", "minimalismus"]
    },
    {
      title: "Sommerwiese Makro",
      subject: "A honeybee covered in pollen landing on a vibrant lavender flower",
      mediaType: "Bild", cameraType: "Spiegelreflex", filmStock: "Kodak Gold 200", perspective: "Extreme Nahaufnahme", lighting: "Natürliches Licht", mood: "Lebhaft", tags: ["makro", "natur", "biene"]
    },
    {
      title: "Surfer Welle",
      subject: "A surfer inside a massive turquoise tube wave at Pipeline",
      mediaType: "Video", cameraType: "GoPro", filmStock: "Standard Digital", perspective: "Ego-Perspektive", lighting: "Hartes Licht", mood: "Raw/Authentisch", tags: ["surfen", "meer", "action"]
    },
    {
      title: "Dampfzug in Alpen",
      subject: "A vintage steam locomotive crossing a high stone bridge in the Swiss Alps",
      mediaType: "Bild", cameraType: "35mm Film", filmStock: "Kodak Portra 400", perspective: "Weitwinkel", lighting: "Bewölkt", mood: "Nostalgisch", tags: ["zug", "berge", "vintage"]
    },
    {
      title: "Geisterstadt Salon",
      subject: "The interior of an abandoned wild west salon with dust motes dancing in sunbeams",
      mediaType: "Bild", cameraType: "Großformat", filmStock: "Polaroid", perspective: "Halbtotale", lighting: "Natürliches Licht", mood: "Dunkel", tags: ["wildwest", "verlassen", "staub"]
    },
    {
      title: "Neon Racing",
      subject: "High-speed night race of supercars on a highway with light trails and motion blur",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Froschperspektive", lighting: "Neon-Licht", mood: "Lebhaft", tags: ["rennen", "autos", "nacht"]
    },
    {
      title: "Zugefrorener See",
      subject: "Intricate patterns of bubbles trapped under the clear blue ice of Lake Baikal",
      mediaType: "Bild", cameraType: "Spiegellos", filmStock: "Ilford HP5", perspective: "Draufsicht", lighting: "Hartes Licht", mood: "Professionell", tags: ["eis", "winter", "abstrakt"]
    },
    {
      title: "Mars Kolonie",
      subject: "The first human base on Mars with red dust storms and giant glass domes",
      mediaType: "Bild", cameraType: "Spiegellos", filmStock: "Standard Digital", perspective: "Vogelperspektive", lighting: "Düster", mood: "Futuristisch", tags: ["mars", "planeten", "raumfahrt"]
    },
    {
      title: "90er Rave",
      subject: "Flash photography of a crowded warehouse rave in 1994, lasers and baggy clothes",
      mediaType: "Bild", cameraType: "Analog", filmStock: "CineStill 800T", perspective: "Augenhöhe", lighting: "Neon-Licht", mood: "Nostalgisch", tags: ["90s", "party", "rave"]
    },
    {
      title: "Insel Paradies",
      subject: "An aerial view of a private tropical island with white sand and coral reefs",
      mediaType: "Bild", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Vogelperspektive", lighting: "Natürliches Licht", mood: "Traumhaft", tags: ["strand", "insel", "urlaub"]
    },
    {
      title: "Regenwald Wasserfall",
      subject: "A hidden waterfall deep in the Amazon, exotic birds flying through the spray",
      mediaType: "Video", cameraType: "Digital", filmStock: "Fujifilm Superia", perspective: "Weitwinkel", lighting: "Weiches Licht", mood: "Lebhaft", tags: ["dschungel", "wasserfall", "vögel"]
    },
    {
      title: "U-Bahn Station Noir",
      subject: "A man in a trench coat waiting on a subway platform, shadows and flickering lights",
      mediaType: "Bild", cameraType: "35mm Film", filmStock: "Schwarz-Weiß", perspective: "Symmetrisch", lighting: "Düster", mood: "Dunkel", tags: ["noir", "stadt", "u-bahn"]
    },
    {
      title: "Bonsai Garten",
      subject: "A serene Japanese zen garden with a perfectly trimmed ancient bonsai tree",
      mediaType: "Bild", cameraType: "iPhone", filmStock: "Standard Digital", perspective: "Augenhöhe", lighting: "Natürliches Licht", mood: "Raw/Authentisch", tags: ["japan", "zen", "bonsai"]
    },
    {
      title: "Heißluftballons",
      subject: "Hundreds of colorful hot air balloons rising over the fairy chimneys of Cappadocia",
      mediaType: "Video", cameraType: "Digital", filmStock: "Ektachrome", perspective: "Vogelperspektive", lighting: "Goldene Stunde", mood: "Ätherisch", tags: ["reisen", "ballon", "türkei"]
    },
    {
      title: "Vulkan Ausbruch",
      subject: "Slow motion lava flow from an erupting volcano at night, red glow and ash clouds",
      mediaType: "Video", cameraType: "Großformat", filmStock: "Standard Digital", perspective: "Totale", lighting: "Düster", mood: "Raw/Authentisch", tags: ["natur", "vulkan", "lava"]
    },
    {
      title: "Bibliothek der Magie",
      subject: "Infinite library with floating books and glowing crystals on the tables",
      mediaType: "Bild", cameraType: "Retro", filmStock: "CineStill 800T", perspective: "Totale", lighting: "Cinematisch", mood: "Traumhaft", tags: ["magie", "bücher", "fantasy"]
    },
    {
      title: "Alpiner Sonnenaufgang",
      subject: "The first light hitting the peaks of the Dolomites, reflection in a still lake",
      mediaType: "Bild", cameraType: "Mittelformat", filmStock: "Kodak Portra 400", perspective: "Weitwinkel", lighting: "Goldene Stunde", mood: "Professionell", tags: ["berge", "see", "morgen"]
    },
    {
      title: "Fashion Runway",
      subject: "High fashion model walking on a mirrored runway with intense flash photography",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Froschperspektive", lighting: "Studio-Beleuchtung", mood: "Professionell", tags: ["mode", "model", "runway"]
    },
    {
      title: "Gletscher Höhle",
      subject: "Standing inside a deep blue ice cave under a glacier, light filtering through ice",
      mediaType: "Bild", cameraType: "iPhone", filmStock: "Standard Digital", perspective: "Nahaufnahme", lighting: "Weiches Licht", mood: "Ätherisch", tags: ["eis", "höhle", "blau"]
    },
    {
      title: "Altstadt Gasse",
      subject: "A narrow cobblestone street in an Italian village at twilight, warm lamps turning on",
      mediaType: "Bild", cameraType: "Vintage", filmStock: "Kodak Gold 200", perspective: "Halbtotale", lighting: "Goldene Stunde", mood: "Nostalgisch", tags: ["italien", "dorf", "abend"]
    },
    {
      title: "Futuristische Küche",
      subject: "A minimalist kitchen with holographic touchscreens and robotic arms cooking",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Totale", lighting: "Studio-Beleuchtung", mood: "Futuristisch", tags: ["küche", "roboter", "zukunft"]
    },
    {
      title: "Steampunk Stadt",
      subject: "A Victorian city with brass machinery, steam pipes and giant flying zeppelins",
      mediaType: "Bild", cameraType: "Analog", filmStock: "Technicolor", perspective: "Vogelperspektive", lighting: "Hartes Licht", mood: "Nostalgisch", tags: ["steampunk", "zeppelins", "victorian"]
    },
    {
      title: "Eulen Augen",
      subject: "Extreme close up of an owl's eyes dilating in the dark forest",
      mediaType: "Bild", cameraType: "Spiegelreflex", filmStock: "CineStill 800T", perspective: "Extreme Nahaufnahme", lighting: "Düster", mood: "Raw/Authentisch", tags: ["eule", "tier", "nacht"]
    },
    {
      title: "Strand Lagerfeuer",
      subject: "Friends sitting around a crackling bonfire on the beach at night, stars visible above",
      mediaType: "Video", cameraType: "Digital", filmStock: "Kodak Portra 400", perspective: "Halbtotale", lighting: "Düster", mood: "Traumhaft", tags: ["feuer", "strand", "freunde"]
    },
    {
      title: "Abstrakte Architektur",
      subject: "The spiral staircase of a modern museum, shot from below to create geometric patterns",
      mediaType: "Bild", cameraType: "Mittelformat", filmStock: "Standard Digital", perspective: "Froschperspektive", lighting: "Weiches Licht", mood: "Professionell", tags: ["architektur", "abstrakt", "geometrie"]
    },
    {
      title: "Regnerisches London",
      subject: "Red double-decker bus crossing a bridge in London during a typical grey rain",
      mediaType: "Video", cameraType: "Vintage", filmStock: "VHS-Stil", perspective: "Totale", lighting: "Bewölkt", mood: "Nostalgisch", tags: ["london", "regen", "vhs"]
    },
    {
      title: "Blütenregen",
      subject: "Cherry blossom petals falling like snow in a Japanese park during spring",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Augenhöhe", lighting: "Natürliches Licht", mood: "Ätherisch", tags: ["frühling", "japan", "blüten"]
    },
    {
      title: "Uralter Tempel",
      subject: "The ruins of an ancient jungle temple overgrown with massive tree roots",
      mediaType: "Bild", cameraType: "Großformat", filmStock: "Fujifilm Superia", perspective: "Weitwinkel", lighting: "Natürliches Licht", mood: "Raw/Authentisch", tags: ["tempel", "ruinen", "dschungel"]
    },
    {
      title: "Neon Tiger",
      subject: "A tiger walking through a glowing forest where every plant is bioluminescent",
      mediaType: "Bild", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Halbtotale", lighting: "Neon-Licht", mood: "Traumhaft", tags: ["tiger", "neon", "fantasy"]
    },
    {
      title: "90er Skater Video",
      subject: "Grainy footage of a teenager doing a kickflip over a gap in a parking lot",
      mediaType: "Video", cameraType: "Retro", filmStock: "Super 8", perspective: "Froschperspektive", lighting: "Hartes Licht", mood: "Raw/Authentisch", tags: ["skate", "90s", "super8"]
    },
    {
      title: "Himalaya Gipfel",
      subject: "Climbers reaching the snowy summit of Mount Everest under a deep blue sky",
      mediaType: "Bild", cameraType: "GoPro", filmStock: "Standard Digital", perspective: "Weitwinkel", lighting: "Hartes Licht", mood: "Raw/Authentisch", tags: ["berge", "klettern", "himalaya"]
    },
    {
      title: "Futuristische Autobahn",
      subject: "A multi-level highway with glowing lanes and autonomous pods moving at speed",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Totale", lighting: "Neon-Licht", mood: "Futuristisch", tags: ["verkehr", "stadt", "zukunft"]
    },
    {
      title: "Katzenporträt Makro",
      subject: "Extremely detailed shot of a cat's eye, showing the iris texture and reflections",
      mediaType: "Bild", cameraType: "Spiegelreflex", filmStock: "Standard Digital", perspective: "Extreme Nahaufnahme", lighting: "Natürliches Licht", mood: "Professionell", tags: ["katze", "auge", "makro"]
    },
    {
      title: "Verlassene Irrenanstalt",
      subject: "A long decaying corridor of an old asylum with peeling paint and metal beds",
      mediaType: "Bild", cameraType: "Analog", filmStock: "Schwarz-Weiß", perspective: "Totale", lighting: "Düster", mood: "Dunkel", tags: ["horror", "verlassen", "asylum"]
    },
    {
      title: "Cyberpunk Labor",
      subject: "A scientist working on a glowing bio-mechanical prosthetic arm in a lab",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Nahaufnahme", lighting: "Neon-Licht", mood: "Futuristisch", tags: ["labor", "technik", "cyberpunk"]
    },
    {
      title: "Vintage Autowerkstatt",
      subject: "A mechanic working on a shiny red Mustang in a workshop with neon signs",
      mediaType: "Bild", cameraType: "Retro", filmStock: "Kodak Portra 400", perspective: "Halbtotale", lighting: "Studio-Beleuchtung", mood: "Nostalgisch", tags: ["auto", "werkstatt", "mustang"]
    },
    {
      title: "Mondfinsternis",
      subject: "The red blood moon hanging over a silhouette of a pine forest",
      mediaType: "Bild", cameraType: "Spiegelreflex", filmStock: "Ektachrome", perspective: "Totale", lighting: "Düster", mood: "Ätherisch", tags: ["mond", "nacht", "weltraum"]
    },
    {
      title: "Bauernmarkt",
      subject: "Fresh organic vegetables in wooden crates at an open-air farmers market",
      mediaType: "Bild", cameraType: "iPhone", filmStock: "Kodak Gold 200", perspective: "Draufsicht", lighting: "Natürliches Licht", mood: "Raw/Authentisch", tags: ["essen", "markt", "bio"]
    },
    {
      title: "Holografisches Konzert",
      subject: "A massive outdoor stadium with a 100ft tall holographic singer performing",
      mediaType: "Video", cameraType: "Digital", filmStock: "Standard Digital", perspective: "Vogelperspektive", lighting: "Neon-Licht", mood: "Lebhaft", tags: ["konzert", "hologramm", "musik"]
    }
  ];

  const mapToEnglish = {
    media: { "Bild": "High-resolution professional photograph of", "Video": "Cinematic high-quality video footage of" },
    camera: {
      "Retro": "vintage retro camera", "Analog": "classic analog camera", "Digital": "high-end digital sensor",
      "Spiegellos": "modern mirrorless camera", "Spiegelreflex": "professional DSLR camera", "Vintage": "authentic vintage camera equipment",
      "35mm Film": "35mm film camera", "Mittelformat": "medium format camera with shallow depth of field",
      "Großformat": "large format camera with immense detail", "GoPro": "action-packed GoPro camera", "iPhone": "shot on iPhone, mobile photography style"
    },
    film: {
      "Kodak Portra 400": "Kodak Portra 400, warm skin tones, fine grain",
      "Fujifilm Superia": "Fujifilm Superia, vibrant greens and cool shadows",
      "Schwarz-Weiß": "timeless black and white film, high contrast",
      "CineStill 800T": "CineStill 800T, tungsten balanced, cinematic halation",
      "Polaroid": "instant Polaroid film, soft edges, nostalgic chemicals",
      "Technicolor": "classic Technicolor 3-strip process, saturated primary colors",
      "Ektachrome": "Kodak Ektachrome color reversal film, vivid colors",
      "Standard Digital": "sharp digital clarity, clean professional look",
      "VHS-Stil": "80s VHS tracking effects, scanlines, chromatic aberration",
      "Super 8": "Super 8mm home movie style, grainy, jittery frames",
      "Kodak Gold 200": "Kodak Gold 200, consumer-grade warmth, nostalgic feeling",
      "Ilford HP5": "Ilford HP5 black and white, gritty grain, classic look"
    },
    perspective: {
      "Weitwinkel": "wide angle lens, capturing the vast environment", "Nahaufnahme": "close-up shot, focusing on intricate details",
      "Vogelperspektive": "bird's eye view from high above", "Froschperspektive": "worm's eye view, looking up from the ground",
      "Draufsicht": "top-down flat lay perspective", "Augenhöhe": "eye-level perspective, creating a direct connection",
      "Schräger Winkel": "dutch angle, creating tension and dynamism", "Makro": "extreme macro photography, microscopic details visible",
      "Extreme Nahaufnahme": "extreme close-up, intense focus on a specific feature", "Totale": "full wide shot, showing the subject in its entirety",
      "Halbtotale": "medium wide shot, balancing subject and environment", "Ego-Perspektive": "first-person point of view (POV)"
    },
    lighting: {
      "Goldene Stunde": "bathed in warm golden hour light, long soft shadows", "Cinematisch": "cinematic lighting with high dynamic range and moody shadows",
      "Neon-Licht": "vibrant neon lights, Cyberpunk aesthetic, glowing reflections", "Weiches Licht": "diffused soft lighting, gentle transitions",
      "Hartes Licht": "hard direct sunlight, dramatic high-contrast shadows", "Studio-Beleuchtung": "professional studio lighting setup, rim lights, softboxes",
      "Natürliches Licht": "natural ambient daylight, realistic reflections", "Düster": "low-key moody lighting, mysterious atmosphere", "Bewölkt": "soft overcast daylight, flat even lighting"
    },
    mood: {
      "Nostalgisch": "evoking a sense of nostalgia and memory", "Futuristisch": "sleek futuristic aesthetic, clean lines, advanced tech feel",
      "Raw/Authentisch": "raw and authentic documentary style, unpolished beauty", "Ätherisch": "ethereal and otherworldly, glowing halos, soft focus",
      "Traumhaft": "dreamlike surreal atmosphere, soft hazy textures", "Professionell": "clean professional commercial look, high-end production",
      "Dunkel": "dark and gritty atmosphere, intense and heavy", "Lebhaft": "vibrant and energetic, bursting with life and color"
    }
  };

  return basePrompts.map((p, index) => {
    const engMedia = mapToEnglish.media[p.mediaType as keyof typeof mapToEnglish.media];
    const engCamera = mapToEnglish.camera[p.cameraType as keyof typeof mapToEnglish.camera];
    const engFilm = mapToEnglish.film[p.filmStock as keyof typeof mapToEnglish.film];
    const engPersp = mapToEnglish.perspective[p.perspective as keyof typeof mapToEnglish.perspective];
    const engLight = mapToEnglish.lighting[p.lighting as keyof typeof mapToEnglish.lighting];
    const engMood = mapToEnglish.mood[p.mood as keyof typeof mapToEnglish.mood];

    const content = `${engMedia} ${p.subject}. The scene is ${engPersp}, captured using a ${engCamera}. The visual style is defined by ${engFilm}, ${engLight}, all contributing to a ${engMood} feeling. Extremely detailed textures, hyper-realistic, volumetric lighting, photorealistic rendering, 8k resolution, masterfully composed.`;

    return {
      id: (index + 1).toString(),
      title: p.title,
      content,
      mediaType: p.mediaType as any,
      cameraType: p.cameraType as any,
      filmStock: p.filmStock as any,
      perspective: p.perspective as any,
      lighting: p.lighting as any,
      mood: p.mood as any,
      tags: p.tags,
      createdAt: new Date().toISOString(),
    };
  });
};

export const mockPrompts: Prompt[] = generateMockPrompts();
