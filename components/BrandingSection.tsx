'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';
import ProjectRequestModal from './ProjectRequestModal';

export default function BrandingSection() {
  const isVisible = true; // Always visible
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-[#baf742]/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#baf742]/15 to-[#90CFC4]/15 rounded-full blur-3xl"></div>
        
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-[#90CFC4]/10 to-[#baf742]/10 rounded-full blur-3xl"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#baf742]/3 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-16 lg:mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#baf742]/20 backdrop-blur-sm text-[#0E1C3D] px-4 py-2 rounded-full text-sm font-semibold border border-[#baf742]/30 mb-6">
              <i className="ri-megaphone-line text-[#0E1C3D]"></i>
              <span>Branding & Marketing</span>
            </div>
            
            <h2 className="heading-2 font-bold mb-6 text-gray-900 leading-tight">
              Ihr Branding im{' '}
              <span className="bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent">
                Fokus
              </span>
            </h2>
            <p className="body-large text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nutzen Sie TreeCast360 als mobile Werbefläche und zeigen Sie Ihr Engagement für Umweltschutz. 
              Ihre Marke wird zum Symbol für nachhaltigen Fortschritt.
            </p>
          </div>

          {/* Enhanced Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center relative z-10">
            {/* Left Column - Enhanced Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl">
                <Image
                  src="/Baum Bild .webp"
                  alt="TreeCast360 Baumschutz mit Firmenbranding auf Baustelle"
                  width={600}
                  height={400}
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Enhanced Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#baf742] to-[#90CFC4] animate-pulse shadow-lg"></div>
                    <span className="text-sm font-bold text-gray-800">Live auf Baustelle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Content */}
            <div className="space-y-8">
              {/* Enhanced Branding Benefits */}
              <div className="space-y-6">
                <h3 className="heading-3 font-bold text-gray-900 mb-6">
                  Maximale Sichtbarkeit für Ihr Unternehmen
                </h3>
                
                <div className="space-y-6">
                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#baf742] to-[#90CFC4] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-eye-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E1C3D] transition-colors">Hohe Sichtbarkeit</h4>
                        <p className="text-gray-600 leading-relaxed">Ihr Logo und Branding sind prominent auf jeder Baustelle sichtbar - 24/7 Marketing ohne Zusatzkosten.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#baf742] to-[#90CFC4] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-leaf-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E1C3D] transition-colors">Nachhaltiges Image</h4>
                        <p className="text-gray-600 leading-relaxed">Demonstrieren Sie Umweltverantwortung und positionieren Sie sich als nachhaltiges Unternehmen.</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-6 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#baf742] to-[#90CFC4] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-trophy-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0E1C3D] transition-colors">Wettbewerbsvorteil</h4>
                        <p className="text-gray-600 leading-relaxed">Heben Sie sich von der Konkurrenz ab durch innovative und umweltfreundliche Lösungen.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#baf742] via-[#90CFC4] to-[#baf742] p-8 rounded-3xl text-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-4 leading-tight">Bereit für maximale Sichtbarkeit?</h4>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">Lassen Sie uns gemeinsam Ihr Branding-Projekt planen.</p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Projekt anfragen
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Bottom Stats - Full Screen Width */}
      <div className="mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 xl:gap-8 justify-items-center">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">5</div>
                <div className="font-medium text-xs lg:text-sm xl:text-base text-gray-700">Software Standards</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">2</div>
                <div className="font-medium text-xs lg:text-sm xl:text-base text-gray-700">Marketing Prinzipien</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">1</div>
                <div className="font-medium text-xs lg:text-sm xl:text-base text-gray-700">Umweltfreundlich</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">∞</div>
                <div className="font-medium text-xs lg:text-sm xl:text-base text-gray-700">Reichweite</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-white/80 to-gray-50/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 w-full h-32 flex flex-col justify-center">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">24/7</div>
                <div className="font-medium text-xs lg:text-sm xl:text-base text-gray-700">Verfügbarkeit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Request Modal */}
      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}