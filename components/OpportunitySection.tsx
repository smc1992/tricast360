
'use client';

export default function OpportunitySection() {
  const applicationFields = [
    "Kommunen",
    "Bauunternehmen", 
    "GaLaBau",
    "Straßenanierungen",
    "Gehwegsanierungen",
    "Baustellen"
  ];

  const marketFacts = [
    {
      title: "Nachhaltigkeit im Fokus",
      description: "Kommunen setzen verstärkt auf wiederverwendbare Systeme",
      icon: "ri-leaf-line",
      stat: "85%"
    },
    {
      title: "Zeitersparnis",
      description: "Reduzierte Installationszeit bei Baustellen",
      icon: "ri-time-line",
      stat: "70%"
    },
    {
      title: "Kosteneffizienz",
      description: "Weniger Materialverschleiß und Entsorgungskosten",
      icon: "ri-money-euro-circle-line",
      stat: "60%"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#2b3138] mb-4 sm:mb-6">
            Warum Treecast360?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto px-4">
            Die Zukunft des Baumschutzes liegt in intelligenten, nachhaltigen Lösungen. 
            Treecast360 revolutioniert den Markt mit durchdachter Innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {marketFacts.map((fact, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:border-[#39F2AE]/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto group-hover:bg-[#39F2AE]/20 transition-colors duration-300">
                  <i className={`${fact.icon} text-2xl sm:text-3xl text-[#39F2AE]`}></i>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl font-light text-[#39F2AE]">
                    {fact.stat}
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-[#2b3138] group-hover:text-[#39F2AE] transition-colors duration-200">
                    {fact.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {fact.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block bg-[#39F2AE] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Breites Einsatzspektrum
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#2b3138]">
                Für jeden Bedarf die richtige Lösung
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Von kommunalen Projekten bis hin zu großen Infrastrukturmaßnahmen – 
                Treecast360 passt sich flexibel an verschiedenste Anforderungen an.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {applicationFields.map((field, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-[#39F2AE]/50 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#39F2AE] rounded-full group-hover:scale-125 transition-transform duration-200 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-[#2b3138] font-medium group-hover:text-[#39F2AE] transition-colors duration-200">
                      {field}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <i className="ri-trophy-line text-[#39F2AE] text-lg sm:text-xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#2b3138]">
                    Praxiserprobt seit 2020
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Entstanden aus echten Problemen der Praxis, entwickelt für maximale 
                  Effizienz und Nachhaltigkeit in realen Einsatzszenarien.
                </p>
              </div>
            </div>

            <div className="bg-[#39F2AE]/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#39F2AE]/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                  <i className="ri-lightbulb-line text-[#39F2AE] text-base sm:text-lg"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base text-[#2b3138] font-medium mb-1 sm:mb-2">Innovation trifft Nachhaltigkeit</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Recycelte Materialien, modularer Aufbau und werkzeuglose Installation 
                    vereinen Umweltschutz mit wirtschaftlicher Effizienz.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
              <div className="space-y-1 sm:space-y-2">
                <div className="text-2xl sm:text-3xl font-light text-[#39F2AE]">
                  Zukunftssicher
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Investition in langfristige, nachhaltige Infrastruktur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}