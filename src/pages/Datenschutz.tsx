import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h1 className="text-4xl font-serif mb-8">Datenschutzerklärung</h1>
          
          <h2 className="text-2xl font-serif mb-4">1. Datenschutz auf einen Blick</h2>
          <p>
            Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung von personenbezogenen Daten 
            innerhalb unseres Onlineangebotes.
          </p>

          <h2 className="text-2xl font-serif mb-4">2. Datenerfassung auf dieser Website</h2>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum entnehmen.
            Wir erheben Ihre Daten einerseits dadurch, dass Sie uns diese mitteilen (z. B. durch das Kontaktformular). 
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten).
          </p>

          <h2 className="text-2xl font-serif mb-4">3. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen 
            Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
          </p>
          
          <p className="mt-8 text-sm text-text/50">
            Hinweis: Dies ist ein Platzhalter. Für eine rechtssichere Website sollten diese Texte von einem Fachanwalt geprüft werden.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
