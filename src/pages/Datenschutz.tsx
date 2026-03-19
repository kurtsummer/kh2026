import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-slate-900">Datenschutz</h1>
        
        <div className="space-y-12 text-lg leading-relaxed text-slate-600 font-medium">
          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Allgemeine Hinweise</h3>
            <p className="mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3 className="text-xl font-bold text-slate-800 my-4">Externes Hosting</h3>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>
          </section>

          <section className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
