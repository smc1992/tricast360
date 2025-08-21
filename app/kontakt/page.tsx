'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrors(result.errors || ['Ein Fehler ist aufgetreten']);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(['Netzwerkfehler. Bitte versuchen Sie es später erneut.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setSubmitStatus('idle');
    setErrors([]);
  };

  return (
    <div className="min-h-screen bg-white text-[#2b3138] font-inter">
      <Header />

      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#39F2AE]/10 px-4 py-2 rounded-full border border-[#39F2AE]/20">
                <div className="w-2 h-2 bg-[#39F2AE] rounded-full animate-pulse"></div>
                <span className="text-[#39F2AE] text-sm font-medium">Wir sind für Sie da</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-[#2b3138] leading-tight">
                Lassen Sie uns über Ihr
                <span className="block text-[#39F2AE] font-medium">Baumschutz-Projekt</span>
                <span className="block text-[#39F2AE] font-medium">sprechen</span>
              </h1>

              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Als innovatives Startup entwickeln wir die Zukunft des Baumschutzes. 
                Gemeinsam finden wir die perfekte Lösung für Ihr Projekt.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Kontaktformular */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-[#2b3138] mb-2">Nachricht senden</h2>
                  <p className="text-gray-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-[#39F2AE]/10 border border-[#39F2AE]/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-[#39F2AE] text-xl"></i>
                      <div>
                        <p className="text-[#39F2AE] font-medium">Nachricht erfolgreich gesendet!</p>
                        <p className="text-gray-600 text-sm">Wir melden uns so schnell wie möglich bei Ihnen.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <i className="ri-error-warning-line text-red-400 text-xl"></i>
                      <div>
                        <p className="text-red-400 font-medium">Fehler beim Senden</p>
                        {errors.length > 0 ? (
                          <ul className="text-gray-600 text-sm mt-1">
                            {errors.map((error, index) => (
                              <li key={index}>• {error}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 text-sm">Bitte überprüfen Sie Ihre Eingaben und versuchen es erneut.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <form id="kontakt-formular" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#2b3138] font-medium text-sm">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#2b3138] placeholder-gray-500 focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#2b3138] font-medium text-sm">Unternehmen</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#2b3138] placeholder-gray-500 focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#2b3138] font-medium text-sm">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#2b3138] placeholder-gray-500 focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                        placeholder="ihre.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#2b3138] font-medium text-sm">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#2b3138] placeholder-gray-500 focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                        placeholder="+49 (0) 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#2b3138] font-medium text-sm">Betreff</label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 bg-white border border-gray-300 rounded-xl text-[#2b3138] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Betreff auswählen</option>
                        <option value="projekt">Projekt-Anfrage</option>
                        <option value="information">Allgemeine Information</option>
                        <option value="technisch">Technische Frage</option>
                        <option value="partnerschaft">Partnerschaft</option>
                        <option value="presse">Presse-Anfrage</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#2b3138] font-medium text-sm">Nachricht *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      maxLength={500}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-[#2b3138] placeholder-gray-500 focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm resize-none"
                      placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                    />
                    <div className="text-right text-xs text-gray-500">
                      {formData.message.length}/500 Zeichen
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-[#39F2AE] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Wird gesendet...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <i className="ri-check-line text-lg"></i>
                        Gesendet!
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line"></i>
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Kontakt-Informationen */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Startup Story */}
              <div className="bg-gradient-to-br from-[#39F2AE]/10 to-[#2dd89a]/5 rounded-3xl p-8 border border-[#39F2AE]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#39F2AE]/20 rounded-xl flex items-center justify-center">
                    <i className="ri-rocket-line text-[#39F2AE] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2b3138]">Innovation beginnt hier</h3>
                    <p className="text-[#39F2AE] text-sm">Startup mit Vision</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Als junges Unternehmen revolutionieren wir den Baumschutz mit innovativen, 
                  nachhaltigen Lösungen. Unser Team bringt frische Ideen und modernste 
                  Technologien in eine traditionelle Branche.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#39F2AE] rounded-full animate-pulse"></div>
                  <span className="text-[#39F2AE] text-sm font-medium">Gegründet 2024</span>
                </div>
              </div>

              {/* Kontakt-Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[#2b3138] mb-6">Kontakt-Details</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#39F2AE]/30 transition-all duration-200 group shadow-sm">
                    <div className="w-10 h-10 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-200">
                      <i className="ri-mail-line text-[#39F2AE]"></i>
                    </div>
                    <div>
                      <p className="text-[#2b3138] font-medium">E-Mail</p>
                      <p className="text-gray-600 text-sm">info@tricast360.de</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#39F2AE]/30 transition-all duration-200 group shadow-sm">
                    <div className="w-10 h-10 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-200">
                      <i className="ri-phone-line text-[#39F2AE]"></i>
                    </div>
                    <div>
                      <p className="text-[#2b3138] font-medium">Telefon</p>
                      <p className="text-gray-600 text-sm">+49 170 1002912</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#39F2AE]/30 transition-all duration-200 group shadow-sm">
                    <div className="w-10 h-10 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-200">
                      <i className="ri-map-pin-line text-[#39F2AE]"></i>
                    </div>
                    <div>
                      <p className="text-[#2b3138] font-medium">Adresse</p>
                      <p className="text-gray-600 text-sm">
                        Lüneburger Str. 90<br />
                        D-21423 Winsen (Luhe)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#39F2AE]/30 transition-all duration-200 group shadow-sm">
                    <div className="w-10 h-10 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center group-hover:bg-[#39F2AE]/20 transition-colors duration-200">
                      <i className="ri-time-line text-[#39F2AE]"></i>
                    </div>
                    <div>
                      <p className="text-[#2b3138] font-medium">Verfügbarkeit</p>
                      <p className="text-gray-600 text-sm">Mo-Fr 8:00-18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-medium text-[#2b3138] mb-4 flex items-center gap-2">
                  <i className="ri-question-line text-[#39F2AE]"></i>
                  Häufige Fragen
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[#2b3138] font-medium">Wie schnell erhalte ich eine Antwort?</p>
                    <p className="text-gray-600">Innerhalb von 24 Stunden an Werktagen</p>
                  </div>
                  <div>
                    <p className="text-[#2b3138] font-medium">Bieten Sie kostenlose Beratung an?</p>
                    <p className="text-gray-600">Ja, die erste Beratung ist immer kostenfrei</p>
                  </div>
                  <div>
                    <p className="text-[#2b3138] font-medium">Arbeiten Sie deutschlandweit?</p>
                    <p className="text-gray-600">Ja, wir liefern und installieren bundesweit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Bereich */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#39F2AE]/10 to-[#2dd89a]/10 rounded-3xl p-12 border border-[#39F2AE]/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-[#39F2AE]/20 rounded-2xl flex items-center justify-center mx-auto">
                  <i className="ri-team-line text-[#39F2AE] text-2xl"></i>
                </div>
                <h3 className="text-2xl font-light text-[#2b3138]">
                  Gemeinsam gestalten wir die Zukunft
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Als Startup sind wir nah an unseren Kunden. Jedes Feedback hilft uns, 
                  bessere Lösungen zu entwickeln. Werden Sie Teil unserer Reise!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/system" className="bg-[#39F2AE] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center">
                    <i className="ri-eye-line"></i>
                    System ansehen
                  </Link>
                  <Link href="/#markt" className="border border-[#39F2AE] text-[#39F2AE] px-8 py-4 rounded-xl font-medium hover:bg-[#39F2AE]/10 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center">
                    <i className="ri-lightbulb-line"></i>
                    Unsere Vision
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
