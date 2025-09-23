'use client';

import { useState, useEffect } from 'react';
import ProjectRequestModal from './ProjectRequestModal';
import Link from 'next/link';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-gray-50/30 to-[#baf742]/5 flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 overflow-hidden">
        {/* Enhanced geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#baf742]/10 to-[#90CFC4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#90CFC4]/15 to-[#baf742]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-transparent via-[#baf742]/5 to-transparent rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 items-start">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14 3xl:space-y-16 text-left flex flex-col items-start transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Enhanced Umwelt-Badge */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm text-[#0E1C3D] px-5 py-3 rounded-full text-sm font-semibold mb-6 border border-[#baf742]/30 shadow-lg w-fit">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-full animate-pulse"></div>
                Umweltfreundlich & Nachhaltig
              </div>

              {/* Enhanced Headline */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-left">
                <h1 className="heading-1 text-left">
                  <span className="block text-left">Revolutionäres</span>
                  <span className="block text-left text-[#baf742]">Schutzsystem</span>
                  <span className="block text-left">für Bäume</span>
                </h1>
                
                <div className="text-left w-full">
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-gray-600 leading-relaxed text-left w-full">
                    wiederverwendbar, nachhaltig und kostengünstig. 
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-600 leading-relaxed text-left w-full mt-2">
                    Perfekt für Baustellen, Veranstaltungen und Stadtentwicklung.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-start items-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-[#baf742] hover:bg-[#a8e63a] text-gray-900 font-semibold px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-14 2xl:py-7 3xl:px-16 3xl:py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
                >
                  <span className="flex items-center gap-3">
                    Jetzt anfragen
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        minWidth: '20px',
                        minHeight: '20px',
                        maxWidth: '20px',
                        maxHeight: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <svg 
                        style={{
                          width: '18px',
                          height: '18px',
                          display: 'block',
                          margin: '0 auto'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </span>
                </button>
                <Link 
                  href="#vorteile"
                  className="border-2 border-gray-300 hover:border-[#baf742] text-gray-700 hover:text-gray-900 font-semibold px-8 py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 2xl:px-14 2xl:py-7 3xl:px-16 3xl:py-8 rounded-2xl transition-all duration-300 hover:bg-[#baf742]/5 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
                >
                  Mehr erfahren
                </Link>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-green-500 rounded-full"></div>
                  <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-gray-600">Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#baf742] rounded-full"></div>
                  <span className="text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-gray-600">100% Recyclebar</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[44rem] 3xl:h-[44rem] mx-auto">
                  {/* Hero Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200">
                    <img 
                      src="/Baum Bild .webp" 
                      alt="TriCast360 Baumschutz System" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tree Protection Relevant Stats */}
                  <div className="absolute -top-8 right-8 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-[#baf742]">100%</div>
                      <div className="text-xs text-gray-600">Recyclebar</div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-[#baf742]">&lt; 5 Min</div>
                      <div className="text-xs text-gray-600">Montage</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-8 -left-8 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-[#90CFC4]">Werkzeuglos</div>
                      <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-gray-600">Installation</div>
                    </div>
                  </div>
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