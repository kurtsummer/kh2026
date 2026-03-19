import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-slate-900">Impressum</h1>
        
        <div className="space-y-12 text-lg leading-relaxed text-slate-600 font-medium">
          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Angaben gemäß § 5 TMG</h2>
            <p className="space-y-1">
              Max Mustermann<br />
              Podologie & Fußpflege Mustermann<br />
              Musterstraße 12<br />
              12345 Musterhausen
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Kontakt</h2>
            <p className="space-y-1">
              Telefon: 01234 56789<br />
              E-Mail: kontakt@fusspflege-mustermann.de
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="space-y-4">
              Berufsbezeichnung: Podologe (verliehen in der Bundesrepublik Deutschland)<br />
              Zuständige Kammer: Gesundheitsamt Musterstadt<br />
              Es gelten folgende berufsrechtliche Regelungen: Podologengesetz (PodG), Ausbildungs- und Prüfungsverordnung für Podologinnen und Podologen (PodAPrV).
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Redaktionell verantwortlich</h2>
            <p>Max Mustermann</p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline hover:text-cyan-700">https://ec.europa.eu/consumers/odr/</a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
