import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Anfrage erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <img src="/logo.png" alt="" className="w-64 grayscale" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-secondary font-serif">Fragen Sie Ihren Wunschtermin an</h2>
              <p className="text-lg text-text/80 mb-10 leading-relaxed">
                Haben Sie Fragen oder möchten Sie direkt prüfen, ob wir an Ihrem Wunschtermin noch Zeit haben? 
                Schreiben Sie uns eine Nachricht – unverbindlich und unkompliziert. Wir freuen aus auf Ihre Anfrage!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">E-Mail</h4>
                    <p className="text-text/70">hallo@karl-heinz-musik.de</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Telefon</h4>
                    <p className="text-text/70">+49 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Einsatzgebiet</h4>
                    <p className="text-text/70">Großraum Süddeutschland & Österreich (auf Anfrage europaweit)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-primary/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ihr Name</Label>
                    <Input id="name" placeholder="Vor- und Nachname" required className="border-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail Adresse</Label>
                    <Input id="email" type="email" placeholder="beispiel@mail.de" required className="border-primary/20" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="occasion">Anlass der Feier</Label>
                    <Input id="occasion" placeholder="z.B. Hochzeit, Geburtstag..." required className="border-primary/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Datum (optional)</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40 h-4 w-4" />
                      <Input id="date" type="date" className="pl-10 border-primary/20" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Veranstaltungsort</Label>
                  <Input id="location" placeholder="Ort oder Location" className="border-primary/20" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Erzählen Sie uns ein wenig über Ihre geplante Feier..." 
                    rows={4} 
                    required 
                    className="border-primary/20"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send size={20} />
                      </motion.div>
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={20} />
                      Unverbindliche Anfrage senden
                    </span>
                  )}
                </Button>
                
                <p className="text-[10px] text-center text-text/40">
                  Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
