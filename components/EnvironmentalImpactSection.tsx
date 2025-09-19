
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

           {/* Right Column - Professional Environmental Icon */}
           <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`}>
             <div className="relative w-64 h-64 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] 3xl:w-[40rem] 3xl:h-[40rem]">
               {/* Professional Environmental Icon */}
               <svg viewBox="0 0 300 300" className="w-full h-full">
                 <defs>
                   <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" stopColor="#baf742" />
                     <stop offset="100%" stopColor="#16a34a" />
                   </linearGradient>
                   <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#90CFC4" />
                     <stop offset="100%" stopColor="#baf742" />
                   </linearGradient>
                   <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                     <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.1"/>
                   </filter>
                 </defs>
                 
                 {/* Background Circle */}
                 <circle cx="150" cy="150" r="120" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" opacity="0.8" filter="url(#softShadow)" />
                 
                 {/* Central Tree */}
                 <g transform="translate(150, 150)">
                   {/* Tree Trunk */}
                   <rect x="-8" y="20" width="16" height="40" rx="2" fill="#8b5a3c" />
                   
                   {/* Tree Crown - Main */}
                   <circle cx="0" cy="-10" r="35" fill="url(#treeGradient)" opacity="0.9" />
                   <circle cx="0" cy="-10" r="30" fill="url(#treeGradient)" opacity="0.7" />
                   
                   {/* Tree Crown - Layers for depth */}
                   <circle cx="-15" cy="-5" r="20" fill="url(#treeGradient)" opacity="0.8" />
                   <circle cx="15" cy="-5" r="20" fill="url(#treeGradient)" opacity="0.8" />
                   <circle cx="0" cy="-25" r="18" fill="url(#treeGradient)" opacity="0.9" />
                 </g>
                 
                 {/* Floating Leaves */}
                 <g opacity="0.7">
                   <g transform="translate(80, 100) rotate(-15)">
                     <path d="M0,0 Q-8,-12 0,-20 Q8,-12 0,0 Q-4,8 0,0" fill="url(#leafGradient)" />
                     <path d="M0,0 L0,-20" stroke="#16a34a" strokeWidth="1" />
                   </g>
                   <g transform="translate(220, 120) rotate(25)">
                     <path d="M0,0 Q-6,-10 0,-16 Q6,-10 0,0 Q-3,6 0,0" fill="url(#leafGradient)" />
                     <path d="M0,0 L0,-16" stroke="#16a34a" strokeWidth="1" />
                   </g>
                   <g transform="translate(100, 200) rotate(-30)">
                     <path d="M0,0 Q-5,-8 0,-12 Q5,-8 0,0 Q-2,4 0,0" fill="url(#leafGradient)" />
                     <path d="M0,0 L0,-12" stroke="#16a34a" strokeWidth="1" />
                   </g>
                 </g>
                 
                 {/* Sustainability Symbols */}
                 <g opacity="0.6">
                   {/* Recycling Symbol - Top Right */}
                   <g transform="translate(220, 80)">
                     <circle r="15" fill="white" stroke="#90CFC4" strokeWidth="2" />
                     <g transform="scale(0.8)" stroke="#90CFC4" strokeWidth="2" fill="none">
                       <path d="M-6,-3 Q-3,-8 2,-6 Q6,-2 4,2 Q2,6 -2,4 Q-6,2 -4,-2" strokeLinecap="round" />
                       <path d="M2,-6 L6,-4 L4,-8" strokeLinecap="round" />
                       <path d="M4,2 L6,6 L2,4" strokeLinecap="round" />
                       <path d="M-4,-2 L-8,-4 L-6,0" strokeLinecap="round" />
                     </g>
                   </g>
                   
                   {/* CO2 Reduction - Bottom Left */}
                   <g transform="translate(80, 220)">
                     <circle r="15" fill="white" stroke="#baf742" strokeWidth="2" />
                     <text textAnchor="middle" y="-2" fill="#16a34a" fontSize="8" fontWeight="600">CO₂</text>
                     <text textAnchor="middle" y="6" fill="#16a34a" fontSize="6">↓</text>
                   </g>
                   
                   {/* Growth Arrow - Bottom Right */}
                   <g transform="translate(220, 220)">
                     <circle r="15" fill="white" stroke="#90CFC4" strokeWidth="2" />
                     <g stroke="#16a34a" strokeWidth="2" fill="none">
                       <path d="M-6,4 L0,-4 L6,4" strokeLinecap="round" strokeLinejoin="round" />
                       <path d="M0,-4 L0,6" strokeLinecap="round" />
                     </g>
                   </g>
                 </g>
                 
                 {/* Connecting Dotted Lines */}
                 <g stroke="#90CFC4" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="2,3">
                   <path d="M150,70 Q185,75 205,95" />
                   <path d="M150,230 Q115,225 95,205" />
                   <path d="M150,230 Q185,225 205,205" />
                 </g>
                 
                 {/* Central Label */}
                 <text x="150" y="280" textAnchor="middle" fill="#16a34a" fontSize="16" fontWeight="600" opacity="0.8">
                   Nachhaltige Zukunft
                 </text>
               </svg>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}
