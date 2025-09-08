
'use client';

import { useState } from 'react';

export default function InstallationGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Vorbereitung",
      duration: "2 Minuten",
      description: "Baustelle und Komponenten für die Installation vorbereiten",
      details: [
        "Stammumfang des zu schützenden Baumes messen",
        "Benötigte Anzahl Basis-Schutzelemente berechnen (Umfang ÷ 31,4 cm)",
        "Komponenten aus dem Transport-Stack entnehmen",
        "Arbeitsbereich um den Baum freihalten (Radius ca. 1m)"
      ],
      tips: [
        "Bei Stammumfang über 80cm zusätzliche Elemente verwenden",
        "Schutzpolster bereits vor Ort anbringen für Zeitersparnis"
      ],
      image: "Construction worker preparing tree protection components on construction site, measuring tree trunk diameter with measuring tape, green modular protection elements laid out systematically, professional safety equipment, organized installation preparation scene"
    },
    {
      title: "Positionierung",
      duration: "3 Minuten", 
      description: "Schutzelemente um den Baumstamm positionieren",
      details: [
        "Erstes Basis-Schutzelement am Stamm anlegen",
        "Schutzpolster zwischen Element und Baumrinde positionieren",
        "Weitere Elemente gleichmäßig um den Stamm verteilen",
        "Abstände zwischen den Elementen prüfen (max. 2-3 cm Spalt)"
      ],
      tips: [
        "Bei unrunden Stämmen die Elemente flexibel anpassen",
        "Darauf achten, dass keine Äste eingeklemmt werden"
      ],
      image: "Professional installation of green tree protection system around tree trunk, worker positioning modular components with protective padding, construction site environment, systematic placement of protection elements, safety-focused installation process"
    },
    {
      title: "Verbindung", 
      duration: "4 Minuten",
      description: "Klicksystem aktivieren und Elemente sicher verbinden",
      details: [
        "Verbindungsclips in die vorgesehenen Aufnahmen einsetzen",
        "Elemente zusammenfügen bis zum hörbaren 'Klick'",
        "Sichere Verriegelung durch Sichtkontrolle prüfen",
        "Alle Verbindungspunkte systematisch kontrollieren"
      ],
      tips: [
        "Bei Widerstand Element nochmals neu positionieren",
        "Clips sollten bündig mit der Oberfläche abschließen"
      ],
      image: "Close-up view of hands connecting green tree protection modules using click-system, detailed view of connection mechanism engaging with audible click, professional installation technique, secure locking system in action, technical precision work"
    },
    {
      title: "Höheneinstellung",
      duration: "2 Minuten",
      description: "Schutz auf optimale Höhe einstellen",
      details: [
        "Höhenversteller an gewünschter Position arretieren",
        "Mindesthöhe 60cm, empfohlene Höhe 80-100cm",
        "Gleichmäßige Höhe aller Elemente sicherstellen",
        "Stabilität des gesamten Systems testen"
      ],
      tips: [
        "Höhe je nach Baustellenaktivität anpassen",
        "Bei starkem Wind zusätzliche Stabilisierung erwägen"
      ],
      image: "Worker adjusting height of installed tree protection system using tool-free height adjustment mechanism, green modular protection at optimal height around tree trunk, construction site background, professional installation completion, ergonomic working position"
    },
    {
      title: "Abschlusskontrolle",
      duration: "3 Minuten",
      description: "Finale Überprüfung und Dokumentation",
      details: [
        "Vollständigen Rundumschutz visuell kontrollieren",
        "Stabilität durch leichten Belastungstest prüfen",
        "Installation in Bautagebuch dokumentieren",
        "Zugang für Baumpflege sicherstellen"
      ],
      tips: [
        "Foto für Dokumentation und spätere Demontage aufnehmen",
        "Kontaktdaten für Rückfragen hinterlassen"
      ],
      image: "Quality control inspection of completed tree protection installation, professional documentation with clipboard and camera, fully protected tree with green modular system, construction site safety compliance, systematic quality assurance process"
    }
  ];

  const tools = [
    { name: "Maßband", icon: "ri-ruler-line", required: true },
    { name: "Arbeitshandschuhe", icon: "ri-hand-heart-line", required: true },
    { name: "Dokumentation", icon: "ri-file-text-line", required: false },
    { name: "Kamera", icon: "ri-camera-line", required: false }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="heading-2">
          Installation in
          <span className="block text-[#baf742]">5 einfachen Schritten</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Die werkzeuglose Installation des Tricast360-Systems dauert nur wenige Minuten 
          und kann ohne spezielle Schulung durchgeführt werden.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-xl font-medium text-gray-800 mb-6 flex items-center gap-2">
          <i className="ri-tools-line text-[#baf742]"></i>
          Benötigte Ausrüstung
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4">
              <div className="w-10 h-10 bg-[#baf742]/10 rounded-xl flex items-center justify-center">
                <i className={`${tool.icon} text-[#baf742] text-lg`}></i>
              </div>
              <div>
                <div className="text-gray-800 font-medium text-sm">{tool.name}</div>
                <div className={`text-xs ${tool.required ? 'text-[#baf742]' : 'text-gray-600'}`}>
                  {tool.required ? 'Erforderlich' : 'Optional'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="space-y-3 sticky top-32">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                  activeStep === index
                    ? 'bg-[#baf742]/10 border border-[#baf742]/30'
                    : 'bg-white border border-gray-200 hover:border-[#baf742]/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    activeStep === index
                      ? 'bg-[#baf742] text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className={`font-medium ${
                      activeStep === index ? 'text-[#baf742]' : 'text-gray-800'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-gray-600 text-sm">{step.duration}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#baf742] rounded-xl flex items-center justify-center font-bold text-white">
                  {activeStep + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-800">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-[#baf742]">{steps[activeStep].duration}</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="mb-8">
                <img 
                  src={`https://readdy.ai/api/search-image?query=$%7Bsteps%5BactiveStep%5D.image%7D&width=600&height=400&seq=install-step-${activeStep}&orientation=landscape`}
                  alt={`Installation Schritt ${activeStep + 1}`}
                  className="w-full h-64 rounded-xl shadow-lg object-top"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-list-check text-[#baf742]"></i>
                    Arbeitsschritte
                  </h4>
                  <div className="space-y-3">
                    {steps[activeStep].details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#baf742]/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-[#baf742] rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                    <i className="ri-lightbulb-line text-[#baf742]"></i>
                    Profi-Tipps
                  </h4>
                  <div className="space-y-3">
                    {steps[activeStep].tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 bg-[#baf742]/5 rounded-xl p-4 border border-[#baf742]/10">
                        <i className="ri-information-line text-[#baf742] mt-0.5"></i>
                        <span className="text-gray-600">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activeStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Zurück
                </button>
                
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    activeStep === steps.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#baf742] text-white hover:bg-[#0E1C3D]'
                  }`}
                >
                  Weiter
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#baf742]/10 to-[#a3e635]/10 rounded-2xl p-8 border border-[#baf742]/20">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-[#baf742]/20 rounded-2xl flex items-center justify-center mx-auto">
            <i className="ri-time-line text-[#baf742] text-2xl"></i>
          </div>
          <h3 className="text-2xl font-light text-gray-800">
            Gesamte Installationszeit
          </h3>
          <div className="text-4xl font-light text-[#baf742] mb-2">
            ca. 15 Minuten
          </div>  
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deutlich schneller als herkömmliche Baumschutzlösungen - 
            ohne Werkzeug, ohne Spezialwissen, ohne Kompromisse beim Schutz.
          </p>
        </div>
      </div>
    </div>
  );
}