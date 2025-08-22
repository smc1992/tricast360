
'use client';

import { useState, useEffect } from 'react';

export default function OpportunitySection() {
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

    const section = document.getElementById('opportunity');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // 3 Kennzahlen für Vorteile
  const advantages = [
    {
      value: "60%",
      label: "Kostenersparnis",
      description: "über den gesamten Lebenszyklus",
      icon: "ri-money-euro-circle-line",
      color: "text-[#39F2AE]"
    },
    {
      value: "10×",
      label: "Wiederverwendbar",
      description: "für maximale Nachhaltigkeit",
      icon: "ri-recycle-line",
      color: "text-teal-600"
    },
    {
      value: "< 5 Min",
      label: "Montagezeit",
      description: "werkzeuglose Installation",
      icon: "ri-time-line",
      color: "text-emerald-600"
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
    <section id="opportunity" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-star-line mr-2"></i>
            Warum Tricast360?
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Einsatz & Vorteile
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Intelligente Lösungen für vielfältige Anwendungsbereiche
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Links: Vorteile (3 Kennzahlen) */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#2b3138] mb-6">
                Unsere Vorteile
              </h3>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#39F2AE]/30 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm">
                        <i className={`${advantage.icon} text-2xl ${advantage.color}`}></i>
                      </div>
                      <div className="flex-1">
                        <div className={`text-3xl font-bold ${advantage.color} mb-1`}>
                          {advantage.value}
                        </div>
                        <div className="text-[#2b3138] font-semibold mb-1">
                          {advantage.label}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {advantage.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rechts: Einsatzfelder als Tag-Cloud */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#2b3138] mb-6">
                Einsatzfelder
              </h3>
              
              {/* Tag-Cloud */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex flex-wrap gap-3 justify-center">
                  {applicationFields.map((field, index) => (
                    <span 
                      key={index}
                      className={`${
                        getTagSize(field.size)
                      } bg-white text-[#2b3138] rounded-full border border-gray-200 hover:border-[#39F2AE] hover:text-[#39F2AE] hover:shadow-md transition-all duration-300 cursor-default`}
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
                
                {/* Zusatz-Info */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <i className="ri-information-line mr-2"></i>
                    Flexibel einsetzbar in allen Bereichen des Baumschutzes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#39F2AE]/10 to-[#2dd89a]/10 rounded-2xl p-8 border border-[#39F2AE]/20">
            <h4 className="text-xl font-semibold text-[#2b3138] mb-4">
              Bereit für den nächsten Schritt?
            </h4>
            <p className="text-gray-600 mb-6">
              Entdecken Sie, wie Tricast360 Ihr nächstes Projekt revolutionieren kann
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#39F2AE] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2dd89a] transition-colors duration-300 flex items-center gap-2 justify-center">
                <i className="ri-phone-line"></i>
                Beratung anfragen
              </button>
              <button className="border border-[#39F2AE] text-[#39F2AE] px-8 py-3 rounded-xl font-semibold hover:bg-[#39F2AE]/10 transition-colors duration-300 flex items-center gap-2 justify-center">
                <i className="ri-download-line"></i>
                Produktinfo herunterladen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}