
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectRequestModal from './ProjectRequestModal';

export default function CTAFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="kontakt" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#39F2AE]/10 to-[#2dd89a]/5">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#39F2AE]/5 to-[#2dd89a]/5 opacity-50"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#39F2AE]/10 rounded-full blur-xl float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#39F2AE]/5 rounded-full blur-2xl float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#2b3138] leading-tight px-4">
                Gemeinsam Baumschutz
                <span className="block gradient-text font-medium shimmer">neu denken</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto px-4">
                Starten Sie Ihr nächstes Projekt mit Tricast360 und erleben Sie 
                die Zukunft des nachhaltigen Baumschutzes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer pulse-glow"
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  <i className="ri-phone-line text-lg sm:text-xl"></i>
                  Projekt anfragen
                </span>
              </button>
              <Link href="/kontakt" className="border border-gray-300 bg-white/80 backdrop-blur-sm text-[#2b3138] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-[#39F2AE] hover:text-[#39F2AE] hover:bg-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  <i className="ri-message-line text-lg sm:text-xl"></i>
                  Kontakt aufnehmen
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <Link href="/kontakt" className="space-y-2 sm:space-y-3 group cursor-pointer p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110">
                  <i className="ri-mail-line text-[#39F2AE] text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#2b3138] font-medium mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">E-Mail</h4>
                  <p className="text-xs sm:text-sm text-gray-600">info@tricast360.de</p>
                </div>
              </Link>
              
              <Link href="/kontakt" className="space-y-2 sm:space-y-3 group cursor-pointer p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110">
                  <i className="ri-phone-line text-[#39F2AE] text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#2b3138] font-medium mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">Telefon</h4>
                  <p className="text-xs sm:text-sm text-gray-600">+49 (0) 123 456 789</p>
                </div>
              </Link>
              
              <div className="space-y-2 sm:space-y-3 group cursor-pointer p-4 sm:col-span-1 col-span-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110">
                  <i className="ri-time-line text-[#39F2AE] text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#2b3138] font-medium mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">Verfügbarkeit</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Mo-Fr 8:00-18:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
