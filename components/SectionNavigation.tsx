'use client';

import { useState, useEffect } from 'react';

interface SectionNavigationProps {
  className?: string;
}

export default function SectionNavigation({ className = '' }: SectionNavigationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Start', icon: 'ri-home-line' },
    { id: 'problem', label: 'Problem', icon: 'ri-alert-line' },
    { id: 'funktionsweise', label: 'Funktionsweise', icon: 'ri-settings-3-line' },
    { id: 'vorteile', label: 'Vorteile', icon: 'ri-leaf-line' },
    { id: 'umwelt', label: 'Umwelt', icon: 'ri-earth-line' },
    { id: 'markt', label: 'Markt', icon: 'ri-bar-chart-line' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.2);
      
      // Find active section with better detection
      let newActiveSection = 0;
      
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
      
      setActiveSection(newActiveSection);
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
  }, []);

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
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
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
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                ${
                  isActive 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                    : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md'
                }
              `}
              aria-label={`Zu ${section.label} scrollen`}
            >
              {/* Icon */}
              <i className={`${section.icon} text-lg transition-transform duration-300 group-hover:scale-110`}></i>
              
              {/* Tooltip */}
              <div className={`
                absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                pointer-events-none whitespace-nowrap
                before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2
                before:border-4 before:border-transparent before:border-l-gray-900
              `}>
                {section.label}
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -inset-1 rounded-full border-2 border-emerald-300 animate-pulse"></div>
              )}
            </button>
          );
        })}
        
        {/* Progress indicator */}
        <div className="mt-4 w-12 flex justify-center">
          <div className="w-1 h-16 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-t from-emerald-500 to-teal-500 rounded-full transition-all duration-500 ease-out"
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

  const sections = [
    { id: 'hero', label: 'Start', icon: 'ri-home-line' },
    { id: 'problem', label: 'Problem', icon: 'ri-alert-line' },
    { id: 'funktionsweise', label: 'Lösung', icon: 'ri-settings-3-line' },
    { id: 'vorteile', label: 'Vorteile', icon: 'ri-leaf-line' },
    { id: 'umwelt', label: 'Umwelt', icon: 'ri-earth-line' },
    { id: 'markt', label: 'Markt', icon: 'ri-bar-chart-line' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
      
      // Find active section
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  min-w-[3rem] focus:outline-none focus:ring-2 focus:ring-emerald-500
                  ${
                    isActive 
                      ? 'bg-emerald-500 text-white' 
                      : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }
                `}
                aria-label={`Zu ${section.label} scrollen`}
              >
                <i className={`${section.icon} text-sm mb-1`}></i>
                <span className="text-xs font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}