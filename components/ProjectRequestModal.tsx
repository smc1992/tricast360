'use client';

import { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';

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
  const [errors, setErrors] = useState<string[]>([]);

  const projectTypes = [
    'Straßenbau',
    'Tiefbau',
    'Hochbau',
    'Sanierung',
    'Landschaftsbau',
    'Sonstiges'
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
          type: 'project',
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        
        // Nach 3 Sekunden Modal schließen und Form zurücksetzen
        setTimeout(() => {
          onClose();
          resetForm();
        }, 3000);
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
      projectType: '',
      treeCount: '',
      location: '',
      startDate: '',
      message: ''
    });
    setSubmitStatus('idle');
    setErrors([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#baf742]/30 to-[#90CFC4]/30 rounded-xl flex items-center justify-center">
                <i className="ri-phone-line text-[#baf742] text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#0E1C3D]">Projekt anfragen</h2>
                <p className="text-gray-600 text-sm">Wir melden uns innerhalb von 24 Stunden bei Ihnen</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#baf742] hover:bg-gray-100 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#baf742]/10 border border-[#baf742]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <i className="ri-check-line text-[#baf742] text-xl"></i>
                <div>
                  <p className="text-[#baf742] font-medium">Anfrage erfolgreich gesendet!</p>
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

          {/* Formular */}
          <form id="project-request-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Unternehmen *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Ihr Unternehmen"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Ansprechpartner *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Vor- und Nachname"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="ihre.email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="+49 (0) 123 456 789"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Art des Projekts</label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-8 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Projekt auswählen</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"></i>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Anzahl Bäume</label>
                <input
                  type="number"
                  name="treeCount"
                  value={formData.treeCount}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Geschätzte Anzahl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Projektstandort</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Stadt, PLZ oder Adresse"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[#0E1C3D] font-medium">Geplanter Starttermin</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[#0E1C3D] font-medium">Zusätzliche Informationen</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-[#0E1C3D] placeholder-gray-500 focus:border-[#baf742] focus:outline-none transition-colors duration-200 text-sm resize-none"
                placeholder="Beschreiben Sie Ihr Projekt und besondere Anforderungen..."
              />
              <div className="text-right text-xs text-gray-600">
                {formData.message.length}/500 Zeichen
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-300">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-[#baf742] text-lg mt-0.5"></i>
                <div className="text-sm text-gray-600">
                  <p className="font-medium text-[#0E1C3D] mb-1">Nächste Schritte:</p>
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
                className="px-8 py-4 border border-gray-300 text-[#0E1C3D] rounded-xl font-medium hover:border-[#baf742] hover:text-[#baf742] transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                Abbrechen
              </button>
              <LoadingButton
                type="submit"
                isLoading={isSubmitting}
                loadingText="Wird gesendet..."
                disabled={submitStatus === 'success'}
                className="flex-1 bg-[#baf742] text-[#2b3138] hover:bg-[#0E1C3D] hover:text-white"
                size="lg"
              >
                {submitStatus === 'success' ? (
                  <>
                    <i className="ri-check-line text-lg mr-2"></i>
                    Gesendet!
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line text-lg mr-2"></i>
                    Anfrage senden
                  </>
                )}
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}