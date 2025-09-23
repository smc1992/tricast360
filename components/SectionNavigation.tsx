'use client';

import { useState, useEffect, useMemo } from 'react';

interface SectionNavigationProps {
  className?: string;
}

export default function SectionNavigation({ className = '' }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = useMemo(() => [
    { id: 'hero', label: 'Start', icon: 'ri-home-line' },
    { id: 'problem', label: 'Problem', icon: 'ri-alert-line' },
    { id: 'funktionsweise', label: 'Funktionsweise', icon: 'ri-settings-3-line' },
    { id: 'vorteile', label: 'Vorteile', icon: 'ri-star-line' },
    { id: 'environmental', label: 'Nachhaltigkeit', icon: 'ri-leaf-line' },
    { id: 'branding', label: 'Branding', icon: 'ri-palette-line' },
    { id: 'vision-2025', label: 'Vision 2025', icon: 'ri-eye-line' },
    { id: 'markt', label: 'Markt', icon: 'ri-bar-chart-line' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.2);
      
      // Find active section with better detection
      let newActiveSection = activeSection; // Keep current section as default
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in viewport center
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            newActiveSection = index;
          }
        }
      });
      
      // Only update if we found a valid section
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(index);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed right-4 xl:right-8 2xl:right-12 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => {
          const isActive = activeSection === index;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id, index)}
              className={`
                group relative flex items-center justify-center
                w-12 h-12 rounded-full transition-all duration-300
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#baf742] focus:ring-offset-2
                ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-white shadow-lg shadow-[#baf742]/30'
                : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-[#baf742]/10 hover:text-[#baf742] shadow-md'
                }
              `}
              aria-label={`Zu ${section.label} scrollen`}
            >
              {/* Icon Container with Background */}
              <div className={`
                w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
                ${
                  isActive 
                    ? 'bg-white/20 backdrop-blur-sm'
                    : 'bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 group-hover:from-[#baf742]/30 group-hover:to-[#90CFC4]/30'
                }
              `}>
                <i className={`${section.icon} text-lg transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'text-white' : 'text-[#baf742] group-hover:text-[#baf742]'
                }`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1',
                  width: '100%',
                  height: '100%'
                }}></i>
              </div>
              
              {/* Tooltip */}
              <div className={`
                absolute right-full mr-6 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none whitespace-nowrap z-50 min-w-max
                top-1/2 -translate-y-1/2
                before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2
                before:border-4 before:border-transparent before:border-l-gray-900
              `}>
                {section.label}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -inset-1 rounded-full border-2 border-[#baf742]/60 animate-pulse"></div>
              )}
            </button>
          );
        })}
        
        {/* Progress indicator */}
        <div className="mt-4 w-12 flex justify-center">
          <div className="w-1 h-16 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-t from-[#baf742] to-[#90CFC4] rounded-full transition-all duration-500 ease-out"
              style={{ 
                height: `${((activeSection + 1) / sections.length) * 100}%`,
                transform: 'translateY(0)'
              }}
            ></div>
          </div>
        </div>
        
        {/* Section counter */}
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500 font-medium">
            {activeSection + 1}/{sections.length}
          </span>
        </div>
      </div>
    </div>
  );
}

// Mobile version with bottom navigation
export function MobileSectionNavigation({ className = '' }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = useMemo(() => [
    { id: 'hero', label: 'Start', icon: 'ri-home-line' },
    { id: 'problem', label: 'Problem', icon: 'ri-alert-line' },
    { id: 'funktionsweise', label: 'Lösung', icon: 'ri-settings-3-line' },
    { id: 'vorteile', label: 'Vorteile', icon: 'ri-star-line' },
    { id: 'environmental', label: 'Umwelt', icon: 'ri-leaf-line' },
    { id: 'branding', label: 'Brand', icon: 'ri-palette-line' },
    { id: 'vision-2025', label: 'Vision', icon: 'ri-eye-line' },
    { id: 'markt', label: 'Markt', icon: 'ri-bar-chart-line' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.2);
      
      // Find active section with better detection
      let newActiveSection = activeSection; // Keep current section as default
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in viewport center
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            newActiveSection = index;
          }
        }
      });
      
      // Only update if we found a valid section
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activeSection, sections]);

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(index);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden ${className}`}>
      {/* Only show if not in header navigation area */}
      <div className="bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200/50">
        <div className="flex space-x-1">
          {sections.map((section, index) => {
            const isActive = activeSection === index;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id, index)}
                className={`
                  flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300
                  min-w-[3rem] focus:outline-none focus:ring-2 focus:ring-[#baf742]
                  ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#baf742] to-[#90CFC4] text-white'
                : 'text-gray-600 hover:bg-[#baf742]/10 hover:text-[#baf742]'
                  }
                `}
                aria-label={`Zu ${section.label} scrollen`}
              >
                <div className={`
                  w-6 h-6 rounded-md flex items-center justify-center mb-1 transition-all duration-300
                  ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 group-hover:from-[#baf742]/30 group-hover:to-[#90CFC4]/30'
                  }
                `}>
                  <i className={`${section.icon} text-sm ${
                    isActive ? 'text-white' : 'text-[#baf742]'
                  }`}></i>
                </div>
                <span className="text-xs font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}