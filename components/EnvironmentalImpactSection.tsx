
'use client';

import { useState, useEffect } from 'react';

export default function EnvironmentalImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('environmental-impact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const impactData = [
    {
      title: "Klimaschutz",
      description: "Reduzierte CO₂-Emissionen durch nachhaltigen Materialkreislauf",
      icon: "ri-earth-line",
      stats: [
        { label: "CO₂-Einsparung", value: "85%", unit: "pro Projekt" },
        { label: "Klimaneutrale Produktion", value: "100%", unit: "zertifiziert" }
      ],
      color: "emerald"
    },
    {
      title: "Ressourcenschonung",
      description: "Minimaler Verbrauch durch intelligente Wiederverwendung",
      icon: "ri-recycle-line",
      stats: [
        { label: "Materialreduktion", value: "75%", unit: "vs. Einmalnutzung" },
        { label: "Wiederverwendungszyklen", value: "10+", unit: "Jahre Nutzung" }
      ],
      color: "teal"
    },
    {
      title: "Biodiversität",
      description: "Schutz urbaner Ökosysteme und Förderung der Artenvielfalt",
      icon: "ri-plant-line",
      stats: [
        { label: "Geschützte Habitate", value: "100%", unit: "Baumumgebung" },
        { label: "Ökosystem-Erhaltung", value: "95%", unit: "Erfolgsrate" }
      ],
      color: "green"
    }
  ];

  return (
    <section id="environmental-impact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-emerald-50/40 to-white relative overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-200/40 to-teal-200/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-200/30 to-emerald-200/40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100/90 to-green-100/80 px-6 py-3 rounded-full border border-emerald-200/60 mb-6">
            <i className="ri-target-line text-emerald-600"></i>
            <span className="text-emerald-700 font-semibold">Unsere Vision 2025</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-gray-800">
            Gemeinsam erreichen wir diese <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent font-semibold">Ziele für eine grünere Zukunft</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Als Startup entwickeln wir messbare Lösungen für den Umweltschutz – das sind unsere Visionen und Ziele für 2025
          </p>
        </div>

        {/* Impact Cards */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {impactData.map((impact, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-${impact.color}-200/60 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:transform hover:scale-105`}
              onClick={() => setActiveTab(index)}
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 bg-${impact.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${impact.icon} text-2xl text-${impact.color}-600`}></i>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ri-target-line text-xs text-emerald-600"></i>
                    <div className={`text-xs font-bold text-${impact.color}-600 bg-${impact.color}-50 px-3 py-1 rounded-full border border-${impact.color}-200`}>
                      ZIEL 2025
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`text-xl font-semibold text-gray-800 mb-3 group-hover:text-${impact.color}-700 transition-colors duration-300`}>
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {impact.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{stat.label} - unser Ziel für 2025</span>
                      <div className="text-right">
                        <div className={`text-lg font-bold text-${impact.color}-600`}>{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.unit} als Ziel</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`w-full h-2 bg-${impact.color}-100 rounded-full overflow-hidden`}>
                  <div className={`h-full bg-gradient-to-r from-${impact.color}-500 to-${impact.color}-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <div className="text-left">
                <div className="font-semibold">Gemeinsam für die Umwelt</div>
                <div className="text-sm opacity-90">Jeder Baum zählt für unsere Zukunft</div>
              </div>
            </div>
            <div className="flex items-center text-sm opacity-90">
              Werden Sie Teil der nachhaltigen Revolution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
