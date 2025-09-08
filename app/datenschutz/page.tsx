'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Datenschutz() {
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
                Datenschutzerklärung
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#baf742] to-[#a3e635] rounded-full"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Ihre Privatsphäre ist uns wichtig. Hier erfahren Sie, wie wir mit Ihren Daten umgehen.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg space-y-10">
            
            {/* Verantwortlicher */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-user-line text-[#baf742]"></i>
                </div>
                1. Verantwortlicher
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-600 mb-4">Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="text-[#2b3138]">
                  <p className="font-medium">Tricast360</p>
                  <p>Galip Alkan</p>
                  <p>Lüneburger Str. 90</p>
                  <p>D-21423 Winsen (Luhe)</p>
                  <p className="mt-3">
                    Telefon: +49 170 1002912<br/>
                    E-Mail: info@tricast360.de
                  </p>
                </div>
              </div>
            </section>

            {/* Allgemeine Hinweise */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-information-line text-[#baf742]"></i>
                </div>
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Datenschutz</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                    dieser Datenschutzerklärung.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Datenerfassung auf dieser Website</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Ihre Rechte</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                    oder Löschung dieser Daten zu verlangen.
                  </p>
                  <div className="bg-[#baf742]/5 rounded-xl p-4 border border-[#baf742]/20">
                    <p className="text-[#2b3138] text-sm">
                      <strong>Kontakt:</strong> Bei Fragen zum Datenschutz wenden Sie sich gerne an uns unter 
                      info@tricast360.de
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Datenerfassung */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-database-line text-[#baf742]"></i>
                </div>
                3. Datenerfassung auf dieser Website
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Server-Log-Dateien</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Browsertyp und Browserversion</li>
                      <li>• Verwendetes Betriebssystem</li>
                      <li>• Referrer URL</li>
                      <li>• Hostname des zugreifenden Rechners</li>
                      <li>• Uhrzeit der Serveranfrage</li>
                      <li>• IP-Adresse</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">Kontaktformular</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <div className="bg-[#baf742]/5 rounded-xl p-4 border border-[#baf742]/20">
                    <p className="text-[#2b3138] text-sm">
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br/>
                      <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#2b3138] mb-3">E-Mail-Verkehr</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wenn Sie uns per E-Mail kontaktieren, wird Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht 
                    zur Bearbeitung Ihres Anliegens gespeichert. Die in diesem Zusammenhang anfallenden Daten 
                    löschen wir, nachdem die Speicherung nicht mehr erforderlich ist.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-cake-line text-[#baf742]"></i>
                </div>
                4. Cookies
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät 
                  speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-shield-check-line text-[#baf742]"></i>
                      Notwendige Cookies
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können 
                      nicht deaktiviert werden.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-bar-chart-line text-[#baf742]"></i>
                      Analytische Cookies
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                      Diese sind optional.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <i className="ri-information-line text-blue-600 mr-2"></i>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden 
                    und Cookies nur im Einzelfall erlauben.
                  </p>
                </div>
              </div>
            </section>

            {/* SSL/TLS */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-lock-line text-[#baf742]"></i>
                </div>
                5. SSL- bzw. TLS-Verschlüsselung
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                  eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass 
                  die Adresszeile des Browsers von „http://" auf „https://" wechselt.
                </p>
                
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center gap-3">
                    <i className="ri-shield-check-line text-green-600 text-xl"></i>
                    <div>
                      <p className="text-green-800 font-medium">Sichere Übertragung</p>
                      <p className="text-green-700 text-sm">
                        Alle Daten werden verschlüsselt zwischen Ihrem Browser und unserem Server übertragen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ihre Rechte */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-user-settings-line text-[#baf742]"></i>
                </div>
                6. Ihre Rechte nach der DSGVO
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-eye-line text-[#baf742]"></i>
                      Auskunftsrecht
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sie haben das Recht, Auskunft über die Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-edit-line text-[#baf742]"></i>
                      Berichtigungsrecht
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sie haben das Recht, die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-delete-bin-line text-[#baf742]"></i>
                      Löschungsrecht
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, soweit gesetzlich zulässig.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="text-[#2b3138] font-medium mb-2 flex items-center gap-2">
                      <i className="ri-download-line text-[#baf742]"></i>
                      Datenübertragbarkeit
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sie haben das Recht, Ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#baf742]/5 rounded-2xl p-6 border border-[#baf742]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                    <i className="ri-customer-service-line text-[#baf742] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2b3138]">Ihre Rechte wahrnehmen</h3>
                    <p className="text-gray-600 text-sm">Kontaktieren Sie uns jederzeit</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#baf742] text-[#2b3138] px-6 py-3 rounded-xl font-medium hover:bg-[#a3e635] transition-all duration-200">
                      <i className="ri-mail-line"></i>
                      Kontakt aufnehmen
                    </Link>
                  <a href="mailto:info@tricast360.de" className="inline-flex items-center gap-2 border border-[#baf742] text-[#baf742] px-6 py-3 rounded-xl font-medium hover:bg-[#baf742]/10 transition-all duration-200">
                    <i className="ri-mail-line"></i>
                    Direkte E-Mail
                  </a>
                </div>
              </div>
            </section>

            {/* Änderungen */}
            <section className="space-y-6 border-t border-gray-300 pt-10">
              <h2 className="text-2xl font-semibold text-[#2b3138] flex items-center gap-3">
                <div className="w-8 h-8 bg-[#baf742]/10 rounded-lg flex items-center justify-center">
                  <i className="ri-refresh-line text-[#baf742]"></i>
                </div>
                7. Änderungen der Datenschutzerklärung
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-[#2b3138] text-sm">
                  <strong>Stand dieser Datenschutzerklärung:</strong> August 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}