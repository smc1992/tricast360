'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProjectRequestModal from './ProjectRequestModal';

export default function BrandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#90CFC4]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#90CFC4]/15 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-green-200/60" style={{
              background: 'rgba(186, 247, 66, 0.15)'
            }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#baf742' }}></div>
              <span className="text-gray-700 font-medium">Branding & Marketing</span>
              <i className="ri-megaphone-line" style={{ color: '#baf742' }}></i>
            </div>
            
            <h2 className="heading-2 font-bold mb-6" style={{ color: '#0E1C3D' }}>
              Ihr Branding im{' '}
              <span style={{ color: '#baf742' }}>
                Fokus
              </span>
            </h2>
            <p className="body-base mb-8 max-w-3xl" style={{ color: '#0E1C3D' }}>
              Nutzen Sie TreeCast360 als mobile Werbefläche und zeigen Sie Ihr Engagement für Umweltschutz. 
              Ihre Marke wird zum Symbol für nachhaltigen Fortschritt.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Image */}
            <div className="relative lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                <Image
                  src="/Baum Bild .webp"
                  alt="TreeCast360 Baumschutz mit Firmenbranding auf Baustelle"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#baf742' }}></div>
                    <span className="text-sm font-semibold text-gray-700">Live auf Baustelle</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#baf742' }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30" style={{ backgroundColor: '#baf742' }}></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8 lg:col-span-3 lg:pl-8 xl:pl-12">
              
              {/* Branding Benefits */}
              <div className="space-y-6">
                <h3 className="heading-3 font-bold text-gray-900 mb-6">
                  Maximale Sichtbarkeit für Ihr Unternehmen
                </h3>
                
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300" style={{
                    background: 'rgba(226, 241, 227, 0.8)'
                  }}>
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-xl flex items-center justify-center text-center" style={{
                       backgroundColor: '#baf742'
                     }}>
                       <i className="ri-eye-line text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl block leading-none mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}></i>
                     </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg lg:text-xl" style={{ color: '#0E1C3D' }}>Hohe Sichtbarkeit</h4>
                      <p className="text-base" style={{ color: '#0E1C3D' }}>Ihr Logo und Branding sind prominent auf jeder Baustelle sichtbar - 24/7 Marketing ohne Zusatzkosten.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300" style={{
                    background: 'rgba(226, 241, 227, 0.8)'
                  }}>
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-xl flex items-center justify-center text-center" style={{
                       backgroundColor: '#baf742'
                     }}>
                       <i className="ri-leaf-line text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl block leading-none mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}></i>
                     </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg lg:text-xl" style={{ color: '#0E1C3D' }}>Nachhaltiges Image</h4>
                      <p className="text-base" style={{ color: '#0E1C3D' }}>Demonstrieren Sie Umweltverantwortung und positionieren Sie sich als nachhaltiges Unternehmen.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300" style={{
                    background: 'rgba(226, 241, 227, 0.8)'
                  }}>
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-xl flex items-center justify-center text-center" style={{
                       backgroundColor: '#baf742'
                     }}>
                       <i className="ri-trophy-line text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl block leading-none mx-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}></i>
                     </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg lg:text-xl" style={{ color: '#0E1C3D' }}>Wettbewerbsvorteil</h4>
                      <p className="text-base" style={{ color: '#0E1C3D' }}>Heben Sie sich von der Konkurrenz ab durch innovative und umweltfreundliche Lösungen.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm" style={{
                background: 'rgba(226, 241, 227, 0.8)'
              }}>
                <h4 className="font-bold text-gray-900 mb-3">Interessiert an individueller Branding-Lösung?</h4>
                <p className="text-gray-600 mb-4">Kontaktieren Sie uns für maßgeschneiderte Branding-Optionen und Sonderkonditionen für Großprojekte.</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Branding anfragen</span>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Stats - Full Screen Width */}
      <div className="mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
            <div className="text-center p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm w-full max-w-xs" style={{
              background: 'rgba(226, 241, 227, 0.8)'
            }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#baf742' }}>24/7</div>
              <div className="font-medium" style={{ color: '#0E1C3D' }}>Sichtbarkeit</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm w-full max-w-xs" style={{
              background: 'rgba(226, 241, 227, 0.8)'
            }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#baf742' }}>100%</div>
              <div className="font-medium" style={{ color: '#0E1C3D' }}>Umweltfreundlich</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm w-full max-w-xs" style={{
              background: 'rgba(226, 241, 227, 0.8)'
            }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#baf742' }}>∞</div>
              <div className="font-medium" style={{ color: '#0E1C3D' }}>Wiederverwendbar</div>
            </div>
            <div className="text-center p-6 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm w-full max-w-xs" style={{
              background: 'rgba(226, 241, 227, 0.8)'
            }}>
              <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#baf742' }}>ROI+</div>
              <div className="font-medium" style={{ color: '#0E1C3D' }}>Marketing-Wert</div>
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