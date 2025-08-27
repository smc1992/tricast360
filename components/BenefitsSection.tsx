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
      color: "from-[#39F2AE] to-[#2dd89a]",
      bgColor: "bg-[#39F2AE]/10",
      borderColor: "border-[#39F2AE]/20",
      textColor: "text-[#39F2AE]"
    },
    {
      title: "Ressourcenschonend",
      description: "Minimaler Materialverbrauch durch intelligente Wiederverwendung",
      icon: "ri-recycle-line",
      highlight: "Mehrfach nutzbar",
      color: "from-[#39F2AE] to-[#2dd89a]",
      bgColor: "bg-[#39F2AE]/10",
      borderColor: "border-[#39F2AE]/20",
      textColor: "text-[#39F2AE]"
    },
    {
      title: "Umweltfreundlich",
      description: "Nachhaltige Materialien und umweltfreundliche Produktion",
      icon: "ri-award-line",
      highlight: "Nachhaltig",
      color: "from-[#39F2AE] to-[#2dd89a]",
      bgColor: "bg-[#39F2AE]/10",
      borderColor: "border-[#39F2AE]/20",
      textColor: "text-[#39F2AE]"
    },
    {
      title: "Zukunftssicher",
      description: "Investition in nachhaltige Technologie für kommende Generationen",
      icon: "ri-seedling-line",
      highlight: "Future-Ready",
      color: "from-[#39F2AE] to-[#2dd89a]",
      bgColor: "bg-[#39F2AE]/10",
      borderColor: "border-[#39F2AE]/20",
      textColor: "text-[#39F2AE]"
    }
  ];

  const ecoStats = [
    {
      value: "1,200+",
      label: "Bäume schützen",
      sublabel: "unser Ziel für 2025",
      icon: "ri-tree-line",
      color: "text-[#39F2AE]"
    },
    {
      value: "85%",
      label: "Weniger Abfall",
      sublabel: "durch Wiederverwendung angestrebt",
      icon: "ri-leaf-line",
      color: "text-[#39F2AE]"
    },
    {
      value: "300kg",
      label: "CO₂ einsparen",
      sublabel: "pro Projekt als Ziel",
      icon: "ri-earth-line",
      color: "text-[#39F2AE]"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <SectionGradient className="absolute inset-0" reverse={true} />
      <SectionNaturalBackground variant="trees" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 content-spacing">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-leaf-line text-[#2b3138]"></i>
            <span className="text-[#2b3138] font-medium">Nachhaltigkeit im Fokus</span>
          </div>
          <h2 className="text-section-title font-light mb-4 sm:mb-6 text-gray-800">
            Umwelt<span className="bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] bg-clip-text text-transparent font-semibold">vorteile</span> für morgen
          </h2>
          <p className="text-large text-gray-600 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Jeder geschützte Baum ist ein Beitrag zum Klimaschutz. Unser System macht 
            <span className="text-[#39F2AE] font-semibold"> nachhaltigen Baumschutz wirtschaftlich und ökologisch sinnvoll</span>
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${benefit.bgColor} rounded-2xl p-6 lg:p-8 border ${benefit.borderColor} shadow-sm`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center border ${benefit.borderColor}`}>
                    <i className={`${benefit.icon} text-xl lg:text-2xl ${benefit.textColor}`}></i>
                  </div>
                  <div className={`text-lg lg:text-xl font-bold ${benefit.textColor}`}>
                    {benefit.highlight}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neue Umwelt-Impact Sektion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-[#39F2AE]/20 shadow-xl mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-800 mb-4">
              Unsere <span className="text-[#39F2AE] font-semibold">Vision 2025</span>
            </h3>
            <p className="text-gray-600">Gemeinsam erreichen wir diese Ziele für eine grünere Zukunft</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ecoStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#39F2AE]/10 to-[#2dd89a]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative">
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
            <span className="flex items-center gap-2 justify-center hover:text-[#39F2AE] transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-[#39F2AE]/20">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#39F2AE]/10 rounded-full flex items-center justify-center">
                <i className="ri-plant-line text-[#39F2AE] text-sm"></i>
              </div>
              Baumfreundliche Materialien
            </span>
            <span className="flex items-center gap-2 justify-center hover:text-[#39F2AE] transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-[#39F2AE]/20">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#39F2AE]/10 rounded-full flex items-center justify-center">
                <i className="ri-recycle-line text-[#39F2AE] text-sm"></i>
              </div>
              Kreislaufwirtschaft
            </span>
            <span className="flex items-center gap-2 justify-center hover:text-[#39F2AE] transition-colors duration-300 cursor-default bg-white/60 px-4 py-2 rounded-full border border-[#39F2AE]/20">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#39F2AE]/10 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-[#39F2AE] text-sm"></i>
              </div>
              CO₂-neutral produziert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}