
'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Elemente um den Stamm legen",
      description: "Modulare Bauteile einfach um den Baumstamm positionieren",
      icon: "ri-layout-grid-line"
    },
    {
      number: "02", 
      title: "Klickverschluss schließen",
      description: "Werkzeuglose Verbindung durch intelligentes Klicksystem",
      icon: "ri-link"
    },
    {
      number: "03",
      title: "Sicher. Stabil. Fertig.",
      description: "Höhe justieren und optimalen Schutz gewährleisten",
      icon: "ri-shield-check-line"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-[#2b3138]">
            So funktioniert's
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Drei einfache Schritte für maximalen Baumschutz
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-[#39F2AE]/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-300">
                      <i className={`${step.icon} text-2xl sm:text-3xl text-[#39F2AE]`}></i>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-[#39F2AE] rounded-full flex items-center justify-center text-[#2b3138] text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-medium text-[#2b3138] leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow für Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-px bg-gray-300 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-[#39F2AE] text-sm"></i>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Arrow für Mobile/Tablet */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4 sm:mt-6">
                  <div className="h-8 w-px bg-gray-300 relative sm:hidden">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <i className="ri-arrow-down-line text-[#39F2AE] text-sm"></i>
                    </div>
                  </div>
                  <div className="hidden sm:block lg:hidden w-8 h-px bg-gray-300 relative mt-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-[#39F2AE] text-sm"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
