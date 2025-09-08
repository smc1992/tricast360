'use client';

import { useState, useEffect } from 'react';
import ProjectRequestModal from './ProjectRequestModal';
import Link from 'next/link';
import { HeroGradient } from './GradientBackgrounds';
import { HeroNaturalBackground } from './NaturalBackground';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 overflow-hidden">
        <HeroGradient className="absolute inset-0" />
        <HeroNaturalBackground />
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left opacity-0">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="heading-1">
                  <span className="block">Tricast360</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-light mt-2">
                    Der neue Standard
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#baf742] font-light">
                    im Baumschutz
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end opacity-0">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32">
        {/* Clean geometric background */}
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#90CFC4]/20 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-4 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Umwelt-Badge */}
              <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-200">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 text-sm font-medium">Nachhaltige Innovation für die Zukunft</span>
                <i className="ri-leaf-line text-gray-500 text-sm"></i>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="heading-1">
                  <span className="block">Baumschutz in &lt;5 Min</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-medium mt-2">
                    60% günstiger über Lebenszyklus
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-normal leading-relaxed max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                    Tricast360 – der werkzeuglose Rundumschutz für Bäume. 
                    <span className="text-gray-900 font-medium">
                      Wiederverwendbar, konform, zukunftssicher.
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#baf742] text-[#0E1C3D] px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl hover:bg-[#0E1C3D] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <i className="ri-phone-line text-xl lg:text-2xl"></i>
                  Projekt anfragen
                  <i className="ri-arrow-right-line text-lg lg:text-xl"></i>
                </button>
                
                <Link 
                  href="/system" 
                  className="btn-secondary flex items-center justify-center gap-3"
                >
                  <i className="ri-eye-line text-xl lg:text-2xl"></i>
                  System entdecken
                  <i className="ri-external-link-line text-lg lg:text-xl"></i>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <i className="ri-tools-line text-gray-600 text-sm"></i>
                  <span className="text-gray-700 text-sm font-medium">Werkzeuglos</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <i className="ri-recycle-line text-gray-600 text-sm"></i>
                  <span className="text-gray-700 text-sm font-medium">Wiederverwendbar</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <i className="ri-shield-check-line text-gray-600 text-sm"></i>
                  <span className="text-gray-700 text-sm font-medium">Konform</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
                {/* Hero Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200">
                  <img 
                    src="https://static.readdy.ai/image/5cb98375ce345c7331a1619afba21cba/0623913294cb49f45f91812b9749776a.jfif" 
                    alt="Tricast360 Baumschutz System" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-gray-200">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">&lt;5 Min</div>
                          <div className="text-gray-600 text-xs">Installation</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">100%</div>
                          <div className="text-gray-600 text-xs">Wiederverwendbar</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">60%</div>
                          <div className="text-gray-600 text-xs">Günstiger</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional floating stats */}
                <div className="absolute -top-8 right-8 bg-white border border-gray-200 rounded-2xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-gray-900">CO₂</div>
                    <div className="text-xs text-gray-600">Neutral</div>
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