
'use client';

import { useState, useEffect } from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function ProblemSolutionSection() {
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

    const section = document.getElementById('problem-solution');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem-solution" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
       {/* Geometric background shapes */}
         <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-10 right-20 w-48 h-48 bg-[#90CFC4]/10 rounded-full"></div>
           <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#90CFC4]/15 rounded-full"></div>
         </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* First Column - Content (Mobile: First, Desktop: Left) */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="heading-2 text-gray-900">
              Das Problem &
              <br />
              <span className="text-accent-500 font-medium">Die Lösung</span>
            </h2>
            
            <div className="space-y-4">
              <p className="body-base text-gray-700">
                Bäume in urbanen Gebieten sind täglich Gefahren ausgesetzt. Tricast360 bietet 
                innovativen Schutz, der Natur und Stadtentwicklung in Einklang bringt.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Schutz vor Baustellenschäden und Vandalismus</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Erhaltung des urbanen Grüns für kommende Generationen</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Nachhaltige Materialien für umweltbewusste Lösungen</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700">Schnelle Installation ohne Wurzelschäden</span>
                </li>
              </ul>
            </div>

 
          </div>

          {/* Second Column - Image (Mobile: Second, Desktop: Right) */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96">
                <img 
                  src="/images/1x/1x/stump-of-a-tree-on-the-green-grass-in-the-city-2024-12-07-02-11-18-utc%20(1).webp"
                  alt="Baumstumpf auf grünem Gras - Problem ohne nachhaltigen Baumschutz"
                  className="w-full h-full object-cover rounded-3xl border border-gray-200 shadow-lg"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
