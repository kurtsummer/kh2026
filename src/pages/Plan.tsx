import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  ArrowLeft, 
  Calendar, 
  ShoppingCart, 
  Printer, 
  Share2, 
  Clock, 
  Flame, 
  Wallet,
  CheckCircle2,
  UtensilsCrossed,
  ListChecks,
  Info
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Meal {
  type: string;
  name: string;
  calories: number;
  time: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

interface DayPlan {
  day: string;
  meals: Meal[];
}

const BREAKFAST_POOL: Omit<Meal, "type">[] = [
  {
    name: "Haferflocken mit frischen Beeren",
    calories: 350,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1490474418645-177b353a1d40?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "100g frische Beeren", "150ml Milch oder Haferdrink", "1 TL Honig", "Prise Zimt"],
    instructions: [
      "Haferflocken und Milch in einen kleinen Topf geben.",
      "Unter Rühren bei mittlerer Hitze aufkochen, dann 3-4 Min. köcheln lassen, bis es cremig ist.",
      "Vom Herd nehmen, Honig und Zimt unterrühren.",
      "In eine Schüssel füllen und mit gewaschenen Beeren garnieren."
    ]
  },
  {
    name: "Avocado-Vollkornbrot mit Ei",
    calories: 420,
    time: "12 Min",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Scheiben Vollkornbrot", "1/2 reife Avocado", "1 Ei", "Prise Chiliflocken", "Salz & Pfeffer"],
    instructions: [
      "Das Ei in einem kleinen Topf ca. 7 Minuten wachsweich kochen.",
      "In der Zwischenzeit das Brot toasten.",
      "Die Avocadohälfte mit einer Gabel direkt auf dem Brot zerdrücken.",
      "Das Ei abschrecken, pellen, halbieren und auf das Avocado-Brot legen.",
      "Mit Salz, Pfeffer und Chiliflocken bestreuen."
    ]
  },
  {
    name: "Griechischer Joghurt mit Nüssen",
    calories: 380,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200g Griechischer Joghurt", "30g Walnüsse oder Mandeln", "1 EL Honig", "1/2 Apfel"],
    instructions: [
      "Den Joghurt in eine Schüssel geben.",
      "Den Apfel waschen und in feine Spalten schneiden.",
      "Die Nüsse grob hacken.",
      "Apfel und Nüsse auf dem Joghurt verteilen und mit Honig beträufeln."
    ]
  },
  {
    name: "Rührei mit Tomaten & Basilikum",
    calories: 310,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1525811902-f23426213fd0?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Bio-Eier", "5 Kirschtomaten", "Frischer Basilikum", "1 TL Butter", "1 Scheibe Brot"],
    instructions: [
      "Die Eier in einer Tasse verquirlen und mit Salz und Pfeffer würzen.",
      "Die Tomaten halbieren. Butter in einer Pfanne schmelzen.",
      "Tomaten kurz anbraten, dann die Eimasse hinzufügen.",
      "Bei mittlerer Hitze stocken lassen und dabei vorsichtig rühren.",
      "Mit frischem Basilikum bestreuen und zum Brot servieren."
    ]
  },
  {
    name: "Bananen-Protein-Pancakes",
    calories: 450,
    time: "15 Min",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 reife Banane", "2 Eier", "30g Haferflocken (gemahlen)", "Prise Backpulver", "Öl zum Braten"],
    instructions: [
      "Die Banane in einer Schüssel mit einer Gabel zu Brei zerdrücken.",
      "Eier, gemahlene Haferflocken und Backpulver hinzufügen und zu einem glatten Teig verrühren.",
      "Etwas Öl in einer Pfanne erhitzen.",
      "Kleine Teigportionen in die Pfanne geben und von beiden Seiten ca. 2 Min. goldbraun backen."
    ]
  },
  {
    name: "Chia-Pudding mit Mango",
    calories: 320,
    time: "5 Min (+ Einweichzeit)",
    imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    ingredients: ["3 EL Chiasamen", "200ml Kokos- oder Mandelmilch", "1/2 reife Mango", "1 TL Ahornsirup"],
    instructions: [
      "Chiasamen mit der Milch und dem Ahornsirup in einem Glas verrühren.",
      "Mindestens 2 Stunden oder über Nacht im Kühlschrank quellen lassen.",
      "Die Mango schälen und das Fruchtfleisch pürieren oder fein würfeln.",
      "Das Mangopüree vor dem Servieren auf den Pudding geben."
    ]
  },
  {
    name: "Schnelles Shakshuka",
    calories: 390,
    time: "20 Min",
    imageUrl: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200ml stückige Tomaten", "1 Ei", "1/2 rote Paprika", "1/4 Zwiebel", "Prise Kreuzkümmel"],
    instructions: [
      "Zwiebel und Paprika klein schneiden und in einer Pfanne mit Öl dünsten.",
      "Tomaten und Kreuzkümmel hinzufügen, ca. 5 Min. köcheln lassen.",
      "Mit einem Löffel eine Mulde in die Sauce drücken und das Ei vorsichtig hineinschlagen.",
      "Deckel auf die Pfanne setzen und ca. 5-7 Min. garen, bis das Eiweiß gestockt ist."
    ]
  },
  {
    name: "Vollkorn-Sandwich mit Pute",
    calories: 360,
    time: "8 Min",
    imageUrl: "https://images.unsplash.com/photo-1521390188846-e2a39b7ef4a8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Scheiben Vollkornbrot", "50g Putenbrust (Aufschnitt)", "1 EL Frischkäse", "Gurkenscheiben", "Salatblatt"],
    instructions: [
      "Beide Brotscheiben dünn mit Frischkäse bestreichen.",
      "Eine Seite mit Salat, Putenbrust und Gurkenscheiben belegen.",
      "Die zweite Brotscheibe darauflegen und das Sandwich diagonal halbieren."
    ]
  },
  {
    name: "Omelett mit Spinat & Feta",
    calories: 410,
    time: "12 Min",
    imageUrl: "https://images.unsplash.com/photo-1510629900260-7052fec3dd41?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Eier", "Eine Handvoll frischer Spinat", "30g Feta", "1 TL Öl", "Salz & Pfeffer"],
    instructions: [
      "Eier verquirlen und würzen. Feta grob zerbröseln.",
      "Öl in der Pfanne erhitzen und den Spinat kurz zusammenfallen lassen.",
      "Die Eimasse über den Spinat gießen.",
      "Den Feta darauf verteilen und das Omelett bei mittlerer Hitze stocken lassen.",
      "Einmal in der Mitte zusammenklappen und servieren."
    ]
  },
  {
    name: "Hüttenkäse mit Apfel & Zimt",
    calories: 280,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1551326344-42d6de2ad40c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["200g Hüttenkäse", "1 Apfel", "1 TL Zimt", "10g Mandelsplitter"],
    instructions: [
      "Den Hüttenkäse in eine Schüssel geben.",
      "Den Apfel waschen, entkernen und klein würfeln.",
      "Apfelwürfel und Mandelsplitter über den Hüttenkäse geben.",
      "Großzügig mit Zimt bestreuen."
    ]
  },
  {
    name: "Beeren-Smoothie-Bowl",
    calories: 340,
    time: "7 Min",
    imageUrl: "https://images.unsplash.com/photo-1494597564530-801f4467382c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["150g TK-Beeren", "1 Banane", "50ml Hafermilch", "20g Knuspermüsli", "Chia-Samen"],
    instructions: [
      "Gefrorene Beeren, Banane und Milch im Mixer zu einer dicken Masse pürieren.",
      "In eine Schüssel füllen.",
      "Mit Knuspermüsli und einer Prise Chia-Samen garnieren und sofort löffeln."
    ]
  },
  {
    name: "Gekochtes Ei mit Vollkornstangen",
    calories: 320,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 Ei", "2 Scheiben Vollkornbrot", "Etwas Butter", "Salz"],
    instructions: [
      "Das Ei ca. 6-7 Minuten kochen (Eigelb noch weich).",
      "In der Zwischenzeit das Brot toasten und mit wenig Butter bestreichen.",
      "Das Brot in ca. 2 cm breite Streifen (Stangen) schneiden.",
      "Das Ei im Eierbecher köpfen und die Brotstangen in das weiche Eigelb dippen."
    ]
  },
  {
    name: "French Toast (Gesund)",
    calories: 430,
    time: "15 Min",
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    ingredients: ["2 Scheiben Vollkornbrot", "1 Ei", "50ml Milch", "Prise Zimt", "Ahornsirup"],
    instructions: [
      "Ei, Milch und Zimt in einem tiefen Teller verquirlen.",
      "Die Brotscheiben von beiden Seiten darin einweichen, bis sie die Flüssigkeit aufgenommen haben.",
      "In einer Pfanne mit wenig Öl von beiden Seiten ca. 3 Min. goldbraun braten.",
      "Mit wenig Ahornsirup beträufeln."
    ]
  },
  {
    name: "Frühstücks-Burrito",
    calories: 460,
    time: "12 Min",
    imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
    ingredients: ["1 Vollkorn-Tortilla", "1 Ei", "30g Bohnen (Dose)", "2 EL Salsa", "Wenig Käse"],
    instructions: [
      "Das Ei in einer Pfanne als Rührei zubereiten.",
      "Die Tortilla kurz in einer Pfanne oder Mikrowelle erwärmen.",
      "Rührei, abgetropfte Bohnen, Salsa und Käse in die Mitte der Tortilla geben.",
      "Die Seiten einschlagen und fest aufrollen."
    ]
  },
  {
    name: "Warmer Grießbrei",
    calories: 330,
    time: "10 Min",
    imageUrl: "https://images.unsplash.com/photo-1551326344-42d6de2ad40c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["40g Dinkelgrieß", "250ml Milch oder Pflanzendrink", "1 EL Pflaumenmus", "Zimt"],
    instructions: [
      "Milch in einem Topf aufkochen.",
      "Den Grieß unter ständigem Rühren einrieseln lassen.",
      "Bei geringer Hitze ca. 2-3 Min. unter Rühren quellen lassen.",
      "In eine Schüssel füllen, Pflaumenmus daraufgeben und mit Zimt bestreuen."
    ]
  },
  {
    name: "Granola-Quark-Bowl",
    calories: 390,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
    ingredients: ["250g Magerquark", "30g Granola (Knuspermüsli)", "Schuss Sprudelwasser", "Ein paar Heidelbeeren"],
    instructions: [
      "Den Quark mit einem Schuss Sprudelwasser glatt und cremig rühren.",
      "In eine Schüssel geben.",
      "Granola und gewaschene Heidelbeeren darauf verteilen."
    ]
  },
  {
    name: "Knäckebrot mit Lachs",
    calories: 290,
    time: "5 Min",
    imageUrl: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    ingredients: ["3 Scheiben Knäckebrot", "50g Räucherlachs", "2 EL Frischkäse", "Etwas Meerrettich"],
    instructions: [
      "Knäckebrot mit Frischkäse bestreichen.",
      "Einen kleinen Klecks Meerrettich daraufgeben.",
      "Mit Räucherlachs belegen und nach Belieben mit Dill garnieren."
    ]
  },
  {
    name: "Apfel-Zimt-Baked Oats",
    calories: 410,
    time: "25 Min",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "1/2 zerdrückte Banane", "50ml Milch", "1/2 Apfel", "Zimt"],
    instructions: [
      "Haferflocken, Banane, Milch und Zimt mischen.",
      "In eine kleine ofenfeste Form füllen.",
      "Den Apfel klein schneiden und unterheben oder obenauf legen.",
      "Bei 180 Grad ca. 20 Minuten backen, bis es fest ist."
    ]
  },
  {
    name: "Herzhafter Tofu-Scramble",
    calories: 340,
    time: "15 Min",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    ingredients: ["150g Tofu (natur)", "Prise Kurkuma (für die Farbe)", "Etwas Kala Namak (Schwefelsalz für Ei-Geschmack)", "Paprika"],
    instructions: [
      "Den Tofu mit einer Gabel direkt in der Schüssel fein zerbröseln.",
      "In einer Pfanne mit etwas Öl anbraten.",
      "Kurkuma und klein geschnittene Paprika hinzufügen.",
      "Mit Kala Namak abschmecken (Vorsicht, erst zum Schluss zugeben)."
    ]
  },
  {
    name: "Overnight Oats Peanut Butter",
    calories: 440,
    time: "5 Min (+ Über Nacht)",
    imageUrl: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    ingredients: ["50g Haferflocken", "150ml Milch", "1 TL Erdnussbutter", "1/2 Banane"],
    instructions: [
      "Haferflocken und Milch in einem Glas mischen.",
      "Über Nacht in den Kühlschrank stellen.",
      "Morgens die Erdnussbutter unterrühren.",
      "Banane in Scheiben schneiden und obenauf legen."
    ]
  }
];

const Plan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState<DayPlan[]>([]);
  const [inputData, setInputData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("prep_master_input");
    if (saved) {
      const data = JSON.parse(saved);
      setInputData(data);
      generateMockPlan(data);
    } else {
      navigate("/generator");
    }
  }, [navigate]);

  const generateMockPlan = (data: any) => {
    const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    
    const recipes: Record<string, Omit<Meal, "type">[]> = {
      Omnivor: [
        { 
          name: "Hähnchen-Reis-Pfanne mit Brokkoli", 
          calories: 650, 
          time: "25 Min", 
          imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
          ingredients: ["150g Hähnchenbrust", "80g Reis (ungekocht)", "150g Brokkoli", "1 EL Sojasauce", "1 TL Öl", "Frischer Ingwer", "1 Frühlingszwiebel"],
          instructions: [
            "Vorbereitung: Den Reis in einem Sieb unter fließendem kaltem Wasser waschen, bis das Wasser klar bleibt. Dies entfernt überschüssige Stärke und sorgt für ein lockeres Ergebnis.",
            "Reis kochen: Den gewaschenen Reis mit der 1,5-fachen Menge Wasser und einer Prise Salz in einem Topf aufkochen. Sobald das Wasser kocht, die Hitze auf die kleinste Stufe reduzieren und bei geschlossenem Deckel ca. 10-12 Minuten quellen lassen.",
            "Hähnchen vorbereiten: In der Zwischenzeit die Hähnchenbrust unter kaltem Wasser abspülen, trocken tupfen und in gleichmäßige, mundgerechte Würfel (ca. 2 cm) schneiden.",
            "Gemüse vorbereiten: Den Brokkoli waschen und in sehr kleine Röschen teilen. Den Ingwer schälen und fein reiben. Die Frühlingszwiebel putzen und in feine Ringe schneiden.",
            "Anbraten: Eine große beschichtete Pfanne oder einen Wok mit dem Öl stark erhitzen. Das Hähnchen darin ca. 5-6 Minuten rundherum scharf anbraten, bis es durchgegart und goldbraun ist.",
            "Gemüse & Finish: Die Brokkoliröschen und den Ingwer hinzufügen und 3-4 Minuten mitbraten (evtl. einen Schluck Wasser dazugeben). Den fertigen Reis unterheben, mit Sojasauce ablöschen und alles gut vermengen. Mit den Frühlingszwiebelringen garniert anrichten."
          ]
        },
        { 
          name: "Pasta Bolognese", 
          calories: 750, 
          time: "30 Min", 
          imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
          ingredients: ["100g Rinderhackfleisch", "100g Vollkornpasta", "200ml Tomatensauce (passiert)", "1 EL Parmesan", "1 kleine Zwiebel", "1 Knoblauchzehe", "Getrockneter Oregano", "Salz & Pfeffer"],
          instructions: [
            "Pasta kochen: Einen großen Topf mit Wasser füllen, kräftig salzen und zum Kochen bringen. Die Vollkornpasta darin nach Packungsanweisung (ca. 8-10 Min.) bissfest garen.",
            "Aromaten vorbereiten: Die Zwiebel und die Knoblauchzehe schälen und in sehr feine Würfel schneiden.",
            "Hackfleisch anbraten: Eine Pfanne ohne zusätzliches Fett erhitzen (das Hackfleisch hat meist genug Eigenfett). Das Rinderhack darin krümelig anbraten, bis es überall Farbe angenommen hat.",
            "Saucenbasis: Zwiebel- und Knoblauchwürfel zum Fleisch geben und glasig dünsten. Mit Oregano, Salz und Pfeffer würzen.",
            "Köcheln lassen: Die passierten Tomaten hinzufügen. Die Hitze reduzieren und die Sauce bei kleiner Flamme und halb offenem Deckel ca. 15 Minuten sanft köcheln lassen, bis sie leicht eingedickt ist.",
            "Servieren: Die Pasta abgießen und kurz abtropfen lassen. Mit der Bolognese-Sauce mischen und auf einem Teller anrichten. Den Parmesan frisch darüber reiben."
          ]
        },
      ],
      Vegetarisch: [
        { 
          name: "Indisches Linsencurry", 
          calories: 600, 
          time: "30 Min", 
          imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
          ingredients: ["80g rote Linsen", "100ml Kokosmilch (fettreduziert)", "60g Basmatireis", "Eine Handvoll frischer Babyspinat", "1 TL Currypulver", "1/2 rote Zwiebel", "Prise Kurkuma", "Gemüsebrühe"],
          instructions: [
            "Reis vorbereiten: Den Basmatireis waschen und nach der Quellmethode (1 Teil Reis auf 2 Teile Wasser) ca. 10-12 Minuten garen.",
            "Vorbereitung Linsen: Die roten Linsen in einem Sieb gründlich waschen, bis das Wasser nicht mehr schäumt.",
            "Basis schaffen: Die Zwiebel fein hacken und in einem Topf mit etwas Öl dünsten. Currypulver und Kurkuma kurz mitrösten (ca. 30 Sek.), damit sich die ätherischen Öle entfalten.",
            "Curry kochen: Die gewaschenen Linsen hinzufügen und mit der Kokosmilch sowie ca. 150ml Gemüsebrühe ablöschen. Einmal aufkochen lassen.",
            "Garen: Die Hitze reduzieren und das Curry ca. 15-20 Minuten köcheln lassen, bis die Linsen die Flüssigkeit fast vollständig aufgenommen haben und weich sind.",
            "Abschluss: Den frischen Spinat unter das heiße Curry rühren, bis er zusammengefallen ist. Mit Salz abschmecken und zusammen mit dem Reis in einer Schüssel anrichten."
          ]
        },
        { 
          name: "Frischer Kichererbsen-Salat", 
          calories: 500, 
          time: "15 Min", 
          imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
          ingredients: ["1 Dose Kichererbsen (240g Abtropfgewicht)", "1/2 Salatgurke", "50g Feta-Käse", "1 EL Olivenöl", "Saft einer halben Zitrone", "Frische glatte Petersilie", "Pfeffer aus der Mühle"],
          instructions: [
            "Kichererbsen vorbereiten: Die Kichererbsen in ein Sieb geben, unter kaltem Wasser abspülen, bis das Wasser klar bleibt, und gut abtropfen lassen.",
            "Gemüse schneiden: Die Gurke waschen, der Länge nach vierteln und in ca. 1 cm große Würfel schneiden. Die Petersilie waschen, trocken schütteln und grob hacken.",
            "Mischen: Die abgetropften Kichererbsen mit den Gurkenwürfeln und der Petersilie in einer großen Schüssel kombinieren.",
            "Dressing: In einem kleinen Glas das Olivenöl mit dem Zitronensaft, Salz und Pfeffer kräftig verrühren.",
            "Käse hinzufügen: Den Feta-Käse direkt über die Schüssel bröseln (nicht schneiden, das sorgt für mehr Textur).",
            "Finalisieren: Das Dressing über den Salat geben, alles vorsichtig unterheben und ca. 5 Minuten ziehen lassen, damit die Aromen in die Kichererbsen einziehen können."
          ]
        },
      ],
      Vegan: [
        { 
          name: "Knusper-Tofu Stir-fry", 
          calories: 550, 
          time: "20 Min", 
          imageUrl: "https://images.unsplash.com/photo-1546069901-5ec6a2a5a33f?auto=format&fit=crop&w=800&q=80",
          ingredients: ["150g Tofu (natur)", "1 rote Paprikaschote", "100g Reisnudeln", "2 EL Erdnussmus/Sauce", "Sesamsamen", "1 Frühlingszwiebel", "Sojasauce"],
          instructions: [
            "Nudeln vorbereiten: Die Reisnudeln in eine hitzebeständige Schüssel geben, mit kochendem Wasser übergießen und ca. 6-8 Minuten (je nach Sorte) weichen lassen. Danach abgießen.",
            "Tofu-Trick: Den Tofu in Würfel schneiden. Wichtig: Die Würfel zwischen mehrere Lagen Küchenpapier legen und fest andrücken, um so viel Feuchtigkeit wie möglich zu entfernen.",
            "Anbraten: Etwas Öl in einer Pfanne stark erhitzen. Den Tofu darin ca. 6-8 Minuten rundherum anbraten, bis er eine goldbraune Kruste hat. Mit einem Schuss Sojasauce ablöschen.",
            "Gemüse garen: Die Paprika in feine Streifen schneiden und zum Tofu geben. Für 3-4 Minuten mitbraten, damit sie knackig bleibt.",
            "Sauce anrühren: Das Erdnussmus mit etwas heißem Wasser und Sojasauce glatt rühren, bis eine cremige Sauce entsteht.",
            "Finish: Die abgetropften Nudeln und die Erdnusssauce in die Pfanne geben, alles gut schwenken. Mit fein geschnittenen Frühlingszwiebeln und Sesamsamen bestreut servieren."
          ]
        },
      ],
      "High Protein": [
        { 
          name: "Gegrilltes Putensteak mit Kräuterquark", 
          calories: 600, 
          time: "20 Min", 
          imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
          ingredients: ["200g Putensteak", "150g Magerquark", "250g gemischtes Gemüse (Zucchini, Paprika)", "Frischer Schnittlauch", "1 TL edelsüßes Paprikapulver", "Zitrone"],
          instructions: [
            "Fleisch vorbereiten: Das Putensteak unter kaltem Wasser abspülen, mit Küchenpapier trocken tupfen und von beiden Seiten mit Salz, Pfeffer und Paprikapulver würzen.",
            "Fleisch braten: Eine Grillpfanne oder normale beschichtete Pfanne erhitzen. Das Steak von jeder Seite ca. 4-5 Minuten bei mittlerer Hitze braten, bis es durchgegart ist.",
            "Quark anrühren: Den Magerquark in eine Schüssel geben. Den Schnittlauch in feine Röllchen schneiden und unter den Quark rühren. Mit einem Spritzer Zitrone, Salz und Pfeffer abschmecken.",
            "Gemüse garen: Die Zucchini und Paprika in mundgerechte Stücke schneiden. In der Pfanne des Steaks (nachdem man es herausgenommen hat) ca. 6-7 Minuten dünsten.",
            "Ruhephase: Das Steak kurz ruhen lassen (ca. 2 Min.), damit sich der Fleischsaft verteilt.",
            "Anrichten: Das Putensteak zusammen mit dem gedünsteten Gemüse auf einem teller anrichten und den Kräuterquark als proteinreichen Dip dazu servieren."
          ]
        },
      ],
      "Low Carb": [
        { 
          name: "Zucchini-Spaghetti (Zoodles) mit Pesto", 
          calories: 400, 
          time: "15 Min", 
          imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80",
          ingredients: ["2 große Zucchini", "2 EL grünes Basilikumpesto", "10g Pinienkerne", "8 Kirschtomaten", "Parmesan am Stück", "Zitronenabrieb"],
          instructions: [
            "Zoodles herstellen: Die Zucchini waschen und die Enden entfernen. Mit einem Spiralschneider zu langen Spaghetti verarbeiten.",
            "Rösten: Die Pinienkerne in einer Pfanne ohne Fett bei mittlerer Hitze goldbraun rösten. Achtung: Sie verbrennen schnell! Danach sofort aus der Pfanne nehmen.",
            "Tomaten vorbereiten: Die Kirschtomaten waschen und halbieren.",
            "Kurz garen: Etwas Olivenöl in der Pfanne erhitzen. Die Zucchini-Nudeln und Tomaten hinzufügen. Nur ca. 2-3 Minuten schwenken. Wichtig: Nicht zu lange garen, da sie sonst matschig werden.",
            "Verfeinern: Die Pfanne vom Herd nehmen. Das Pesto vorsichtig unter die warmen Zoodles heben, bis alles gleichmäßig benetzt ist.",
            "Anrichten: Die Zoodles auf einen Teller geben, mit den gerösteten Pinienkernen, etwas Zitronenabrieb und frisch gehobeltem Parmesan bestreuen."
          ]
        },
      ]
    };

    const selectedPool = recipes[data.diet as keyof typeof recipes] || recipes.Omnivor;

    const mockPlan = days.map(day => {
      // Pick random unique breakfasts if possible or just random from 20
      const randomBreakfast = BREAKFAST_POOL[Math.floor(Math.random() * BREAKFAST_POOL.length)];
      
      return {
        day,
        meals: [
          { 
            type: "Frühstück", 
            ...randomBreakfast,
            type: "Frühstück"
          },
          { 
            type: "Mittagessen", 
            ...selectedPool[Math.floor(Math.random() * selectedPool.length)],
            type: "Mittagessen"
          },
          { 
            type: "Abendessen", 
            name: "Bunte Protein-Salat-Bowl", 
            calories: Math.round(data.calories * 0.35), 
            time: "15 Min", 
            imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            ingredients: ["100g gemischter Blattsalat", "1 Dose Thunfisch (im eigenen Saft) oder 150g Kichererbsen", "1/2 Avocado", "5 Kirschtomaten", "1 EL Joghurt-Dressing", "Kürbiskerne"],
            instructions: [
              "Salat-Basis: Den gemischten Salat gründlich in kaltem Wasser waschen und in einer Salatschleuder trocken schleudern.",
              "Gemüse vorbereiten: Die Kirschtomaten waschen und halbieren. Die Avocado halbieren, den Kern entfernen und das Fruchtfleisch mit einem Löffel herausheben und in Scheiben schneiden.",
              "Proteinquelle: Den Thunfisch (oder die Kichererbsen) in ein Sieb geben, abspülen und gut abtropfen lassen.",
              "Anrichten: Den Salat in eine große Schüssel geben. Den Thunfisch/Kichererbsen, die Avocado und die Tomaten kreisförmig darauf platzieren (sieht appetitlicher aus).",
              "Dressing: Das Joghurt-Dressing über die Zutaten träufeln. Wichtig: Erst kurz vor dem Verzehr hinzufügen, damit der Salat knackig bleibt.",
              "Topping: Zum Schluss eine Handvoll Kürbiskerne über die Bowl streuen für gesunde Fette und einen angenehmen Biss."
            ]
          }
        ].map(m => ({ ...m, type: m.type })) as Meal[]
      };
    });

    setPlan(mockPlan);
  };

  if (!inputData) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="h-16 border-b bg-white sticky top-0 z-50 flex items-center px-4 md:px-8">
        <Button variant="ghost" onClick={() => navigate("/generator")} className="gap-2 text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Button>
        <div className="flex-1 flex justify-center items-center gap-2 pr-20">
          <ChefHat className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">PrepMaster</span>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
              <CheckCircle2 className="w-4 h-4" /> Plan erfolgreich erstellt
            </div>
            <h1 className="text-4xl md:text-5xl font-black">Dein 7-Tage Plan</h1>
            <p className="text-slate-500 mt-2 font-medium">Alle Rezepte sind für <span className="text-primary font-bold">1 Person</span> berechnet.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-xl gap-2 font-bold border-slate-200" onClick={() => window.print()}>
              <Printer className="w-4 h-4" /> Drucken
            </Button>
            <Button className="rounded-xl gap-2 font-bold bg-primary hover:bg-primary/90">
              <ShoppingCart className="w-4 h-4" /> Einkaufsliste
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Summary Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-sm overflow-hidden border border-slate-100">
              <CardHeader className="bg-primary text-white pb-6">
                <CardTitle className="text-lg">Zusammenfassung</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Flame className="w-4 h-4" /> Kalorien Ziel
                    </div>
                    <span className="font-bold">{inputData.calories} kcal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <UtensilsCrossed className="w-4 h-4" /> Diät
                    </div>
                    <span className="font-bold">{inputData.diet}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <Wallet className="w-4 h-4" /> Budget
                    </div>
                    <span className="font-bold">~{inputData.budget}€ / Woche</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-blue-50 border border-blue-100">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                      Die Mengenangaben beziehen sich auf eine Portion pro Mahlzeit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-[2rem] bg-secondary/10 border border-secondary/20">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <ListChecks className="w-4 h-4" /> Batch Cooking
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Bereite Fleisch/Tofu und Kohlenhydrate (Reis/Pasta) für 2-3 Tage vor, um Zeit zu sparen.
              </p>
            </div>
          </div>

          {/* Plan Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="Montag" className="space-y-8">
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
                <TabsList className="bg-transparent h-auto p-0 flex justify-start sm:justify-between min-w-max">
                  {plan.map(day => (
                    <TabsTrigger 
                      key={day.day} 
                      value={day.day}
                      className="rounded-xl px-5 py-3 font-bold data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                    >
                      {day.day}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {plan.map(day => (
                <TabsContent key={day.day} value={day.day} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Accordion type="single" collapsible className="space-y-4">
                    {day.meals.map((meal, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`item-${i}`}
                        className="bg-white px-6 md:px-8 py-2 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden"
                      >
                        <AccordionTrigger className="hover:no-underline py-6">
                          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center w-full text-left">
                            <div className="w-full md:w-24 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 group-hover:bg-primary/5 transition-colors">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{meal.type}</span>
                              <span className="text-2xl">
                                {meal.type === "Frühstück" ? "🥣" : meal.type === "Mittagessen" ? "🥘" : "🥗"}
                              </span>
                            </div>

                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-black">{meal.name}</h3>
                              <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Clock className="w-3 h-3 mr-1 text-primary" /> {meal.time}
                                </Badge>
                                <Badge variant="secondary" className="rounded-full font-bold">
                                  <Flame className="w-3 h-3 mr-1 text-orange-500" /> {meal.calories} kcal
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8 pt-4 border-t border-slate-50">
                          <div className="space-y-8">
                            {/* Hero Image for Recipe */}
                            <div className="relative w-full h-48 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-inner group-image">
                              <img 
                                src={meal.imageUrl} 
                                alt={meal.name} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                                <div className="space-y-1">
                                  <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">Rezept-Vorschau</span>
                                  <h2 className="text-white font-black text-3xl drop-shadow-md">{meal.name}</h2>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
                              <div>
                                <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-3 text-lg">
                                  <div className="p-2 rounded-xl bg-primary/10">
                                    <ListChecks className="w-5 h-5 text-primary" />
                                  </div>
                                  Zutaten (1 Person)
                                </h4>
                                <ul className="space-y-3">
                                  {meal.ingredients.map((ing, j) => (
                                    <li key={j} className="flex items-center gap-4 text-slate-600 font-semibold text-sm p-2 rounded-xl hover:bg-slate-50 transition-colors">
                                      <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0"></div>
                                      {ing}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-3 text-lg">
                                  <div className="p-2 rounded-xl bg-primary/10">
                                    <ChefHat className="w-5 h-5 text-primary" />
                                  </div>
                                  Zubereitungsschritte
                                </h4>
                                <ol className="space-y-5">
                                  {meal.instructions.map((step, j) => (
                                    <li key={j} className="flex gap-4 text-slate-600 text-sm leading-relaxed">
                                      <span className="w-8 h-8 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0 border border-primary/5">
                                        {j + 1}
                                      </span>
                                      <p className="pt-1 font-medium">{step}</p>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Dein Plan wurde mit künstlicher Intelligenz optimiert. Guten Appetit!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Plan;
