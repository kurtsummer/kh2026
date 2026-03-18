import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F1] text-[#16332C]">
      <Navbar />
      <main className="container mx-auto px-6 py-32 md:py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black mb-12">Datenschutzerklärung</h1>
        
        <div className="space-y-12 text-lg leading-relaxed text-[#16332C]/80 font-medium">
          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#16332C]/5">
            <h2 className="text-2xl font-black text-[#16332C] mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-black mb-2 text-[#C5A059]">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#16332C]/5">
            <h2 className="text-2xl font-black text-[#16332C] mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-black mb-2 text-[#C5A059]">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber: Café Mustermann, Inhaber Max Mustermann. Die Kontaktdaten finden Sie im Impressum.</p>
            <h3 className="text-xl font-black mt-6 mb-2 text-[#C5A059]">Wie erfassen wir Ihre Daten?</h3>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei handelt es sich z. B. um Daten, die Sie in ein Reservierungs- oder Kontaktformular eingeben (Name, E-Mail, Datum, Gästeanzahl). Andere Daten werden automatisch durch unsere IT-Systeme erfasst (z. B. IP-Adresse, Browser-Typ).</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#16332C]/5">
            <h2 className="text-2xl font-black text-[#16332C] mb-4">3. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem Anbieter geschlossen, um den Schutz Ihrer Daten zu gewährleisten.</p>
          </section>

          <section className="bg-white p-10 rounded-[40px] shadow-sm border border-[#16332C]/5">
            <h2 className="text-2xl font-black text-[#16332C] mb-4">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Zudem können Sie unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen oder der Verarbeitung widersprechen.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
