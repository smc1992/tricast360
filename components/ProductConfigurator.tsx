'use client';

import React, { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';

interface Configuration {
  productModel: '2-chamber' | '7-chamber';
  diameter: number;
  height: number;
  modules: number;
  color: string;
  material: string;
  quantity: number;
}

interface CustomerData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ProductConfigurator() {
  const [config, setConfig] = useState<Configuration>({
    productModel: '2-chamber',
    diameter: 100,
    height: 150,
    modules: 4,
    color: '#baf742',
    material: 'standard',
    quantity: 1
  });

  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Preisberechnung basierend auf Konfiguration - pro Modul
  useEffect(() => {
    const basePricePerModule = 89; // Günstigerer Grundpreis pro Modul
    const diameterFactor = config.diameter / 100; // Faktor basierend auf Durchmesser
    const heightFactor = config.height / 150; // Faktor basierend auf Höhe
    const materialFactor = config.material === 'premium' ? 1.25 : 1; // Reduzierter Premium-Aufschlag
    
    const pricePerModule = Math.round(basePricePerModule * diameterFactor * heightFactor * materialFactor);
    const totalPrice = pricePerModule * config.modules * config.quantity;
    setEstimatedPrice(totalPrice);
  }, [config]);



  // Display SVG based on selected product model
  const renderProductSVG = () => {
    const svgPath = config.productModel === '2-chamber' 
      ? '/images/Tasche 2er.svg' 
      : '/images/Tasche 7er.svg';
    
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={svgPath} 
          alt={`${config.productModel} Baumschutz-Tasche`}
          className="max-w-full max-h-full object-contain"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
        />
      </div>
    );
  };


  const handleConfigChange = (key: keyof Configuration, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleCustomerDataChange = (key: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'configuration',
          ...customerData,
          configuration: {
            productModel: config.productModel,
            diameter: config.diameter,
            height: config.height,
            modules: config.modules,
            color: config.color,
            material: config.material,
            quantity: config.quantity,
            pricePerModule: Math.round(estimatedPrice / (config.modules * config.quantity)),
            pricePerSystem: Math.round(estimatedPrice / config.quantity),
            totalPrice: estimatedPrice
          },
          subject: 'Produktkonfiguration - Tricast360'
        }),
      });

      if (response.ok) {
        alert('Ihre Anfrage wurde erfolgreich gesendet!');
        // Reset form
        setCurrentStep(1);
        setCustomerData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Fehler beim Senden');
      }
    } catch (error) {
      alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] container-wide mx-auto px-6 md:px-8 lg:px-12 xl:px-12 2xl:px-16">
      {/* Schritt-Anzeige */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full grid place-items-center text-white font-semibold text-sm sm:text-base ${
                currentStep >= step ? 'bg-[#baf742]' : 'bg-gray-300'
              }`}>
                <span className="block text-center leading-none">{step}</span>
              </div>
              {step < 3 && (
                <div className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 ${
                  currentStep > step ? 'bg-[#baf742]' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        {/* Visuelle Darstellung */}
        <div className="bg-gray-50 rounded-2xl p-4 lg:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Ihre Konfiguration</h3>

          {/* Produktvisualisierung mit SVG */}
          <div id="product-visual" className="relative h-64 sm:h-80 lg:h-96 bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg flex items-center justify-center">
            {renderProductSVG()}
          </div>

        
          {/* Erweiterte Konfigurationsübersicht */}
          <div className="mt-6 space-y-4">
            {/* Live-Änderungsindikator */}
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-700 font-medium">Live-Vorschau aktiv</span>
              </div>
            </div>
            
            {/* Konfigurationswerte mit Animationen */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Durchmesser</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.diameter} cm
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-[#baf742] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(config.diameter - 50) / (300 - 50) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Höhe</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.height} cm
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div 
                    className="bg-[#baf742] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${(config.height - 100) / (250 - 100) * 100}%` }}
                  />
                </div>
              </div>
              

              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Material</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.material === 'premium' ? 'Premium' : 'Standard'}
                </div>
                <div className="flex items-center mt-2">
                  <div 
                    className="w-4 h-4 rounded-full border-2 transition-all duration-300"
                    style={{ backgroundColor: config.color }}
                  />
                  {config.material === 'premium' && (
                    <div className="ml-2 text-xs text-yellow-600 font-medium flex items-center">
                      ⭐ Premium
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="text-sm text-gray-500 mb-1">Stückzahl</div>
                <div className="text-lg font-bold text-[#baf742] transition-all duration-500">
                  {config.quantity}x Systeme
                </div>
                <div className="flex space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        config.quantity >= num ? 'bg-[#baf742]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                  {config.quantity > 5 && (
                    <div className="text-xs text-gray-500 ml-1">+{config.quantity - 5}</div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Geschätzter Preis mit Animation */}
             <div className="bg-gradient-to-r from-[#baf742] to-[#a3e635] p-4 rounded-xl text-white mt-4">
               <div className="flex justify-between items-center">
                 <div>
                   <div className="text-sm opacity-90">Gesamtpreis</div>
                   <div className="text-2xl font-bold transition-all duration-500">
                     € {estimatedPrice.toLocaleString()}
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-xs opacity-75">inkl. MwSt.</div>
                   <div className="text-sm opacity-90">
                     {Math.round(estimatedPrice / (config.modules * config.quantity))} € / Modul
                   </div>
                 </div>
               </div>
               
               {/* Preisaufschlüsselung */}
               <div className="mt-3 pt-3 border-t border-white border-opacity-30">
                 <div className="flex justify-between text-sm opacity-90">
                   <span>{config.quantity}x Tricast360-System</span>
                   <span>à {Math.round(estimatedPrice / config.quantity)} €</span>
                 </div>
                 <div className="flex justify-between text-xs opacity-75 mt-1">
                   <span>Pro System: {config.modules} Module</span>
                   <span>Gesamt: {config.modules * config.quantity} Module</span>
                 </div>
               </div>
               
               {/* Preisänderungs-Animation */}
               <div className="mt-2 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                 <div className="js-price-bar h-full bg-white rounded-full transition-all duration-1000 animate-pulse" style={{ width: '0%' }} />
               </div>
             </div>
            
            {/* Zusätzliche Informationen */}
            <div className="text-xs text-gray-500 text-center mt-4 space-y-1">
              <div>🔄 Änderungen werden sofort in der Vorschau angezeigt</div>
              <div>📏 Alle Maße sind Richtwerte und können je nach Standort variieren</div>
              {config.material === 'premium' && (
                <div className="text-yellow-600">✨ Premium-Material bietet erhöhte UV-Beständigkeit</div>
              )}
            </div>
          </div>
        </div>

        {/* Konfigurationsoptionen */}
        <div className="space-y-4 lg:space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 1: Grundkonfiguration</h3>
              
              {/* Produktmodell-Auswahl */}
               <div>
                 <label className="block text-sm font-medium mb-3">Produktmodell</label>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <label 
                     className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                       config.productModel === '2-chamber'
                         ? 'border-[#baf742] bg-[#baf742] bg-opacity-10'
                         : 'border-gray-300 hover:border-[#baf742]'
                     }`}
                   >
                     <input
                       type="radio"
                       name="productModel"
                       value="2-chamber"
                       checked={config.productModel === '2-chamber'}
                       onChange={(e) => handleConfigChange('productModel', e.target.value)}
                       className="sr-only"
                     />
                     <div className="w-16 h-16 mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                       <img 
                         src="/images/Tasche 2er.svg" 
                         alt="2-Kammer Modell"
                         className="w-12 h-12 object-contain"
                       />
                     </div>
                     <div className="font-medium text-center">2-Kammer</div>
                     <div className="text-sm text-gray-500 text-center">Kompakt & effizient</div>
                   </label>
                   
                   <label 
                     className={`flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                       config.productModel === '7-chamber'
                         ? 'border-[#baf742] bg-[#baf742] bg-opacity-10'
                         : 'border-gray-300 hover:border-[#baf742]'
                     }`}
                   >
                     <input
                       type="radio"
                       name="productModel"
                       value="7-chamber"
                       checked={config.productModel === '7-chamber'}
                       onChange={(e) => handleConfigChange('productModel', e.target.value)}
                       className="sr-only"
                     />
                     <div className="w-16 h-16 mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                       <img 
                         src="/images/Tasche 7er.svg" 
                         alt="7-Kammer Modell"
                         className="w-12 h-12 object-contain"
                       />
                     </div>
                     <div className="font-medium text-center">7-Kammer</div>
                     <div className="text-sm text-gray-500 text-center">Maximaler Schutz</div>
                   </label>
                 </div>
               </div>
              
              {/* Durchmesser */}
              <div>
                <label className="block text-sm font-medium mb-2">Durchmesser (cm)</label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
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
                  max="250"
                  step="10"
                  value={config.height}
                  onChange={(e) => handleConfigChange('height', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100 cm</span>
                  <span className="font-medium">{config.height} cm</span>
                  <span>250 cm</span>
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
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 2: Material & Farbe</h3>
              
              {/* Material */}
              <div>
                <label className="block text-sm font-medium mb-3">Material</label>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#baf742] transition-colors">
                    <input
                      type="radio"
                      name="material"
                      value="standard"
                      checked={config.material === 'standard'}
                      onChange={(e) => handleConfigChange('material', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-gray-500">Robustes Kunststoffmaterial</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-[#baf742] transition-colors">
                    <input
                      type="radio"
                      name="material"
                      value="premium"
                      checked={config.material === 'premium'}
                      onChange={(e) => handleConfigChange('material', e.target.value)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-gray-500">UV-beständig, extra langlebig</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Farbe */}
              <div>
                <label className="block text-sm font-medium mb-3">Farbe</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { color: '#baf742', name: 'Grün' },
                    { color: '#fbbf24', name: 'Gelb' },
                    { color: '#f87171', name: 'Rot' },
                    { color: '#60a5fa', name: 'Blau' }
                  ].map((option) => (
                    <button
                      key={option.color}
                      onClick={() => handleConfigChange('color', option.color)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        config.color === option.color
                          ? 'border-gray-800 scale-105'
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <div
                        className="w-full h-8 rounded mb-2"
                        style={{ backgroundColor: option.color }}
                      />
                      <div className="text-sm font-medium">{option.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-sm lg:text-base"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-sm lg:text-base"
                >
                  Weiter zu Schritt 3
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl lg:text-2xl font-bold">Schritt 3: Ihre Kontaktdaten</h3>
              
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

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors text-sm lg:text-base"
                >
                  Zurück
                </button>
                <LoadingButton
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  className="flex-1 bg-[#baf742] text-white py-3 px-4 lg:px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors disabled:opacity-50 text-sm lg:text-base"
                  disabled={!customerData.name || !customerData.email}
                >
                  Anfrage senden
                </LoadingButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}