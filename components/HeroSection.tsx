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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56 overflow-hidden">
        <HeroGradient className="absolute inset-0" />
        <HeroNaturalBackground />
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left opacity-0">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="heading-1">
                  <span className="block">TriCast360</span>
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
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[44rem] 3xl:h-[44rem]"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
        {/* Clean geometric background */}
        <div className="absolute inset-0">
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#90CFC4]/20 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Umwelt-Badge */}
              <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-gray-200">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 text-sm font-medium">Nachhaltige Innovation für die Zukunft</span>
                <i className="ri-leaf-line text-gray-500 text-sm"></i>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="heading-1 font-bold">
                  <span className="block">Baumschutz in &lt;5&nbsp;Min</span>
                  <span className="block subtitle-large text-gray-700 font-medium mt-2">
                    70% günstiger über Lebenszyklus
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="body-base">
                    TriCast360 – der werkzeuglose Rundumschutz für Bäume. 
                    <span className="text-gray-900 font-medium">
                      Wiederverwendbar, konform, zukunftssicher.
                    </span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#baf742] text-[#0E1C3D] px-6 py-3 lg:px-7 lg:py-3.5 rounded-xl font-semibold text-base lg:text-lg hover:bg-[#0E1C3D] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i className="ri-phone-line text-lg"></i>
                  Projekt anfragen
                  <i className="ri-arrow-right-line text-sm"></i>
                </button>
                
                <Link 
                  href="/system" 
                  className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 lg:px-7 lg:py-3.5 text-base lg:text-lg"
                >
                  <i className="ri-eye-line text-lg"></i>
                  System entdecken
                  <i className="ri-external-link-line text-sm"></i>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 lg:gap-3">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2 rounded-full border border-gray-200/60 shadow-sm text-sm lg:text-base font-medium text-gray-700 hover:bg-white/90 transition-all duration-200 flex-shrink-0">
                  <i className="ri-recycle-line text-emerald-600 text-sm lg:text-base"></i>
                  <span>Wertzeglos</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2 rounded-full border border-gray-200/60 shadow-sm text-sm lg:text-base font-medium text-gray-700 hover:bg-white/90 transition-all duration-200 flex-shrink-0">
                  <i className="ri-refresh-line text-emerald-600 text-sm lg:text-base"></i>
                  <span>Wiederverwendbar</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 lg:px-4 lg:py-2 rounded-full border border-gray-200/60 shadow-sm text-sm lg:text-base font-medium text-gray-700 hover:bg-white/90 transition-all duration-200 flex-shrink-0">
                  <i className="ri-shield-check-line text-emerald-600 text-sm lg:text-base"></i>
                  <span>Konform</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 mt-5 lg:mt-0 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[44rem] 3xl:h-[44rem]">
                {/* Hero Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200">
                  <img 
                    src="https://static.readdy.ai/image/5cb98375ce345c7331a1619afba21cba/0623913294cb49f45f91812b9749776a.jfif" 
                    alt="TriCast360 Baumschutz System" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 max-w-sm w-full">
                      <div className="flex items-center justify-between text-sm gap-6">
                        <div className="text-center flex-1">
                          <div className="font-semibold text-gray-900">&lt;5 Min</div>
                          <div className="text-gray-600 text-xs">Installation</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="font-semibold text-gray-900">100%</div>
                          <div className="text-gray-600 text-xs">Wiederverwendbar</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="font-semibold text-gray-900">70%</div>
                          <div className="text-gray-600 text-xs">Kostenersparnis</div>
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