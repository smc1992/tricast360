
'use client';

import React, { useEffect } from 'react';
import { SectionGradient } from './GradientBackgrounds';
import { SectionNaturalBackground } from './NaturalBackground';

export default function HowItWorksSection() {
  const isVisible = true; // Always visible

  useEffect(() => {
    let tl: any | null = null;
    let container: HTMLElement | null = null;

    const setup = async () => {
      container = document.getElementById('triCastAnim');
      if (!container) return;

      const shieldRing = document.getElementById('shieldRing') as HTMLElement | null;
      const ringClip = document.getElementById('ringClip') as HTMLElement | null;
      const timerBadge = document.getElementById('timerBadge') as HTMLElement | null;
      const glow = document.getElementById('glow') as HTMLElement | null;
      if (!shieldRing || !ringClip || !timerBadge || !glow) return;

      // Fixed anime.js import with proper timeline support
      const getAnime = async () => {
        const mod: any = await import('animejs/lib/anime.es.js');
        return mod?.default ?? mod?.anime ?? mod;
      };
      const anime = await getAnime();
      
      // Check if anime has timeline method
      if (!anime || typeof anime.timeline !== 'function') {
        console.warn('anime.timeline not available, falling back to static state');
        return;
      }

      const media = window.matchMedia('(prefers-reduced-motion: reduce)');

      const setReducedState = () => {
        shieldRing.style.transform = 'translateX(0px)';
        ringClip.style.transform = 'translateX(0px) rotate(-15deg)';
        timerBadge.style.opacity = '1';
        timerBadge.style.transform = 'scale(1)';
        ;(glow as HTMLElement).style.opacity = '1';
        container!.classList.add('pulsing');
      };

      if (media.matches) {
        setReducedState();
        return;
      }

      tl = anime.timeline({
        autoplay: false,
        loop: true,
        easing: 'linear',
        delay: 600,
        endDelay: 1000,
      });

      tl
        .add({
          targets: '#shieldRing',
          translateX: [80, 0],
          duration: 1000,
          easing: 'easeOutBack',
          begin: () => {
            container!.dispatchEvent(new CustomEvent('tricase-stepchange', { detail: { step: 1 } }));
          },
        })
        .add({
          targets: '#ringClip',
          translateX: [80, 0],
          rotate: [0, -15],
          duration: 600,
          easing: 'easeInOutCubic',
          begin: () => {
            container!.dispatchEvent(new CustomEvent('tricase-stepchange', { detail: { step: 2 } }));
          },
        }, '-=200')
        .add({
          targets: '#shieldRing',
          scale: [
            { value: 1.04, duration: 150, easing: 'easeInOutSine' },
            { value: 1.0, duration: 150, easing: 'easeInOutSine' },
          ],
        })
        .add({
          targets: ['#shieldRing', '#ringClip'],
          translateY: [
            { value: -12, duration: 400, easing: 'easeInOutSine' },
            { value: 0, duration: 400, easing: 'easeInOutSine' },
          ],
        })
        .add({
          targets: '#glow',
          opacity: [0, 0.8],
          duration: 600,
          easing: 'easeInOutCubic',
          begin: () => {
            container!.dispatchEvent(new CustomEvent('tricase-stepchange', { detail: { step: 3 } }));
          },
        }, '-=200')
        .add({
          targets: '#timerBadge',
          opacity: [0, 1],
          scale: [0.85, 1],
          duration: 600,
          easing: 'easeOutBack',
        }, '-=600')
        .add({
          duration: 1800,
          begin: () => container!.classList.add('breathing', 'pulsing', 'glowing'),
          complete: () => container!.classList.remove('breathing', 'pulsing', 'glowing'),
        });

      const onEnter = () => {
        tl && tl.pause();
        container!.classList.add('is-paused');
      };
      const onLeave = () => {
        tl && tl.play();
        container!.classList.remove('is-paused');
      };

      container.addEventListener('mouseenter', onEnter);
      container.addEventListener('mouseleave', onLeave);
      container.addEventListener('focusin', onEnter);
      container.addEventListener('focusout', onLeave);

      const onMedia = (e: MediaQueryListEvent) => {
        if (!tl) return;
        if (e.matches) {
          tl.pause();
          setReducedState();
        } else {
          tl.restart();
        }
      };
      media.addEventListener('change', onMedia);

      tl.play();

      return () => {
        media.removeEventListener('change', onMedia);
        container!.removeEventListener('mouseenter', onEnter);
        container!.removeEventListener('mouseleave', onLeave);
        container!.removeEventListener('focusin', onEnter);
        container!.removeEventListener('focusout', onLeave);
        if (tl) tl.pause();
        tl = null;
      };
    };

    // Start async setup
    setup();

    return () => {
      // Cleanup executed inside setup when timeline created
    };
  }, []);

  return (
    <section id="how-it-works" className="relative py-20 lg:py-24 xl:py-28 2xl:py-36 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-[#baf742]/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#baf742]/20 to-[#90CFC4]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#90CFC4]/15 to-[#baf742]/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#baf742]/10 to-[#90CFC4]/10 rounded-full blur-2xl"></div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      
      <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 items-center relative z-10">
          {/* First Column - Grafik (Mobile: Second, Desktop: Left) */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem] 3xl:w-[48rem] 3xl:h-[48rem]">
              {/* Enhanced Step Process Visualization */}
               <svg viewBox="0 0 280 280" className="w-full h-full">
                 {/* Background Elements */}
                 <defs>
                   <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#baf742" />
                     <stop offset="100%" stopColor="#84cc16" />
                   </linearGradient>
                   <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                     <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.1"/>
                   </filter>
                 </defs>
                 
                 {/* Central Tree Representation */}
                 <g transform="translate(140, 140)">
                   {/* Tree Trunk */}
                   <rect x="-8" y="-10" width="16" height="20" fill="#8B4513" rx="2" />
                   {/* Tree Crown */}
                   <circle cx="0" cy="-20" r="18" fill="#22c55e" opacity="0.8" />
                   <circle cx="-8" cy="-25" r="12" fill="#16a34a" opacity="0.6" />
                   <circle cx="8" cy="-25" r="12" fill="#16a34a" opacity="0.6" />
                 </g>
                 
                 {/* Step 1 - Positioning */}
                 <g transform="translate(70, 70)">
                   <circle r="25" fill="url(#stepGradient)" filter="url(#shadow)" />
                   <circle r="20" fill="white" opacity="0.9" />
                   {/* Positioning Icon - Location Pin */}
                    <g stroke="#84cc16" strokeWidth="2" fill="#84cc16">
                      <path d="M 0 -8 C -4 -8 -7 -5 -7 -1 C -7 3 0 8 0 8 C 0 8 7 3 7 -1 C 7 -5 4 -8 0 -8 Z" />
                      <circle cx="0" cy="-1" r="2" fill="white" />
                    </g>
                   <text y="-35" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Positionieren</text>
                   <text y="35" textAnchor="middle" fill="#6b7280" fontSize="10">Schritt 1</text>
                 </g>
                 
                 {/* Step 2 - Connecting */}
                 <g transform="translate(210, 140)">
                   <circle r="25" fill="url(#stepGradient)" filter="url(#shadow)" />
                   <circle r="20" fill="white" opacity="0.9" />
                   {/* Connection Icon */}
                   <g stroke="#84cc16" strokeWidth="2" fill="none">
                     <path d="M -8 -4 L -4 -4 L -4 -8 L 4 0 L -4 8 L -4 4 L -8 4" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="6" cy="0" r="3" fill="#84cc16" />
                   </g>
                   <text y="-35" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Verbinden</text>
                   <text y="35" textAnchor="middle" fill="#6b7280" fontSize="10">Schritt 2</text>
                 </g>
                 
                 {/* Step 3 - Complete */}
                 <g transform="translate(70, 210)">
                   <circle r="25" fill="url(#stepGradient)" filter="url(#shadow)" />
                   <circle r="20" fill="white" opacity="0.9" />
                   {/* Checkmark Icon */}
                   <path d="M -6 0 L -2 4 L 6 -4" stroke="#84cc16" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                   <text y="-35" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Fertig</text>
                   <text y="35" textAnchor="middle" fill="#6b7280" fontSize="10">Schritt 3</text>
                 </g>
                 
                 {/* Enhanced Flow Arrows */}
                 <g stroke="#baf742" strokeWidth="3" fill="none" opacity="0.7">
                   {/* Arrow 1 to 2 */}
                   <path d="M 95 85 Q 140 60 185 125" strokeLinecap="round" strokeDasharray="5,3" />
                   <polygon points="185,125 190,120 190,130" fill="#baf742" />
                   
                   {/* Arrow 2 to 3 */}
                   <path d="M 185 155 Q 140 220 95 195" strokeLinecap="round" strokeDasharray="5,3" />
                   <polygon points="95,195 90,200 90,190" fill="#baf742" />
                 </g>
                 
                 {/* Time Indicator */}
                 <g transform="translate(140, 240)">
                   <rect x="-25" y="-8" width="50" height="16" fill="#f3f4f6" rx="8" />
                   <text textAnchor="middle" y="2" fill="#6b7280" fontSize="10" fontWeight="500">&lt; 5 Min</text>
                 </g>
               </svg>
            </div>
          </div>
          
          {/* Enhanced Content Section */}
          <div className={`space-y-8 lg:space-y-10 xl:space-y-12 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm text-[#0E1C3D] px-4 py-2 rounded-full text-sm font-semibold border border-[#baf742]/30">
                <div className="w-5 h-5 bg-gradient-to-br from-[#baf742]/30 to-[#90CFC4]/30 rounded-md flex items-center justify-center">
                  <i className="ri-timer-2-line text-[#baf742] text-sm"></i>
                </div>
                <span>Schnelle Installation</span>
              </div>
              
              <h2 className="heading-2 font-bold text-gray-900 leading-tight">
                Drei einfache 
                <span className="block text-[#baf742] font-bold mt-2">Schritte</span>
              </h2>
            </div>
            
            <p className="body-large text-gray-700 leading-relaxed">
              Die Installation des TriCast360 Baumschutzsystems ist werkzeuglos und dauert weniger als 5 Minuten. 
              Unser innovatives Design macht den Schutz Ihrer Bäume so einfach wie nie zuvor.
            </p>
            
            <div className="space-y-6">
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-[#0E1C3D] rounded-xl grid place-items-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-lg">Elemente um den Stamm legen</h3>
                    <p className="text-gray-700 leading-relaxed">Positionieren Sie die gepolsterten Schutzmodule um den Baumstamm.</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-[#0E1C3D] rounded-2xl grid place-items-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-lg">Gurtsystem werkzeuglos schließen</h3>
                    <p className="text-gray-700 leading-relaxed">Verbinden Sie die Module mit unserem patentierten Verschlusssystem.</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#baf742]/20 shadow-sm hover:shadow-lg hover:border-[#baf742]/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-[#0E1C3D] rounded-2xl grid place-items-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-lg">Höhe justieren und fertig</h3>
                    <p className="text-gray-700 leading-relaxed">Passen Sie die Höhe an und genießen Sie optimalen Schutz in unter 5 Minuten.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Time Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#baf742]/10 to-[#90CFC4]/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-[#baf742]/30">
              <div className="w-6 h-6 bg-gradient-to-br from-[#baf742]/30 to-[#90CFC4]/30 rounded-md flex items-center justify-center">
                <i className="ri-time-line text-[#baf742] text-sm"></i>
              </div>
              <span className="font-semibold text-[#0E1C3D]">Gesamtzeit: &lt; 5 Minuten</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
