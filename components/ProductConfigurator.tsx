'use client';

import { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';

interface Configuration {
  diameter: number;
  height: number;
  modules: number;
  color: string;
  material: string;
  quantity: number;
}

interface CustomerData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ProductConfigurator() {
  const [config, setConfig] = useState<Configuration>({
    diameter: 100,
    height: 150,
    modules: 4,
    color: '#baf742',
    material: 'standard',
    quantity: 1
  });

  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [animeLoaded, setAnimeLoaded] = useState(false);

  // Preisberechnung basierend auf Konfiguration - pro Modul
  useEffect(() => {
    const basePricePerModule = 89; // Günstigerer Grundpreis pro Modul
    const diameterFactor = config.diameter / 100; // Faktor basierend auf Durchmesser
    const heightFactor = config.height / 150; // Faktor basierend auf Höhe
    const materialFactor = config.material === 'premium' ? 1.25 : 1; // Reduzierter Premium-Aufschlag
    
    const pricePerModule = Math.round(basePricePerModule * diameterFactor * heightFactor * materialFactor);
    const totalPrice = pricePerModule * config.modules * config.quantity;
    setEstimatedPrice(totalPrice);
  }, [config]);

  // Helper to get anime instance (client-side only)
  const getAnime = async () => {
    if (typeof window === 'undefined') return null;
    try {
      // Import the correct anime.js file
      const anime = await import('animejs/lib/anime.es.js');
      return anime.default || anime;
    } catch (error) {
      console.error('Failed to load anime.js:', error);
      return null;
    }
  };

  // Check if anime is available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      getAnime().then(anime => {
        if (anime) {
          setAnimeLoaded(true);
          console.log('Anime.js loaded successfully');
        }
      });
    }
  }, []);

  // Sanfte, kontinuierliche Animation der Baumkrone
  useEffect(() => {
    if (!animeLoaded) return;
    let mounted = true;
    (async () => {
      const anime = await getAnime();
      if (!mounted || !anime) return;
      anime({
        targets: '.js-crown',
        translateY: [-2, 2],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 2000,
        loop: true,
      });
    })();
    return () => { mounted = false; };
  }, [animeLoaded]);

  // Kleine Feedback-Animation bei Konfigurationsänderungen
  useEffect(() => {
    if (!animeLoaded) return;
    let mounted = true;
    (async () => {
      const anime = await getAnime();
      if (!mounted || !anime) return;
      anime({
        targets: '.js-strap',
        scale: [0.95, 1],
        opacity: [0.9, 1],
        easing: 'easeOutQuad',
        duration: 400,
      });
      anime({
        targets: '.js-panel',
        translateY: [-3, 0],
        opacity: [0.85, 1],
        easing: 'easeOutQuad',
        duration: 450,
        delay: anime.stagger ? anime.stagger(60) : (el: any, i: number) => i * 60,
      });
    })();
    return () => { mounted = false; };
  }, [config.diameter, config.height, config.material, config.color, config.modules, config.quantity, animeLoaded]);

  // Preisbalken-Animation beim Preis-Update
  useEffect(() => {
    if (!animeLoaded) return;
    let mounted = true;
    (async () => {
      const anime = await getAnime();
      if (!mounted || !anime) return;
      anime({
        targets: '.js-price-bar',
        width: ['0%', '100%'],
        easing: 'easeInOutQuad',
        duration: 800,
      });
    })();
    return () => { mounted = false; };
  }, [estimatedPrice, animeLoaded]);

  // Professional SVG Product Rendering with Anime.js
  const renderProduct = async (diameter: number, height: number, count: number) => {
    try {
      console.log('renderProduct called with:', { diameter, height, count, animeLoaded });
      
      if (!animeLoaded) {
        console.warn('Anime.js not loaded yet, skipping render');
        return;
      }
      
      const visual = document.getElementById('product-visual');
      if (!visual) {
        console.error('product-visual container not found!');
        return;
      }

      const anime = await getAnime();
      if (!anime) {
        console.error('anime.js not available after loading!');
        return;
      }

      // Calculate responsive dimensions
      const svgWidth = 400;
      const svgHeight = 500;
      const centerX = svgWidth / 2;
      const treeY = 180;
      const moduleHeight = Math.max(height * 0.8, 40);
      
      console.log('Rendering SVG with dimensions:', { svgWidth, svgHeight, centerX, treeY, moduleHeight, diameter });
      
      // Clear existing content first
      visual.innerHTML = '';
      
      visual.innerHTML = `
        <svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" class="w-full h-full">
          <!-- Stamm -->
          <rect id="stamm" x="${centerX - diameter/2}" y="${treeY}" 
                width="${diameter}" height="250" 
                fill="#8B5A2B" rx="12" stroke="#654321" stroke-width="2"
                style="opacity: 0; transform-origin: center bottom;"/>

          <!-- Krone -->
          <circle id="krone" cx="${centerX}" cy="${treeY - 80}" r="80" fill="#4CAF50" stroke="#2E7D32" stroke-width="2"
                  style="opacity: 0; transform-origin: center center;"/>

          <!-- Module am Baumstamm -->
          ${Array.from({length: count}).map((_,i) => {
            const moduleY = treeY + 100 + i*(moduleHeight + 15); // Module am unteren Stamm, weit weg von der Krone
            return `
              <g class="module module-${i}" transform="translate(0, ${moduleY})" style="opacity: 0; transform: scale(0.8);">
                <!-- Modul Polster um den Stamm - sollte den Stamm umschließen -->
                <rect x="${centerX - diameter/2 - 10}" y="0" 
                      width="${diameter + 20}" height="${moduleHeight}" 
                      fill="#66BB6A" rx="10" stroke="#4CAF50" stroke-width="2"/>
                
                <!-- Polster-Textur -->
                <rect x="${centerX - diameter/2 - 5}" y="5" 
                      width="${diameter + 10}" height="${moduleHeight - 10}" 
                      fill="#81C784" rx="8" opacity="0.7"/>
                
                <!-- Linker Gurt -->
                <line x1="${centerX - diameter/2 - 10}" y1="${moduleHeight/2}" 
                      x2="${centerX - diameter/2 - 40}" y2="${moduleHeight/2}" 
                      stroke="#000" stroke-width="4" stroke-linecap="round"/>
                
                <!-- Rechter Gurt -->
                <line x1="${centerX + diameter/2 + 10}" y1="${moduleHeight/2}" 
                      x2="${centerX + diameter/2 + 40}" y2="${moduleHeight/2}" 
                      stroke="#000" stroke-width="4" stroke-linecap="round"/>
                
                <!-- Linker Verschluss -->
                <rect class="clip clip-left clip-left-${i}" 
                      x="${centerX - diameter/2 - 50}" y="${moduleHeight/2 - 8}" 
                      width="15" height="16" fill="#000" rx="3" 
                      style="opacity: 0; transform: translateX(-15px) rotate(-30deg);"/>
                
                <!-- Rechter Verschluss -->
                <rect class="clip clip-right clip-right-${i}" 
                      x="${centerX + diameter/2 + 35}" y="${moduleHeight/2 - 8}" 
                      width="15" height="16" fill="#000" rx="3" 
                      style="opacity: 0; transform: translateX(15px) rotate(30deg);"/>
                
                <!-- Verschluss-Details -->
                <circle class="clip-detail clip-detail-left-${i}" 
                        cx="${centerX - diameter/2 - 42}" cy="${moduleHeight/2}" 
                        r="3" fill="#333" style="opacity: 0;"/>
                <circle class="clip-detail clip-detail-right-${i}" 
                        cx="${centerX + diameter/2 + 42}" cy="${moduleHeight/2}" 
                        r="3" fill="#333" style="opacity: 0;"/>
              </g>
            `;
          }).join("")}
          
          <!-- Preis-Indikator -->
          <g transform="translate(${centerX}, ${svgHeight - 60})">
            <rect x="-60" y="-15" width="120" height="30" fill="white" rx="15" stroke="#ddd" stroke-width="2"/>
            <text x="0" y="-2" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333">
              €${Math.round((diameter * height * count * 0.89))}
            </text>
            <text x="0" y="10" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
              Geschätzt
            </text>
          </g>
        </svg>
      `;

      console.log('SVG rendered successfully, starting animations in 100ms');
      console.log('Elements found:', {
        krone: document.getElementById('krone'),
        stamm: document.getElementById('stamm'),
        modules: document.querySelectorAll('.module'),
        clips: document.querySelectorAll('.clip'),
        details: document.querySelectorAll('.clip-detail')
      });

      // Wait for DOM to update, then start animations
      setTimeout(() => {
        console.log('Starting detailed anime.js installation sequence');
        
        // Ensure all elements are visible first (fallback)
        const allElements = visual.querySelectorAll('*');
        allElements.forEach(el => {
          const htmlEl = el as HTMLElement;
          if (htmlEl.style && htmlEl.style.opacity === '0') {
            console.log('Found hidden element:', el);
          }
        });
        
        // Create a master timeline for the installation sequence
        const masterTimeline = anime.timeline({
          easing: 'easeOutQuad',
          complete: () => {
            console.log('Complete installation sequence finished');
            // Ensure all elements are visible at the end
            visual.querySelectorAll('*').forEach((el: Element) => {
              const htmlEl = el as HTMLElement;
              if (htmlEl.style) {
                htmlEl.style.opacity = '1';
              }
            });
          }
        });

        // Phase 1: Tree appears with gentle sway
        masterTimeline
          .add({
            targets: '#krone',
            scale: [0, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutBack',
            complete: () => console.log('Tree crown appeared')
          })
          .add({
            targets: '#stamm',
            scaleY: [0, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuart',
            complete: () => console.log('Tree trunk appeared')
          }, '-=400')
          .add({
            targets: '#krone',
            rotate: [-2, 2, -1, 1, 0],
            duration: 2000,
            easing: 'easeInOutSine',
            complete: () => console.log('Tree sway completed')
          }, '-=200');

        // Phase 2: Modules slide in from sides with stagger
        masterTimeline
          .add({
            targets: '.module',
            translateX: (el: any, i: number) => i % 2 === 0 ? [-200, 0] : [200, 0],
            scale: [0.6, 1],
            opacity: [0, 1],
            rotate: (el: any, i: number) => [i % 2 === 0 ? -10 : 10, 0],
            delay: anime.stagger ? anime.stagger(200) : (el: any, i: number) => i * 200,
            duration: 1000,
            easing: 'easeOutBack',
            complete: () => console.log('All modules positioned')
          }, '+=300');

        // Phase 3: Gurte extend and connect
        masterTimeline
          .add({
            targets: '.module line',
            strokeDasharray: ['100 100', '0 100'],
            duration: 800,
            delay: anime.stagger ? anime.stagger(100) : (el: any, i: number) => i * 100,
            easing: 'easeInOutQuad',
            complete: () => console.log('Straps connected')
          }, '+=200');

        // Phase 4: Clips slide in and rotate to close
        masterTimeline
          .add({
            targets: '.clip-left',
            translateX: [-30, 0],
            rotate: [-45, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger ? anime.stagger(150) : (el: any, i: number) => i * 150,
            duration: 700,
            easing: 'easeOutBack',
            complete: () => console.log('Left clips engaged')
          }, '+=100')
          .add({
            targets: '.clip-right',
            translateX: [30, 0],
            rotate: [45, 0],
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger ? anime.stagger(150) : (el: any, i: number) => i * 150,
            duration: 700,
            easing: 'easeOutBack',
            complete: () => console.log('Right clips engaged')
          }, '-=500');

        // Phase 5: Clip details appear with bounce
        masterTimeline
          .add({
            targets: '.clip-detail',
            scale: [0, 1.2, 1],
            opacity: [0, 1],
            rotate: [0, 360],
            delay: anime.stagger ? anime.stagger(100) : (el: any, i: number) => i * 100,
            duration: 600,
            easing: 'easeOutElastic(1, .8)',
            complete: () => console.log('Clip details secured')
          }, '+=200');

        // Phase 6: Security confirmation - modules glow and pulse
        masterTimeline
          .add({
            targets: '.module rect:first-child',
            stroke: ['#4CAF50', '#00E676', '#4CAF50'],
            strokeWidth: [2, 4, 2],
            duration: 1500,
            easing: 'easeInOutSine',
            complete: () => console.log('Security confirmation glow')
          }, '+=300')
          .add({
            targets: '.module',
            scale: [1, 1.02, 1],
            duration: 800,
            delay: anime.stagger ? anime.stagger(200) : (el: any, i: number) => i * 200,
            easing: 'easeInOutSine',
            complete: () => console.log('Final security pulse')
          }, '-=1000');

        // Phase 7: Price indicator appears with celebration
        masterTimeline
          .add({
            targets: 'g:last-child', // Price indicator group
            scale: [0, 1.1, 1],
            opacity: [0, 1],
            rotate: [0, 5, -5, 0],
            duration: 1000,
            easing: 'easeOutBack',
            complete: () => console.log('Price calculated and displayed')
          }, '+=200');

        // Phase 8: Continuous subtle animations for living feel
        masterTimeline
          .add({
            targets: '#krone',
            rotate: [-1, 1],
            duration: 4000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
          }, '+=500')
          .add({
            targets: '.clip-detail',
            scale: [1, 1.1, 1],
            duration: 2000,
            direction: 'alternate',
            loop: true,
            delay: anime.stagger ? anime.stagger(300) : (el: any, i: number) => i * 300,
            easing: 'easeInOutSine'
          }, '-=3500');
        
      }, 100);
      
    } catch (error) {
      console.error('Error in renderProduct:', error);
    }
  };

  // Render product when config changes (only when anime is loaded)
  useEffect(() => {
    if (!animeLoaded) return;
    
    console.log('Config changed, re-rendering product:', config);
    
    // Delay to ensure DOM is ready
    const timer = setTimeout(() => {
      renderProduct(config.diameter, config.height, config.quantity);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [config.diameter, config.height, config.quantity, config.modules, animeLoaded]);

  // Initial render on component mount (only when anime is loaded)
  useEffect(() => {
    if (!animeLoaded) return;
    
    console.log('Component mounted, initial render with anime loaded');
    
    const timer = setTimeout(() => {
      renderProduct(config.diameter, config.height, config.quantity);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [animeLoaded]);

  const handleConfigChange = (key: keyof Configuration, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleCustomerDataChange = (key: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'configuration',
          ...customerData,
          configuration: {
            diameter: config.diameter,
            height: config.height,
            modules: config.modules,
            color: config.color,
            material: config.material,
            quantity: config.quantity,
            pricePerModule: Math.round(estimatedPrice / (config.modules * config.quantity)),
            pricePerSystem: Math.round(estimatedPrice / config.quantity),
            totalPrice: estimatedPrice
          },
          subject: 'Produktkonfiguration - Tricast360'
        }),
      });

      if (response.ok) {
        alert('Ihre Anfrage wurde erfolgreich gesendet!');
        // Reset form
        setCurrentStep(1);
        setCustomerData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Fehler beim Senden');
      }
    } catch (error) {
      alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Schritt-Anzeige */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base ${
                currentStep >= step ? 'bg-[#baf742]' : 'bg-gray-300'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 ${
                  currentStep > step ? 'bg-[#baf742]' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Visuelle Darstellung */}
        <div className="bg-gray-50 rounded-2xl p-4 lg:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Ihre Konfiguration</h3>

          {/* Tricast360 Gurtsystem mit Schaumstoffpolsterung */}
          <div id="product-visual" className="relative h-64 sm:h-80 lg:h-96 bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg flex items-center justify-center">
            {/* Professional SVG Animation wird hier von renderProduct() eingefügt */}
            <div className="text-gray-500 text-sm">Animation wird geladen...</div>
          </div>
          
          {/* Alte statische Darstellung als Fallback (ausgeblendet) */}
          <div className="hidden relative h-64 sm:h-80 lg:h-96 bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
            {/* Einfacher Hintergrund */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100" />
            
            {/* Boden-Linie */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400" />
            
            {/* Baum - zentral */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {/* Baumstamm */}
              <div 
                className="bg-amber-800 mx-auto rounded-sm transition-all duration-500"
                style={{
                  width: `${Math.max(config.diameter / 12, 8)}px`,
                  height: `${Math.max(config.height / 3, 30)}px`
                }}
              />
              {/* Baumkrone */}
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto -mt-8 js-crown" />
            </div>
            
            {/* Tricast360 Gurtsystem */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {/* Schaumstoffpolsterung um den Baum */}
              <div 
                className="absolute rounded-full transition-all duration-500"
                style={{
                  width: `${Math.max(config.diameter / 8, 16)}px`,
                  height: `${Math.max(config.height / 3, 30)}px`,
                  backgroundColor: '#f3f4f6',
                  border: '2px solid #d1d5db',
                  left: `${-Math.max(config.diameter / 16, 8)}px`,
                  top: '0px',
                  opacity: 0.8
                }}
              >
                {/* Schaumstoff-Textur */}
                <div className="absolute inset-1 bg-white rounded-full opacity-50" />
                <div className="absolute top-1 left-1 w-1 h-1 bg-gray-300 rounded-full" />
                <div className="absolute bottom-2 right-1 w-1 h-1 bg-gray-300 rounded-full" />
              </div>
              
              {/* Gurtsystem - horizontal um den Baum */}
              {[0, 1, 2].map((index) => {
                const gurtHeight = (config.height / 3) * (index + 1) / 4;
                const gurtWidth = Math.max(config.diameter / 6, 20);
                
                return (
                  <div key={index} className="js-strap">
                    {/* Linker Gurt */}
                    <div 
                      className="absolute bg-gray-800 rounded transition-all duration-500"
                      style={{
                        width: '3px',
                        height: `${Math.max(config.height / 6, 8)}px`,
                        left: `${-gurtWidth}px`,
                        top: `${gurtHeight}px`
                      }}
                    />
                    {/* Rechter Gurt */}
                    <div 
                      className="absolute bg-gray-800 rounded transition-all duration-500"
                      style={{
                        width: '3px', 
                        height: `${Math.max(config.height / 6, 8)}px`,
                        right: `${-gurtWidth}px`,
                        top: `${gurtHeight}px`
                      }}
                    />
                    
                    {/* Verschluss-Clips */}
                    <div 
                      className="absolute bg-gray-900 rounded transition-all duration-500 js-panel"
                      style={{
                        width: '8px',
                        height: '6px',
                        left: `${-gurtWidth - 4}px`,
                        top: `${gurtHeight + 2}px`
                      }}
                    />
                    <div 
                      className="absolute bg-gray-900 rounded transition-all duration-500 js-panel"
                      style={{
                        width: '8px',
                        height: '6px', 
                        right: `${-gurtWidth - 4}px`,
                        top: `${gurtHeight + 2}px`
                      }}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Preisbalken */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="js-price-bar h-full bg-gradient-to-r from-[#baf742] to-[#84cc16] rounded-full transition-all duration-800"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="text-center mt-2 text-sm font-medium text-gray-700">
                Geschätzter Preis: €{estimatedPrice}
              </div>
            </div>
          </div>
        
          {/* Erweiterte Konfigurationsübersicht */}
          <div className="mt-6 space-y-4">
            {/* Live-Änderungsindikator */}
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-700 font-medium">Live-Vorschau aktiv</span>
              </div>
            </div>
            
            {/* Konfigurationswerte mit Animationen */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Durchmesser</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.diameter} cm
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-[#baf742] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(config.diameter - 50) / (300 - 50) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Höhe</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.height} cm
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-[#baf742] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(config.height - 100) / (250 - 100) * 100}%` }}
                  />
                </div>
              </div>
              

              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Material</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.material === 'premium' ? 'Premium' : 'Standard'}
                </div>
                <div className="flex items-center mt-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{ backgroundColor: config.color }}
                  />
                  {config.material === 'premium' && (
                    <div className="ml-2 text-xs text-yellow-600 font-medium flex items-center">
                      ⭐ Premium
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Stückzahl</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.quantity}x Systeme
                </div>
                <div className="flex space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        config.quantity >= num ? 'bg-[#baf742]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                  {config.quantity > 5 && (
                    <div className="text-xs text-gray-500 ml-1">+{config.quantity - 5}</div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Geschätzter Preis mit Animation */}
             <div className="bg-gradient-to-r from-[#baf742] to-[#a3e635] p-4 rounded-xl text-white mt-4">
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm opacity-90">Gesamtpreis</div>
                   <div className="text-2xl font-bold transition-all duration-500">
                     € {estimatedPrice.toLocaleString()}
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-xs opacity-75">inkl. MwSt.</div>
                   <div className="text-sm opacity-90">
                     {Math.round(estimatedPrice / (config.modules * config.quantity))} € / Modul
                   </div>
                 </div>
               </div>
               
               {/* Preisaufschlüsselung */}
               <div className="mt-3 pt-3 border-t border-white border-opacity-30">
                 <div className="flex justify-between text-sm opacity-90">
                   <span>{config.quantity}x Tricast360-System</span>
                   <span>à {Math.round(estimatedPrice / config.quantity)} €</span>
                 </div>
                 <div className="flex justify-between text-xs opacity-75 mt-1">
                   <span>Pro System: {config.modules} Module</span>
                   <span>Gesamt: {config.modules * config.quantity} Module</span>
                 </div>
               </div>
               
               {/* Preisänderungs-Animation */}
               <div className="mt-2 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                 <div className="js-price-bar h-full bg-white rounded-full transition-all duration-1000 animate-pulse" style={{ width: '0%' }} />
               </div>
             </div>
            
            {/* Zusätzliche Informationen */}
            <div className="text-xs text-gray-500 text-center mt-4 space-y-1">
              <div>🔄 Änderungen werden sofort in der Vorschau angezeigt</div>
              <div>📏 Alle Maße sind Richtwerte und können je nach Standort variieren</div>
              {config.material === 'premium' && (
                <div className="text-yellow-600">✨ Premium-Material bietet erhöhte UV-Beständigkeit</div>
              )}
            </div>
          </div>
        </div>

        {/* Konfigurationsoptionen */}
        <div className="space-y-4 lg:space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 1: Grundkonfiguration</h3>
              
              {/* Durchmesser */}
              <div>
                <label className="block text-sm font-medium mb-2">Durchmesser (cm)</label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={config.diameter}
                  onChange={(e) => handleConfigChange('diameter', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50 cm</span>
                  <span className="font-medium">{config.diameter} cm</span>
                  <span>300 cm</span>
                </div>
              </div>

              {/* Höhe */}
              <div>
                <label className="block text-sm font-medium mb-2">Höhe (cm)</label>
                <input
                  type="range"
                  min="100"
                  max="250"
                  step="10"
                  value={config.height}
                  onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100 cm</span>
                  <span className="font-medium">{config.height} cm</span>
                  <span>250 cm</span>
                </div>
              </div>

              {/* Stückzahl */}
              <div>
                <label className="block text-sm font-medium mb-2">Anzahl TriCast360-Systeme</label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleConfigChange('quantity', num)}
                      className={`p-3 rounded-lg border-2 font-medium transition-all ${
                        config.quantity === num
                          ? 'border-[#baf742] bg-[#baf742] text-white'
                          : 'border-gray-300 hover:border-[#baf742]'
                      }`}
                    >
                      {num}x
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={config.quantity}
                    onChange={(e) => handleConfigChange('quantity', parseInt(e.target.value) || 1)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent text-sm"
                    placeholder="Oder eigene Anzahl eingeben..."
                  />
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-sm lg:text-base"
              >
                Weiter zu Schritt 2
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 2: Material & Farbe</h3>
              
              {/* Material */}
              <div>
                <label className="block text-sm font-medium mb-3">Material</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#baf742] transition-colors">
                    <input
                      type="radio"
                      name="material"
                      value="standard"
                      checked={config.material === 'standard'}
                      onChange={(e) => handleConfigChange('material', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-gray-500">Robustes Kunststoffmaterial</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#baf742] transition-colors">
                    <input
                      type="radio"
                      name="material"
                      value="premium"
                      checked={config.material === 'premium'}
                      onChange={(e) => handleConfigChange('material', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-gray-500">UV-beständig, extra langlebig</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Farbe */}
              <div>
                <label className="block text-sm font-medium mb-3">Farbe</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { color: '#baf742', name: 'Grün' },
                    { color: '#fbbf24', name: 'Gelb' },
                    { color: '#f87171', name: 'Rot' },
                    { color: '#60a5fa', name: 'Blau' }
                  ].map((option) => (
                    <button
                      key={option.color}
                      onClick={() => handleConfigChange('color', option.color)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        config.color === option.color
                          ? 'border-gray-800 scale-105'
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div
                        className="w-full h-8 rounded mb-2"
                        style={{ backgroundColor: option.color }}
                      />
                      <div className="text-sm font-medium">{option.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-sm lg:text-base"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-sm lg:text-base"
                >
                  Weiter zu Schritt 3
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 3: Ihre Kontaktdaten</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    value={customerData.name}
                    onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">E-Mail *</label>
                  <input
                    type="email"
                    value={customerData.email}
                    onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Unternehmen</label>
                  <input
                    type="text"
                    value={customerData.company}
                    onChange={(e) => handleCustomerDataChange('company', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Telefon</label>
                  <input
                    type="tel"
                    value={customerData.phone}
                    onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Nachricht</label>
                  <textarea
                    value={customerData.message}
                    onChange={(e) => handleCustomerDataChange('message', e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    placeholder="Zusätzliche Informationen zu Ihrem Projekt..."
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-sm lg:text-base"
                >
                  Zurück
                </button>
                <LoadingButton
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  className="flex-1 bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors disabled:opacity-50 text-sm lg:text-base"
                  disabled={!customerData.name || !customerData.email}
                >
                  Anfrage senden
                </LoadingButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}