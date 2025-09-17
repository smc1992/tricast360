'use client';

import { useState, useEffect } from 'react';

export default function Vision2025Section() {
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

    const section = document.getElementById('vision-2025');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision-2025" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-8 right-8 w-72 h-72 bg-[#90CFC4]/15 rounded-full"></div>
          <div className="absolute bottom-12 left-8 w-44 h-44 bg-[#90CFC4]/18 rounded-full"></div>
        </div>
      <div className="max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* First Column - Grafik (Mobile: Second, Desktop: Left) */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[48rem] 3xl:h-[48rem]">
              {/* Enhanced Vision 2025 Visualization */}
               <svg viewBox="0 0 280 280" className="w-full h-full">
                 {/* Background Elements */}
                 <defs>
                   <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#baf742" />
                     <stop offset="100%" stopColor="#84cc16" />
                   </linearGradient>
                   <filter id="visionShadow" x="-20%" y="-20%" width="140%" height="140%">
                     <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
                   </filter>
                 </defs>
                 
                 {/* Central Vision Symbol */}
                 <g transform="translate(140, 140)">
                   {/* Outer Ring */}
                   <circle r="70" fill="none" stroke="#f3f4f6" strokeWidth="2" opacity="0.3" />
                   
                   {/* Main Circle */}
                   <circle r="50" fill="url(#visionGradient)" filter="url(#visionShadow)" opacity="0.9" />
                   
                   {/* Target/Vision Icon */}
                   <g transform="translate(0, -8)">
                     <circle r="20" fill="white" opacity="0.9" />
                     <circle r="15" fill="none" stroke="#84cc16" strokeWidth="2" />
                     <circle r="8" fill="#84cc16" opacity="0.8" />
                     <circle r="3" fill="white" />
                   </g>
                   
                   {/* Vision Text */}
                    <text y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">Vision</text>
                 </g>
                 
                 {/* Vision Goals around the circle */}
                 <g>
                   {/* CO2 Savings - Top */}
                   <g transform="translate(140, 50)">
                     <circle r="18" fill="url(#visionGradient)" filter="url(#visionShadow)" />
                     <circle r="13" fill="white" opacity="0.9" />
                     <text textAnchor="middle" y="-1" fill="#84cc16" fontSize="8" fontWeight="600">1000t</text>
                     <text textAnchor="middle" y="7" fill="#84cc16" fontSize="6">CO₂</text>
                     <text y="-30" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="500">CO₂ Einsparung</text>
                   </g>
                   
                   {/* Material Reduction - Right */}
                   <g transform="translate(230, 140)">
                     <circle r="18" fill="url(#visionGradient)" filter="url(#visionShadow)" />
                     <circle r="13" fill="white" opacity="0.9" />
                     <text textAnchor="middle" y="2" fill="#84cc16" fontSize="10" fontWeight="600">75%</text>
                     <text y="32" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="500">Material-Reduktion</text>
                   </g>
                   
                   {/* Trees Protected - Bottom */}
                   <g transform="translate(140, 230)">
                     <circle r="18" fill="url(#visionGradient)" filter="url(#visionShadow)" />
                     <circle r="13" fill="white" opacity="0.9" />
                     <text textAnchor="middle" y="2" fill="#84cc16" fontSize="8" fontWeight="600">5000</text>
                     <text y="32" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="500">Geschützte Bäume</text>
                   </g>
                   
                   {/* Biodiversity - Left */}
                   <g transform="translate(50, 140)">
                     <circle r="18" fill="url(#visionGradient)" filter="url(#visionShadow)" />
                     <circle r="13" fill="white" opacity="0.9" />
                     {/* Leaf Icon */}
                     <path d="M -4 2 Q -4 -4 0 -6 Q 4 -4 4 2 Q 0 6 -4 2 Z" fill="#84cc16" />
                     <text y="-30" textAnchor="middle" fill="#374151" fontSize="9" fontWeight="500">Artenvielfalt</text>
                   </g>
                 </g>
                 

                 

               </svg>
            </div>
          </div>

          {/* Second Column - Content (Mobile: First, Desktop: Right) */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="heading-2 text-gray-900">
              Unsere
              <br />
              <span className="text-accent-500 font-medium">Zukunftsvision</span>
            </h2>
            
            <div className="space-y-4">
              <p className="body-base text-gray-700">
                Unsere langfristigen Ziele für Klimaschutz, Ressourcenschonung und Biodiversität. 
                Gemeinsam schaffen wir eine grünere und nachhaltigere Zukunft für kommende Generationen.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">1.000t CO₂ einsparen durch nachhaltigen Materialkreislauf</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">75% weniger Material durch intelligente Wiederverwendung langfristig</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">5.000 Bäume schützen und urbane Ökosysteme nachhaltig erhalten</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Artenvielfalt fördern und Biodiversität dauerhaft stärken</span>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}