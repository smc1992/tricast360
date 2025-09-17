
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c14] border-t border-gray-700 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#baf742]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#baf742]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto py-16 relative z-10">
        {/* 4-Spalten-Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Spalte 1: Unternehmen */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center group mb-4">
                <img 
                  src="/images/1x/1x/1x/Tricast360 Logo hell.webp" 
                  alt="Tricast360 Logo" 
                  className="h-12 w-auto group-hover:scale-105 transition-all duration-300"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed text-sm">
                Revolutionärer 360°-Baumschutz für eine nachhaltige Zukunft. Werkzeuglos, wiederverwendbar, konform.
              </p>
            </div>
            
            {/* Zertifikate */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1 bg-[#baf742]/10 text-[#baf742] px-2 py-1 rounded-full text-xs border border-[#baf742]/20">
                <i className="ri-leaf-line text-xs"></i>
                <span>CO₂-neutral</span>
              </div>
              <div className="flex items-center gap-1 bg-[#baf742]/10 text-[#baf742] px-2 py-1 rounded-full text-xs border border-[#baf742]/20">
                <i className="ri-recycle-line text-xs"></i>
                <span>10× nutzbar</span>
              </div>
            </div>
          </div>

          {/* Spalte 2: Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Links</h3>
            <div className="space-y-3">
              <Link href="/system" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                System entdecken
              </Link>
              <Link href="/ueber-uns" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Über uns
              </Link>
              <Link href="/#vision-2025" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Vision 2025
              </Link>
              <Link href="/#umwelt" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Umweltvorteile
              </Link>
              <Link href="/#funktionsweise" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                So funktioniert's
              </Link>
            </div>
          </div>

          {/* Spalte 3: Kontakt */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Kontakt</h3>
            <div className="space-y-4">
              {/* E-Mail */}
              <div className="flex items-start gap-3">
                <i className="ri-mail-line text-[#baf742] text-lg mt-0.5"></i>
                <div>
                  <p className="text-gray-400 text-xs mb-1">E-Mail</p>
                  <a 
                    href="mailto:info@tricast360.de" 
                    className="text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm"
                  >
                    info@tricast360.de
                  </a>
                </div>
              </div>
              
              {/* Telefon */}
              <div className="flex items-start gap-3">
                <i className="ri-phone-line text-[#baf742] text-lg mt-0.5"></i>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Telefon</p>
                  <a 
                    href="tel:+491701002912" 
                    className="text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm"
                  >
                    +49 170 1002912
                  </a>
                </div>
              </div>
              
              {/* Adresse */}
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#baf742] text-lg mt-0.5"></i>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Adresse</p>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Lüneburger Str. 90<br />
                    D-21423 Winsen (Luhe)
                  </div>
                </div>
              </div>
              
              {/* Öffnungszeiten */}
              <div className="flex items-start gap-3">
                <i className="ri-time-line text-[#baf742] text-lg mt-0.5"></i>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Öffnungszeiten</p>
                  <p className="text-gray-300 text-sm">Mo-Fr 8:00-18:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Spalte 4: Rechtliches */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Rechtliches</h3>
            <div className="space-y-3">
              <Link href="/impressum" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="block text-gray-300 hover:text-[#baf742] transition-colors duration-200 text-sm">
                Kontakt
              </Link>
            </div>
            
            {/* Zusätzliche Infos */}
            <div className="pt-4 border-t border-gray-700">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <i className="ri-shield-check-line text-[#baf742]"></i>
                  <span>DSGVO-konform</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                   <i className="ri-award-line text-[#baf742]"></i>
                   <span>Qualitätsgeprüft</span>
                 </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <i className="ri-truck-line text-[#baf742]"></i>
                  <span>Deutschlandweit</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Tricast360. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-heart-line text-red-400"></i>
                <span>Made in Germany</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <i className="ri-leaf-line text-[#baf742]"></i>
                <span>Klimaneutral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
