
'use client';

import React from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function EnvironmentalImpactSection() {
  const isVisible = true; // Always visible

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-12 w-60 h-60 bg-[#90CFC4]/25 rounded-full"></div>
        <div className="absolute bottom-16 right-12 w-48 h-48 bg-[#90CFC4]/20 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-8 lg:space-y-10">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm rounded-full border border-[#baf742]/30" style={{
                width: 'fit-content',
                maxWidth: 'max-content',
                alignSelf: 'flex-start',
                flex: 'none',
                display: 'inline-block',
                float: 'left',
                clear: 'both'
              }}>
                <span className="text-sm font-semibold text-[#0E1C3D]">Nachhaltigkeit</span>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold leading-tight">
                <span className="text-gray-900">Für eine </span>
                <span className="text-[#baf742] font-bold">grünere Zukunft</span>
              </h2>
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 leading-relaxed">
                Tricast360 setzt neue Maßstäbe in der nachhaltigen Stadtentwicklung.
                Unser innovatives System schützt nicht nur Bäume, sondern auch unsere Umwelt.
              </p>
            </div>
            
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-7">
              <p className="body-base xl:text-xl 2xl:text-2xl text-gray-700">
                Tricast360 setzt neue Maßstäbe in der nachhaltigen Stadtentwicklung.
                Unser innovatives System schützt nicht nur Bäume, sondern auch unsere Umwelt.
              </p>
              
              <div className="space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-7">
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="text-[#0E1C3D] w-6 h-6"
                    >
                      {/* Minimalistisches CO2-Reduktion Icon */}
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">80% CO₂-Reduktion</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">vs. herkömmliche Systeme</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="text-[#0E1C3D] w-6 h-6"
                    >
                      {/* Minimalistisches Recycling Icon */}
                      <path d="M7 7L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M17 7L7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M9 9L15 15" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      <path d="M15 9L9 15" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">100% wiederverwendbar</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">durch Mehrfachnutzung</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="text-[#0E1C3D] w-6 h-6"
                    >
                      {/* Minimalistisches Blatt/Natur Icon */}
                      <path d="M12 2C16 6 20 10 12 22C4 10 8 6 12 2Z" fill="currentColor" opacity="0.2"/>
                      <path d="M12 2C16 6 20 10 12 22C4 10 8 6 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M12 6L12 18" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                      <path d="M8 10C10 8 14 8 16 10" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">Baumfreundliche Materialien</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">nachhaltig und umweltschonend</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="text-[#0E1C3D] w-6 h-6"
                    >
                      {/* Minimalistisches CO2-neutral Icon */}
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/>
                      <path d="M12 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M12 15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M3 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M15 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-gray-900 xl:text-lg 2xl:text-xl">CO₂-neutral produziert</span>
                    <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">für maximale Nachhaltigkeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Environmental Impact Graphic */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="w-full h-full bg-gradient-to-br from-[#baf742]/20 to-[#90CFC4]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#baf742]/30 overflow-hidden">
                <svg 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full h-full p-8"
                >
                  {/* Animated CSS */}
                  <defs>
                    <style>
                      {`
                        .rotate-slow { animation: rotate 20s linear infinite; }
                        .float { animation: float 3s ease-in-out infinite; }
                        .pulse-green { animation: pulse-green 2s ease-in-out infinite; }
                        .fade-in { animation: fade-in 1s ease-in-out; }
                        
                        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
                        @keyframes pulse-green { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
                        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                      `}
                    </style>
                  </defs>
                  
                  {/* Earth/Globe Base */}
                  <circle cx="200" cy="200" r="120" fill="url(#earthGradient)" className="fade-in"/>
                  <defs>
                    <radialGradient id="earthGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#90CFC4"/>
                      <stop offset="70%" stopColor="#4ade80"/>
                      <stop offset="100%" stopColor="#16a34a"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Continents/Land masses */}
                  <path d="M150 160 Q180 140 220 160 Q240 180 220 200 Q180 220 150 200 Z" fill="#baf742" opacity="0.8" className="fade-in"/>
                  <path d="M180 240 Q200 230 230 240 Q240 260 220 270 Q190 280 180 260 Z" fill="#baf742" opacity="0.7" className="fade-in"/>
                  <circle cx="160" cy="180" r="8" fill="#baf742" opacity="0.6" className="fade-in"/>
                  <circle cx="240" cy="220" r="6" fill="#baf742" opacity="0.6" className="fade-in"/>
                  
                  {/* Rotating orbital rings */}
                  <g className="rotate-slow">
                    <circle cx="200" cy="200" r="140" stroke="#baf742" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="10,5"/>
                    <circle cx="200" cy="200" r="160" stroke="#90CFC4" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="8,8"/>
                  </g>
                  
                  {/* CO₂ molecules being absorbed */}
                  <g className="float">
                    <circle cx="120" cy="120" r="4" fill="#ef4444" opacity="0.8"/>
                    <text x="125" y="125" fontSize="8" fill="#ef4444" fontWeight="bold">CO₂</text>
                  </g>
                  <g className="float" style={{animationDelay: '1s'}}>
                    <circle cx="300" cy="140" r="4" fill="#ef4444" opacity="0.8"/>
                    <text x="305" y="145" fontSize="8" fill="#ef4444" fontWeight="bold">CO₂</text>
                  </g>
                  <g className="float" style={{animationDelay: '2s'}}>
                    <circle cx="100" cy="280" r="4" fill="#ef4444" opacity="0.8"/>
                    <text x="105" y="285" fontSize="8" fill="#ef4444" fontWeight="bold">CO₂</text>
                  </g>
                  
                  {/* Arrows showing CO₂ absorption */}
                  <path d="M140 140 L170 170" stroke="#baf742" strokeWidth="3" markerEnd="url(#arrowhead)" className="pulse-green"/>
                  <path d="M280 160 L230 180" stroke="#baf742" strokeWidth="3" markerEnd="url(#arrowhead)" className="pulse-green"/>
                  <path d="M120 260 L160 230" stroke="#baf742" strokeWidth="3" markerEnd="url(#arrowhead)" className="pulse-green"/>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#baf742"/>
                    </marker>
                  </defs>
                  
                  {/* Trees growing around the earth */}
                  <g className="float">
                    <path d="M340 200 L345 190 L350 200 L345 185 L340 200" fill="#16a34a"/>
                    <rect x="343" y="200" width="4" height="15" fill="#8b4513"/>
                  </g>
                  <g className="float" style={{animationDelay: '0.5s'}}>
                    <path d="M60 200 L65 190 L70 200 L65 185 L60 200" fill="#16a34a"/>
                    <rect x="63" y="200" width="4" height="15" fill="#8b4513"/>
                  </g>
                  <g className="float" style={{animationDelay: '1.5s'}}>
                    <path d="M200 60 L205 50 L210 60 L205 45 L200 60" fill="#16a34a"/>
                    <rect x="203" y="60" width="4" height="15" fill="#8b4513"/>
                  </g>
                  <g className="float" style={{animationDelay: '2.5s'}}>
                    <path d="M200 340 L205 330 L210 340 L205 325 L200 340" fill="#16a34a"/>
                    <rect x="203" y="340" width="4" height="15" fill="#8b4513"/>
                  </g>
                  
                  {/* Recycling symbol */}
                  <g transform="translate(320, 280)" className="rotate-slow">
                    <path d="M0 -15 L10 -5 L5 -5 L5 5 L-5 5 L-5 -5 L-10 -5 Z" fill="#baf742" opacity="0.8"/>
                    <path d="M15 0 L5 10 L5 5 L-5 5 L-5 -5 L5 -5 L5 -10 Z" fill="#baf742" opacity="0.8"/>
                    <path d="M0 15 L-10 5 L-5 5 L-5 -5 L5 -5 L5 5 L10 5 Z" fill="#baf742" opacity="0.8"/>
                  </g>
                  
                  {/* Energy/sustainability symbols */}
                  <g transform="translate(80, 320)" className="pulse-green">
                    <circle cx="0" cy="0" r="12" fill="#baf742" opacity="0.3"/>
                    <path d="M-6 -3 L6 -3 L0 6 Z" fill="#baf742"/>
                    <circle cx="0" cy="-6" r="2" fill="#baf742"/>
                  </g>
                  
                  {/* Percentage indicator */}
                  <g transform="translate(200, 200)">
                    <text x="0" y="-10" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#0E1C3D">-80%</text>
                    <text x="0" y="15" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0E1C3D">CO₂</text>
                  </g>
                  
                  {/* Floating particles */}
                  <circle cx="80" cy="100" r="2" fill="#baf742" opacity="0.6" className="float"/>
                  <circle cx="320" cy="120" r="1.5" fill="#90CFC4" opacity="0.7" className="float" style={{animationDelay: '1s'}}/>
                  <circle cx="90" cy="320" r="2.5" fill="#baf742" opacity="0.5" className="float" style={{animationDelay: '2s'}}/>
                  <circle cx="310" cy="300" r="1.8" fill="#90CFC4" opacity="0.6" className="float" style={{animationDelay: '0.5s'}}/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
