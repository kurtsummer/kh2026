import { Camera, Image, ShieldCheck, Heart, Smile, Sparkles } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Gute Laune",
      text: "Bei uns gibt es keine steifen Posen. Wir lachen, wir haben Spaß – und das sieht man auf den Fotos!",
      color: "bg-[#FF7E67]/10 text-[#FF7E67]",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Kreativität",
      text: "Wir lieben bunte Farben und unkonventionelle Hintergründe für einzigartige Bilder.",
      color: "bg-[#45B7AF]/10 text-[#45B7AF]",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Modernste Technik",
      text: "Brillante Farben und gestochen scharfe Details durch High-End-Equipment.",
      color: "bg-[#FFD93D]/10 text-[#FFD93D]",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Herzblut",
      text: "Jedes Shooting ist für uns eine neue Geschichte, die wir mit Liebe zum Detail erzählen.",
      color: "bg-[#2D3436]/10 text-[#2D3436]",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group order-2 lg:order-1">
          <div className="relative z-10 rounded-[40px] overflow-hidden aspect-[3/4] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] -rotate-2 border-[12px] border-white">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
              alt="Max Mustermann - Der fröhliche Fotograf"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FF7E67] rounded-full -z-10 animate-pulse opacity-10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#45B7AF] rounded-full -z-10 animate-pulse delay-200 opacity-10 blur-3xl" />
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-6">
            <h2 className="text-[#FF7E67] font-black tracking-widest uppercase text-sm">Hinter der Kamera</h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#2D3436] leading-tight">
              Hi, ich bin Max!<br />
              <span className="text-[#45B7AF]">Dein Fotograf aus Musterhausen.</span>
            </h3>
            <p className="text-xl text-[#2D3436]/70 leading-relaxed font-medium">
              Vergessen Sie langweilige Porträts. In meinem Studio bringen wir Farbe ins Spiel! Seit über 10 Jahren fange ich das wahre Leben ein – ungeschminkt, voller Energie und mit einem Lächeln im Gesicht. 
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#FAF9F6] p-8 rounded-[32px] group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className={`${value.color} p-4 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="font-black text-[#2D3436] text-xl mb-3">{value.title}</h4>
                <p className="text-sm text-[#2D3436]/60 leading-relaxed font-medium">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
