
'use client';

import React from 'react';
import Image from 'next/image';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function EnvironmentalImpactSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('environmental-impact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="environmental-impact" className="relative py-20 lg:py-24 xl:py-28 2xl:py-36 overflow-hidden">
      <SectionNaturalBackground />
      <SectionGradient />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Badge */}
            <div className="flex">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm text-[#0E1C3D] rounded-full text-sm font-semibold border border-[#baf742]/30">
                Nachhaltigkeit
              </div>
            </div>

            {/* Heading moved below badge */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                Für eine <span className="text-[#baf742]">grünere</span>
                <br />Zukunft
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                  Tricast360 setzt neue Maßstäbe in der nachhaltigen Stadtentwicklung. Unser innovatives System schützt nicht nur Bäume, sondern auch unsere Umwelt.
                </p>
                <p className="text-gray-600 text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                  Mit recycelbaren Materialien und einer CO₂-neutralen Produktion leisten wir einen aktiven Beitrag zum Klimaschutz und zur Erhaltung unserer Städte.
                </p>
              </div>
            </div>

            {/* Environmental Benefits */}
            <div className="space-y-6">
              <div className="grid gap-6">
                <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="space-y-2">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">80% CO₂-Reduktion</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">vs. herkömmliche Systeme</p>
                  </div>
                </div>
                
                <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="space-y-2">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">100% wiederverwendbar</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">durch Mehrfachnutzung</p>
                  </div>
                </div>
                
                <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="space-y-2">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">Baumfreundliche Materialien</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">nachhaltig und umweltschonend</p>
                  </div>
                </div>
                
                <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="space-y-2">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">CO₂-neutral produziert</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">für maximale Nachhaltigkeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tricast360 Baumschutz Grafik */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem]">
              <div className="w-full h-full bg-gradient-to-br from-[#baf742]/10 to-[#90CFC4]/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-[#baf742]/20 overflow-hidden">
                <Image
                  src="/images/Tricast360 Baumschutz Grafik.webp"
                  alt="Tricast360 Baumschutz System - Nachhaltige Lösung für den Baumschutz"
                  width={640}
                  height={640}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
