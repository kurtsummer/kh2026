import { Star, Quote, Heart, Coffee, Utensils, Zap } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sabine Müller",
      role: "Genießerin",
      content: "Die Sachertorte hier ist besser als in Wien selbst. Die Atmosphäre ist einmalig, man fühlt sich direkt in ein anderes Jahrhundert versetzt.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      icon: <Coffee className="w-5 h-5" />
    },
    {
      name: "Thomas Schmidt",
      role: "Kritiker",
      content: "Endlich ein Café, das die Melange richtig zubereitet. Die Bedienung ist zuvorkommend und der Gastgarten im Sommer ein Traum.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1552058544-1271d75d4c92?q=80&w=150&auto=format&fit=crop",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Julia Weber",
      role: "Stammgast",
      content: "Mein zweites Wohnzimmer. Ob zum Lesen oder zum Sonntagsfrühstück mit der Familie – Max und sein Team machen jeden Besuch besonders.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      icon: <Utensils className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-[#FDF5E6] dark:bg-[#1A0A0A]/20 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#800020]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="inline-flex items-center gap-2 bg-[#800020]/10 dark:bg-[#D4AF37]/10 text-[#800020] dark:text-[#D4AF37] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest border border-[#800020]/20">
            <Heart className="w-4 h-4 fill-current" />
            <span>Stimmen unserer Gäste</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] leading-none tracking-tight">
            Was man über uns <br />
            <span className="text-[#800020]">erzählt.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-10 md:p-12 rounded-[56px] shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#D4AF37]/10 flex flex-col justify-between group relative overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 -right-6 p-10 bg-[#800020]/5 rounded-full text-[#800020] opacity-10 group-hover:scale-125 transition-transform duration-700">
                 <Quote size={120} />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex text-[#D4AF37] gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6] leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-6 mt-12 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-[28px] overflow-hidden border-4 border-[#FDF5E6] dark:border-zinc-800 shadow-xl">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#800020] p-3 rounded-2xl text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500 border border-[#D4AF37]/40">
                     {review.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-serif font-black text-[#3D2B1F] dark:text-[#FDF5E6]">
                    {review.name}
                  </h4>
                  <p className="text-sm font-black text-[#800020] uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
