
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

  const problems = [
    {
      text: 'Zeitaufwendig',
      icon: 'ri-time-line',
      detail: 'Stundenlange Montage mit Werkzeug'
    },
    {
      text: 'Nicht nachhaltig', 
      icon: 'ri-leaf-line',
      detail: 'Einmaliger Gebrauch, dann Müll'
    },
    {
      text: 'Schwer zu transportieren',
      icon: 'ri-truck-line',
      detail: 'Sperriger Transport, hohe Logistikkosten'
    },
    {
      text: 'Hohe Kosten',
      icon: 'ri-money-euro-circle-line',
      detail: 'Beschaffung, Transport und Entsorgung'
    }
  ];

  const solutions = [
    {
      text: 'Werkzeuglose Installation',
      icon: 'ri-tools-line',
      detail: 'Einfaches Klicksystem ohne Werkzeug',
      highlight: '< 5 Min'
    },
    {
      text: 'Nachhaltig & wiederverwendbar',
      icon: 'ri-recycle-line',
      detail: 'Bis zu 10x wiederverwendbar',
      highlight: '10x nutzbar'
    },
    {
      text: 'Leicht & kompakt',
      icon: 'ri-flight-takeoff-line',
      detail: 'Einfacher Transport und Lagerung',
      highlight: '80% leichter'
    },
    {
      text: 'Kosteneffizient',
      icon: 'ri-line-chart-line',
      detail: 'Langfristige Kostenersparnis',
      highlight: '60% weniger'
    }
  ];

  return (
    <section id="problem-solution" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <SectionGradient className="absolute inset-0" />
      <SectionNaturalBackground variant="leaves" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Simplified Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-lightbulb-line mr-2"></i>
            2020 aus der Praxis geboren
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Von der <span className="text-red-500 font-medium">Herausforderung</span>
            <br />
            zur <span className="text-[#39F2AE] font-medium">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Klassischer Baumschutz war schwer, sperrig und oft nicht regelkonform. 
            <span className="text-[#39F2AE] font-medium"> Tricast360 macht es leicht, wiederverwendbar und effizient.</span>
          </p>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Problem Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-200">
                  <i className="ri-close-circle-line text-2xl text-red-500"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#2b3138]">Das Problem</h3>
                  <p className="text-red-500 text-sm">Herkömmliche Lösungen</p>
                </div>
              </div>
            </div>
               
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className={`${problem.icon} text-red-500 text-xl`}></i>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-lg font-medium text-[#2b3138]">
                        {problem.text}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {problem.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center border border-[#39F2AE]/30">
                  <i className="ri-check-double-line text-2xl text-[#39F2AE]"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#2b3138]">Die Lösung</h3>
                  <p className="text-[#39F2AE] text-sm">Tricast360 Innovation</p>
                </div>
              </div>
            </div>
               
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className={`${solution.icon} text-[#39F2AE] text-xl`}></i>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-medium text-[#2b3138] flex-1">
                          {solution.text}
                        </h4>
                        <div className="px-3 py-1 bg-[#39F2AE]/10 rounded-full border border-[#39F2AE]/30">
                          <span className="text-[#39F2AE] text-xs font-bold">{solution.highlight}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {solution.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom comparison stats */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[#39F2AE]">
                  60%
                </div>
                <p className="text-[#2b3138] font-medium">Kostenersparnis</p>
                <p className="text-gray-600 text-sm">gegenüber herkömmlichen Lösungen</p>
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[#39F2AE]">
                  10x
                </div>
                <p className="text-[#2b3138] font-medium">Wiederverwendbar</p>
                <p className="text-gray-600 text-sm">für maximale Nachhaltigkeit</p>
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl font-bold text-[#39F2AE]">
                  &lt; 5 Min
                </div>
                <p className="text-[#2b3138] font-medium">Montagezeit</p>
                <p className="text-gray-600 text-sm">werkzeuglose Installation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
