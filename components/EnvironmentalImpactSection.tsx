
'use client';

import { useState, useEffect } from 'react';

export default function EnvironmentalImpactSection() {
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

    const section = document.getElementById('environmental-impact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const factTiles = [
    {
      title: "Klimaschonend",
      description: "85% weniger CO₂-Emissionen durch nachhaltigen Materialkreislauf und lokale Produktion.",
      icon: "ri-earth-line",
      color: "emerald",
      badge: "CO₂-neutral"
    },
    {
      title: "Ressourcenschonend",
      description: "75% Materialreduktion durch intelligente Wiederverwendung über 10+ Zyklen.",
      icon: "ri-recycle-line",
      color: "teal",
      badge: "10x nutzbar"
    },
    {
      title: "Qualitätsgeprüft",
      description: "Höchste Qualitätsstandards und umweltfreundliche Materialien für nachhaltigen Baumschutz.",
      icon: "ri-award-line",
      color: "green",
      badge: "Geprüft"
    },
    {
      title: "Zukunftssicher",
      description: "Langlebige Materialien und zukunftsfähige Technologie für nachhaltige Stadtentwicklung.",
      icon: "ri-shield-check-line",
      color: "blue",
      badge: "Langlebig"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'text-emerald-600',
        badge: 'bg-emerald-100 text-emerald-800',
        hover: 'hover:border-emerald-300'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        icon: 'text-teal-600',
        badge: 'bg-teal-100 text-teal-800',
        hover: 'hover:border-teal-300'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        badge: 'bg-green-100 text-green-800',
        hover: 'hover:border-green-300'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800',
        hover: 'hover:border-blue-300'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="environmental-impact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-leaf-line mr-2"></i>
            Umweltvorteile
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Nachhaltig für die Zukunft
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Tricast360 setzt neue Maßstäbe in der umweltfreundlichen Baumschutz-Technologie
          </p>
        </div>

        {/* Fact-Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {factTiles.map((tile, index) => {
            const colors = getColorClasses(tile.color);
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} ${colors.hover} rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                    <i className={`${tile.icon} text-2xl ${colors.icon}`}></i>
                  </div>
                  <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {tile.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#2b3138]">
                    {tile.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zertifikatsbeleg/Link-Platzhalter */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center">
                <i className="ri-award-line text-4xl text-[#39F2AE]"></i>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl font-semibold text-[#2b3138] mb-2">
               Qualitätsstandards
             </h3>
             <p className="text-gray-600 leading-relaxed mb-4">
               Tricast360 erfüllt höchste Qualitäts- und Umweltstandards für nachhaltigen Baumschutz und umweltfreundliche Materialien.
             </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-[#39F2AE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2dd89a] transition-colors duration-300"
                >
                  <i className="ri-download-line"></i>
                   Qualitätsbericht herunterladen
                 </a>
                 <a 
                   href="#" 
                   className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#39F2AE] hover:text-[#39F2AE] transition-colors duration-300"
                 >
                   <i className="ri-external-link-line"></i>
                   Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
