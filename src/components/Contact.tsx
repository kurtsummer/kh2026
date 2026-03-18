import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-teal-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-3">Kontakt</h2>
            <p className="text-4xl md:text-5xl font-bold text-teal-950 mb-6">
              Wir sind für Sie da
            </p>
            <p className="text-teal-800/60 text-lg mb-12">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
              Nutzen Sie unser Kontaktformular oder rufen Sie uns direkt an.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Adresse</h4>
                  <p className="text-teal-800/70">Musterstraße 123, 12345 Musterhausen</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">Telefon</h4>
                  <p className="text-teal-800/70">01234 / 56789</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="text-teal-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-950">E-Mail</h4>
                  <p className="text-teal-800/70">info@praxis-mustermann.de</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-teal-900/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-teal-950">Name</label>
                  <Input placeholder="Max Mustermann" className="rounded-xl border-teal-100 focus:border-teal-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-teal-950">E-Mail</label>
                  <Input type="email" placeholder="max@beispiel.de" className="rounded-xl border-teal-100 focus:border-teal-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-teal-950">Betreff</label>
                <Input placeholder="Terminanfrage / Rezept" className="rounded-xl border-teal-100 focus:border-teal-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-teal-950">Nachricht</label>
                <Textarea placeholder="Wie können wir Ihnen helfen?" className="min-h-[150px] rounded-xl border-teal-100 focus:border-teal-500" />
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl h-14 text-lg gap-2">
                Nachricht senden
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
