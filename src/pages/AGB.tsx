import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-[#2D3436]">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-12">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="space-y-12 text-lg leading-relaxed text-[#2D3436]/80 font-medium">
          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 1 Geltungsbereich</h2>
            <p>Diese Geschäftsbedingungen gelten für alle Dienstleistungen und Reservierungen des Restaurant Max gegenüber seinen Kunden, soweit nicht ausdrücklich etwas anderes vereinbart wurde.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 2 Vertragsschluss</h2>
            <p>Ein Bewirtungsvertrag kommt durch die Bestätigung einer Tischreservierung (mündlich, schriftlich oder elektronisch) oder durch das Platznehmen und die Bestellung von Speisen und Getränken im Restaurant zustande.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 3 Reservierungen und Stornierungen</h2>
            <p>Reservierungen sind für beide Seiten verbindlich. Wir halten Ihren Tisch für bis zu 20 Minuten nach der vereinbarten Zeit frei. Bei größeren Gruppen (ab 10 Personen) bitten wir um eine Stornierung mindestens 48 Stunden im Voraus. Bei unentschuldigtem Nichterscheinen behalten wir uns vor, eine angemessene Aufwandsentschädigung pro Person zu berechnen.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 4 Preise und Zahlung</h2>
            <p>Es gelten die Preise der aktuellen Speisekarte. Die Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt unmittelbar nach Erbringung der Dienstleistung in bar, per EC-Karte oder Kreditkarte.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 5 Haftung</h2>
            <p>Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Für mitgebrachte Kleidung oder Wertgegenstände der Gäste (z.B. an der Garderobe) übernehmen wir keine Haftung, es sei denn, es liegt eine ausdrückliche Verwahrung vor.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#2D3436]/5">
            <h2 className="text-2xl font-black text-[#2D3436] mb-4">§ 6 Jugendschutz</h2>
            <p>Die Abgabe von alkoholischen Getränken erfolgt gemäß den Bestimmungen des Jugendschutzgesetzes. Wir behalten uns vor, bei Zweifeln eine Alterskontrolle durchzuführen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
