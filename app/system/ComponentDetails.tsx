
'use client';

export default function ComponentDetails() {
  const components = [
    {
      name: "Basis-Schutzmodul",
      description: "Das Grundelement bildet eine flexible Schutzhülle, die den Stamm wie eine zweite Haut umgibt. Die stoßdämpfenden Kammern bieten effektiven Schutz, ohne die Atmungsaktivität der Rinde zu beeinträchtigen.",
      specifications: [
        "Höhe: ca. 60–80 cm",
        "Material: Reißfestes, wetterbeständiges Gewebe mit Polsterkammern",
        "Gewicht: ca. 0,8 – 1,2 kg",
        "Farbe: Weiß (auf Wunsch in weiteren Farben erhältlich)"
      ],
      features: [
        "Stoßdämpfender Rundumschutz",
        "UV- und wetterbeständig",
        "Leicht, faltbar & stapelbar für Transport und Lagerung",
        "Wiederverwendbar über mehrere Saisons hinweg"
      ]
    },
    {
      name: "Verbindungssystem (Clips & Gurte)",
      description: "Die integrierten Klickverschlüsse und Gurte verbinden die Module sicher und passen sich flexibel an verschiedene Stammumfänge an.",
      specifications: [
        "Material: Hochfestes Polyamid (PA6)",
        "Belastbarkeit: bis 300–500 N",
        "Temperaturbeständigkeit: -20 °C bis +60 °C",
        "Lebensdauer: > 1000 Öffnungs-/Schließzyklen"
      ],
      features: [
        "Werkzeuglose Montage & Demontage",
        "Selbstsichernde Klickverschlüsse",
        "Flexible Anpassung an Stammdurchmesser",
        "Schnelles Anbringen auch durch eine Person möglich"
      ]
    },
    {
      name: "Erweiterungsmodul",
      description: "Für größere Bäume oder besonderen Schutzbedarf können zusätzliche Module nahtlos ergänzt werden. So wächst das System flexibel mit den Anforderungen.",
      specifications: [
        "Höhe pro Modul: ca. 60 cm",
        "Umfang: variabel durch Kombination mehrerer Elemente",
        "Material: wie Basis-Schutzmodul (reißfest, UV-beständig, recyclebar)"
      ],
      features: [
        "Modular erweiterbar in Höhe und Umfang",
        "Kombinierbar für nahezu jeden Stammumfang",
        "Wiederverwendbar & umweltfreundlich",
        "Spart Zeit & Kosten bei Wartung und Austausch"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-3xl lg:text-4xl font-light text-gray-800">
          Präzise entwickelte
          <span className="block text-[#39F2AE]">Systemkomponenten</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Jede Komponente des Tricast360-Systems wurde für maximale Funktionalität, 
          Langlebigkeit und Benutzerfreundlichkeit entwickelt.
        </p>
      </div>

      <div className="space-y-16">
        {components.map((component, index) => (
          <div key={index} className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-[#39F2AE]/10 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-[#39F2AE] rounded-full"></div>
                <span className="text-[#39F2AE] text-sm font-medium">Komponente {index + 1}</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-800">
                {component.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {component.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                  <i className="ri-settings-3-line text-[#39F2AE]"></i>
                  Spezifikationen
                </h4>
                <div className="space-y-2">
                  {component.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#39F2AE] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                  <i className="ri-star-line text-[#39F2AE]"></i>
                  Features
                </h4>
                <div className="space-y-2">
                  {component.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#39F2AE] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-light text-gray-800">
            Kompatibilität & Erweiterungen
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alle Komponenten sind untereinander kompatibel und ermöglichen 
            flexible Konfigurationen für verschiedene Anwendungsszenarien.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-puzzle-line text-[#39F2AE] text-xl"></i>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Modulares System</h4>
              <p className="text-gray-600 text-sm">Beliebige Kombinationen für individuelle Schutzlösungen</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-refresh-line text-[#39F2AE] text-xl"></i>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Erweiterbar</h4>
              <p className="text-gray-600 text-sm">Jederzeit um zusätzliche Komponenten ergänzbar</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-[#39F2AE] text-xl"></i>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Wartungsarm</h4>
              <p className="text-gray-600 text-sm">Langlebige Materialien mit minimalen Wartungsanforderungen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
