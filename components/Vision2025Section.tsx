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

  const visionGoals = [
    {
      category: "Klimaschutz",
      metric: "1.000t",
      label: "CO₂ einsparen",
      description: "Durch nachhaltigen Materialkreislauf und lokale Produktion",
      icon: "ri-earth-line",
      color: "emerald"
    },
    {
      category: "Ressourcen",
      metric: "75%",
      label: "Weniger Material",
      description: "Durch intelligente Wiederverwendung und Kreislaufwirtschaft",
      icon: "ri-recycle-line",
      color: "teal"
    },
    {
      category: "Biodiversität",
      metric: "5.000",
      label: "Bäume schützen",
      description: "Urbane Ökosysteme erhalten und Artenvielfalt fördern",
      icon: "ri-plant-line",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'text-emerald-600',
        metric: 'text-emerald-600',
        badge: 'bg-emerald-100 text-emerald-800',
        hover: 'hover:border-emerald-300'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        icon: 'text-teal-600',
        metric: 'text-teal-600',
        badge: 'bg-teal-100 text-teal-800',
        hover: 'hover:border-teal-300'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        metric: 'text-green-600',
        badge: 'bg-green-100 text-green-800',
        hover: 'hover:border-green-300'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="vision-2025" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-target-line mr-2"></i>
            Vision 2025
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Unsere Ziele für eine
            <br />
            <span className="text-[#39F2AE] font-medium">grünere Zukunft</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Messbare Ziele für Klimaschutz, Ressourcenschonung und Biodiversität
          </p>
        </div>

        {/* 3-Karten-Sektion */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {visionGoals.map((goal, index) => {
            const colors = getColorClasses(goal.color);
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 border ${colors.border} ${colors.hover} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon & Ziel 2025 Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center border ${colors.border}`}>
                    <i className={`${goal.icon} text-3xl ${colors.icon}`}></i>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <i className="ri-target-line text-xs"></i>
                    Ziel 2025
                  </span>
                </div>

                {/* Kategorie */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[#2b3138] mb-2">
                    {goal.category}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Leitmetrik */}
                <div className="text-center pt-6 border-t border-gray-100">
                  <div className={`text-4xl font-bold ${colors.metric} mb-2`}>
                    {goal.metric}
                  </div>
                  <div className="text-[#2b3138] font-medium">
                    {goal.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hinweis */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <i className="ri-information-line text-gray-500"></i>
            <span className="text-gray-600 text-sm">
              Zielwerte – werden jährlich aktualisiert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}