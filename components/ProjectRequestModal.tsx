'use client';

import { useState } from 'react';

interface ProjectRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectRequestModal({ isOpen, onClose }: ProjectRequestModalProps) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    projectType: '',
    treeCount: '',
    location: '',
    startDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Straßenbau',
    'Tiefbau',
    'Hochbau',
    'Sanierung',
    'Landschaftsbau',
    'Sonstiges'
  ];

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
    
    // Formular-Validierung
    if (!formData.company || !formData.name || !formData.email || !formData.phone) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulation einer API-Anfrage
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Nach 3 Sekunden Modal schließen
      setTimeout(() => {
        onClose();
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          projectType: '',
          treeCount: '',
          location: '',
          startDate: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-[#2b3138] rounded-3xl shadow-2xl border border-[#3c4450] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#39F2AE]/10 rounded-xl flex items-center justify-center">
                <i className="ri-phone-line text-[#39F2AE] text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#ECEFF3]">Projekt anfragen</h2>
                <p className="text-[#B6BCCA] text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-[#B6BCCA] hover:text-[#39F2AE] hover:bg-[#39F2AE]/10 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#39F2AE]/10 border border-[#39F2AE]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-[#39F2AE] text-xl"></i>
                <div>
                  <p className="text-[#39F2AE] font-medium">Anfrage erfolgreich gesendet!</p>
                  <p className="text-[#B6BCCA] text-sm">Wir melden uns so schnell wie möglich bei Ihnen.</p>
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
                  <p className="text-[#B6BCCA] text-sm">Bitte überprüfen Sie Ihre Eingaben und versuchen es erneut.</p>
                </div>
              </div>
            </div>
          )}

          {/* Formular */}
          <form id="project-request-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Unternehmen *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Ihr Unternehmen"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Ansprechpartner *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Vor- und Nachname"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="ihre.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="+49 (0) 123 456 789"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Art des Projekts</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Projekt auswählen</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B6BCCA] pointer-events-none"></i>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Anzahl Bäume</label>
                <input
                  type="number"
                  name="treeCount"
                  value={formData.treeCount}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Geschätzte Anzahl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Projektstandort</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Stadt, PLZ oder Adresse"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#ECEFF3] font-medium">Geplanter Starttermin</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#ECEFF3] font-medium">Zusätzliche Informationen</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 bg-[#323941] border border-[#3c4450] rounded-xl text-[#ECEFF3] placeholder-[#B6BCCA] focus:border-[#39F2AE] focus:outline-none transition-colors duration-200 text-sm resize-none"
                placeholder="Beschreiben Sie Ihr Projekt und besondere Anforderungen..."
              />
              <div className="text-right text-xs text-[#B6BCCA]">
                {formData.message.length}/500 Zeichen
              </div>
            </div>

            <div className="bg-[#323941]/60 rounded-xl p-4 border border-[#3c4450]">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-[#39F2AE] text-lg mt-0.5"></i>
                <div className="text-sm text-[#B6BCCA]">
                  <p className="font-medium text-[#ECEFF3] mb-1">Nächste Schritte:</p>
                  <ul className="space-y-1">
                    <li>• Kostenlose Beratung innerhalb von 24 Stunden</li>
                    <li>• Individuelles Angebot basierend auf Ihren Anforderungen</li>
                    <li>• Technische Dokumentation und Installationsunterstützung</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 border border-[#3c4450] text-[#ECEFF3] rounded-xl font-medium hover:border-[#39F2AE] hover:text-[#39F2AE] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="flex-1 bg-[#39F2AE] text-[#2b3138] px-8 py-4 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#2b3138]/30 border-t-[#2b3138] rounded-full animate-spin"></div>
                    Wird gesendet...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <i className="ri-check-line text-lg"></i>
                    Gesendet!
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line text-lg"></i>
                    Anfrage senden
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}