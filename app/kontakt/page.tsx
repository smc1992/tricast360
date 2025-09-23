'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingButton from '../../components/LoadingButton';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    
    if (!formData.name.trim()) newErrors.push('Name ist erforderlich');
    if (!formData.email.trim()) newErrors.push('E-Mail ist erforderlich');
    if (!formData.phone.trim()) newErrors.push('Telefonnummer ist erforderlich');
    if (!formData.message.trim()) newErrors.push('Nachricht ist erforderlich');
    if (!formData.privacy) newErrors.push('DSGVO-Zustimmung ist erforderlich');
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.push('Ungültige E-Mail-Adresse');
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
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
          name: '',
          email: '',
          phone: '',
          message: '',
          privacy: false
        });
      } else {
        setSubmitStatus('error');
        setErrors([result.message || 'Ein Fehler ist aufgetreten']);
      }
    } catch {
      setSubmitStatus('error');
      setErrors(['Netzwerkfehler. Bitte versuchen Sie es später erneut.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#2b3138]">
      <Header />
      
      <main className="pt-20">
        {/* 1. Hero-Bereich */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#baf742]/5 to-[#a3e635]/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="heading-1">
                  Fragen? Wir beraten Sie gerne.
                </h1>
                <p className="body-large text-gray-600 max-w-3xl mx-auto">
                  Lassen Sie uns gemeinsam die perfekte Baumschutz-Lösung für Ihr Projekt finden.
                </p>
              </div>
              
              {/* Klarer CTA */}
              <div className="pt-4">
                <a 
                  href="#kontaktformular"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#baf742] to-[#a3e635] text-[#2b3138] px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <i className="ri-message-line text-2xl"></i>
                  Jetzt Kontakt aufnehmen
                  <i className="ri-arrow-down-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hauptinhalt */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* 2. Kontaktformular */}
              <div id="kontaktformular">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-[#2b3138] mb-4">
                      Nachricht senden
                    </h2>
                    <p className="text-gray-600">
                      Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#2b3138] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#baf742] focus:border-[#baf742] transition-colors duration-200"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>

                    {/* E-Mail */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#2b3138] mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#baf742] focus:border-[#baf742] transition-colors duration-200"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    {/* Telefonnummer */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#2b3138] mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#baf742] focus:border-[#baf742] transition-colors duration-200"
                        placeholder="+49 123 456789"
                      />
                    </div>

                    {/* Nachricht */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#2b3138] mb-2">
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#baf742] focus:border-[#baf742] transition-colors duration-200 resize-vertical"
                        placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                      />
                    </div>

                    {/* DSGVO-Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-[#baf742] border-gray-300 rounded focus:ring-[#baf742]"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                        Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                        <a href="/datenschutz" className="text-[#baf742] hover:underline">
                          Datenschutzerklärung
                        </a>{' '}
                        zu. *
                      </label>
                    </div>

                    {/* Fehler anzeigen */}
                    {errors.length > 0 && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-red-800 mb-2">
                          <i className="ri-error-warning-line"></i>
                          <span className="font-semibold">Bitte korrigieren Sie folgende Fehler:</span>
                        </div>
                        <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Erfolg anzeigen */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-green-800">
                          <i className="ri-check-line"></i>
                          <span className="font-semibold">Nachricht erfolgreich gesendet!</span>
                        </div>
                        <p className="text-green-700 text-sm mt-1">
                          Wir melden uns binnen 24 Stunden bei Ihnen zurück.
                        </p>
                      </div>
                    )}

                    {/* Sende-Button (auffällig, kontrastreich) */}
                    <div className="pt-4">
                      <LoadingButton
                        type="submit"
                        isLoading={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#baf742] to-[#a3e635] text-[#2b3138] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
                      >
                        <span className="flex items-center gap-2 justify-center">
                          <i className="ri-send-plane-line text-xl"></i>
                          Nachricht senden
                        </span>
                      </LoadingButton>
                    </div>
                  </form>
                </div>

                {/* 3. Info-Leiste unterhalb des Formulars */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-[#2b3138] text-sm">Antwortzeit</h4>
                        <p className="text-gray-600 text-sm">&lt;24 h</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-[#2b3138] text-sm">Telefonische Beratung</h4>
                        <p className="text-gray-600 text-sm">möglich</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-3">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-truck-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-semibold text-[#2b3138] text-sm">Deutschlandweite</h4>
                        <p className="text-gray-600 text-sm">Lieferung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Alternative Kontaktmöglichkeiten */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#2b3138] mb-6">
                    Direkte Kontaktmöglichkeiten
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Telefon klickbar */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#baf742]/5 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2b3138] mb-1">Telefon</h4>
                        <a 
                          href="tel:+491701002912" 
                          className="text-[#baf742] hover:underline font-medium"
                        >
                          +49 170 1002912
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Mo-Fr 8:00-18:00 Uhr</p>
                      </div>
                    </div>
                    
                    {/* E-Mail klickbar */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#baf742]/5 transition-colors duration-200">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2b3138] mb-1">E-Mail</h4>
                        <a 
                          href="mailto:info@tricast360.de" 
                          className="text-[#baf742] hover:underline font-medium"
                        >
                          info@tricast360.de
                        </a>
                        <p className="text-gray-600 text-sm mt-1">Antwort binnen 24h</p>
                      </div>
                    </div>
                    
                    {/* Adresse */}
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-[#baf742]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-[#baf742] text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#2b3138] mb-1">Adresse</h4>
                        <div className="text-gray-600 text-sm leading-relaxed">
                          Lüneburger Str. 90<br />
                          D-21423 Winsen (Luhe)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Zusätzliche Informationen */}
                <div className="bg-gradient-to-br from-[#baf742]/10 to-[#a3e635]/10 rounded-2xl p-8 border border-[#baf742]/20">
                  <h4 className="text-lg font-semibold text-[#2b3138] mb-4">
                    Warum Tricast360?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <i className="ri-shield-check-line text-[#baf742]"></i>
                      <span className="text-gray-700 text-sm">Kostenlose Erstberatung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-recycle-line text-[#baf742]"></i>
                      <span className="text-gray-700 text-sm">Mehrfach wiederverwendbar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-award-line text-[#baf742]"></i>
                      <span className="text-gray-700 text-sm">Qualitätsgeprüft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-leaf-line text-[#baf742]"></i>
                      <span className="text-gray-700 text-sm">Klimaneutral</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer konsistent zur Startseite */}
      <Footer />
    </div>
  );
}
