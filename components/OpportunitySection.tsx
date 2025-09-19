
'use client';

import React from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function OpportunitySection() {
  const isVisible = true; // Always visible

  // 3 Kennzahlen für Vorteile
  const advantages = [
    {
      value: "70%",
      label: "Kostenersparnis",
      description: "über den gesamten Lebenszyklus",
      icon: "ri-money-euro-circle-line",
      color: "text-[#baf742]"
    },
    {
      value: "Nachhaltig",
      label: "Wiederverwendbar",
      description: "für maximale Nachhaltigkeit",
      icon: "ri-recycle-line",
      color: "text-[#baf742]"
    },
    {
      value: "< 5 Min",
      label: "Montagezeit",
      description: "werkzeuglose Installation",
      icon: "ri-time-line",
      color: "text-[#baf742]"
    }
  ];

  // Einsatzfelder als Tag-Cloud
  const applicationFields = [
    { name: "Kommunen", size: "large" },
    { name: "Bauunternehmen", size: "medium" },
    { name: "GaLaBau", size: "large" },
    { name: "Straßensanierung", size: "small" },
    { name: "Gehwegsanierung", size: "medium" },
    { name: "Baustellen", size: "large" },
    { name: "Stadtplanung", size: "medium" },
    { name: "Infrastruktur", size: "small" },
    { name: "Tiefbau", size: "medium" },
    { name: "Hochbau", size: "small" },
    { name: "Umweltschutz", size: "medium" },
    { name: "Naturschutz", size: "small" }
  ];

  const getTagSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'text-lg px-6 py-3 font-semibold';
      case 'medium':
        return 'text-base px-5 py-2 font-medium';
      case 'small':
        return 'text-sm px-4 py-2 font-normal';
      default:
        return 'text-base px-5 py-2 font-medium';
    }
  };

  return (
    <section id="opportunity" className="relative py-20 lg:py-28 xl:py-32 2xl:py-36 bg-gradient-to-br from-gray-50 via-white to-[#90CFC4]/5 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-[#baf742]/8 to-transparent rounded-full blur-3xl"></div>
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-radial from-[#90CFC4]/6 to-transparent rounded-full blur-3xl"></div>
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/30 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16 relative z-10">
        {/* Enhanced Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm rounded-full border border-[#baf742]/30 mb-8">
            <i className="ri-star-line mr-2 text-[#0E1C3D]"></i>
            <span className="text-sm font-semibold text-[#0E1C3D]">Warum Tricast360?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Einsatz & </span>
            <span className="bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent">Vorteile</span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed text-left">
            Intelligente Lösungen für vielfältige Anwendungsbereiche mit maximaler Effizienz und Nachhaltigkeit
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Enhanced Advantages Section */}
          <div className={`space-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Unsere <span className="bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent">Vorteile</span>
              </h3>
              
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-[#baf742]/5 rounded-3xl p-8 border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-2xl transition-all duration-500"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#baf742]/10 to-transparent rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#baf742] to-[#90CFC4] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <i className={`${advantage.icon} text-3xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-2">
                          {advantage.value}
                        </div>
                        <div className="text-xl font-bold text-gray-900 mb-2">
                          {advantage.label}
                        </div>
                        <div className="text-gray-700 text-lg leading-relaxed">
                          {advantage.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Application Fields Section */}
          <div className={`space-y-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">Einsatzfelder</span>
              </h3>
              
              {/* Enhanced Tag-Cloud */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white/90 to-[#90CFC4]/5 rounded-3xl p-10 border border-[#90CFC4]/20 shadow-xl backdrop-blur-sm">
                {/* Background accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#90CFC4]/10 to-transparent rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-tr from-[#baf742]/10 to-transparent rounded-full"></div>
                
                <div className="relative z-10 flex flex-wrap gap-4 justify-center">
                  {applicationFields.map((field, index) => (
                    <span 
                      key={index}
                      className={`${
                        getTagSize(field.size)
                      } bg-gradient-to-r from-white/90 to-white/70 text-gray-800 rounded-full border border-[#90CFC4]/30 hover:border-[#baf742]/60 hover:bg-gradient-to-r hover:from-[#baf742]/10 hover:to-[#90CFC4]/10 hover:shadow-lg hover:scale-105 transition-all duration-500 cursor-default backdrop-blur-sm`}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.5s ease-out ${index * 100}ms`
                      }}
                    >
                      {field.name}
                    </span>
                  ))}
                </div>
                
                {/* Enhanced Info Section */}
                <div className="relative z-10 text-center mt-8 pt-8 border-t border-[#90CFC4]/20">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#90CFC4]/10 to-[#baf742]/10 rounded-full border border-[#90CFC4]/30 backdrop-blur-sm">
                    <i className="ri-information-line mr-3 text-[#90CFC4]"></i>
                    <span className="text-gray-700 font-medium">
                      Flexibel einsetzbar in allen Bereichen des Baumschutzes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center mt-20 lg:mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0E1C3D] via-[#1a2b4a] to-[#0E1C3D] rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
            {/* Background accents */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-bl from-[#90CFC4]/20 to-transparent rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#baf742]/20 to-transparent rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#90CFC4]/5 to-[#baf742]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#90CFC4]/20 to-[#baf742]/20 rounded-full border border-[#90CFC4]/30 backdrop-blur-sm mb-8">
                <i className="ri-rocket-line mr-3 text-[#90CFC4]"></i>
                <span className="text-white/90 font-medium">Bereit für Innovation?</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#90CFC4] to-[#baf742] bg-clip-text text-transparent">
                  Revolutionieren Sie
                </span>
                <br />
                Ihre Baumpflege
              </h3>
              
              <p className="text-xl lg:text-2xl mb-10 text-white/80 leading-relaxed max-w-3xl mx-auto">
                Entdecken Sie, wie TreeCast Ihre Arbeitsweise transformiert und 
                <br className="hidden lg:block" />
                nachhaltigen Erfolg in der Baumpflege ermöglicht
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-[#0E1C3D] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <i className="ri-phone-line mr-3 group-hover:rotate-12 transition-transform duration-300"></i>
                  Beratung vereinbaren
                </button>
                <button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <i className="ri-download-line mr-3 group-hover:translate-y-[-2px] transition-transform duration-300"></i>
                  Produktbroschüre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}