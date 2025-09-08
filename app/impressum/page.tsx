'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-[#2b3138] font-['Inter']">
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-[#baf742] hover:text-[#a3e635] transition-colors duration-200 mb-8">
              <i className="ri-arrow-left-line"></i>
              Zurück zur Startseite
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-light text-[#2b3138]">
                Impressum
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#baf742] to-[#a3e635] rounded-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg space-y-10">
            {/* Unternehmensangaben */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-[#baf742]"></i>
                </div>
                Unternehmensangaben
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-[#2b3138] mb-2">Unternehmen</h3>
                    <p className="text-gray-600">Tricast360</p>
                    <p className="text-gray-600 text-sm italic">(Brand)</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-[#2b3138] mb-2">Geschäftsführer</h3>
                    <p className="text-gray-600">Galip Alkan</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-[#2b3138] mb-2">Postanschrift</h3>
                    <p className="text-gray-600">
                      Lüneburger Str. 90<br />
                      D-21423 Winsen (Luhe)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-[#baf742]"></i>
                </div>
                Kontakt
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="ri-phone-line text-[#baf742] w-5"></i>
                    <div>
                      <p className="text-[#2b3138] font-medium">Telefon</p>
                      <p className="text-gray-600">+49 170 1002912</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <i className="ri-mail-line text-[#baf742] w-5"></i>
                    <div>
                      <p className="text-[#2b3138] font-medium">E-Mail</p>
                      <p className="text-gray-600">info@tricast360.de</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <i className="ri-global-line text-[#baf742] w-5"></i>
                    <div>
                      <p className="text-[#2b3138] font-medium">Internet</p>
                      <p className="text-gray-600">www.tricast360.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Umsatzsteuer */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-file-text-line text-[#baf742]"></i>
                </div>
                Umsatzsteuer-ID
              </h2>
              
              <p className="text-gray-600">
                Umsatzsteuer-Identifikationsnummer:<br />
                <span className="text-[#2b3138] font-mono">DE [wird bei Bedarf ergänzt]</span>
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-user-line text-[#baf742]"></i>
                </div>
                Verantwortlich für den Inhalt
              </h2>
              
              <p className="text-gray-600">
                Verantwortlich für den Inhalt:<br />
                <span className="text-[#2b3138]">Galip Alkan</span><br />
                Lüneburger Str. 90<br />
                D-21423 Winsen (Luhe)
              </p>
            </section>

            {/* Haftungsausschluss */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-shield-line text-[#baf742]"></i>
                </div>
                Haftungsausschluss
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Haftung für Inhalte</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht 
                    unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Haftung für Links</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Urheberrecht</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>

            {/* Kontakt-CTA */}
            <section className="border-t border-gray-300 pt-10">
              <div className="bg-[#baf742]/5 rounded-2xl p-6 border border-[#baf742]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-question-line text-[#baf742] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2b3138]">Fragen zum Impressum?</h3>
                    <p className="text-gray-600 text-sm">Wir helfen Ihnen gerne weiter</p>
                  </div>
                </div>
                <Link href="/#kontakt" className="inline-flex items-center gap-2 bg-[#baf742] text-[#2b3138] px-6 py-3 rounded-xl font-medium hover:bg-[#a3e635] transition-all duration-200">
          <i className="ri-message-line"></i>
          Kontakt aufnehmen
        </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}