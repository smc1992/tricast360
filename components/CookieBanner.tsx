'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

interface CookieBannerProps {
  onConsentChange?: (consent: CookieConsent) => void;
}

export default function CookieBanner({ onConsentChange }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false,
    timestamp: Date.now()
  });

  // Cookie-Kategorien mit Beschreibungen
  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      required: true,
      examples: 'Session-Cookies, Sicherheits-Cookies, Cookie-Einstellungen'
    },
    {
      id: 'analytics',
      name: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
      required: false,
      examples: 'Google Analytics, Besucherstatistiken, Performance-Messung'
    },
    {
      id: 'marketing',
      name: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte zu zeigen.',
      required: false,
      examples: 'Werbe-Tracking, Social Media Plugins, Remarketing'
    }
  ];

  useEffect(() => {
    // Prüfen ob bereits eine Einwilligung vorliegt
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      // Banner nach kurzer Verzögerung anzeigen
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        onConsentChange?.(parsedConsent);
      } catch (error) {
        console.error('Fehler beim Laden der Cookie-Einstellungen:', error);
        setIsVisible(true);
      }
    }
  }, [onConsentChange]);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: Date.now()
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    onConsentChange?.(consentWithTimestamp);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    });
  };

  const handleAcceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    });
  };

  const handleSaveSelection = () => {
    saveConsent(consent);
  };

  const handleCategoryChange = (categoryId: string, value: boolean) => {
    if (categoryId === 'necessary') return; // Notwendige Cookies können nicht deaktiviert werden
    
    setConsent(prev => ({
      ...prev,
      [categoryId]: value
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {!showDetails ? (
              // Kompakte Ansicht
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-[#39F2AE] text-xl"></i>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#2b3138] mb-2">
                      🍪 Wir respektieren Ihre Privatsphäre
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                      Notwendige Cookies sind für die Grundfunktionen erforderlich. Weitere Cookies helfen uns, 
                      unsere Website zu verbessern und Ihnen relevante Inhalte zu zeigen.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <button
                        onClick={handleAcceptAll}
                        className="bg-[#39F2AE] text-[#2b3138] px-6 py-3 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <i className="ri-check-line"></i>
                        Alle akzeptieren
                      </button>
                      
                      <button
                        onClick={handleAcceptNecessary}
                        className="border border-gray-300 text-[#2b3138] px-6 py-3 rounded-xl font-medium hover:border-[#39F2AE] hover:text-[#39F2AE] transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <i className="ri-close-line"></i>
                        Nur notwendige
                      </button>
                      
                      <button
                        onClick={() => setShowDetails(true)}
                        className="border border-[#39F2AE] text-[#39F2AE] px-6 py-3 rounded-xl font-medium hover:bg-[#39F2AE]/10 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <i className="ri-settings-3-line"></i>
                        Einstellungen
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                      <Link href="/datenschutz" className="hover:text-[#39F2AE] transition-colors duration-200 flex items-center gap-1">
                        <i className="ri-shield-line"></i>
                        Datenschutzerklärung
                      </Link>
                      <Link href="/impressum" className="hover:text-[#39F2AE] transition-colors duration-200 flex items-center gap-1">
                        <i className="ri-information-line"></i>
                        Impressum
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Detailansicht
              <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center">
                      <i className="ri-settings-3-line text-[#39F2AE] text-lg"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2b3138]">
                      Cookie-Einstellungen
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#39F2AE] hover:bg-[#39F2AE]/10 rounded-lg transition-all duration-200"
                  >
                    <i className="ri-close-line text-lg"></i>
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                  Sie können Ihre Einwilligung jederzeit widerrufen oder ändern.
                </p>
                
                <div className="space-y-4 mb-6">
                  {cookieCategories.map((category) => (
                    <div key={category.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-[#2b3138] mb-1">{category.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                          <p className="text-xs text-gray-500">
                            <strong>Beispiele:</strong> {category.examples}
                          </p>
                        </div>
                        
                        <div className="ml-4">
                          {category.required ? (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <div className="w-10 h-6 bg-[#39F2AE] rounded-full flex items-center justify-end px-1">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                              </div>
                              <span>Erforderlich</span>
                            </div>
                          ) : (
                            <label className="flex items-center gap-2 cursor-pointer">
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  checked={consent[category.id as keyof CookieConsent] as boolean}
                                  onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                                  className="sr-only"
                                />
                                <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${
                                  consent[category.id as keyof CookieConsent] ? 'bg-[#39F2AE]' : 'bg-gray-300'
                                }`}>
                                  <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${
                                    consent[category.id as keyof CookieConsent] ? 'translate-x-5' : 'translate-x-1'
                                  } mt-1`}></div>
                                </div>
                              </div>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleSaveSelection}
                    className="bg-[#39F2AE] text-[#2b3138] px-6 py-3 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <i className="ri-save-line"></i>
                    Auswahl speichern
                  </button>
                  
                  <button
                    onClick={handleAcceptAll}
                    className="border border-[#39F2AE] text-[#39F2AE] px-6 py-3 rounded-xl font-medium hover:bg-[#39F2AE]/10 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <i className="ri-check-line"></i>
                    Alle akzeptieren
                  </button>
                  
                  <button
                    onClick={handleAcceptNecessary}
                    className="border border-gray-300 text-gray-600 px-6 py-3 rounded-xl font-medium hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <i className="ri-close-line"></i>
                    Alle ablehnen
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <Link href="/datenschutz" className="hover:text-[#39F2AE] transition-colors duration-200 flex items-center gap-1">
                    <i className="ri-shield-line"></i>
                    Datenschutzerklärung
                  </Link>
                  <Link href="/impressum" className="hover:text-[#39F2AE] transition-colors duration-200 flex items-center gap-1">
                    <i className="ri-information-line"></i>
                    Impressum
                  </Link>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    Einwilligung jederzeit widerrufbar
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Hook für Cookie-Consent-Management
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (error) {
        console.error('Fehler beim Laden der Cookie-Einstellungen:', error);
      }
    }
  }, []);
  
  const updateConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
  };
  
  const clearConsent = () => {
    localStorage.removeItem('cookie-consent');
    setConsent(null);
  };
  
  return {
    consent,
    updateConsent,
    clearConsent,
    hasConsent: consent !== null,
    canUseAnalytics: consent?.analytics || false,
    canUseMarketing: consent?.marketing || false
  };
}