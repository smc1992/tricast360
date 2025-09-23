'use client';

import React from 'react';

export default function BenefitsSection() {
  const isVisible = true; // Always visible

  return (
    <section id="vorteile" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-[#baf742]/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#baf742]/15 to-[#90CFC4]/10 rounded-full blur-3xl"></div>
        
        {/* Bottom gradient blur */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-[#90CFC4]/15 to-[#baf742]/10 rounded-full blur-3xl"></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#baf742]/3 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 flex flex-col items-start transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-8 lg:space-y-10">
              <div style={{
                display: 'inline-block',
                width: 'fit-content',
                maxWidth: 'max-content',
                position: 'relative'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'linear-gradient(to right, rgba(186, 247, 66, 0.2), rgba(144, 207, 196, 0.2))',
                  backdropFilter: 'blur(4px)',
                  color: '#0E1C3D',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(186, 247, 66, 0.3)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap',
                  width: 'auto',
                  minWidth: 'auto',
                  maxWidth: 'none'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#baf742',
                    borderRadius: '50%',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}></div>
                  Unsere Vorteile
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold leading-tight">
                <span className="text-gray-900">Warum </span>
                <span className="text-[#baf742] font-bold">TriCast360</span>
              </h2>
              <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 leading-relaxed">
                Unser innovatives Baumschutzsystem vereint Nachhaltigkeit, Effizienz und Wirtschaftlichkeit in einer revolutionären Lösung.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6 lg:space-y-8">
              <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#baf742]/5 backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-6 h-6">
                    {/* Minimalistisches Blatt-Icon */}
                    <path d="M12 2C16 6 20 10 12 22C4 10 8 6 12 2Z" fill="currentColor" opacity="0.2"/>
                    <path d="M12 2C16 6 20 10 12 22C4 10 8 6 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M12 6L12 18" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
                    <path d="M8 10C10 8 14 8 16 10" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                    <path d="M9 14C11 12 13 12 15 14" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">Umweltfreundlich</h3>
                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    100% recyclebar und aus nachhaltigen Materialien hergestellt
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#90CFC4]/5 backdrop-blur-sm border border-[#90CFC4]/20 hover:border-[#90CFC4]/40 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-[#90CFC4] to-[#baf742] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-6 h-6">
                    {/* Minimalistisches Recycling-Icon */}
                    <path d="M4 12L8 8L12 12L8 16L4 12Z" fill="currentColor" opacity="0.2"/>
                    <path d="M12 4L16 8L20 4L16 0L12 4Z" fill="currentColor" opacity="0.2"/>
                    <path d="M12 20L16 16L20 20L16 24L12 20Z" fill="currentColor" opacity="0.2"/>
                    
                    <path d="M7 9L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M13 7L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 13L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M11 19L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 13L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15 15L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    
                    {/* Pfeile */}
                    <path d="M9 7L7 9L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9L17 7L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 17L17 15L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">Wiederverwendbar</h3>
                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    Mehrfache Nutzung reduziert Kosten und schont Ressourcen
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/80 to-[#baf742]/5 backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-6 h-6">
                    {/* Minimalistisches Kosten-Icon */}
                    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="3" y="8" width="18" height="12" rx="2" fill="currentColor" opacity="0.1"/>
                    
                    {/* Balkendiagramm */}
                    <rect x="6" y="12" width="2" height="6" fill="currentColor" opacity="0.8"/>
                    <rect x="9" y="10" width="2" height="8" fill="currentColor" opacity="0.6"/>
                    <rect x="12" y="14" width="2" height="4" fill="currentColor" opacity="0.8"/>
                    <rect x="15" y="11" width="2" height="7" fill="currentColor" opacity="0.6"/>
                    <rect x="18" y="13" width="2" height="5" fill="currentColor" opacity="0.8"/>
                    
                    {/* Trend-Pfeil nach unten */}
                    <path d="M4 4L10 6L16 3L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 3L20 5L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    {/* Euro Symbol */}
                    <circle cx="12" cy="5" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M11 4.5H12.5M11 5.5H12.5" stroke="currentColor" strokeWidth="0.8"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">Kostengünstig</h3>
                  <p className="text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                    Effiziente Installation und langfristige Einsparungen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Graphic */}
          <div className={`flex justify-center items-center transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-[34rem] 2xl:h-[34rem] 3xl:w-[38rem] 3xl:h-[38rem] group">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#baf742]/10 via-transparent to-[#90CFC4]/10 animate-pulse"></div>
              
              {/* Main Circle with enhanced gradient */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-[#baf742]/25 via-[#90CFC4]/20 to-[#baf742]/30 shadow-2xl group-hover:scale-105 transition-all duration-700 backdrop-blur-sm border border-white/40 relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                
                {/* Inner Circle with better depth */}
                <div className="absolute inset-6 sm:inset-8 lg:inset-10 xl:inset-12 rounded-full bg-gradient-to-br from-[#90CFC4]/35 via-[#baf742]/35 to-[#90CFC4]/45 flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/50 group-hover:scale-105 transition-all duration-700 relative">
                  {/* Central Icon with enhanced design */}
                  <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-gradient-to-br from-[#baf742] via-[#a3e635] to-[#90CFC4] rounded-2xl shadow-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                      
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 relative z-10">
                        {/* Enhanced tree design */}
                        <rect x="11" y="16" width="2" height="6" fill="currentColor" opacity="0.9" rx="1"/>
                        
                        {/* Tree crown with better layering */}
                        <circle cx="12" cy="8" r="4.5" fill="currentColor" opacity="0.9"/>
                        <circle cx="12" cy="9.5" r="3.8" fill="currentColor" opacity="0.7"/>
                        <circle cx="12" cy="11" r="3.2" fill="currentColor" opacity="0.5"/>
                        
                        {/* Enhanced protection shield */}
                        <path d="M12 1.5L15.5 4.5L12 7.5L8.5 4.5L12 1.5Z" fill="currentColor" opacity="0.7"/>
                        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.5"/>
                        
                        {/* Additional protection elements */}
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3"/>
                      </svg>
                    </div>
                    
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold text-[#0E1C3D]">
                      TriCast360
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-gray-700">
                      Baumschutz
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating benefit icons with better positioning and responsive sizing */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-[#baf742]/25 to-[#90CFC4]/25 rounded-2xl backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/icon">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
                  <path d="M12 2L4 6V12C4 17 8 20 12 22C16 20 20 17 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <path d="M12 2L4 6V12C4 17 8 20 12 22C16 20 20 17 20 12V6L12 2Z" fill="currentColor" opacity="0.15"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="absolute top-12 right-6 sm:top-16 sm:right-8 lg:top-20 lg:right-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-[#90CFC4]/25 to-[#baf742]/25 rounded-xl backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/icon">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.08"/>
                  <path d="M12 7V12L16 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7L21 11L17 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M21 11H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              
              <div className="absolute bottom-10 left-6 sm:bottom-12 sm:left-8 lg:bottom-16 lg:left-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#baf742]/25 to-[#90CFC4]/25 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/icon">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.08"/>
                  <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-gradient-to-br from-[#90CFC4]/25 to-[#baf742]/25 rounded-2xl backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group/icon">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0E1C3D] w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.08"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <circle cx="12" cy="8" r="2.2" fill="currentColor" opacity="0.15"/>
                  <path d="M10 8L11 9L14 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {/* Additional floating particles for enhanced visual appeal - responsive positioning */}
              <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#baf742]/40 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#90CFC4]/40 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 left-1/6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#baf742]/30 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}