'use client';

import React, { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';
import { useCart } from '../contexts/CartContext';

interface Configuration {
  // Einstiegspaket: 2x 2-Kammer + 2x 7-Kammer Module (50cm Durchmesser)
  basePackage: boolean; // Immer true für Einstiegspaket
  additional2ChamberModules: number; // Zusätzliche 2-Kammer Module
  additional7ChamberModules: number; // Zusätzliche 7-Kammer Module
  diameter: number;
  height: number;
  quantity: number;
  // Add-ons
  reinforcement: boolean; // Verstärkung +199€
  advertisingBoard: boolean; // Werbetafel +99€
}

interface CustomerData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ProductConfigurator() {
  const { addItem } = useCart();
  
  const [config, setConfig] = useState<Configuration>({
    basePackage: true,
    additional2ChamberModules: 0,
    additional7ChamberModules: 0,
    diameter: 50, // Einstiegspaket für 50cm Durchmesser
    height: 100,
    quantity: 1,
    reinforcement: false,
    advertisingBoard: false,
  });

  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Hilfsfunktion: Berechne Gesamtanzahl der Module
  const calculateTotalModules = () => {
    // Basis: 4 Module für 50cm Durchmesser
    const baseModules = 4;
    
    // Zusätzliche Module basierend auf Durchmesser (jeder 50cm-Schritt = 4 Module)
    const additionalDiameterSteps = Math.max(0, (config.diameter - 50) / 50);
    const diameterBasedModules = additionalDiameterSteps * 4;
    
    // Manuell hinzugefügte Module
    const manualModules = config.additional2ChamberModules + config.additional7ChamberModules;
    
    return baseModules + diameterBasedModules + manualModules;
  };

  // Preisberechnung basierend auf durchmesser-basiertem Modulsystem
  const calculatePrice = () => {
    const pricePerModule = 174.75; // 699€ / 4 Module = 174,75€ pro Modul
    
    // Gesamtanzahl Module berechnen
    const totalModules = calculateTotalModules();
    
    // Grundpreis basierend auf Modulanzahl
    const modulePrice = totalModules * pricePerModule;
    
    // Add-ons
    const reinforcementPrice = config.reinforcement ? 199 : 0;
    const advertisingBoardPrice = config.advertisingBoard ? 99 : 0;
    
    const subtotal = modulePrice + reinforcementPrice + advertisingBoardPrice;
    return Math.round(subtotal * config.quantity);
  };

  // Preisberechnung aktualisieren
  useEffect(() => {
    setEstimatedPrice(calculatePrice());
  }, [config]);

  const handleConfigChange = (key: keyof Configuration, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleCustomerDataChange = (key: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [key]: value }));
  };

  const addToCart = () => {
    const totalModules = calculateTotalModules();
    const description = `TriCast360 System - ${config.diameter}cm Durchmesser, ${config.height}cm Höhe (${totalModules} Module)`;
    
    addItem({
      productModel: 'TriCast360 Baumschutzsystem',
      diameter: config.diameter,
      height: config.height,
      modules: totalModules,
      quantity: config.quantity,
      pricePerUnit: calculatePrice(),
      totalPrice: calculatePrice() * config.quantity
    });
    
    alert('Produkt wurde zum Warenkorb hinzugefügt!');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const totalModules = calculateTotalModules();
      const productData = {
        configuration: {
          ...config,
          totalModules,
          price: calculatePrice(),
        },
        customerData,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert('Ihre Anfrage wurde erfolgreich gesendet!');
        setCurrentStep(1);
        setConfig({
          basePackage: true,
          additional2ChamberModules: 0,
          additional7ChamberModules: 0,
          diameter: 50,
          height: 100,
          quantity: 1,
          reinforcement: false,
          advertisingBoard: false,
        });
        setCustomerData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 1 ? 'bg-[#baf742] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-[#baf742]' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= 2 ? 'bg-[#baf742] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 space-y-6 lg:space-y-8">
                <h3 className="text-xl lg:text-2xl font-bold">Schritt 1: Konfiguration</h3>
                
                {/* Basispaket Info */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Modulbasierte Preisberechnung</h4>
                  <div className="text-sm text-green-700">
                    Preis pro Modul: 174,75€ netto. Das Grundsystem enthält 4 Module für 50 cm Durchmesser. 
                    Jeder weitere 50cm-Schritt = +4 Module automatisch.
                    <br />
                    <strong>Aktuelle Konfiguration: {calculateTotalModules()} Module für {config.diameter}cm Durchmesser</strong>
                  </div>
                </div>

                {/* Zusätzliche Module */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Zusätzliche Module (optional)</h4>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Zusätzliche 2-Kammer Module</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={config.additional2ChamberModules}
                      onChange={(e) => handleConfigChange('additional2ChamberModules', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Zusätzliche 7-Kammer Module</label>
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={config.additional7ChamberModules}
                      onChange={(e) => handleConfigChange('additional7ChamberModules', parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                    />
                  </div>
                </div>

                {/* Add-ons */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Add-ons</h4>
                  
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.reinforcement}
                      onChange={(e) => handleConfigChange('reinforcement', e.target.checked)}
                      className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Verstärkung</div>
                      <div className="text-sm text-gray-500">Zusätzliche Stabilität für extreme Wetterbedingungen</div>
                    </div>
                    <div className="font-semibold text-green-600">+199€</div>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.advertisingBoard}
                      onChange={(e) => handleConfigChange('advertisingBoard', e.target.checked)}
                      className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Werbetafel</div>
                      <div className="text-sm text-gray-500">Individuelle Werbefläche für Ihr Unternehmen</div>
                    </div>
                    <div className="font-semibold text-green-600">+99€</div>
                  </label>
                </div>
                
                {/* Durchmesser */}
                <div>
                  <label className="block text-sm font-medium mb-2">Durchmesser (cm)</label>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="50"
                    value={config.diameter}
                    onChange={(e) => handleConfigChange('diameter', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>50 cm</span>
                    <span className="font-medium">{config.diameter} cm</span>
                    <span>300 cm</span>
                  </div>
                </div>

                {/* Höhe */}
                <div>
                  <label className="block text-sm font-medium mb-2">Höhe (cm)</label>
                  <input
                    type="range"
                    min="100"
                    max="300"
                    step="100"
                    value={config.height}
                    onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>100 cm</span>
                    <span className="font-medium">{config.height} cm</span>
                    <span>300 cm</span>
                  </div>
                </div>

                {/* Stückzahl */}
                <div>
                  <label className="block text-sm font-medium mb-2">Anzahl TriCast360-Systeme</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleConfigChange('quantity', num)}
                        className={`p-3 rounded-lg border-2 font-medium transition-all ${
                          config.quantity === num
                            ? 'border-[#baf742] bg-[#baf742] text-white'
                            : 'border-gray-300 hover:border-[#baf742]'
                        }`}
                      >
                        {num}x
                      </button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={config.quantity}
                      onChange={(e) => handleConfigChange('quantity', parseInt(e.target.value) || 1)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent text-sm"
                      placeholder="Oder eigene Anzahl eingeben..."
                    />
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-sm lg:text-base"
                >
                  Weiter zu Schritt 2
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 space-y-6 lg:space-y-8">
                <h3 className="text-xl lg:text-2xl font-bold">Schritt 2: Ihre Kontaktdaten</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                      type="text"
                      value={customerData.name}
                      onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">E-Mail *</label>
                    <input
                      type="email"
                      value={customerData.email}
                      onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Unternehmen</label>
                    <input
                      type="text"
                      value={customerData.company}
                      onChange={(e) => handleCustomerDataChange('company', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefon</label>
                    <input
                      type="tel"
                      value={customerData.phone}
                      onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Nachricht</label>
                    <textarea
                      value={customerData.message}
                      onChange={(e) => handleCustomerDataChange('message', e.target.value)}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                      placeholder="Zusätzliche Informationen zu Ihrem Projekt..."
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={addToCart}
                    className="w-full bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-sm lg:text-base flex items-center justify-center gap-2"
                  >
                    <i className="ri-shopping-cart-line"></i>
                    Zum Warenkorb hinzufügen
                  </button>
                  
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="w-full bg-gray-300 text-gray-700 py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-sm lg:text-base"
                  >
                    Zurück
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <div className="text-sm text-gray-500 mb-1">Durchmesser</div>
              <div className="text-lg font-semibold">{config.diameter} cm</div>
              
              <div className="text-sm text-gray-500 mb-1 mt-3">Höhe</div>
              <div className="text-lg font-semibold">{config.height} cm</div>
              
              <div className="text-sm text-gray-500 mb-1 mt-3">Module gesamt</div>
              <div className="text-lg font-semibold">{calculateTotalModules()}</div>
              
              <div 
                className="w-full h-8 rounded mt-4 bg-[#baf742]"
              />
            </div>

            {/* Live-Vorschau */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-green-600">Live-Vorschau aktiv</span>
              </div>
              
              <div className="text-center">
                <div className="relative mx-auto mb-4" style={{ width: '120px', height: '120px' }}>
                  <svg viewBox="0 0 120 120" className="w-full h-full">
                    <rect x="10" y="10" width="20" height="100" fill="#baf742" stroke="#333" strokeWidth="1"/>
                    <rect x="90" y="10" width="20" height="100" fill="#baf742" stroke="#333" strokeWidth="1"/>
                    <rect x="30" y="20" width="60" height="15" fill="#e5e7eb" stroke="#333" strokeWidth="1"/>
                    <rect x="30" y="40" width="60" height="15" fill="#e5e7eb" stroke="#333" strokeWidth="1"/>
                    <rect x="30" y="60" width="60" height="15" fill="#e5e7eb" stroke="#333" strokeWidth="1"/>
                    <rect x="30" y="80" width="60" height="15" fill="#e5e7eb" stroke="#333" strokeWidth="1"/>
                    <text x="60" y="105" textAnchor="middle" fontSize="8" fill="#666">Werbung</text>
                  </svg>
                </div>
                
                <div className="space-y-1 text-sm">
                  <div>2x 2-Kammer Module</div>
                  <div>2x 7-Kammer Module</div>
                  {config.diameter > 50 && (
                    <div className="text-blue-600">
                      +{Math.max(0, (config.diameter - 50) / 50) * 4} Module für {config.diameter}cm
                    </div>
                  )}
                  {(config.additional2ChamberModules > 0 || config.additional7ChamberModules > 0) && (
                    <div className="text-purple-600">
                      +{config.additional2ChamberModules + config.additional7ChamberModules} zusätzliche Module
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Preisaufschlüsselung */}
            <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-4">Preisaufschlüsselung</h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>TriCast360 System</span>
                  <span>699,00 €</span>
                </div>
                
                <div className="text-xs text-gray-500 ml-2">
                  • {calculateTotalModules()} Module pro System
                  • {config.quantity}x System{config.quantity > 1 ? 'e' : ''}
                </div>
                
                {config.diameter > 50 && (
                  <>
                    <div className="flex justify-between text-blue-600">
                      <span>Basismodule (50cm)</span>
                      <span>4 Module</span>
                    </div>
                    <div className="flex justify-between text-blue-600">
                      <span>Zusätzliche Module ({config.diameter}cm)</span>
                      <span>+{Math.max(0, (config.diameter - 50) / 50) * 4} Module</span>
                    </div>
                  </>
                )}
                
                {(config.additional2ChamberModules > 0 || config.additional7ChamberModules > 0) && (
                  <div className="flex justify-between text-purple-600">
                    <span>Zusätzliche Module</span>
                    <span>+{config.additional2ChamberModules + config.additional7ChamberModules} Module</span>
                  </div>
                )}
                
                {config.reinforcement && (
                  <div className="flex justify-between">
                    <span>Verstärkung</span>
                    <span>+{199 * config.quantity},00 €</span>
                  </div>
                )}
                
                {config.advertisingBoard && (
                  <div className="flex justify-between">
                    <span>Werbetafel</span>
                    <span>+{99 * config.quantity},00 €</span>
                  </div>
                )}
                
                <hr className="my-2" />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Gesamtpreis</span>
                  <span>{estimatedPrice.toLocaleString('de-DE')},00 €</span>
                </div>
                
                <div className="text-xs text-gray-500 mt-2">
                  * Alle Preise zzgl. MwSt. und Versand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}