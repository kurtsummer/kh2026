import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436]">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-[#2D3436]/80">
          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 1 Geltungsbereich</h2>
            <p>Diese Geschäftsbedingungen gelten für alle Dienstleistungen und Verkäufe von Max Mustermann Salon gegenüber seinen Kunden, soweit nicht ausdrücklich etwas anderes vereinbart wurde.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 2 Vertragsschluss</h2>
            <p>Ein Vertrag kommt durch die Annahme der Terminbuchung oder durch die Inanspruchnahme einer Dienstleistung in unserem Salon zustande.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 3 Termine und Absagen</h2>
            <p>Termine werden verbindlich vergeben. Sollte ein Termin nicht wahrgenommen werden können, bitten wir um eine Absage mindestens 24 Stunden im Voraus. Bei nicht fristgerechter Absage behalten wir uns vor, eine Ausfallgebühr in Höhe von 50% der gebuchten Leistung in Rechnung zu stellen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 4 Preise und Zahlung</h2>
            <p>Es gelten die Preise der aktuellen Preisliste. Die Zahlung erfolgt unmittelbar nach Erbringung der Dienstleistung in bar oder per EC-Karte.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 5 Haftung</h2>
            <p>Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Für mitgebrachte Kleidung oder Wertgegenstände der Kunden übernehmen wir keine Haftung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">§ 6 Datenschutz</h2>
            <p>Die Verarbeitung personenbezogener Daten erfolgt ausschließlich zur Vertragserfüllung und gemäß den gesetzlichen Bestimmungen (DSGVO). Details finden Sie in unserer Datenschutzerklärung.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
