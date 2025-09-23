'use client';

import React from 'react';

const BenefitsWithGraphic = () => {
  return (
    <section className="relative py-20 lg:py-24 xl:py-28 2xl:py-36 overflow-hidden bg-gradient-to-br from-[#baf742]/5 via-white to-[#baf742]/5">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#baf742]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#baf742]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#baf742]/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-[600px]">
          {/* Product Image - Left Side */}
          <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#baf742]/20 to-[#baf742]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 border border-green-100 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="/images/Tricast360 Baumschutz-Modul.jpeg"
                      alt="TriCast360 Baumschutz-Modul - Innovatives modulares Baumschutzsystem"
                      className="w-full h-auto shadow-lg group-hover:scale-105 transition-transform duration-500 lg:max-h-[650px] xl:max-h-[700px] 2xl:max-h-[750px]"
                      style={{ 
                        aspectRatio: '1152/2048',
                        maxHeight: '600px',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Product Info Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-[#baf742]/20 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">TriCast360</h3>
                    <p className="text-xs text-gray-600">Modulares Baumschutzsystem</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-2 h-2 bg-[#baf742] rounded-full animate-pulse"></div>
                      <span className="text-xs text-[#baf742] font-medium">Verfügbar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
            {/* Badge */}
            <div className="flex">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#baf742]/20 to-[#90CFC4]/20 backdrop-blur-sm text-[#0E1C3D] rounded-full text-sm font-semibold border border-[#baf742]/30">
                <div className="w-4 h-4 bg-gradient-to-br from-[#baf742]/30 to-[#90CFC4]/30 rounded-sm flex items-center justify-center mr-2">
                  <i className="ri-checkbox-circle-line text-[#baf742] text-xs"></i>
                </div>
                Unsere Vorteile
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                Warum{' '}
                <span className="text-[#baf742] relative">
                  TriCast360
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#baf742]/30 rounded-full"></div>
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unser innovatives Baumschutzsystem vereint Nachhaltigkeit, Effizienz und 
                Wirtschaftlichkeit in einer durchdachten Lösung für moderne Bauprojekte.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 grid place-items-center">
                  <i className="ri-leaf-line text-2xl text-[#0E1C3D]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Umweltfreundlich</h3>
                  <p className="text-gray-600">
                    100% recycelbare Materialien und nachhaltige Produktion für maximalen Umweltschutz.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 grid place-items-center">
                  <i className="ri-recycle-line text-2xl text-[#0E1C3D]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Wiederverwendbar</h3>
                  <p className="text-gray-600">
                    Modulares System ermöglicht mehrfache Nutzung und reduziert langfristige Kosten.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-[#baf742]/20 hover:border-[#baf742]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#baf742] to-[#90CFC4] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 grid place-items-center">
                  <i className="ri-shield-check-line text-2xl text-[#0E1C3D]"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Normkonform</h3>
                  <p className="text-gray-600">
                    Erfüllt alle relevanten DIN-Normen und Sicherheitsstandards für Baustellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsWithGraphic;