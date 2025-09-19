'use client';

import React from 'react';

export default function Vision2025Section() {
  const isVisible = true; // Always visible

  return (
    <section id="vision-2025" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-[#90CFC4]/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-[#90CFC4]/15 to-[#baf742]/10 rounded-full blur-3xl"></div>
        
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#baf742]/10 to-[#90CFC4]/15 rounded-full blur-3xl"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#90CFC4]/3 to-transparent rounded-full"></div>
      </div>
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center">
            {/* Enhanced First Column - Graphic */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-150 order-2 lg:order-1 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] 3xl:w-[40rem] 3xl:h-[40rem] group">
                {/* Enhanced Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#90CFC4]/30 shadow-2xl group-hover:border-[#90CFC4]/50 transition-all duration-700"></div>
                
                {/* Enhanced Middle Ring */}
                <div className="absolute inset-8 rounded-full border-2 border-[#90CFC4]/50 shadow-xl group-hover:border-[#90CFC4]/70 transition-all duration-700"></div>
                
                {/* Enhanced Inner Circle */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#90CFC4]/20 via-[#90CFC4]/30 to-[#90CFC4]/40 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-all duration-700">
                  <div className="text-center space-y-4">
                    <div className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-gradient-to-br from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">
                      2025
                    </div>
                    <div className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-800">
                      Vision
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-gradient-to-r from-[#90CFC4] to-[#baf742] rounded-full animate-pulse delay-300 shadow-lg"></div>
                <div className="absolute top-1/3 left-2 w-3.5 h-3.5 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-full animate-pulse delay-700 shadow-lg"></div>
                <div className="absolute bottom-1/4 right-6 w-2.5 h-2.5 bg-gradient-to-r from-[#90CFC4] to-[#baf742] rounded-full animate-pulse delay-1000 shadow-lg"></div>
              </div>
            </div>

            {/* Enhanced Second Column - Content */}
            <div className={`space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="space-y-8 lg:space-y-10">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#90CFC4]/20 to-[#baf742]/20 backdrop-blur-sm rounded-full border border-[#90CFC4]/30">
                  <span className="text-sm font-semibold text-[#0E1C3D]">Zukunft gestalten</span>
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold leading-tight">
                  <span className="text-gray-900">Unsere </span>
                  <span className="bg-gradient-to-r from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">Vision</span>
                  <span className="text-gray-900"> für 2025</span>
                </h2>
                <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 leading-relaxed text-left">
                  Wir gestalten die Zukunft der nachhaltigen Energiegewinnung und setzen neue Maßstäbe in der Holzpellet-Industrie.
                </p>
              </div>

              {/* Enhanced Goals Section */}
              <div className="space-y-8 lg:space-y-10">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">
                  Unsere <span className="bg-gradient-to-r from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">Ziele</span>
                </h3>
                <div className="grid gap-6 lg:gap-8">
                  <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#90CFC4]/5 backdrop-blur-sm border border-[#90CFC4]/20 hover:border-[#90CFC4]/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-full mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium leading-relaxed">
                      <strong>100.000 geschützte Bäume</strong> in über 500 Projekten europaweit
                    </span>
                  </div>
                  <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#baf742]/5 backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#90CFC4] to-[#baf742] rounded-full mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium leading-relaxed">
                      <strong>Marktführerschaft</strong> im Bereich nachhaltiger Baumschutzlösungen
                    </span>
                  </div>
                  <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#90CFC4]/5 backdrop-blur-sm border border-[#90CFC4]/20 hover:border-[#90CFC4]/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-full mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium leading-relaxed">
                      <strong>Klimaneutrale Produktion</strong> und vollständig recycelbare Materialien
                    </span>
                  </div>
                  <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#baf742]/5 backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-xl transition-all duration-500">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#90CFC4] to-[#baf742] rounded-full mt-1 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-lg lg:text-xl xl:text-2xl text-gray-800 font-medium leading-relaxed">
                      <strong>Internationale Expansion</strong> in weitere europäische Märkte
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Sustainability Mission */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#90CFC4]/10 via-white/50 to-[#baf742]/10 rounded-3xl p-8 lg:p-10 xl:p-12 border border-[#90CFC4]/30 shadow-xl backdrop-blur-sm group hover:shadow-2xl transition-all duration-700">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#baf742]/20 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-start space-x-6 lg:space-x-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-[#90CFC4] to-[#baf742] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="space-y-4 lg:space-y-6">
                    <h4 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 leading-tight">
                      <span className="bg-gradient-to-r from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">Nachhaltigkeit</span> als Kern unserer Mission
                    </h4>
                    <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                      Jeder Baum, den wir schützen, ist ein Schritt in Richtung einer grüneren Zukunft. Unsere Vision 2025 verbindet wirtschaftlichen Erfolg mit ökologischer Verantwortung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}