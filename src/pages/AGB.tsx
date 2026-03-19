import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h1 className="text-4xl font-serif mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <h2 className="text-2xl font-serif mb-4">1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Verträge über die Erbringung von musikalischen Dienstleistungen durch das Duo Karl-Heinz.
          </p>

          <h2 className="text-2xl font-serif mb-4">2. Vertragsschluss</h2>
          <p>
            Ein Vertrag kommt durch die schriftliche Bestätigung eines Angebots (per E-Mail ausreichend) zustande.
          </p>

          <h2 className="text-2xl font-serif mb-4">3. Leistungen</h2>
          <p>
            Umfang und Art der Leistungen ergeben sich aus dem jeweiligen Angebot. Die Musiker sind in der Gestaltung ihres 
            künstlerischen Programms frei, sofern keine expliziten Musikwünsche vereinbart wurden.
          </p>

          <h2 className="text-2xl font-serif mb-4">4. Stornierung</h2>
          <p>
            Bei Stornierung des Auftrags durch den Auftraggeber können Stornogebühren anfallen, deren Höhe sich nach dem Zeitpunkt der Absage richtet.
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

export default AGB;
