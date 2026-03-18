import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436]">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Impressum</h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-[#2D3436]/80">
          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Max Mustermann<br />
              Friseursalon Mustermann<br />
              Hauptstraße 123<br />
              12345 Musterhausen
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Kontakt</h2>
            <p>
              Telefon: 0123 / 456 789<br />
              E-Mail: info@salon-mustermann.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Friseurmeister<br />
              Zuständige Kammer: Handwerkskammer Musterhausen<br />
              Verliehen in: Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Redaktionell verantwortlich</h2>
            <p>Max Mustermann</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#8DA399] underline">https://ec.europa.eu/consumers/odr/</a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
