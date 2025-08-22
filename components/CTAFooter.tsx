
'use client';

import { useState } from 'react';
import ProjectRequestModal from './ProjectRequestModal';

export default function CTAFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#39F2AE] to-[#2dd89a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Starker CTA-Block */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Bereit für nachhaltigen Baumschutz?
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                Starten Sie Ihr nächstes Projekt mit Tricast360 und erleben Sie die Zukunft des umweltfreundlichen Baumschutzes.
              </p>
            </div>

            {/* Single Strong CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#39F2AE] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
              >
                <i className="ri-phone-line text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
                Projekt jetzt anfragen
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </div>

            {/* Vertrauens-Elemente */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-lg"></i>
                  <span className="text-sm font-medium">Antwort binnen 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-shield-check-line text-lg"></i>
                  <span className="text-sm font-medium">Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                   <i className="ri-award-line text-lg"></i>
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
