
'use client';

import React from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function EnvironmentalImpactSection() {
  const isVisible = true; // Always visible

  return (
    <section id="environmental-impact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
       {/* Geometric background shapes */}
         <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-12 left-12 w-60 h-60 bg-[#90CFC4]/25 rounded-full"></div>
          <div className="absolute bottom-16 right-12 w-48 h-48 bg-[#90CFC4]/20 rounded-full"></div>
         </div>
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="heading-2 text-gray-900">
              Für eine
              <br />
              <span className="text-accent-500 font-medium">grünere Zukunft</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-7">
              <p className="body-base xl:text-xl 2xl:text-2xl text-gray-700">
                Tricast360 setzt neue Maßstäbe in der nachhaltigen Stadtentwicklung.
                Unser innovatives System schützt nicht nur Bäume, sondern auch unsere Umwelt.
              </p>
              
              <ul className="space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-6">
                <li className="flex items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 xl:text-lg 2xl:text-xl">85% weniger CO₂-Emissionen durch nachhaltigen Materialkreislauf</span>
                </li>
                <li className="flex items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 xl:text-lg 2xl:text-xl">75% Materialreduktion durch intelligente Wiederverwendung</span>
                </li>
                <li className="flex items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 xl:text-lg 2xl:text-xl">100% umweltfreundliche und nachhaltige Materialien</span>
                </li>
                <li className="flex items-center gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 xl:text-lg 2xl:text-xl">Zukunftssichere Technologie für nachhaltige Stadtentwicklung</span>
                </li>
              </ul>
            </div>


           </div>

           {/* Right Column - Minimalist Environmental Icon */}
           <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`}>
             <div className="relative w-64 h-64 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] 3xl:w-[40rem] 3xl:h-[40rem]">
               {/* Ultra-Minimalist Corporate Icon */}
               <svg viewBox="0 0 200 200" className="w-full h-full">
                 {/* Simple Grid Structure */}
                 <g stroke="#e5e7eb" strokeWidth="1" opacity="0.3">
                   <line x1="0" y1="100" x2="200" y2="100" />
                   <line x1="100" y1="0" x2="100" y2="200" />
                 </g>
                 
                 {/* Central Triangle */}
                 <polygon points="100,60 130,120 70,120" fill="#22c55e" opacity="0.1" />
                 <polygon points="100,60 130,120 70,120" fill="none" stroke="#16a34a" strokeWidth="2" />
                 <text x="100" y="105" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="500">Umwelt</text>
                 
                 {/* Corner Lines */}
                 <g stroke="#16a34a" strokeWidth="1" opacity="0.4">
                   <line x1="50" y1="50" x2="70" y2="70" />
                   <line x1="150" y1="50" x2="130" y2="70" />
                   <line x1="50" y1="150" x2="70" y2="130" />
                   <line x1="150" y1="150" x2="130" y2="130" />
                 </g>
               </svg>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}
