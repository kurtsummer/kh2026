import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h1 className="text-4xl font-serif mb-8">Impressum</h1>
          
          <h2 className="text-2xl font-serif mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Karl-Heinz Musikduo<br />
            Musterstraße 123<br />
            80331 München
          </p>

          <h2 className="text-2xl font-serif mb-4">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456 789<br />
            E-Mail: hallo@karl-heinz-musik.de
          </p>

          <h2 className="text-2xl font-serif mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 123456789
          </p>

          <h2 className="text-2xl font-serif mb-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-2xl font-serif mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
