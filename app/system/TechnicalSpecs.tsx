
'use client';

export default function TechnicalSpecs() {
  const specifications = [
    {
      category: "Abmessungen",
      icon: "ri-ruler-line",
      specs: [
        { label: "Basis-Schutzelement", value: "40 x 60 x 15 cm" },
        { label: "Stammumfang", value: "20 - 80 cm" },
        { label: "Schutzhöhe", value: "60 - 120 cm" },
        { label: "Wandstärke", value: "12 mm" }
      ]
    },
    {
      category: "Materialien",
      icon: "ri-flask-line",
      specs: [
        { label: "Hauptmaterial", value: "Recyceltes HDPE" },
        { label: "Verbindungsclips", value: "Verstärktes PA6" },
        { label: "Schutzpolster", value: "PE-Schaum" },
        { label: "UV-Stabilisierung", value: "> 10 Jahre" }
      ]
    },
    {
      category: "Belastbarkeit",
      icon: "ri-shield-check-line",
      specs: [
        { label: "Stoßfestigkeit", value: "bis 150 Joule" },
        { label: "Druckbelastung", value: "200 kg/m²" },
        { label: "Zugkraft Clips", value: "500 N" },
        { label: "Temperaturbereich", value: "-30°C bis +70°C" }
      ]
    },
    {
      category: "Nachhaltigkeit",
      icon: "ri-leaf-line",
      specs: [
        { label: "Nachhaltig", value: "100%" },
        { label: "Recycelter Anteil", value: "85%" },
        { label: "Recycelbar", value: "100%" },
        { label: "CO₂-Einsparung", value: "60% vs. Einweg" }
      ]
    }
  ];

  const certifications = [
    {
      name: "DIN 18920",
      description: "Vegetationstechnik im Landschaftsbau - Schutz von Bäumen",
      icon: "ri-award-line",
      status: "Geprüft"
    },
    {
      name: "EN 13451",
      description: "Spielplatzgeräte und Bodenbeläge - Sicherheitsanforderungen",
      icon: "ri-shield-check-line", 
      status: "Konform"
    },
    {
      name: "CE-Kennzeichnung",
      description: "Europäische Konformitätserklärung",
      icon: "ri-checkbox-circle-line",
      status: "Vorhanden"
    },
    {
      name: "ISO 14001",
      description: "Umweltmanagementsystem",
      icon: "ri-earth-line",
      status: "Geprüft"
    }
  ];

  const testResults = [
    {
      test: "Stoßfestigkeit",
      method: "DIN EN 12767",
      result: "Klasse NE3",
      description: "Keine Gefährdung bei Anprall"
    },
    {
      test: "Witterungsbeständigkeit", 
      method: "DIN EN ISO 4892",
      result: "> 10 Jahre",
      description: "UV-Stabilität nachgewiesen"
    },
    {
      test: "Schadstoffprüfung",
      method: "DIN EN 71-3",
      result: "Bestanden",
      description: "Keine schädlichen Substanzen"
    },
    {
      test: "Brandverhalten",
      method: "DIN EN 13501",
      result: "Klasse E",
      description: "Schwer entflammbar"
    }
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-6">
        <h2 className="heading-2">
          Technische Daten &
          <span className="block text-[#baf742]">Qualitätsstandards</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Präzise entwickelt, umfassend getestet und nach höchsten Qualitätsstandards geprüft - 
          für maximale Sicherheit und Zuverlässigkeit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {specifications.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#baf742]/30 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                  <i className={`${category.icon} text-[#baf742] text-xl`}></i>
                </div>
                <h3 className="text-lg font-medium text-gray-800">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.specs.map((spec, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-gray-600 text-sm">{spec.label}</div>
                    <div className="text-gray-800 font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Zertifizierungen & Standards
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tricast360 erfüllt alle relevanten europäischen und deutschen Normen 
            für Baumschutz und Baustellensicherheit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-[#baf742]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className={`${cert.icon} text-[#baf742] text-2xl`}></i>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{cert.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
              <div className="inline-flex items-center gap-2 bg-[#baf742]/10 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-[#baf742] rounded-full"></div>
                <span className="text-[#baf742] text-xs font-medium">{cert.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Prüfergebnisse & Tests
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Umfassende Testserien bestätigen die Leistungsfähigkeit und Sicherheit 
            des Tricast360-Systems unter allen Einsatzbedingungen.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="bg-white rounded-2xl border border-gray-200">
            <div className="min-w-full">
              <div className="bg-gray-50 rounded-t-2xl px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-4 gap-4 text-gray-800 font-medium text-sm">
                  <div>Prüfung</div>
                  <div>Testmethode</div>
                  <div>Ergebnis</div>
                  <div>Bewertung</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {testResults.map((test, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 last:border-0">
                      <div className="text-gray-800 font-medium">{test.test}</div>
                      <div className="text-gray-600 text-sm">{test.method}</div>
                      <div className="text-[#baf742] font-medium">{test.result}</div>
                      <div className="text-gray-600 text-sm">{test.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-gray-800">
            Umwelt & Nachhaltigkeit
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Tricast360 wurde von Grund auf für maximale Nachhaltigkeit entwickelt. 
            Durch die Wiederverwendbarkeit und den hohen Recycling-Anteil leisten 
            Sie einen aktiven Beitrag zum Umweltschutz.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                <i className="ri-recycle-line text-[#baf742]"></i>
              </div>
              <div>
                <div className="text-gray-800 font-medium">85% recyceltes Material</div>
                <div className="text-gray-600 text-sm">Aus Haushalts- und Industrieabfällen</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                <i className="ri-leaf-line text-[#baf742]"></i>
              </div>
              <div>
                <div className="text-gray-800 font-medium">60% weniger CO₂</div>
                <div className="text-gray-600 text-sm">Gegenüber Einweg-Lösungen</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                <i className="ri-refresh-line text-[#baf742]"></i>
              </div>
              <div>
                <div className="text-gray-800 font-medium">Mehrfach wiederverwendbar</div>
                <div className="text-gray-600 text-sm">Über viele Jahre hinweg</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="https://readdy.ai/api/search-image?query=Sustainable%20green%20tree%20protection%20system%20made%20from%20recycled%20materials%2C%20environmental%20certification%20symbols%2C%20eco-friendly%20industrial%20design%2C%20clean%20modern%20aesthetic%2C%20sustainability%20concept%20with%20natural%20elements%2C%20professional%20product%20photography%20with%20environmental%20focus&width=500&height=600&seq=sustainability&orientation=portrait"
              alt="Nachhaltigkeit Tricast360"
              className="w-full h-auto rounded-2xl shadow-xl object-top"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#baf742] rounded-2xl p-4 shadow-xl">
              <i className="ri-earth-line text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#baf742]/10 to-[#a3e635]/10 rounded-2xl p-8 border border-[#baf742]/20 text-center">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-[#baf742]/20 rounded-2xl flex items-center justify-center mx-auto">
            <i className="ri-download-line text-[#baf742] text-2xl"></i>
          </div>
          <h3 className="text-2xl font-light text-gray-800">
            Technische Dokumentation
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Laden Sie die vollständige technische Dokumentation mit detaillierten 
            Spezifikationen, Prüfberichten und Montageanweisungen herunter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-small">
              <i className="ri-file-pdf-line mr-2"></i>
              Datenblatt (PDF)
            </button>
            <button className="btn-outline-small">
              <i className="ri-file-zip-line mr-2"></i>
              CAD-Dateien (ZIP)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}