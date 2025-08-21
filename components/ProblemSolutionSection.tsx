
'use client';

import { useState, useEffect } from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function ProblemSolutionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    },
    {
      text: 'Risiko von Verzögerungen',
      icon: 'ri-alarm-warning-line',
      detail: 'Komplizierte Montage führt zu Projektverzug'
    }
  ];

  const solutions = [
    {
      text: 'Werkzeuglose Montage in Minuten',
      icon: 'ri-flashlight-line',
      detail: 'Einfaches Klicksystem ohne Werkzeug',
      highlight: '< 5 Min'
    },
    {
      text: 'Leicht & kompakt – geschlossenes System', 
      icon: 'ri-box-3-line',
      detail: 'Platzsparend und einfach zu handhaben',
      highlight: '80% leichter'
    },
    {
      text: 'Recyceltes Material, mehrfach einsetzbar',
      icon: 'ri-recycle-line',
      detail: 'Nachhaltig und wiederverwendbar',
      highlight: '10x nutzbar'
    },
    {
      text: 'Erfüllt strenge Auflagen',
      icon: 'ri-shield-check-line',
      detail: 'Zertifiziert nach allen Standards',
      highlight: '100% konform'
    },
    {
      text: 'Senkt Beschaffungs- und Folgekosten',
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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg">
            <i className="ri-lightbulb-line mr-2"></i>
            2020 aus der Praxis geboren
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light mb-6 sm:mb-8 text-[#2b3138] leading-tight px-2">
            Von der <span className="text-red-500 font-medium">Herausforderung</span>
            <br />
            zur <span className="text-[#39F2AE] font-medium">Innovation</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto px-4">
            Klassischer Baumschutz war schwer, sperrig und oft nicht regelkonform. 
            <span className="text-[#39F2AE] font-medium"> Tricast360 macht es leicht, wiederverwendbar und effizient.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problem Section */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8 text-center sm:text-left">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-red-200">
                    <i className="ri-close-circle-line text-2xl sm:text-3xl text-red-500"></i>
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#2b3138]">Das Problem</h3>
                  <p className="text-red-500 text-xs sm:text-sm">Herkömmliche Lösungen</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-500 cursor-pointer ${hoveredIndex === index ? 'scale-105 shadow-xl' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-lg sm:rounded-xl flex items-center justify-center mt-1 group-hover:bg-red-100 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <i className={`${problem.icon} text-red-500 text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300`}></i>
                      </div>
                      <div className="flex-1 space-y-2 min-w-0">
                        <h4 className="text-base sm:text-lg font-medium text-[#2b3138] group-hover:text-red-500 transition-colors duration-300 leading-tight">
                          {problem.text}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {problem.detail}
                        </p>
                        {/* Progress bar */}
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                        </div>
                      </div>
                      <div className="text-red-400 group-hover:text-red-500 transition-colors duration-300 flex-shrink-0">
                        <i className="ri-arrow-right-line text-base sm:text-lg group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r from-red-500 to-[#39F2AE] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-white font-bold text-base lg:text-lg">VS</span>
              </div>
              <div className="absolute inset-0 border-2 lg:border-4 border-white rounded-full"></div>
            </div>
          </div>

          {/* Mobile VS Divider */}
          <div className="lg:hidden flex justify-center py-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-[#39F2AE] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-white font-bold text-base">VS</span>
              </div>
              <div className="absolute inset-0 border-2 border-white rounded-full"></div>
            </div>
          </div>

          {/* Solution Section */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-6 sm:mb-8 text-center sm:text-left">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-[#39F2AE]/30">
                    <i className="ri-check-double-line text-2xl sm:text-3xl text-[#39F2AE]"></i>
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-[#39F2AE] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-[#2b3138]">Die Lösung</h3>
                  <p className="text-[#39F2AE] text-xs sm:text-sm">Tricast360 Innovation</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#39F2AE]/50 hover:shadow-lg transition-all duration-500 cursor-pointer ${hoveredIndex === index + 10 ? 'scale-105 shadow-xl' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index + 10)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39F2AE]/10 rounded-lg sm:rounded-xl flex items-center justify-center mt-1 group-hover:bg-[#39F2AE]/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <i className={`${solution.icon} text-[#39F2AE] text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300`}></i>
                      </div>
                      <div className="flex-1 space-y-2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <h4 className="text-base sm:text-lg font-medium text-[#2b3138] group-hover:text-[#39F2AE] transition-colors duration-300 leading-tight flex-1">
                            {solution.text}
                          </h4>
                          <div className="px-2 sm:px-3 py-1 bg-[#39F2AE]/10 rounded-full border border-[#39F2AE]/30 flex-shrink-0 self-start sm:self-auto">
                            <span className="text-[#39F2AE] text-xs font-bold">{solution.highlight}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {solution.detail}
                        </p>
                        {/* Progress bar */}
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                        </div>
                      </div>
                      <div className="text-[#39F2AE]/60 group-hover:text-[#39F2AE] transition-colors duration-300 flex-shrink-0">
                        <i className="ri-check-line text-base sm:text-lg group-hover:scale-125 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom comparison stats */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="space-y-2 sm:space-y-3 group cursor-pointer">
                <div className="text-3xl sm:text-4xl font-bold text-[#39F2AE] group-hover:scale-110 transition-transform duration-300">
                  60%
                </div>
                <p className="text-[#2b3138] font-medium text-sm sm:text-base">Kostenersparnis</p>
                <p className="text-gray-600 text-xs sm:text-sm">gegenüber herkömmlichen Lösungen</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 group cursor-pointer">
                <div className="text-3xl sm:text-4xl font-bold text-[#39F2AE] group-hover:scale-110 transition-transform duration-300">
                  10x
                </div>
                <p className="text-[#2b3138] font-medium text-sm sm:text-base">Wiederverwendbar</p>
                <p className="text-gray-600 text-xs sm:text-sm">für maximale Nachhaltigkeit</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 group cursor-pointer">
                <div className="text-3xl sm:text-4xl font-bold text-[#39F2AE] group-hover:scale-110 transition-transform duration-300">
                  &lt; 5 Min
                </div>
                <p className="text-[#2b3138] font-medium text-sm sm:text-base">Montagezeit</p>
                <p className="text-gray-600 text-xs sm:text-sm">werkzeuglose Installation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
