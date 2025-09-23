
'use client';

import React from 'react';
import Image from 'next/image';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function ProblemSolutionSection() {
  const isVisible = true; // Always visible

  return (
    <section className="relative py-20 lg:py-24 xl:py-28 2xl:py-36 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100/40 to-orange-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-gray-200/50 to-slate-100/50 rounded-full blur-3xl"></div>
      <SectionGradient />
      <SectionNaturalBackground />
      
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16 relative z-10">
        <div className={`grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Enhanced Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50/80 to-red-100/80 backdrop-blur-sm text-[#0E1C3D] px-4 py-2 rounded-full text-sm font-semibold border border-red-200/30">
                <div className="w-5 h-5 bg-gradient-to-br from-red-400/30 to-red-500/30 rounded-md flex items-center justify-center">
                  <i className="ri-error-warning-line text-red-600 text-sm"></i>
                </div>
                <span>Aktuelle Herausforderungen</span>
              </div>
              
              <h2 className="heading-2 font-bold text-gray-900 leading-tight">
                <span className="block">Das Problem: Baumschutz ist</span>
                <span className="block text-red-600 mt-2">teuer und zeitaufwändig</span>
              </h2>
            </div>
            
            <p className="body-large text-gray-700 leading-relaxed">
              Herkömmliche Baumschutzlösungen sind nicht nur kostspielig, sondern auch arbeitsintensiv. 
              Viele Systeme erfordern Werkzeuge, sind schwer zu transportieren und oft nicht wiederverwendbar.
            </p>
            
            <div className="space-y-5">
              <li className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <span className="body-base text-gray-800 font-medium">Hohe Anschaffungskosten bei einmaliger Nutzung</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <span className="body-base text-gray-800 font-medium">Zeitaufwändige Installation mit Werkzeugen</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <span className="body-base text-gray-800 font-medium">Schwerer Transport und Lagerung</span>
              </li>
              <li className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-red-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                <span className="body-base text-gray-800 font-medium">Nicht nachhaltig und umweltbelastend</span>
              </li>
            </div>
          </div>
          
          {/* Enhanced Illustration */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-200/20 to-orange-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gray-200/50">
                <Image 
                  src="/images/1x/1x/stump-of-a-tree-on-the-green-grass-in-the-city-2024-12-07-02-11-18-utc (1).webp"
                  alt="Baumstumpf auf grünem Gras - Problem des herkömmlichen Baumschutzes"
                  width={600}
                  height={450}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
