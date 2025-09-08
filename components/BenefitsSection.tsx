'use client';

import { useState, useEffect } from 'react';

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const section = document.getElementById('benefits');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-56 h-56 bg-[#90CFC4]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#90CFC4]/25 rounded-full"></div>
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* First Column - Content (Mobile: First, Desktop: Left) */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="heading-2 text-gray-900">
              Nachhaltige
              <br />
              <span className="text-accent-500 font-medium">Innovation</span>
            </h2>
            
            <div className="space-y-4">
              <p className="body-base text-gray-700">
                Tricast360 vereint Umweltschutz mit wirtschaftlicher Effizienz. 
                Unser System macht nachhaltigen Baumschutz zur intelligenten Investition in die Zukunft.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">80% CO₂-Reduktion vs. herkömmliche Systeme</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">100% wiederverwendbar durch Mehrfachnutzung</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Baumfreundliche und nachhaltige Materialien</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">CO₂-neutral produziert für maximale Nachhaltigkeit</span>
                </li>
              </ul>
            </div>


           </div>

           {/* Second Column - Grafik (Mobile: Second, Desktop: Right) */}
           <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
           }`}>
             <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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