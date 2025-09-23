'use client';

import React from 'react';

export default function WhyTriCast360Graphic() {
  const benefits = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
        </svg>
      ),
      title: "90% schneller",
      subtitle: "Installation",
      description: "Werkzeuglos in unter 5 Minuten",
      gradient: "from-[#baf742] to-[#90CFC4]",
      bgColor: "bg-[#baf742]/10",
      borderColor: "border-[#baf742]/30",
      hoverBg: "hover:bg-[#baf742]/20"
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M12 2C16 6 20 10 12 22C4 10 8 6 12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: "100% nachhaltig",
      subtitle: "Umweltfreundlich", 
      description: "85% recyceltes Material",
      gradient: "from-[#baf742] to-[#90CFC4]",
      bgColor: "bg-[#baf742]/10",
      borderColor: "border-[#baf742]/30",
      hoverBg: "hover:bg-[#baf742]/20"
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "100% normkonform",
      subtitle: "Zertifiziert",
      description: "Nach DIN EN 1176",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100"
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="12" cy="7" rx="8" ry="4" fill="currentColor"/>
        </svg>
      ),
      title: "Wiederverwendbar",
      subtitle: "Kostensparend",
      description: "Langfristig wirtschaftlich",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-100"
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Modular",
      subtitle: "Flexibel", 
      description: "Für jeden Baumtyp",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100"
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6">
          Warum{' '}
          <span className="bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent">
            TriCast360
          </span>
          ?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Fünf überzeugende Gründe für das innovative Baumschutzsystem
        </p>
      </div>

      {/* Desktop Layout - Professional Grid */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-[#baf742]/20 via-[#90CFC4]/20 to-[#baf742]/30 rounded-full border-4 border-[#baf742]/40 shadow-2xl flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#baf742] to-[#90CFC4] rounded-2xl flex items-center justify-center shadow-xl mb-4 transform hover:scale-110 transition-all duration-300">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#baf742] to-[#90CFC4] bg-clip-text text-transparent mb-1">
                    TriCast360
                  </div>
                  <div className="text-base text-gray-600 font-medium">
                    Baumschutz-System
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid - Precise 2x3 Layout */}
          <div className="grid grid-cols-2 gap-x-32 gap-y-12 max-w-5xl mx-auto">
            {/* Top Row */}
            <div className="flex justify-end">
              <BenefitCard benefit={benefits[0]} />
            </div>
            <div className="flex justify-start">
              <BenefitCard benefit={benefits[1]} />
            </div>
            
            {/* Middle Row */}
            <div className="flex justify-end">
              <BenefitCard benefit={benefits[2]} />
            </div>
            <div className="flex justify-start">
              <BenefitCard benefit={benefits[3]} />
            </div>
            
            {/* Bottom Row - Centered */}
            <div className="col-span-2 flex justify-center">
              <BenefitCard benefit={benefits[4]} />
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout - 2x3 Grid */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.slice(0, 4).map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} size="medium" />
          ))}
          <div className="col-span-2 flex justify-center">
            <BenefitCard benefit={benefits[4]} size="medium" />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className="block md:hidden">
        <div className="space-y-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} size="small" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Consistent Benefit Card Component
function BenefitCard({ 
  benefit, 
  size = 'large' 
}: { 
  benefit: any; 
  size?: 'small' | 'medium' | 'large' 
}) {
  const sizeClasses = {
    small: {
      container: 'w-full h-28',
      icon: 'w-12 h-12',
      iconContainer: 'w-14 h-14 rounded-xl',
      title: 'text-base',
      subtitle: 'text-sm',
      description: 'text-xs',
      padding: 'p-4',
      spacing: 'space-x-3'
    },
    medium: {
      container: 'w-full h-32',
      icon: 'w-7 h-7',
      iconContainer: 'w-16 h-16 rounded-xl',
      title: 'text-lg',
      subtitle: 'text-sm',
      description: 'text-xs',
      padding: 'p-5',
      spacing: 'space-x-4'
    },
    large: {
      container: 'w-80 h-36',
      icon: 'w-8 h-8',
      iconContainer: 'w-18 h-18 rounded-2xl',
      title: 'text-xl',
      subtitle: 'text-base',
      description: 'text-sm',
      padding: 'p-6',
      spacing: 'space-x-5'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
      <div className={`
        ${classes.container} 
        ${benefit.bgColor} 
        ${benefit.hoverBg}
        rounded-2xl 
        border-2 
        ${benefit.borderColor} 
        shadow-lg 
        hover:shadow-xl 
        transition-all 
        duration-300
      `}>
        <div className={`w-full h-full flex items-center ${classes.padding} ${classes.spacing}`}>
          {/* Icon */}
          <div className={`
            ${classes.iconContainer}
            bg-gradient-to-r 
            ${benefit.gradient} 
            flex 
            items-center 
            justify-center 
            text-white 
            shadow-lg 
            group-hover:rotate-6 
            transition-transform 
            duration-300 
            flex-shrink-0
          `}>
            <div className={classes.icon}>
              {benefit.icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className={`${classes.title} font-bold text-gray-900 leading-tight mb-1 truncate`}>
              {benefit.title}
            </div>
            <div className={`${classes.subtitle} text-gray-600 font-medium mb-1 truncate`}>
              {benefit.subtitle}
            </div>
            <div className={`${classes.description} text-gray-500 leading-relaxed line-clamp-2`}>
              {benefit.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}