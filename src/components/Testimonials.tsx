import { Star, Quote, Heart, Coffee, Utensils, Zap } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sabine Müller",
      role: "Stammgast",
      content: "Max' Apfelstrudel ist legendär! Man schmeckt einfach die Liebe zum Handwerk. Ein absolutes Muss in Musterhausen.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
      icon: <Coffee className="w-5 h-5" />
    },
    {
      name: "Thomas Schmidt",
      role: "Kaffeeliebhaber",
      content: "Die hauseigene Röstung ist der Wahnsinn. Ich komme jeden Morgen für meinen Espresso. Der Service ist immer herzlich.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1552058544-1271d75d4c92?q=80&w=150&auto=format&fit=crop",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Julia Weber",
      role: "Design-Enthusiastin",
      content: "Wunderschönes Ambiente und tolles Licht. Perfekt zum Arbeiten oder zum Entspannen. Das Avocado-Brot war köstlich!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      icon: <Utensils className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0A1A17] transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#16332C]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="inline-flex items-center gap-2 bg-[#C5A059]/10 text-[#C5A059] px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-current" />
            <span>Stimmen unserer Gäste</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-none tracking-tight">
            Was man über uns <br />
            <span className="text-[#C5A059]">erzählt.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#FDF8F1] dark:bg-zinc-900 p-10 md:p-12 rounded-[56px] shadow-2xl hover:shadow-3xl transition-all duration-500 border border-[#C5A059]/10 flex flex-col justify-between group relative overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 -right-6 p-10 bg-[#C5A059]/5 rounded-full text-[#C5A059] opacity-20 group-hover:scale-125 transition-transform duration-700">
                 <Quote size={120} />
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex text-[#C5A059] gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-black text-[#16332C] dark:text-[#FDF8F1] leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-6 mt-12 relative z-10">
                <div className="relative">
                  <div className="w-20 h-20 rounded-[28px] overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#C5A059] p-3 rounded-2xl text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                     {review.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#16332C] dark:text-[#FDF8F1]">
                    {review.name}
                  </h4>
                  <p className="text-sm font-black text-[#C5A059] uppercase tracking-widest mt-1">
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
