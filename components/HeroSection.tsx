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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left opacity-0">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-[#2b3138]">
                  <span className="block">Tricast360</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-extralight mt-2">
                    Der neue Standard
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#39F2AE] font-extralight">
                    im Baumschutz
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end opacity-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hintergrundbild-tricast360.webp" 
            alt="Tricast360 Hintergrund" 
            className="w-full h-full object-cover"
            onLoad={() => console.log('Background image loaded successfully')}
            onError={(e) => console.error('Background image failed to load:', e)}
          />
          {/* Overlay for better text readability - reduced opacity */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[0.5px]"></div>
        </div>
        
        {/* Natural Background Components (reduced opacity) */}
        <HeroGradient className="absolute inset-0 opacity-30" />
        <HeroNaturalBackground />
        
        {/* Simplified overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-emerald-50/20 transition-all duration-500"></div>

        {/* Simplified floating elements - reduced for cleaner design */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-teal-400/20 rounded-full float"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>

        {/* Enhanced Main Content */}
        <div className="max-w-7xl w-full mx-auto relative z-20 px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-8 py-8 sm:py-12 lg:py-16 xl:py-6 2xl:py-4">
          <div className="flex justify-center items-center">
            {/* Zentrierter Content */}
            <div
              className={`transition-all duration-1000 text-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Premium Glassmorphism Container */}
              <div className="backdrop-blur-xl bg-white/85 border border-emerald-200/50 rounded-3xl p-8 sm:p-10 xl:p-12 2xl:p-16 shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
                {/* Subtile Umwelt-Akzente */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/60 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-xl"></div>
                
                <div className="space-y-6 sm:space-y-8 relative z-10">
                  {/* Umwelt-Badge */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100/80 to-teal-100/60 px-4 py-2 rounded-full border border-emerald-200/60 mb-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-700 text-sm font-medium">Nachhaltige Innovation für die Zukunft</span>
                    <i className="ri-leaf-line text-emerald-600 text-sm"></i>
                  </div>

                  <div className="space-y-4 sm:space-y-6 xl:space-y-8 2xl:space-y-10 content-spacing">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] tracking-tight text-[#2b3138]">
                      <span className="block">Baumschutz in &lt;5 Min</span>
                      <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#39F2AE] font-bold mt-2">
                        60% günstiger über Lebenszyklus
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 font-medium leading-relaxed max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                      Tricast360 – der werkzeuglose Rundumschutz für Bäume. 
                      <span className="text-[#39F2AE] font-semibold">
                        Wiederverwendbar, konform, zukunftssicher.
                      </span>
                    </p>
                  </div>

                  {/* Call-to-Action */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-6 2xl:gap-8 justify-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-white px-6 sm:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 xl:py-5 2xl:py-6 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg xl:text-xl 2xl:text-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="flex items-center gap-2 justify-center relative z-10">
                        <i className="ri-phone-line text-lg sm:text-xl"></i>
                        Projekt anfragen
                      </span>
                    </button>
                    <Link
                      href="/system"
                      className="group border-2 border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-[#39F2AE] hover:text-[#39F2AE] hover:bg-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                    >
                      <i className="ri-eye-line text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                      System entdecken
                    </Link>
                  </div>

                  {/* Trust-Badges */}
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full border border-emerald-200/60">
                      <i className="ri-tools-line text-emerald-600 text-sm"></i>
                      <span className="text-emerald-700 text-sm font-medium">Werkzeuglos</span>
                    </div>
                    <div className="flex items-center gap-2 bg-teal-50/80 px-4 py-2 rounded-full border border-teal-200/60">
                      <i className="ri-recycle-line text-teal-600 text-sm"></i>
                      <span className="text-teal-700 text-sm font-medium">Wiederverwendbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-200/60">
                      <i className="ri-shield-check-line text-blue-600 text-sm"></i>
                      <span className="text-blue-700 text-sm font-medium">Konform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Additional decorative elements for large screens */}
        <div className="hidden xl:block absolute inset-0 z-5">
          {/* Large decorative circles */}
          <div className="absolute top-1/4 left-8 w-32 h-32 bg-gradient-to-br from-emerald-100/20 to-teal-100/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-gradient-to-tl from-teal-100/15 to-emerald-100/10 rounded-full blur-2xl"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-16 right-1/4 w-24 h-24 border border-emerald-200/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-16 left-1/4 w-20 h-20 border border-teal-200/25 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Extra large screen elements */}
        <div className="hidden 2xl:block absolute inset-0 z-5">
          <div className="absolute top-1/3 left-16 w-48 h-48 bg-gradient-to-br from-emerald-50/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-16 w-56 h-56 bg-gradient-to-tl from-teal-50/25 to-transparent rounded-full blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(57, 242, 174, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-pulse hover:animate-bounce transition-all duration-300">
            <span className="text-xs sm:text-sm text-gray-500 font-medium">Mehr über Tricast</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-emerald-600/60 rounded-full flex items-center justify-center">
              <i className="ri-arrow-down-line text-xs sm:text-sm text-emerald-600"></i>
            </div>
          </div>
        </div>
      </section>

      <ProjectRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}