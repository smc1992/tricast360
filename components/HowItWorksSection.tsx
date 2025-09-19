
'use client';

import { useState, useEffect } from 'react';

export default function HowItWorksSection() {
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

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
    <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      {/* Geometric background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-44 h-44 bg-[#90CFC4]/20 rounded-full"></div>
           <div className="absolute bottom-24 left-16 w-52 h-52 bg-[#90CFC4]/12 rounded-full"></div>
        </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
      
      <div className="max-w-6xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          
          {/* Second Column - Content (Mobile: First, Desktop: Right) */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="heading-2 text-gray-900">
              Drei einfache <span className="text-accent-500 font-medium">Schritte</span>
            </h2>
            
            <p className="body-base text-gray-600">
              Die Installation des TriCast360 Baumschutzsystems ist werkzeuglos und dauert weniger als 5 Minuten. 
              Unser innovatives Design macht den Schutz Ihrer Bäume so einfach wie nie zuvor.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#baf742] text-[#0E1C3D] rounded-full grid place-items-center font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl leading-none">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Elemente um den Stamm legen</h3>
                  <p className="text-gray-600">Positionieren Sie die gepolsterten Schutzmodule um den Baumstamm.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#baf742] text-[#0E1C3D] rounded-full grid place-items-center font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl leading-none">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gurtsystem werkzeuglos schließen</h3>
                  <p className="text-gray-600">Verbinden Sie die Module mit unserem patentierten Verschlusssystem.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 bg-[#baf742] text-[#0E1C3D] rounded-full grid place-items-center font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl leading-none">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Höhe justieren und fertig</h3>
                  <p className="text-gray-600">Passen Sie die Höhe an und genießen Sie optimalen Schutz in unter 5 Minuten.</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}
