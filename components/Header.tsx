
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectRequestModal from './ProjectRequestModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${ 
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-emerald-200/30 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <i className="ri-tree-line text-white text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                Tricast360
              </span>
              {/* Umwelt-Badge */}
              <div className="hidden sm:flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium border border-emerald-200/60">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                Öko+
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/#problem" className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Das Problem
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#funktionsweise" className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Funktionsweise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#vorteile" className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Umweltvorteile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/ueber-uns" className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Unser Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/kontakt" className="relative text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Kontakt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Link href="/system" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 text-sm xl:text-base">
                <i className="ri-eco-line"></i>
                <span className="hidden xl:inline">System entdecken</span>
                <span className="xl:hidden">System</span>
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 text-sm xl:text-base relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="ri-phone-line relative z-10"></i>
                <span className="hidden sm:inline relative z-10">Projekt anfragen</span>
                <span className="sm:hidden relative z-10">Anfrage</span>
              </button>
            </div>

            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2b3138] hover:bg-[#39F2AE]/10 rounded-xl transition-colors duration-200 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`text-xl transition-transform duration-300 ${isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 animate-fade-in">
              <nav className="flex flex-col gap-3 sm:gap-4">
                <Link href="/#problem" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer py-2" onClick={() => setIsMenuOpen(false)}>
                  Das Problem
                </Link>
                <Link href="/#funktionsweise" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer py-2" onClick={() => setIsMenuOpen(false)}>
                  Funktionsweise
                </Link>
                <Link href="/#vorteile" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer py-2" onClick={() => setIsMenuOpen(false)}>
                  Umweltvorteile
                </Link>
                <Link href="/ueber-uns" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer py-2" onClick={() => setIsMenuOpen(false)}>
                  Unser Team
                </Link>
                <Link href="/kontakt" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 cursor-pointer py-2" onClick={() => setIsMenuOpen(false)}>
                  Kontakt
                </Link>
                <div className="flex flex-col gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                  <Link href="/system" className="text-[#2b3138] hover:text-emerald-600 transition-colors duration-200 text-left whitespace-nowrap cursor-pointer flex items-center gap-2 py-2" onClick={() => setIsMenuOpen(false)}>
                    <i className="ri-eco-line"></i>
                    Nachhaltige Infos
                  </Link>
                  <button 
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="btn-primary bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center"
                  >
                    <i className="ri-phone-line"></i>
                    Projekt anfragen
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
