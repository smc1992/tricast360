'use client';

import { useState, useEffect } from 'react';
import LoadingButton from './LoadingButton';

interface Configuration {
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
    <div className="max-w-6xl mx-auto">
      {/* Schritt-Anzeige */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base ${
                currentStep >= step ? 'bg-[#baf742]' : 'bg-gray-300'
              }`}>
                {step}
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
          
          {/* TreeCast360 Gurtsystem mit Schaumstoffpolsterung */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
            {/* Einfacher Hintergrund */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100" />
            
            {/* Boden-Linie */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-400" />
            
            {/* Baum - zentral */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {/* Baumstamm */}
              <div 
                className="bg-amber-800 mx-auto rounded-sm transition-all duration-500"
                style={{
                  width: `${Math.max(config.diameter / 12, 8)}px`,
                  height: `${Math.max(config.height / 3, 30)}px`
                }}
              />
              {/* Baumkrone */}
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto -mt-8" />
            </div>
            
            {/* TreeCast360 Gurtsystem */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              {/* Schaumstoffpolsterung um den Baum */}
              <div 
                className="absolute rounded-full transition-all duration-500"
                style={{
                  width: `${Math.max(config.diameter / 8, 16)}px`,
                  height: `${Math.max(config.height / 3, 30)}px`,
                  backgroundColor: '#f3f4f6',
                  border: '2px solid #d1d5db',
                  left: `${-Math.max(config.diameter / 16, 8)}px`,
                  top: '0px',
                  opacity: 0.8
                }}
              >
                {/* Schaumstoff-Textur */}
                <div className="absolute inset-1 bg-white rounded-full opacity-50" />
                <div className="absolute top-1 left-1 w-1 h-1 bg-gray-300 rounded-full" />
                <div className="absolute bottom-2 right-1 w-1 h-1 bg-gray-300 rounded-full" />
              </div>
              
              {/* Gurtsystem - horizontal um den Baum */}
              {[0, 1, 2].map((index) => {
                const gurtHeight = (config.height / 3) * (index + 1) / 4;
                const gurtRadius = Math.max(config.diameter / 6, 20);
                
                return (
                  <div key={`gurt-${index}`}>
                    {/* Horizontaler Gurt */}
                    <div 
                      className="absolute border-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${gurtRadius * 2}px`,
                        height: `${gurtRadius * 2}px`,
                        left: `${-gurtRadius}px`,
                        top: `${gurtHeight}px`,
                        borderColor: config.material === 'premium' ? '#f59e0b' : '#374151',
                        borderStyle: 'solid'
                      }}
                    />
                    
                    {/* Gurtverschluss */}
                    <div 
                      className="absolute bg-gray-700 border border-gray-500 rounded transition-all duration-500"
                      style={{
                        width: '8px',
                        height: '6px',
                        left: `${gurtRadius - 4}px`,
                        top: `${gurtHeight - 3}px`,
                        backgroundColor: config.material === 'premium' ? '#f59e0b' : '#374151'
                      }}
                    >
                      {/* Verschluss-Detail */}
                      <div className="absolute inset-0.5 bg-gray-600 rounded-sm" />
                    </div>
                  </div>
                );
              })}
              
              {/* Schaumstoff-Paneele an den Gurten */}
              {[0, 1, 2, 3].map((index) => {
                const angle = (360 / 4) * index;
                const radius = Math.max(config.diameter / 6, 20);
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const panelHeight = Math.max(config.height / 4, 20);
                
                return (
                  <div
                    key={`schaumstoff-${index}`}
                    className="absolute transition-all duration-500"
                    style={{
                      left: `${x}px`,
                      top: `${y + 5}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Schaumstoff-Paneel */}
                    <div
                      className="border-2 shadow-lg transition-all duration-500 rounded"
                      style={{
                        width: '10px',
                        height: `${panelHeight}px`,
                        backgroundColor: config.color,
                        borderColor: config.material === 'premium' ? '#f59e0b' : '#6b7280',
                        opacity: 0.9
                      }}
                    >
                      {/* Schaumstoff-Struktur */}
                      <div className="absolute inset-0.5 bg-white bg-opacity-30 rounded-sm" />
                      <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white bg-opacity-50 rounded-full" />
                      <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white bg-opacity-50 rounded-full" />
                      
                      {/* Premium-Kennzeichnung */}
                      {config.material === 'premium' && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600" />
                      )}
                    </div>
                  </div>
                );
              })}
              
              {/* Schutzbereich-Anzeige */}
              <div 
                className="absolute border border-dashed border-blue-400 rounded-full opacity-30 transition-all duration-500"
                style={{
                  width: `${Math.max(config.diameter / 3, 50)}px`,
                  height: `${Math.max(config.diameter / 3, 50)}px`,
                  left: `${-Math.max(config.diameter / 6, 25)}px`,
                  top: `${-Math.max(config.diameter / 6, 25) + 15}px`
                }}
              />
            </div>
            
            {/* Produktbeschreibung */}
            <div className="absolute top-2 left-2 bg-white bg-opacity-95 p-2 rounded-lg shadow-sm border border-gray-200 text-xs">
              <div className="font-bold text-gray-800 mb-1">TreeCast360</div>
              <div className="text-gray-600 space-y-0.5">
                <div>🛡️ Gurtsystem</div>
                <div>🧽 Schaumstoffpolster</div>
                <div>⌀ {config.diameter}cm</div>
              </div>
            </div>
            
            {/* Live-Indikator */}
            <div className="absolute top-2 right-2 flex items-center bg-green-100 px-2 py-1 rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse" />
              <span className="text-xs text-green-700 font-medium">Live</span>
            </div>
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
                   <span>{config.quantity}x TreeCast360-System</span>
                   <span>à {Math.round(estimatedPrice / config.quantity)} €</span>
                 </div>
                 <div className="flex justify-between text-xs opacity-75 mt-1">
                   <span>Pro System: {config.modules} Module</span>
                   <span>Gesamt: {config.modules * config.quantity} Module</span>
                 </div>
               </div>
               
               {/* Preisänderungs-Animation */}
               <div className="mt-2 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
                 <div className="h-full bg-white rounded-full transition-all duration-1000 animate-pulse" style={{ width: '100%' }} />
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
                <label className="block text-sm font-medium mb-2">Anzahl TreeCast360-Systeme</label>
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