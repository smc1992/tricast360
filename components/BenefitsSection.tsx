'use client';

import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Klimaschonend",
      description: "Reduzierte CO₂-Bilanz durch Mehrfachnutzung und nachhaltiges Material",
      icon: "ri-earth-line",
      highlight: "CO₂ -80%",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-50/80",
      borderColor: "border-emerald-200/60",
      textColor: "text-emerald-700"
    },
    {
      title: "Ressourcenschonend",
      description: "Minimaler Materialverbrauch durch intelligente Wiederverwendung",
      icon: "ri-recycle-line",
      highlight: "10x nutzbar",
      color: "from-teal-500 to-cyan-400",
      bgColor: "bg-teal-50/80",
      borderColor: "border-teal-200/60",
      textColor: "text-teal-700"
    },
    {
      title: "Ökologisch zertifiziert", 
      description: "Erfüllt höchste Umweltstandards und Nachhaltigkeitskriterien",
      icon: "ri-award-line",
      highlight: "Öko+",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50/80",
      borderColor: "border-green-200/60",
      textColor: "text-green-700"
    },
    {
      title: "Zukunftssicher",
      description: "Investition in nachhaltige Technologie für kommende Generationen",
      icon: "ri-seedling-line",
      highlight: "Future-Ready",
      color: "from-cyan-500 to-blue-400",
      bgColor: "bg-cyan-50/80",
      borderColor: "border-cyan-200/60",
      textColor: "text-cyan-700"
    }
  ];

  const ecoStats = [
    {
      value: "1,200+",
      label: "Bäume schützen",
      sublabel: "unser Ziel für 2025",
      icon: "ri-tree-line",
      color: "text-emerald-600"
    },
    {
      value: "85%",
      label: "Weniger Abfall",
      sublabel: "durch Wiederverwendung angestrebt",
      icon: "ri-leaf-line",
      color: "text-teal-600"
    },
    {
      value: "300kg",
      label: "CO₂ einsparen",
      sublabel: "pro Projekt als Ziel",
      icon: "ri-earth-line",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <SectionGradient className="absolute inset-0" reverse={true} />
      <SectionNaturalBackground variant="trees" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 content-spacing">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100/90 to-teal-100/80 px-6 py-3 rounded-full border border-emerald-200/60 mb-6">
            <i className="ri-leaf-line text-emerald-600"></i>
            <span className="text-emerald-700 font-medium">Nachhaltigkeit im Fokus</span>
          </div>
          <h2 className="text-section-title font-light mb-4 sm:mb-6 text-gray-800">
            Umwelt<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">vorteile</span> für morgen
          </h2>
          <p className="text-large text-gray-600 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Jeder geschützte Baum ist ein Beitrag zum Klimaschutz. Unser System macht 
            <span className="text-emerald-600 font-semibold"> nachhaltigen Baumschutz wirtschaftlich und ökologisch sinnvoll</span>
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-benefits-lg gap-4 sm:gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group ${benefit.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${benefit.borderColor} hover:border-emerald-300/60 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${benefit.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border ${benefit.borderColor}`}>
                      <i className={`${benefit.icon} text-xl sm:text-2xl ${benefit.textColor} group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className="ri-check-line text-xs text-white font-bold"></i>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg sm:text-xl font-bold ${benefit.textColor} group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.highlight}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h3 className={`text-lg sm:text-xl font-semibold text-gray-800 group-hover:${benefit.textColor} transition-colors duration-300`}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Enhanced progress bar */}
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${benefit.color} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neue Umwelt-Impact Sektion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-emerald-200/50 shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4">
              Unsere <span className="text-emerald-600 font-semibold">Vision 2025</span>
            </h3>
            <p className="text-gray-600">Gemeinsam erreichen wir diese Ziele für eine grünere Zukunft</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ecoStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <i className={`${stat.icon} text-2xl ${stat.color}`}></i>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <i className="ri-target-line text-xs text-white"></i>
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-800 font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced feature highlights */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg">
            <span className="flex items-center gap-2 justify-center hover:text-emerald-600 transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-emerald-200/60">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="ri-plant-line text-emerald-600 text-sm"></i>
              </div>
              Baumfreundliche Materialien
            </span>
            <span className="flex items-center gap-2 justify-center hover:text-teal-600 transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-teal-200/60">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="ri-recycle-line text-teal-600 text-sm"></i>
              </div>
              Kreislaufwirtschaft
            </span>
            <span className="flex items-center gap-2 justify-center hover:text-green-600 transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-green-200/60">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-green-600 text-sm"></i>
              </div>
              CO₂-neutral produziert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}