'use client';

import React from 'react';

export default function BenefitsSection() {
  const isVisible = true; // Always visible

  return (
    <section id="benefits" className="relative py-20 lg:py-28 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-[#baf742]/5 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#baf742]/20 to-[#90CFC4]/20 rounded-full blur-3xl"></div>
        
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-[#90CFC4]/15 to-[#baf742]/15 rounded-full blur-3xl"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#baf742]/5 to-transparent rounded-full"></div>
      </div>
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28 items-center">
          {/* Enhanced Content Section */}
          <div className={`space-y-8 lg:space-y-10 xl:space-y-12 transition-all duration-1000 relative z-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#baf742]/20 backdrop-blur-sm text-[#0E1C3D] px-4 py-2 rounded-full text-sm font-semibold border border-[#baf742]/30">
                <i className="ri-leaf-line text-[#0E1C3D]"></i>
                <span>Nachhaltige Innovation</span>
              </div>
              
              <h2 className="heading-2 font-bold text-gray-900 leading-tight">
                Nachhaltige
                <span className="block bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mt-2">Innovation</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="body-large text-gray-700 leading-relaxed">
                TriCast360 vereint Umweltschutz mit wirtschaftlicher Effizienz. 
                Unser System macht nachhaltigen Baumschutz zur intelligenten Investition in die Zukunft.
              </p>
              
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-leaf-line text-[#0E1C3D] text-lg"></i>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900">80% CO₂-Reduktion</span>
                    <p className="text-gray-600 text-sm">vs. herkömmliche Systeme</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-recycle-line text-[#0E1C3D] text-lg"></i>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900">100% wiederverwendbar</span>
                    <p className="text-gray-600 text-sm">durch Mehrfachnutzung</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-plant-line text-[#0E1C3D] text-lg"></i>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900">Baumfreundliche Materialien</span>
                    <p className="text-gray-600 text-sm">nachhaltig und umweltschonend</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl grid place-items-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-earth-line text-[#0E1C3D] text-lg"></i>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900">CO₂-neutral produziert</span>
                    <p className="text-gray-600 text-sm">für maximale Nachhaltigkeit</p>
                  </div>
                </div>
              </div>
            </div>

           </div>

           {/* Second Column - Grafik (Mobile: Second, Desktop: Right) */}
           <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`}>
             <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[48rem] 3xl:h-[48rem]">
               {/* Enhanced Sustainability Visualization */}
               <svg viewBox="0 0 280 280" className="w-full h-full">
                 {/* Background Elements */}
                 <defs>
                   <linearGradient id="sustainabilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#baf742" />
                     <stop offset="100%" stopColor="#84cc16" />
                   </linearGradient>
                   <filter id="sustainabilityShadow" x="-20%" y="-20%" width="140%" height="140%">
                     <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
                   </filter>
                 </defs>
                 
                 {/* Central Sustainability Symbol */}
                 <g transform="translate(140, 140)">
                   {/* Outer Ring */}
                   <circle r="60" fill="none" stroke="#f3f4f6" strokeWidth="2" opacity="0.3" />
                   
                   {/* Main Circle */}
                   <circle r="45" fill="url(#sustainabilityGradient)" filter="url(#sustainabilityShadow)" opacity="0.9" />
                   
                   {/* Leaf Icon */}
                   <g transform="translate(0, -5)">
                     <path d="M -15 5 Q -15 -15 0 -20 Q 15 -15 15 5 Q 0 15 -15 5 Z" fill="white" opacity="0.9" />
                     <path d="M -10 0 Q 0 -5 10 0" stroke="#84cc16" strokeWidth="2" fill="none" />
                   </g>
                   
                   {/* Text */}
                   <text y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">Nachhaltig</text>
                 </g>
                 
                 {/* Benefit Icons around the circle */}
                 <g>
                   {/* CO2 Reduction - Top */}
                   <g transform="translate(140, 60)">
                     <circle r="20" fill="url(#sustainabilityGradient)" filter="url(#sustainabilityShadow)" />
                     <circle r="15" fill="white" opacity="0.9" />
                     <text textAnchor="middle" y="-2" fill="#84cc16" fontSize="10" fontWeight="600">CO₂</text>
                     <text textAnchor="middle" y="8" fill="#84cc16" fontSize="8">-80%</text>
                     <text y="-35" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="500">Reduktion</text>
                   </g>
                   
                   {/* Reusability - Right */}
                   <g transform="translate(220, 140)">
                     <circle r="20" fill="url(#sustainabilityGradient)" filter="url(#sustainabilityShadow)" />
                     <circle r="15" fill="white" opacity="0.9" />
                     {/* Recycling Symbol */}
                     <g stroke="#84cc16" strokeWidth="2" fill="none">
                       <path d="M -6 -3 Q -3 -6 0 -3 Q 3 0 0 3 Q -3 6 -6 3" strokeLinecap="round" />
                       <path d="M 2 -2 L 5 -2 L 4 -5" strokeLinecap="round" />
                     </g>
                     <text y="35" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="500">Wiederverwendbar</text>
                   </g>
                   
                   {/* Materials - Bottom */}
                   <g transform="translate(140, 220)">
                     <circle r="20" fill="url(#sustainabilityGradient)" filter="url(#sustainabilityShadow)" />
                     <circle r="15" fill="white" opacity="0.9" />
                     {/* Material Icon */}
                     <g stroke="#84cc16" strokeWidth="2" fill="none">
                       <rect x="-6" y="-6" width="12" height="8" rx="1" />
                       <path d="M -3 -2 L 3 -2 M -3 2 L 3 2" strokeLinecap="round" />
                     </g>
                     <text y="35" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="500">Öko-Material</text>
                   </g>
                   
                   {/* Efficiency - Left */}
                   <g transform="translate(60, 140)">
                     <circle r="20" fill="url(#sustainabilityGradient)" filter="url(#sustainabilityShadow)" />
                     <circle r="15" fill="white" opacity="0.9" />
                     {/* Efficiency Icon */}
                     <g stroke="#84cc16" strokeWidth="2" fill="none">
                       <path d="M -6 3 L -2 -3 L 2 0 L 6 -6" strokeLinecap="round" strokeLinejoin="round" />
                       <circle cx="6" cy="-6" r="1" fill="#84cc16" />
                     </g>
                     <text y="-35" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="500">Effizienz</text>
                   </g>
                 </g>
                 
                 {/* Connecting Lines */}
                 <g stroke="#baf742" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="3,2">
                   <line x1="140" y1="80" x2="140" y2="120" />
                   <line x1="200" y1="140" x2="160" y2="140" />
                   <line x1="140" y1="200" x2="140" y2="160" />
                   <line x1="80" y1="140" x2="120" y2="140" />
                 </g>
               </svg>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}