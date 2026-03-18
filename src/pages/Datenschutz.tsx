import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436]">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-[#2D3436]/80">
          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-bold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <h3 className="text-xl font-bold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">3. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <p className="font-bold">Externes Hosting</p>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Dies können v. a. IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, sein.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-bold mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-4">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
