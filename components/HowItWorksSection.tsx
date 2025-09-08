
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
    // TriCast360 Animation Script
    const script = document.createElement('script');
    script.innerHTML = `
      (function() {
        'use strict';
        
        const container = document.getElementById('triCastAnim');
        if (!container) return;
        
        const shieldRing = document.getElementById('shieldRing');
        const ringClip = document.getElementById('ringClip');
        const timerBadge = document.getElementById('timerBadge');
        const glow = document.getElementById('glow');
        
        let animationId;
        let startTime;
        let isPaused = false;
        let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        function easeOutBack(t) {
          const c1 = 1.70158;
          const c3 = c1 + 1;
          return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
        }
        
        function easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
        
        function lerp(start, end, t) {
          return start + (end - start) * t;
        }
        
        function dispatchStepEvent(step) {
          const event = new CustomEvent('tricase-stepchange', {
            detail: { step: step }
          });
          container.dispatchEvent(event);
        }
        
        function setReducedMotionState() {
          if (!shieldRing || !ringClip || !timerBadge || !glow) return;
          shieldRing.style.transform = 'translateX(0px)';
          ringClip.style.transform = 'translateX(0px) rotate(-15deg)';
          timerBadge.style.opacity = '1';
          timerBadge.style.transform = 'scale(1)';
          glow.style.opacity = '1';
          container.classList.add('pulsing');
          
          setTimeout(() => dispatchStepEvent(1), 100);
          setTimeout(() => dispatchStepEvent(2), 200);
          setTimeout(() => dispatchStepEvent(3), 300);
        }
        
        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          if (isPaused || !shieldRing || !ringClip || !timerBadge || !glow) return;
          
          const elapsed = (currentTime - startTime) / 1000;
          const cycleTime = elapsed % 8;
          
          if (cycleTime >= 7) {
            animationId = requestAnimationFrame(animate);
            return;
          }
          
          // Step 1: Ring moves (0.6s - 1.6s)
          if (cycleTime >= 0.6 && cycleTime < 1.6) {
            const t = (cycleTime - 0.6) / 1.0;
            const easedT = easeOutBack(t);
            const x = lerp(80, -5, easedT);
            shieldRing.style.transform = \`translateX(\${x}px)\`;
            ringClip.style.transform = \`translateX(\${x}px) rotate(0deg)\`;
            
            if (cycleTime >= 0.6 && cycleTime < 0.7) {
              dispatchStepEvent(1);
            }
          }
          
          // Step 2: Ring closes (1.6s - 2.2s)
          if (cycleTime >= 1.6 && cycleTime < 2.2) {
            const t = (cycleTime - 1.6) / 0.6;
            const rotation = lerp(0, -15, easeInOutCubic(t));
            ringClip.style.transform = \`translateX(0px) rotate(\${rotation}deg)\`;
            
            if (cycleTime >= 1.6 && cycleTime < 1.8) {
              dispatchStepEvent(2);
            }
          }
          
          // Ring bounce (2.2s - 2.8s)
          if (cycleTime >= 2.2 && cycleTime < 2.8) {
            const t = (cycleTime - 2.2) / 0.6;
            const bounceScale = 1 + 0.04 * Math.sin(t * Math.PI * 2);
            shieldRing.style.transform = \`translateX(0px) scale(\${bounceScale})\`;
          }
          
          // Step 3: Height adjustment (2.8s - 3.6s)
          if (cycleTime >= 2.8 && cycleTime < 3.6) {
            const t = (cycleTime - 2.8) / 0.8;
            const y = 12 * Math.sin(t * Math.PI);
            shieldRing.style.transform = \`translateX(0px) translateY(\${-y}px)\`;
            ringClip.style.transform = \`translateX(0px) translateY(\${-y}px) rotate(-15deg)\`;
          }
          
          // Glow and badge appear (3.6s - 4.2s)
          if (cycleTime >= 3.6 && cycleTime < 4.2) {
            const t = (cycleTime - 3.6) / 0.6;
            glow.style.opacity = easeInOutCubic(t);
            
            const scale = lerp(0.85, 1, easeOutBack(t));
            timerBadge.style.opacity = easeInOutCubic(t);
            timerBadge.style.transform = \`scale(\${scale})\`;
            
            if (cycleTime >= 3.6 && cycleTime < 3.8) {
              dispatchStepEvent(3);
            }
          }
          
          // Breathing phase (4.2s - 6.0s)
          if (cycleTime >= 4.2 && cycleTime < 6.0) {
            container.classList.add('breathing', 'pulsing', 'glowing');
          } else {
            container.classList.remove('breathing', 'pulsing', 'glowing');
          }
          
          // Reset phase (7.0s - 8.0s)
          if (cycleTime >= 7.0) {
            const t = (cycleTime - 7.0) / 1.0;
            if (t >= 1) {
              shieldRing.style.transform = 'translateX(80px)';
              ringClip.style.transform = 'translateX(80px) rotate(0deg)';
              timerBadge.style.opacity = '0';
              timerBadge.style.transform = 'scale(0.85)';
              glow.style.opacity = '0';
              container.classList.remove('breathing', 'pulsing', 'glowing');
            }
          }
          
          animationId = requestAnimationFrame(animate);
        }
        
        function startAnimation() {
          if (isReducedMotion) {
            setReducedMotionState();
            return;
          }
          
          startTime = null;
          animationId = requestAnimationFrame(animate);
        }
        
        function pauseAnimation() {
          isPaused = true;
          container.classList.add('is-paused');
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
        }
        
        function resumeAnimation() {
          isPaused = false;
          container.classList.remove('is-paused');
          animationId = requestAnimationFrame(animate);
        }
        
        container.addEventListener('mouseenter', pauseAnimation);
        container.addEventListener('mouseleave', resumeAnimation);
        container.addEventListener('focusin', pauseAnimation);
        container.addEventListener('focusout', resumeAnimation);
        
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
          isReducedMotion = e.matches;
          if (isReducedMotion) {
            pauseAnimation();
            setReducedMotionState();
          } else {
            startAnimation();
          }
        });
        
        // Start animation after a short delay to ensure DOM is ready
        setTimeout(startAnimation, 100);
      })();
    `;
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
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
        .triCast-figure {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .triCast-figure svg {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        
        .triCast-figure:hover svg {
          transform: scale(1.02);
        }
        
        @keyframes badgePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        @keyframes ringBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        
        .triCast-figure.is-paused * {
          animation-play-state: paused !important;
        }
        
        .triCast-figure.breathing #shieldRing {
          animation: ringBreathe 3s ease-in-out infinite;
        }
        
        .triCast-figure.pulsing #timerBadge {
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        .triCast-figure.glowing #glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        
        @media (max-width: 480px) {
          .triCast-figure svg {
            min-width: 280px;
          }
          
          #timerBadge {
            transform: scale(0.8);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .triCast-figure * {
            animation: none !important;
            transition: none !important;
          }
          
          .triCast-figure:hover svg {
            transform: none;
          }
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* First Column - Grafik (Mobile: Second, Desktop: Left) */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#baf742] text-[#0E1C3D] rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Elemente um den Stamm legen</h3>
                  <p className="text-gray-600">Positionieren Sie die gepolsterten Schutzmodule um den Baumstamm.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#baf742] text-[#0E1C3D] rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gurtsystem werkzeuglos schließen</h3>
                  <p className="text-gray-600">Verbinden Sie die Module mit unserem patentierten Verschlusssystem.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#baf742] text-[#0E1C3D] rounded-full flex items-center justify-center font-bold text-sm">
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
