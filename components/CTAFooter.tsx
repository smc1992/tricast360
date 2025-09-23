
'use client';

import { useState } from 'react';
import ProjectRequestModal from './ProjectRequestModal';

export default function CTAFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#baf742] to-[#a3e635] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl 2xl:max-w-[1200px] 3xl:max-w-[1400px] relative z-10">
          {/* Starker CTA-Block */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="heading-2 text-[#0a0c14] text-left">
                Bereit für nachhaltigen Baumschutz?
              </h2>
              <p className="body-large text-[#0a0c14]/90 text-left">
                Starten Sie Ihr nächstes Projekt mit TriCast360 und erleben Sie die Zukunft des umweltfreundlichen Baumschutzes.
              </p>
            </div>

            {/* Single Strong CTA Button */}
            <div className="pt-4 text-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#0a0c14] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 rounded-lg flex items-center justify-center group-hover:from-[#baf742]/30 group-hover:to-[#90CFC4]/30 transition-all duration-300">
                  <i className="ri-phone-line text-xl text-[#baf742] group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                Projekt jetzt anfragen
                <div className="w-6 h-6 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 rounded-md flex items-center justify-center group-hover:from-[#baf742]/30 group-hover:to-[#90CFC4]/30 transition-all duration-300">
                  <i className="ri-arrow-right-line text-sm text-[#baf742] group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </button>
            </div>

            {/* Vertrauens-Elemente */}
            <div className="pt-8 border-t border-white/20 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#0a0c14]/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 rounded-md flex items-center justify-center">
                    <i className="ri-time-line text-sm text-[#baf742]"></i>
                  </div>
                  <span className="text-sm font-medium">Antwort binnen 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 rounded-md flex items-center justify-center">
                    <i className="ri-shield-check-line text-sm text-[#baf742]"></i>
                  </div>
                  <span className="text-sm font-medium">Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 rounded-md flex items-center justify-center">
                    <i className="ri-award-line text-sm text-[#baf742]"></i>
                  </div>
                  <span className="text-sm font-medium">Qualitätsgeprüft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
