
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-slate-900 border-t border-emerald-800/30 font-inter relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="ri-tree-line text-white text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold text-white">Tricast360</span>
                <span className="text-xs text-emerald-400 font-medium">Nachhaltige Innovation</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Umweltschutz trifft Innovation. Unser modulares 360°-System revolutioniert 
              den nachhaltigen Baumschutz für eine grünere, klimafreundliche Zukunft.
            </p>

            {/* Umwelt-Zertifikate */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-emerald-900/40 text-emerald-300 px-3 py-2 rounded-full text-sm border border-emerald-700/50">
                <i className="ri-leaf-line text-xs"></i>
                <span>CO₂-neutral</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-900/40 text-teal-300 px-3 py-2 rounded-full text-sm border border-teal-700/50">
                <i className="ri-recycle-line text-xs"></i>
                <span>100% recyclebar</span>
              </div>
              <div className="flex items-center gap-2 bg-green-900/40 text-green-300 px-3 py-2 rounded-full text-sm border border-green-700/50">
                <i className="ri-award-line text-xs"></i>
                <span>Öko-zertifiziert</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-800/40 rounded-xl flex items-center justify-center hover:bg-emerald-700/50 transition-colors duration-200 cursor-pointer border border-emerald-700/30 hover:border-emerald-600/50">
                <i className="ri-linkedin-line text-emerald-300 text-lg"></i>
              </div>
              <a href="mailto:info@tricast360.de" className="w-10 h-10 bg-teal-800/40 rounded-xl flex items-center justify-center hover:bg-teal-700/50 transition-colors duration-200 cursor-pointer border border-teal-700/30 hover:border-teal-600/50">
                <i className="ri-mail-line text-teal-300 text-lg"></i>
              </a>
              <div className="w-10 h-10 bg-green-800/40 rounded-xl flex items-center justify-center hover:bg-green-700/50 transition-colors duration-200 cursor-pointer border border-green-700/30 hover:border-green-600/50">
                <i className="ri-phone-line text-green-300 text-lg"></i>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <i className="ri-building-line text-emerald-400"></i>
              Unternehmen
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/ueber-uns" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                <i className="ri-team-line text-sm opacity-60 group-hover:opacity-100"></i>
                Unser Team
              </Link>
              <a href="#funktionsweise" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                <i className="ri-settings-line text-sm opacity-60 group-hover:opacity-100"></i>
                Funktionsweise
              </a>
              <a href="#vorteile" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                <i className="ri-leaf-line text-sm opacity-60 group-hover:opacity-100"></i>
                Umweltvorteile
              </a>
              <Link href="/system" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
                <i className="ri-eco-line text-sm opacity-60 group-hover:opacity-100"></i>
                Nachhaltiges System
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <i className="ri-customer-service-line text-emerald-400"></i>
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-emerald-800/40 rounded-lg flex items-center justify-center mt-1 border border-emerald-700/30 group-hover:border-emerald-600/50 transition-colors duration-200">
                  <i className="ri-mail-line text-emerald-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-white font-medium">E-Mail</p>
                  <p className="text-gray-300 text-sm hover:text-emerald-400 transition-colors duration-200 cursor-pointer">info@tricast360.de</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-teal-800/40 rounded-lg flex items-center justify-center mt-1 border border-teal-700/30 group-hover:border-teal-600/50 transition-colors duration-200">
                  <i className="ri-phone-line text-teal-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <p className="text-gray-300 text-sm hover:text-teal-400 transition-colors duration-200 cursor-pointer">+49 (0) 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-green-800/40 rounded-lg flex items-center justify-center mt-1 border border-green-700/30 group-hover:border-green-600/50 transition-colors duration-200">
                  <i className="ri-map-pin-line text-green-400 text-sm"></i>
                </div>
                <div>
                  <p className="text-white font-medium">Adresse</p>
                  <p className="text-gray-300 text-sm">
                    Lüneburger Str. 90<br />
                    D-21423 Winsen (Luhe)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
              <span> {currentYear} Tricast360. Alle Rechte vorbehalten.</span>
              <div className="flex gap-6">
                <Link href="/datenschutz" className="hover:text-emerald-400 transition-colors duration-200 cursor-pointer">
                  Datenschutz
                </Link>
                <Link href="/impressum" className="hover:text-emerald-400 transition-colors duration-200 cursor-pointer">
                  Impressum
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
              <i className="ri-heart-line text-emerald-400"></i>
              Für eine grünere Zukunft
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
