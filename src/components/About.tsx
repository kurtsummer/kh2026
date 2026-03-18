import { Camera, Image, ShieldCheck, Heart } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Präzision",
      text: "Ein Auge für jedes Detail. Wir nutzen modernste Technik für scharfe und lebendige Aufnahmen.",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Authentizität",
      text: "Natürliche Momente statt gestellter Posen. Wir fangen Ihre wahre Persönlichkeit ein.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Diskretion",
      text: "Absolute Vertraulichkeit bei Business-Projekten und privaten Momenten.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Leidenschaft",
      text: "Wir lieben, was wir tun, und das sieht man in jedem einzelnen Foto.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
              alt="Max Mustermann - Der Fotograf in Aktion"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C5A059] rounded-2xl -z-10 animate-pulse opacity-20" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2D3436] rounded-2xl -z-10 animate-pulse delay-100 opacity-10" />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-[#C5A059] font-semibold tracking-widest uppercase text-sm">Hinter der Linse</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D3436]">
              Ich bin Max Mustermann – Ihr Fotograf aus Musterhausen.
            </h3>
            <p className="text-lg text-[#2D3436]/70 leading-relaxed">
              Seit über 10 Jahren ist die Fotografie meine Ausdrucksform. Was als Hobby begann, entwickelte sich schnell zur Leidenschaft und schließlich zum Beruf. 
              In meinem Studio in Musterhausen schaffe ich eine entspannte Atmosphäre, in der Sie sich wohlfühlen – denn nur so entstehen echte, ungestellte Bilder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 group">
                <div className="bg-[#C5A059]/10 p-3 rounded-xl h-fit text-[#C5A059] transition-colors group-hover:bg-[#C5A059] group-hover:text-white">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#2D3436] mb-1">{value.title}</h4>
                  <p className="text-sm text-[#2D3436]/60 leading-relaxed">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
