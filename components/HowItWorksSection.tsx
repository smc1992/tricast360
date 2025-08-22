
'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Elemente um den Stamm legen",
      description: "Modulare Bauteile einfach um den Baumstamm positionieren",
      icon: "ri-layout-grid-line",
      benefit: "Sicher."
    },
    {
      number: "2", 
      title: "Klickverschluss schließen",
      description: "Werkzeuglose Verbindung durch intelligentes Klicksystem",
      icon: "ri-link",
      benefit: "Stabil."
    },
    {
      number: "3",
      title: "Höhe justieren",
      description: "Optimalen Schutz gewährleisten und fertig",
      icon: "ri-shield-check-line",
      benefit: "Fertig."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-[#2b3138] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <i className="ri-tools-line mr-2"></i>
            So funktioniert's
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-[#2b3138] leading-tight">
            Drei einfache Schritte
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Werkzeuglose Installation in weniger als 5 Minuten
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Nummerierte Karte */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden">
                {/* Nummer Badge */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-[#39F2AE] rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Mini-Illustration */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-300">
                    <i className={`${step.icon} text-4xl text-[#39F2AE]`}></i>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#2b3138] leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Nutzen-Microcopy */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-block bg-[#39F2AE]/10 text-[#39F2AE] px-4 py-2 rounded-full text-sm font-semibold">
                      {step.benefit}
                    </span>
                  </div>
                </div>

                {/* Hover-Effekt */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39F2AE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
              
              {/* Verbindungspfeil */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-[#39F2AE]/30"></div>
                    <i className="ri-arrow-right-line text-[#39F2AE] text-xl ml-1"></i>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Abschluss-Microcopy */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-[#39F2AE]/20 shadow-sm">
            <span className="text-[#39F2AE] font-semibold">Sicher.</span>
            <span className="text-[#39F2AE] font-semibold">Stabil.</span>
            <span className="text-[#39F2AE] font-semibold">Fertig.</span>
            <i className="ri-check-double-line text-[#39F2AE] text-lg ml-2"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
