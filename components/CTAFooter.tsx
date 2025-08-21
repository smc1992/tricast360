
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* 2-Column Layout for very large screens */}
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center">
            
            {/* Left Column - Main Content */}
            <div className="text-center xl:text-left">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-light text-[#2b3138] leading-tight px-4 xl:px-0">
                Gemeinsam Baumschutz
                <span className="block gradient-text font-medium shimmer">neu denken</span>
              </h2>
                  <p className="text-lg sm:text-xl xl:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl xl:max-w-none mx-auto xl:mx-0 px-4 xl:px-0">
                    Starten Sie Ihr nächstes Projekt mit Tricast360 und erleben Sie 
                    die Zukunft des nachhaltigen Baumschutzes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center xl:justify-start px-4 xl:px-0">
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
            </div>
            
            {/* Right Column - Contact Info (only on XL+ screens) */}
            <div className="hidden xl:block">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 2xl:p-12 border border-gray-200/50 shadow-xl h-full">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#39F2AE]/10 to-[#2dd89a]/10 px-4 py-2 rounded-full border border-[#39F2AE]/20 mb-4">
                      <i className="ri-customer-service-2-line text-[#39F2AE]"></i>
                      <span className="text-[#39F2AE] text-sm font-medium">Persönliche Beratung</span>
                    </div>
                    <h3 className="text-2xl 2xl:text-3xl font-light text-[#2b3138] mb-3">Direkter Kontakt</h3>
                    <p className="text-gray-600 text-sm 2xl:text-base">Sprechen Sie direkt mit unseren Experten</p>
                  </div>
                  
                <div className="space-y-6">
                  <Link href="/kontakt" className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-[#39F2AE]/5 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <i className="ri-mail-line text-[#39F2AE] text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-medium text-[#2b3138] mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">E-Mail</h4>
                      <p className="text-gray-600">info@tricast360.de</p>
                    </div>
                  </Link>
                  
                  <Link href="/kontakt" className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-[#39F2AE]/5 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <i className="ri-phone-line text-[#39F2AE] text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-medium text-[#2b3138] mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">Telefon</h4>
                      <p className="text-gray-600">+49 170 1002912</p>
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-[#39F2AE]/5 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                      <i className="ri-time-line text-[#39F2AE] text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-medium text-[#2b3138] mb-1 group-hover:text-[#39F2AE] transition-colors duration-300">Verfügbarkeit</h4>
                      <p className="text-gray-600">Mo-Fr 8:00-18:00 Uhr</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info Section */}
                <div className="mt-8 pt-6 border-t border-gray-200/50">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#39F2AE]">
                      <i className="ri-shield-check-line text-lg"></i>
                      <span className="text-sm font-medium">Kostenlose Erstberatung</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#39F2AE]">
                      <i className="ri-truck-line text-lg"></i>
                      <span className="text-sm font-medium">Deutschlandweite Lieferung</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#39F2AE]">
                      <i className="ri-recycle-line text-lg"></i>
                      <span className="text-sm font-medium">100% wiederverwendbar</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[#39F2AE]">
                      <i className="ri-award-line text-lg"></i>
                      <span className="text-sm font-medium">Praxiserprobt seit 2020</span>
                    </div>
                  </div>
                </div>
                
                {/* Extra Content for Very Large Screens (27+ inch) */}
                <div className="hidden 2xl:block mt-8 pt-6 border-t border-gray-200/50">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-medium text-[#2b3138] mb-4">Warum Tricast360?</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-[#39F2AE]/5 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-[#39F2AE] mb-1">50x</div>
                          <div className="text-gray-600">Wiederverwendbar</div>
                        </div>
                        <div className="bg-[#39F2AE]/5 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-[#39F2AE] mb-1">5min</div>
                          <div className="text-gray-600">Installation</div>
                        </div>
                        <div className="bg-[#39F2AE]/5 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-[#39F2AE] mb-1">360°</div>
                          <div className="text-gray-600">Rundumschutz</div>
                        </div>
                        <div className="bg-[#39F2AE]/5 rounded-xl p-3 text-center">
                          <div className="text-2xl font-bold text-[#39F2AE] mb-1">100%</div>
                          <div className="text-gray-600">Nachhaltig</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#39F2AE]/10 to-[#2dd89a]/10 px-4 py-2 rounded-full border border-[#39F2AE]/20">
                        <i className="ri-star-line text-[#39F2AE]"></i>
                        <span className="text-[#39F2AE] text-sm font-medium">Innovatives Startup 2024</span>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h5 className="text-base font-medium text-[#2b3138]">Schnelle Antwort garantiert</h5>
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Online</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="ri-time-line text-[#39F2AE]"></i>
                          <span>Ø 2h Antwortzeit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          
          {/* Original Contact Section for smaller screens */}
          <div className="xl:hidden mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200">
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
                  <p className="text-xs sm:text-sm text-gray-600">+49 170 1002912</p>
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
