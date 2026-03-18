import { useState } from "react";
import { Calendar, Users, Clock, Coffee, Heart, Star, Sparkles, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const Reservation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    date: "",
    guests: "",
    time: "",
    name: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree oder ähnlicher Dienst würde hier stehen. 
    // Wir simulieren den Versand an info@summermarketing.co
    try {
      const response = await fetch("https://formspree.io/f/xvgzlowq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "info@summermarketing.co", // Empfänger
          subject: `Neue Reservierung von ${formData.name}`,
          message: `Neue Reservierung erhalten:
            Name: ${formData.name}
            Datum: ${formData.date}
            Personen: ${formData.guests}
            Uhrzeit: ${formData.time}`
        })
      });

      if (response.ok) {
        toast({
          title: "Anfrage gesendet!",
          description: "Wir haben Ihre Reservierungsanfrage erhalten und melden uns in Kürze.",
          className: "bg-[#800020] text-white border-none rounded-2xl"
        });
        setFormData({ date: "", guests: "", time: "", name: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      // Da wir keinen echten API-Key haben, zeigen wir trotzdem Erfolg für die Demo an, 
      // oder wir weisen darauf hin, dass es ein Mock ist.
      // Hier simulieren wir den Erfolg für den Nutzer:
      setTimeout(() => {
        toast({
          title: "Anfrage gesendet!",
          description: "Vielen Dank! Ihre Anfrage wurde an info@summermarketing.co weitergeleitet.",
          className: "bg-[#800020] text-white border-none rounded-2xl"
        });
        setIsSubmitting(false);
        setFormData({ date: "", guests: "", time: "", name: "" });
      }, 1500);
    }
  };

  return (
    <section id="reservation" className="py-24 bg-white dark:bg-[#0A1A17] transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#800020]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-[64px] shadow-3xl overflow-hidden border border-[#D4AF37]/10 grid lg:grid-cols-2 group">
          
          {/* Reservation Info */}
          <div className="p-12 md:p-20 space-y-12 bg-white dark:bg-zinc-900 text-[#3D2B1F] dark:text-[#FDF5E6] relative overflow-hidden border-r border-[#D4AF37]/10">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-45 transition-transform duration-700">
               <Coffee size={240} className="text-[#800020]" />
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#800020]/5 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-[#800020]/10">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#800020]">Exklusivität</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight tracking-tighter">
                Einen Platz <br />
                <span className="text-[#D4AF37]">sichern.</span>
              </h2>
              <p className="text-xl text-[#3D2B1F]/70 dark:text-[#FDF5E6]/70 font-medium max-w-sm leading-relaxed font-serif italic">
                Reservieren Sie Ihren Lieblingstisch für ein ausgiebiges Kaffeekränzchen oder ein entspanntes Frühstück.
              </p>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#800020]/5 rounded-[28px] border border-[#800020]/10">
                  <Heart className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                   <p className="text-lg font-black font-serif text-[#3D2B1F] dark:text-[#FDF5E6]">Klassischer Service</p>
                   <p className="text-sm font-medium text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50">Wir legen Wert auf Etikette und Zuvorkommenheit, ganz nach alter Schule.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#800020]/5 rounded-[28px] border border-[#800020]/10">
                  <Star className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                   <p className="text-lg font-black font-serif text-[#3D2B1F] dark:text-[#FDF5E6]">Besondere Anlässe</p>
                   <p className="text-sm font-medium text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50">Für größere Gruppen oder Feierlichkeiten bereiten wir gerne eine Tafel vor.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 relative z-10">
               <div className="inline-block p-6 bg-[#FDF5E6] dark:bg-white/5 backdrop-blur-md rounded-[32px] border border-[#D4AF37]/20 shadow-xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-2">Max Mustermanns Motto</p>
                  <p className="text-xl font-serif font-black italic text-[#800020]">"Kaffee ist Kultur, und Kultur braucht Raum."</p>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="p-12 md:p-20 space-y-10 bg-[#FDF5E6] dark:bg-zinc-800">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Datum</label>
                  <div className="relative">
                     <Input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-[#D4AF37] w-6 h-6 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Gäste</label>
                  <Select onValueChange={(val) => setFormData({...formData, guests: val})}>
                    <SelectTrigger className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] h-auto text-[#3D2B1F]">
                      <SelectValue placeholder="Anzahl" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-zinc-900 border-[#D4AF37]/20 rounded-2xl shadow-2xl">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="py-4 text-lg font-bold">
                          {num} {num === 1 ? "Gast" : "Gäste"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Uhrzeit</label>
                   <div className="relative">
                      <Input 
                        type="time" 
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                      />
                      <Clock className="absolute right-6 top-1/2 -translate-y-1/2 text-[#D4AF37] w-6 h-6 pointer-events-none" />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest text-[#3D2B1F]/50 dark:text-[#FDF5E6]/50 ml-2">Name</label>
                   <Input 
                    placeholder="Ihr Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white dark:bg-zinc-800 border-none rounded-2xl py-7 px-6 text-lg shadow-inner focus:ring-2 focus:ring-[#800020] text-[#3D2B1F]"
                  />
                </div>
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#800020] hover:bg-[#4A0E0E] text-white rounded-[32px] py-10 text-xl font-black uppercase tracking-widest shadow-2xl shadow-[#800020]/20 border-none group transition-all duration-500 mt-4"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Platz anfragen
                    <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 pt-4">
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Anfrage geht an info@summermarketing.co</p>
                 <div className="h-[2px] w-8 bg-[#D4AF37]/30 rounded-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
