
'use client';

export default function SystemOverview() {
  const features = [
    {
      title: "Modulares Design",
      description: "Flexible Anpassung an verschiedene Baumstämme und Situationen",
      icon: "ri-layout-grid-line",
      details: ["Stammumfang 20-80 cm", "Höhe stufenlos verstellbar", "Beliebig erweiterbar"]
    },
    {
      title: "Gurt-Verbindung",
      description: "Werkzeuglose Installation in wenigen Minuten",
      icon: "ri-link",
      details: ["Ohne Werkzeug", "Sichere Verriegelung", "Einfache Demontage"]
    },
    {
      title: "360° Rundumschutz",
      description: "Vollständiger Schutz des Baumstammes vor Beschädigungen",
      icon: "ri-shield-check-line",
      details: ["Kompletter Rundumschutz", "Stoßdämpfende Wirkung", "Witterungsbeständig"]
    },
    {
      title: "Wiederverwendbar",
      description: "Nachhaltig durch mehrfache Nutzung auf verschiedenen Baustellen",
      icon: "ri-recycle-line",
      details: ["Mehrfach verwendbar", "Einfache Reinigung", "Langlebige Materialien"]
    }
  ];

  return (
    <div className="space-y-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-800">
              Innovation trifft
              <span className="block text-[#39F2AE]">Nachhaltigkeit</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Das Tricast360-System revolutioniert den Baumschutz durch intelligente 
              Modularität und nachhaltige Materialien. Entwickelt für die Anforderungen 
              moderner Baustellen.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-[#39F2AE] rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="text-gray-800">Praxiserprobt seit 2020</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 bg-[#39F2AE] rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="text-gray-800">Bereit für den Markteintritt</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <img 
              src="https://static.readdy.ai/image/5cb98375ce345c7331a1619afba21cba/0623913294cb49f45f91812b9749776a.jfif"
              alt="Tricast360 System"
              className="w-full h-auto rounded-2xl shadow-2xl object-top"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#39F2AE] rounded-2xl p-4 shadow-xl">
              <i className="ri-shield-check-line text-white text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 xl:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#39F2AE]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center">
                <i className={`${feature.icon} text-[#39F2AE] text-2xl`}></i>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#39F2AE] rounded-full"></div>
                    <span className="text-gray-600 text-xs">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-light text-gray-800">
            Warum Tricast360?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-3xl font-light text-[#39F2AE]">90%</div>
              <div className="text-sm text-gray-600">Weniger Installationszeit</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-light text-[#39F2AE]">100%</div>
              <div className="text-sm text-gray-600">Nachhaltig</div>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-light text-[#39F2AE]">100%</div>
              <div className="text-sm text-gray-600">Normkonform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
