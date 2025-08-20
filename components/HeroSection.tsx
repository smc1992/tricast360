'use client';

import { useState, useEffect } from 'react';
import ProjectRequestModal from './ProjectRequestModal';
import Link from 'next/link';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left opacity-0">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-[#2b3138]">
                  <span className="block">Treecast360</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-extralight mt-2">
                    Der neue Standard
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#39F2AE] font-extralight">
                    im Baumschutz
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end opacity-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-24 sm:pt-32 overflow-hidden bg-gradient-to-br from-emerald-50/70 via-teal-50/50 to-cyan-50/60">
        {/* Enhanced Background mit natürlichen Elementen */}
        <div
          className="absolute inset-0 transition-all duration-700 transform"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=lush%20green%20forest%20canopy%20with%20dappled%20sunlight%20filtering%20through%20leaves%20sustainable%20urban%20tree%20protection%20environment%20nature%20conservation%20clean%20bright%20natural%20lighting%20aerial%20view%20healthy%20ecosystem&width=1200&height=800&seq=hero-eco-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isHovered ? 0.25 : 0.20,
            filter: isHovered
              ? 'brightness(1.1) contrast(1.1) saturate(1.2)'
              : 'brightness(1.0) contrast(1.0) saturate(1.1)',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        >
          {/* Natürliche Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/80 via-white/60 to-teal-50/70 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-emerald-50/40 transition-all duration-700"></div>
          {/* Umwelt-Akzent Effekte */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr from-emerald-400/8 via-transparent to-teal-300/6 transition-all duration-1000 ${
              isHovered ? 'opacity-60' : 'opacity-30'
            }`}
          ></div>
        </div>

        {/* Floating Umwelt-Partikel */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 sm:left-20 w-3 h-3 bg-emerald-400/30 rounded-full float shadow-lg"></div>
          <div
            className="absolute top-40 right-16 sm:right-32 w-2 h-2 bg-teal-400/40 rounded-full float shadow-md"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-32 left-20 sm:left-40 w-4 h-4 bg-emerald-300/25 rounded-full float shadow-lg"
            style={{ animationDelay: '4s' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 sm:right-20 w-2.5 h-2.5 bg-teal-300/35 rounded-full float shadow-md"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Enhanced Main Content */}
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column mit verbessertem Design */}
            <div
              className={`transition-all duration-1000 text-center lg:text-left ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Premium Glassmorphism Container */}
              <div className="backdrop-blur-xl bg-white/85 border border-emerald-200/50 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
                {/* Subtile Umwelt-Akzente */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/60 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-xl"></div>
                
                <div className="space-y-6 sm:space-y-8 relative z-10">
                  {/* Umwelt-Badge */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-100/80 to-teal-100/60 px-4 py-2 rounded-full border border-emerald-200/60 mb-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-700 text-sm font-medium">Nachhaltige Innovation für die Zukunft</span>
                    <i className="ri-leaf-line text-emerald-600 text-sm"></i>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-[#2b3138]">
                      <span className="block">Treecast360</span>
                      <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-extralight mt-2">
                        Der neue Standard
                      </span>
                      <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#39F2AE] font-extralight">
                        im Baumschutz
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Revolutionärer Schutz für jeden Baum - {` `}
                      <span className="text-[#39F2AE] font-semibold">
                        nachhaltig, flexibel und zukunftsweisend.
                      </span>
                    </p>
                  </div>

                  {/* Call-to-Action */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="flex items-center gap-2 justify-center relative z-10">
                        <i className="ri-phone-line text-lg sm:text-xl"></i>
                        Projekt anfragen
                      </span>
                    </button>
                    <Link
                      href="/system"
                      className="group border-2 border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-[#39F2AE] hover:text-[#39F2AE] hover:bg-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                    >
                      <i className="ri-eye-line text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                      System entdecken
                    </Link>
                  </div>

                  {/* Nachhaltigkeits-Indikatoren */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <div className="flex items-center gap-2 bg-emerald-50/80 px-3 py-2 rounded-full border border-emerald-200/60">
                      <i className="ri-recycle-line text-emerald-600 text-sm"></i>
                      <span className="text-emerald-700 text-xs font-medium">100% wiederverwendbar</span>
                    </div>
                    <div className="flex items-center gap-2 bg-teal-50/80 px-3 py-2 rounded-full border border-teal-200/60">
                      <i className="ri-leaf-line text-teal-600 text-sm"></i>
                      <span className="text-teal-700 text-xs font-medium">Umweltschonend</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-50/80 px-3 py-2 rounded-full border border-emerald-200/60">
                      <i className="ri-plant-line text-emerald-600 text-sm"></i>
                      <span className="text-emerald-700 text-xs font-medium">Baumfreundlich</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column – SVG illustration */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <div
                  className="relative z-10 transition-all duration-500 transform"
                  style={{
                    transform: isHovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
                    filter: isHovered
                      ? 'drop-shadow(0 20px 40px rgba(57, 242, 174, 0.3)) brightness(1.1)'
                      : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
                  }}
                >
                  {/* SVG graphic (unchanged) */}
                  <svg width="280" height="280" viewBox="0 0 320 320" className="drop-shadow-2xl sm:w-[320px] sm:h-[320px]">
                    <defs>
                      <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B4513" />
                        <stop offset="50%" stopColor="#A0522D" />
                        <stop offset="100%" stopColor="#654321" />
                      </linearGradient>
                      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#228B22" />
                        <stop offset="50%" stopColor="#32CD32" />
                        <stop offset="100%" stopColor="#006400" />
                      </linearGradient>
                      <linearGradient id="protectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#39F2AE" />
                        <stop offset="50%" stopColor="#2dd89a" />
                        <stop offset="100%" stopColor="#25c785" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Rotating protection rings */}
                    <circle
                      cx="160"
                      cy="160"
                      r="145"
                      fill="none"
                      stroke="url(#protectionGradient)"
                      strokeWidth="6"
                      strokeDasharray="15 5"
                      filter="url(#strongGlow)"
                      className="transition-all duration-1000 opacity-60"
                      style={{
                        transformOrigin: '160px 160px',
                        transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="125"
                      fill="none"
                      stroke="url(#protectionGradient)"
                      strokeWidth="4"
                      strokeDasharray="10 8"
                      filter="url(#glow)"
                      className="transition-all duration-1000 opacity-80"
                      style={{
                        transformOrigin: '160px 160px',
                        transform: isHovered ? 'rotate(-90deg)' : 'rotate(0deg)',
                      }}
                    />

                    {/* Tree trunk */}
                    <rect x="140" y="120" width="40" height="120" rx="20" fill="url(#treeGradient)" filter="url(#glow)" className="opacity-90" />
                    {/* Bark texture */}
                    <rect x="142" y="130" width="2" height="15" fill="#654321" className="opacity-60" />
                    <rect x="176" y="145" width="2" height="12" fill="#654321" className="opacity-60" />
                    <rect x="145" y="180" width="2" height="18" fill="#654321" className="opacity-60" />
                    <rect x="172" y="195" width="2" height="14" fill="#654321" className="opacity-60" />

                    {/* Tree crown */}
                    <circle cx="160" cy="110" r="50" fill="url(#crownGradient)" filter="url(#glow)" className="opacity-90" />
                    <circle cx="145" cy="105" r="35" fill="url(#crownGradient)" className="opacity-70" />
                    <circle cx="175" cy="115" r="30" fill="url(#crownGradient)" className="opacity-70" />

                    {/* Central protection ring */}
                    <circle
                      cx="160"
                      cy="160"
                      r="80"
                      fill="none"
                      stroke="url(#protectionGradient)"
                      strokeWidth="8"
                      strokeDasharray="25 5"
                      filter="url(#strongGlow)"
                      className="opacity-40"
                    />

                    {/* Roots */}
                    <ellipse cx="160" cy="240" rx="35" ry="8" fill="url(#treeGradient)" className="opacity-40" />

                    {/* 360° protection label */}
                    <text
                      x="160"
                      y="295"
                      textAnchor="middle"
                      fill="#2b3138"
                      fontSize="16"
                      fontWeight="700"
                      filter="url(#glow)"
                      className="font-[`Inter`] tracking-wider sm:text-[18px]"
                    >
                      360° BAUMSCHUTZ
                    </text>

                    {/* Degree markings */}
                    <g fill="#2b3138" className="opacity-80">
                      <text x="160" y="20" textAnchor="middle" fontSize="10" fontWeight="600" className="sm:text-[12px]">
                        0°
                      </text>
                      <text x="300" y="165" textAnchor="middle" fontSize="10" fontWeight="600" className="sm:text-[12px]">
                        90°
                      </text>
                      <text x="160" y="310" textAnchor="middle" fontSize="10" fontWeight="600" className="sm:text-[12px]">
                        180°
                      </text>
                      <text x="20" y="165" textAnchor="middle" fontSize="10" fontWeight="600" className="sm:text-[12px]">
                        270°
                      </text>
                    </g>

                    {/* Connection lines */}
                    <g stroke="url(#protectionGradient)" strokeWidth="2" opacity="0.3" strokeDasharray="3 3">
                      <line x1="160" y1="160" x2="160" y2="33" />
                      <line x1="160" y1="160" x2="255" y2="74" />
                      <line x1="160" y1="160" x2="295" y2="154" />
                      <line x1="160" y1="160" x2="255" y2="234" />
                      <line x1="160" y1="160" x2="160" y2="293" />
                      <line x1="160" y1="160" x2="65" y2="234" />
                      <line x1="160" y1="160" x2="25" y2="154" />
                      <line x1="160" y1="160" x2="65" y2="74" />
                    </g>
                  </svg>
                </div>

                {/* Decorative rings */}
                <div
                  className={`absolute inset-0 border-2 rounded-full animate-pulse shadow-lg transition-all duration-700 ${
                    isHovered ? 'border-[#39F2AE]/60 shadow-[#39F2AE]/40' : 'border-[#39F2AE]/40 shadow-[#39F2AE]/30'
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? '0 0 60px rgba(57, 242, 174, 0.4), inset 0 0 30px rgba(57, 242, 174, 0.1)'
                      : '0 0 30px rgba(57, 242, 174, 0.3)',
                  }}
                ></div>
                <div
                  className={`absolute inset-2 border rounded-full shadow-inner animate-pulse transition-all duration-700 delay-200 ${
                    isHovered ? 'border-[#39F2AE]/40 shadow-[#39F2AE]/20' : 'border-[#39F2AE]/30'
                  }`}
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                  className={`absolute inset-6 border rounded-full animate-pulse transition-all duration-700 delay-400 ${
                    isHovered ? 'border-[#39F2AE]/30' : 'border-[#39F2AE]/20'
                  }`}
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className={`absolute inset-10 border rounded-full animate-pulse transition-all duration-700 delay-600 ${
                    isHovered ? 'border-[#39F2AE]/20' : 'border-[#39F2AE]/10'
                  }`}
                  style={{ animationDelay: '1.5s' }}
                ></div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                    isHovered ? 'bg-[#39F2AE]/5 scale-110' : 'bg-transparent scale-100'
                  }`}
                  style={{
                    filter: isHovered ? 'blur(20px)' : 'blur(0px)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-emerald-800">
            <span className="text-xs sm:text-sm font-medium">Mehr über Treecast</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-emerald-600/60 rounded-full flex items-center justify-center animate-bounce">
              <i className="ri-arrow-down-line text-xs sm:text-sm text-emerald-600"></i>
            </div>
          </div>
        </div>
      </section>

      <ProjectRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}