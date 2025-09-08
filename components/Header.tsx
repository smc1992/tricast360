
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectRequestModal from './ProjectRequestModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${ 
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#baf742]/30 shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/1x/Logo Header Tricast360.webp" 
                alt="Tricast360 Logo" 
                className="h-12 sm:h-14 w-auto group-hover:scale-110 transition-all duration-300"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/#problem" className="relative text-gray-600 hover:text-[#baf742] transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Das Problem
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#baf742] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#funktionsweise" className="relative text-gray-600 hover:text-[#baf742] transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Funktionsweise
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#baf742] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/#vorteile" className="relative text-gray-600 hover:text-[#baf742] transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Umweltvorteile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#baf742] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/ueber-uns" className="relative text-gray-600 hover:text-[#baf742] transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Unser Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#baf742] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/kontakt" className="relative text-gray-600 hover:text-[#baf742] transition-colors duration-200 cursor-pointer group text-sm xl:text-base">
                Kontakt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#baf742] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Link href="/system" className="text-gray-600 hover:text-[#baf742] transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 text-sm xl:text-base">
                <i className="ri-eco-line"></i>
                <span className="hidden xl:inline">System entdecken</span>
                <span className="xl:hidden">System</span>
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary bg-gradient-to-r from-[#baf742] to-[#a3e635] text-[#2b3138] px-4 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 text-sm xl:text-base relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="ri-file-text-line relative z-10"></i>
                <span className="hidden sm:inline relative z-10">Projekt anfragen</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <i className="ri-file-text-line text-lg"></i>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-accent-500 transition-colors duration-200 relative z-50"
                aria-label="Menu öffnen"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
            <div className={`absolute top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl border-l-2 border-gray-400 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 pt-20 bg-white h-screen min-h-screen">
              {/* Mobile Navigation Links */}
              <nav className="space-y-6">
                <Link 
                  href="/#problem" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-alert-line mr-3 text-accent-500"></i>
                  Das Problem
                </Link>
                <Link 
                  href="/#funktionsweise" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-settings-3-line mr-3 text-accent-500"></i>
                  Funktionsweise
                </Link>
                <Link 
                  href="/#vorteile" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-leaf-line mr-3 text-accent-500"></i>
                  Umweltvorteile
                </Link>
                <Link 
                  href="/system" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-eco-line mr-3 text-accent-500"></i>
                  System entdecken
                </Link>
                <Link 
                  href="/ueber-uns" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-team-line mr-3 text-accent-500"></i>
                  Unser Team
                </Link>
                <Link 
                  href="/kontakt" 
                  className="block text-lg text-gray-800 hover:text-accent-500 transition-colors duration-200 py-2 border-b border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="ri-mail-line mr-3 text-accent-500"></i>
                  Kontakt
                </Link>
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#baf742] to-[#a3e635] text-[#2b3138] px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <i className="ri-file-text-line text-accent-500 text-base"></i>
                  </div>
                  Projekt anfragen
                </button>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 space-y-3">
                <a 
                  href="tel:+491701002912" 
                  className="flex items-center gap-3 text-gray-700 hover:text-accent-500 transition-colors duration-200"
                >
                  <i className="ri-phone-line text-lg"></i>
                  <span>+49 170 1002912</span>
                </a>
                <a 
                  href="mailto:info@tricast360.de" 
                  className="flex items-center gap-3 text-gray-700 hover:text-accent-500 transition-colors duration-200"
                >
                  <i className="ri-mail-line text-lg"></i>
                  <span>info@tricast360.de</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200/30">
          <div 
            className="h-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
       </header>

      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
