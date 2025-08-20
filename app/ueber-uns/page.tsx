
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white text-[#2b3138] font-inter">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Bereich */}
          <div className="mb-20 text-center relative">
            <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20sustainable%20business%20team%20working%20together%20in%20green%20office%20environment%20with%20plants%20and%20natural%20lighting%20professional%20atmosphere%20innovation%20teamwork%20collaboration%20clean%20minimalist%20design&width=1200&height=600&seq=team-hero&orientation=landscape')] bg-cover bg-center bg-no-repeat opacity-20 rounded-3xl"></div>
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-lg">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#39F2AE]/10 px-4 py-2 rounded-full border border-[#39F2AE]/20">
                  <div className="w-2 h-2 bg-[#39F2AE] rounded-full animate-pulse"></div>
                  <span className="text-[#39F2AE] text-sm font-medium">Gegründet 2024</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-light text-[#2b3138] leading-tight">
                  Innovation trifft
                  <span className="block text-[#39F2AE] font-medium">Leidenschaft</span>
                </h1>
                
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Das Tricast360 Team vereint sich in der Leidenschaft um Nachhaltigkeit, 
                  Innovation und Sparsamkeit von Ressourcen rund um den Schutz der Bäume auf Baustellen.
                </p>
              </div>
            </div>
          </div>

          {/* Geschäftsführer Sektion */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-[#39F2AE]/10 to-[#2dd89a]/5 rounded-3xl p-8 lg:p-12 border border-[#39F2AE]/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#39F2AE]/10 px-3 py-1 rounded-full border border-[#39F2AE]/20">
                      <i className="ri-crown-line text-[#39F2AE] text-sm"></i>
                      <span className="text-[#39F2AE] text-xs font-medium">Geschäftsführer</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-light text-[#2b3138]">
                      Galip Alkan
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Als Gründer und Geschäftsführer von Tricast360 bringe ich meine Vision einer 
                      nachhaltigen Zukunft in die Baubranche ein. Mit innovativen Lösungen möchten 
                      wir den Baumschutz revolutionieren.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Mein Antrieb ist es, Umweltschutz und wirtschaftliche Effizienz zu verbinden. 
                      Jeder geschützte Baum ist ein Beitrag für kommende Generationen.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#39F2AE]/10 rounded-lg flex items-center justify-center">
                          <i className="ri-lightbulb-line text-[#39F2AE]"></i>
                        </div>
                        <div>
                          <h4 className="text-[#2b3138] font-medium text-sm">Vision</h4>
                          <p className="text-gray-600 text-xs">Nachhaltigkeit</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#39F2AE]/10 rounded-lg flex items-center justify-center">
                          <i className="ri-rocket-line text-[#39F2AE]"></i>
                        </div>
                        <div>
                          <h4 className="text-[#2b3138] font-medium text-sm">Mission</h4>
                          <p className="text-gray-600 text-xs">Innovation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="aspect-square rounded-3xl bg-[url('https://readdy.ai/api/search-image?query=professional%20business%20portrait%20of%20confident%20male%20CEO%20entrepreneur%20in%20modern%20office%20setting%20wearing%20business%20casual%20attire%20warm%20lighting%20executive%20leadership%20sustainability%20focused%20innovative%20mindset%20clean%20background&width=400&height=400&seq=ceo-galip&orientation=squarish')] bg-cover bg-center bg-no-repeat border border-[#39F2AE]/20"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#39F2AE] to-[#2dd89a] rounded-2xl flex items-center justify-center">
                      <i className="ri-tree-line text-[#2b3138] text-3xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Sektion */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-[#2b3138] mb-4">
                Unser Team
              </h2>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                Experten mit einer gemeinsamen Vision: Den Baumschutz zu revolutionieren
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Rifat Acar */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:border-[#39F2AE]/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[url('https://readdy.ai/api/search-image?query=professional%20portrait%20of%20product%20manager%20engineer%20in%20modern%20workspace%20technical%20innovation%20manufacturing%20development%20expertise%20confident%20approachable%20clean%20industrial%20background%20product%20design%20focus&width=300&height=300&seq=rifat-acar&orientation=squarish')] bg-cover bg-center bg-no-repeat border border-[#39F2AE]/20 group-hover:border-[#39F2AE]/40 transition-all duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#39F2AE]/10 rounded-lg flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-all duration-300">
                      <i className="ri-settings-3-line text-[#39F2AE] text-sm"></i>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-[#2b3138] group-hover:text-[#39F2AE] transition-colors duration-300">
                        Rifat Acar
                      </h3>
                      <p className="text-[#39F2AE] font-medium text-sm">Product Manager</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Produktentwicklung und Herstellung - Rifat bringt technische Expertise 
                      und Innovationsgeist in die Entwicklung unserer Baumschutzsysteme ein.
                    </p>
                    
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-[#39F2AE]/10 border border-[#39F2AE]/20 rounded-full text-[#39F2AE] text-xs">
                        Produktentwicklung
                      </span>
                      <span className="px-3 py-1 bg-[#39F2AE]/10 border border-[#39F2AE]/20 rounded-full text-[#39F2AE] text-xs">
                        Manufacturing
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platzhalter für weiteres Team-Mitglied */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 border-dashed shadow-lg">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#39F2AE]/10 rounded-2xl flex items-center justify-center mx-auto">
                    <i className="ri-add-line text-[#39F2AE] text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#2b3138] mb-2">Wir wachsen</h3>
                    <p className="text-gray-600 text-sm">
                      Unser Team erweitert sich kontinuierlich. 
                      Werden Sie Teil unserer Vision!
                    </p>
                  </div>
                  <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#39F2AE]/10 text-[#39F2AE] px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#39F2AE]/20 transition-all duration-200 whitespace-nowrap cursor-pointer">
                    <i className="ri-team-line"></i>
                    Karriere-Anfrage
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Unternehmenswerte */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-[#2b3138] mb-4">
                Unsere Werte
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Was uns antreibt und leitet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#39F2AE]/20 to-[#2dd89a]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <i className="ri-leaf-line text-[#39F2AE] text-3xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2b3138] mb-3 group-hover:text-[#39F2AE] transition-colors duration-300">
                    Nachhaltigkeit
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Umweltschutz ist der Kern unserer Mission. Wir entwickeln Lösungen, 
                    die Ressourcen schonen und die Natur respektieren.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#39F2AE]/20 to-[#2dd89a]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <i className="ri-lightbulb-line text-[#39F2AE] text-3xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2b3138] mb-3 group-hover:text-[#39F2AE] transition-colors duration-300">
                    Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wir denken anders und entwickeln bahnbrechende Technologien, 
                    die traditionelle Methoden revolutionieren.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6 group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#39F2AE]/20 to-[#2dd89a]/10 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300">
                  <i className="ri-recycle-line text-[#39F2AE] text-3xl group-hover:rotate-12 transition-transform duration-300"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2b3138] mb-3 group-hover:text-[#39F2AE] transition-colors duration-300">
                    Ressourcen-Effizienz
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sparsamkeit und Wiederverwendbarkeit stehen im Mittelpunkt 
                    unseres Produktdesigns und unserer Unternehmensphilosophie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Startup Story */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#39F2AE]/10 to-[#2dd89a]/10 rounded-3xl p-8 lg:p-12 border border-[#39F2AE]/20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#39F2AE]/10 px-3 py-1 rounded-full border border-[#39F2AE]/20">
                      <i className="ri-rocket-line text-[#39F2AE] text-sm"></i>
                      <span className="text-[#39F2AE] text-xs font-medium">Unsere Story</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-light text-[#2b3138]">
                      Von der Idee zur Innovation
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      <strong className="text-[#2b3138]">2024</strong> – Das Jahr, in dem eine Vision Realität wurde. 
                      Als wir sahen, wie ineffizient und umweltschädlich herkömmlicher Baumschutz war, 
                      wussten wir: Es muss einen besseren Weg geben.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Heute entwickeln wir als junges, dynamisches Startup die nächste Generation 
                      von Baumschutzsystemen – modulär, nachhaltig und wirtschaftlich.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39F2AE] mb-1">2024</div>
                      <div className="text-xs text-gray-600">Gegründet</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39F2AE] mb-1">100%</div>
                      <div className="text-xs text-gray-600">Nachhaltig</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39F2AE] mb-1">∞</div>
                      <div className="text-xs text-gray-600">Wiederverwendbar</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-2xl bg-[url('https://readdy.ai/api/search-image?query=modern%20startup%20office%20workspace%20with%20young%20team%20brainstorming%20innovative%20product%20development%20sustainable%20technology%20green%20solutions%20collaboration%20creativity%20bright%20natural%20lighting%20modern%20design&width=600&height=400&seq=startup-story&orientation=landscape')] bg-cover bg-center bg-no-repeat border border-[#39F2AE]/20"></div>
                  <div className="absolute top-4 right-4 bg-[#39F2AE] text-[#2b3138] px-3 py-1 rounded-full text-sm font-medium">
                    Innovation seit 2024
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bereich */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#39F2AE]/10 to-[#2dd89a]/10 rounded-3xl p-12 border border-[#39F2AE]/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#39F2AE] to-[#2dd89a] rounded-2xl flex items-center justify-center mx-auto">
                  <i className="ri-heart-line text-[#2b3138] text-2xl"></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-[#2b3138]">
                  Werden Sie Teil unserer Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gemeinsam gestalten wir die Zukunft des Baumschutzes. 
                  Lassen Sie uns zusammen nachhaltige Lösungen entwickeln.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kontakt" className="bg-[#39F2AE] text-[#2b3138] px-8 py-4 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center">
                    <i className="ri-team-line"></i>
                    Kontakt aufnehmen
                  </Link>
                  <Link href="/system" className="border border-[#39F2AE] text-[#39F2AE] px-8 py-4 rounded-xl font-medium hover:bg-[#39F2AE]/10 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center">
                    <i className="ri-eye-line"></i>
                    Unser System
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
