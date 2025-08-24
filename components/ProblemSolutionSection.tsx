
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

  const comparisons = [
    {
      problem: {
        text: 'Zeitaufwendig',
        icon: 'ri-time-line',
        detail: 'Stundenlange Montage mit Werkzeug',
        badge: 'Stunden'
      },
      solution: {
        text: 'Werkzeuglose Installation',
        icon: 'ri-tools-line',
        detail: 'Einfaches Klicksystem ohne Werkzeug',
        badge: '< 5 Min'
      }
    },
    {
      problem: {
        text: 'Nicht nachhaltig',
        icon: 'ri-delete-bin-line',
        detail: 'Einmaliger Gebrauch, dann Müll',
        badge: '1x Nutzung'
      },
      solution: {
        text: 'Wiederverwendbar',
        icon: 'ri-recycle-line',
        detail: 'Bis zu 10x wiederverwendbar',
        badge: '10x nutzbar'
      }
    },
    {
      problem: {
        text: 'Schwer & sperrig',
        icon: 'ri-truck-line',
        detail: 'Sperriger Transport, hohe Logistikkosten',
        badge: 'Schwer'
      },
      solution: {
        text: 'Leicht & kompakt',
        icon: 'ri-flight-takeoff-line',
        detail: 'Einfacher Transport und Lagerung',
        badge: '80% leichter'
      }
    },
    {
      problem: {
        text: 'Hohe Kosten',
        icon: 'ri-money-euro-circle-line',
        detail: 'Beschaffung, Transport und Entsorgung',
        badge: 'Teuer'
      },
      solution: {
        text: 'Kosteneffizient',
        icon: 'ri-line-chart-line',
        detail: 'Langfristige Kostenersparnis',
        badge: '60% günstiger'
      }
    }
  ];

  return (
    <section id="problem-solution" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <SectionGradient className="absolute inset-0" />
      <SectionNaturalBackground variant="leaves" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-lightbulb-line mr-2"></i>
            Das Problem vs. Die Lösung
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Von der <span className="text-red-500 font-medium">Herausforderung</span>
            <br />
            zur <span className="text-[#39F2AE] font-medium">Innovation</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Problem */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center border border-red-300 flex-shrink-0">
                    <i className={`${comparison.problem.icon} text-2xl text-red-600`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#2b3138]">{comparison.problem.text}</h3>
                      <span className="bg-red-200 text-[#2b3138] px-3 py-1 rounded-full text-sm font-medium">
                        {comparison.problem.badge}
                      </span>
                    </div>
                    <p className="text-[#2b3138] text-sm">{comparison.problem.detail}</p>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center shadow-lg">
                  <span className="text-gray-600 font-bold text-sm">VS</span>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-[#39F2AE]/10 rounded-xl p-6 border border-[#39F2AE]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39F2AE]/20 rounded-xl flex items-center justify-center border border-[#39F2AE]/30 flex-shrink-0">
                    <i className={`${comparison.solution.icon} text-2xl text-[#39F2AE]`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-[#2b3138]">{comparison.solution.text}</h3>
                      <span className="bg-[#39F2AE]/20 text-[#2b3138] px-3 py-1 rounded-full text-sm font-medium">
                        {comparison.solution.badge}
                      </span>
                    </div>
                    <p className="text-[#2b3138] text-sm">{comparison.solution.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
