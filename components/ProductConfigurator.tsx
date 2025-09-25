'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useCart } from '../contexts/CartContext';

interface Configuration {
  productSet: 'S' | 'M' | 'L' | 'XL' | '2XL';
  quantity: number;
  reinforcement: boolean;
  colorOption: boolean;
  advertisingBoardSize: 'none' | 'S' | 'M' | 'L' | 'XL' | '2XL';
  logo: string | null;
}



export default function ProductConfigurator() {
  const { addItem } = useCart();
  
  // Produktset-Definitionen basierend auf Prospekt
  const productSets = {
    'S': { 
      name: 'Set S (5er Set)', 
      diameter: 25, 
      diameterText: '25cm',
      modules: 5, 
      standardPrice: 399, 
      reinforcedPrice: 449,
      advertisingPrice: 29
    },
    'M': { 
      name: 'Set M (7er Set)', 
      diameter: 32, 
      diameterText: '32cm',
      modules: 7, 
      standardPrice: 559, 
      reinforcedPrice: 629,
      advertisingPrice: 39
    },
    'L': { 
      name: 'Set L (9er Set)', 
      diameter: 40, 
      diameterText: '40cm',
      modules: 9, 
      standardPrice: 699, 
      reinforcedPrice: 789,
      advertisingPrice: 49
    },
    'XL': { 
      name: 'Set XL (12er Set)', 
      diameter: 55, 
      diameterText: '55cm',
      modules: 12, 
      standardPrice: 879, 
      reinforcedPrice: 999,
      advertisingPrice: 59
    },
    '2XL': { 
      name: 'Set 2XL (15er Set)', 
      diameter: 70, 
      diameterText: '70cm',
      modules: 15, 
      standardPrice: 999, 
      reinforcedPrice: 1149,
      advertisingPrice: 69
    }
  };
  
  const [config, setConfig] = useState<Configuration>({
    productSet: 'S', // Startet mit Set S
    quantity: 1,
    reinforcement: false,
    colorOption: false,
    advertisingBoardSize: 'none',
    logo: null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  // Flexible Größenbestimmung: Höhe und Breite können frei bestimmt werden
  // Pro System sind bis zu 50 cm Durchmesser und 2 Meter Höhe möglich

  // Hilfsfunktion: Berechne Gesamtanzahl der Module
  const calculateTotalModules = useCallback(() => {
    return productSets[config.productSet].modules;
  }, [config.productSet]);

  // Preisberechnung basierend auf festen Produktsets
  const calculatePrice = useCallback(() => {
    const currentSet = productSets[config.productSet];
    
    // Grundpreis basierend auf Set und Verstärkung
    const basePrice = config.reinforcement ? currentSet.reinforcedPrice : currentSet.standardPrice;
    
    // Add-ons
    const colorPrice = config.colorOption ? 49 : 0;
    
    // Werbetafel-Preise basierend auf Set-Größe
    let advertisingBoardPrice = 0;
    if (config.advertisingBoardSize !== 'none') {
      advertisingBoardPrice = productSets[config.advertisingBoardSize].advertisingPrice;
    }
    
    const subtotal = basePrice + colorPrice + advertisingBoardPrice;
    return Math.round(subtotal * config.quantity);
  }, [config, productSets]);

  // Preisberechnung aktualisieren
  useEffect(() => {
    setEstimatedPrice(calculatePrice());
  }, [config, calculatePrice]);

  const handleConfigChange = (key: keyof Configuration, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Die Datei ist zu groß. Maximale Größe: 5MB');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleConfigChange('logo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    handleConfigChange('logo', null);
  };



  const addToCart = () => {
    const currentSet = productSets[config.productSet];
    const totalModules = calculateTotalModules();
    const quantity = Number(config.quantity);
    
    // Berechne Preis pro Einheit (ohne Stückzahl-Multiplikation)
    const basePrice = config.reinforcement ? currentSet.reinforcedPrice : currentSet.standardPrice;
    const colorPrice = config.colorOption ? 49 : 0;
    let advertisingBoardPrice = 0;
    if (config.advertisingBoardSize !== 'none') {
      advertisingBoardPrice = productSets[config.advertisingBoardSize].advertisingPrice;
    }
    const pricePerUnit = basePrice + colorPrice + advertisingBoardPrice;
    
    addItem({
      productModel: `TriCast360 ${currentSet.name}`,
      productSet: config.productSet,
      diameter: currentSet.diameter,
      modules: totalModules,
      colorOption: config.colorOption,
      quantity: quantity,
      pricePerUnit: pricePerUnit,
      totalPrice: pricePerUnit * quantity,
      advertisingBoardSize: config.advertisingBoardSize,
      logo: config.logo
    });
    
    alert('Produkt wurde zum Warenkorb hinzugefügt!');
  };



  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Progress Steps */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-full grid place-items-center text-sm font-bold ${
              currentStep >= 1 ? 'bg-[#baf742] text-white' : 'bg-gray-300 text-gray-600'
            }`} style={{ lineHeight: '1' }}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-[#baf742]' : 'bg-gray-300'}`}></div>
            <div className={`w-10 h-10 rounded-full grid place-items-center text-sm font-bold ${
              currentStep >= 2 ? 'bg-[#baf742] text-white' : 'bg-gray-300 text-gray-600'
            }`} style={{ lineHeight: '1' }}>
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
                
                {/* Produktset-Auswahl */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Produktset-Auswahl</h4>
                  <div className="text-sm text-green-700 mb-4">
                    Wählen Sie Ihr gewünschtes TriCast360-Set basierend auf dem Stammdurchmesser.
                    <br />
                    <strong>Aktuell gewählt: {productSets[config.productSet].name} - {productSets[config.productSet].diameterText} - {calculateTotalModules()} Module</strong>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.entries(productSets).map(([setKey, setData]) => (
                      <label key={setKey} className="flex flex-col p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="productSet"
                          value={setKey}
                          checked={config.productSet === setKey}
                          onChange={(e) => handleConfigChange('productSet', e.target.value)}
                          className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300 mb-2"
                        />
                        <div className="font-medium">{setData.name}</div>
                        <div className="text-sm text-gray-500">{setData.diameterText} Durchmesser</div>
                        <div className="text-sm text-gray-500">{setData.modules} Module</div>
                        <div className="font-semibold text-green-600 mt-1">
                          {config.reinforcement ? setData.reinforcedPrice : setData.standardPrice}€
                        </div>
                      </label>
                    ))}
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
                    <div className="font-semibold text-green-600">+{productSets[config.productSet].reinforcedPrice - productSets[config.productSet].standardPrice}€</div>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.colorOption}
                      onChange={(e) => handleConfigChange('colorOption', e.target.checked)}
                      className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Farboption</div>
                      <div className="text-sm text-gray-500">Individuelle Farbgestaltung des Systems</div>
                    </div>
                    <div className="font-semibold text-green-600">+49€</div>
                  </label>
                  
                  {/* Werbetafel-Größenauswahl */}
                  <div className="space-y-3">
                    <h5 className="font-medium text-gray-800">Werbetafel</h5>
                    
                    <label className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="advertisingBoardSize"
                        value="none"
                        checked={config.advertisingBoardSize === 'none'}
                        onChange={(e) => handleConfigChange('advertisingBoardSize', e.target.value)}
                        className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Keine Werbetafel</div>
                        <div className="text-sm text-gray-500">Ohne Werbefläche</div>
                      </div>
                      <div className="font-semibold text-gray-600">0€</div>
                    </label>
                    
                    {Object.entries(productSets).map(([setKey, setData]) => (
                      <label key={setKey} className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="advertisingBoardSize"
                          value={setKey}
                          checked={config.advertisingBoardSize === setKey}
                          onChange={(e) => handleConfigChange('advertisingBoardSize', e.target.value)}
                          className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300"
                        />
                        <div className="flex-1">
                          <div className="font-medium">Werbetafel {setData.name}</div>
                          <div className="text-sm text-gray-500">Passend für {setData.diameterText} System</div>
                        </div>
                        <div className="font-semibold text-green-600">+{setData.advertisingPrice}€</div>
                      </label>
                    ))}
                  </div>
                  
                  {/* Logo Upload für Werbetafel */}
                  {config.advertisingBoardSize !== 'none' && (
                    <div className="space-y-4">
                      <h5 className="font-medium text-gray-800">Logo für Werbetafel</h5>
                      
                      {!config.logo ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                            id="logo-upload"
                          />
                          <label htmlFor="logo-upload" className="cursor-pointer">
                            <div className="text-gray-500 mb-2">
                              <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium text-[#baf742] hover:text-green-500">Datei auswählen</span> oder hier ablegen
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              PNG, JPG, GIF bis 5MB
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className="relative">
                          <img 
                            src={config.logo} 
                            alt="Logo Vorschau" 
                            className="w-full h-32 object-contain bg-gray-100 rounded-lg"
                          />
                          <button
                            onClick={removeLogo}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Stückzahl */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Stückzahl</h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 5].map((qty) => (
                      <label key={qty} className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="quantity"
                          value={qty}
                          checked={config.quantity === qty}
                          onChange={(e) => handleConfigChange('quantity', parseInt(e.target.value))}
                          className="sr-only"
                        />
                        <span className={`font-medium ${config.quantity === qty ? 'text-[#baf742]' : 'text-gray-700'}`}>
                          {qty} Stück
                        </span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="quantity"
                        value="custom"
                        checked={![1, 2, 3, 5].includes(config.quantity)}
                        onChange={() => {
                          // Wenn "Andere Anzahl" ausgewählt wird, behalte die aktuelle Menge bei
                          // oder setze sie auf 6, falls sie eine der Standardoptionen war
                          if ([1, 2, 3, 5].includes(config.quantity)) {
                            handleConfigChange('quantity', 6);
                          }
                        }}
                        className="w-4 h-4 text-[#baf742] focus:ring-[#baf742] border-gray-300 mr-2"
                      />
                      <span className="font-medium">Andere Anzahl:</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={config.quantity}
                      onChange={(e) => handleConfigChange('quantity', parseInt(e.target.value) || 1)}
                      onFocus={() => {
                        // Wenn das Eingabefeld fokussiert wird, aktiviere automatisch "Andere Anzahl"
                        if ([1, 2, 3, 5].includes(config.quantity)) {
                          handleConfigChange('quantity', config.quantity);
                        }
                      }}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Weiter Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="bg-[#baf742] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
                  >
                    Weiter zu Schritt 2
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 space-y-6">
                <h3 className="text-xl lg:text-2xl font-bold">Schritt 2: Zusammenfassung</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Ihre Konfiguration:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Produktset:</span>
                        <span className="font-medium">{productSets[config.productSet].name} ({productSets[config.productSet].diameterText})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Module:</span>
                        <span className="font-medium">{calculateTotalModules()} Module</span>
                      </div>
                      {config.reinforcement && (
                        <div className="flex justify-between">
                          <span>Verstärkung:</span>
                          <span className="font-medium text-green-600">Ja (+{productSets[config.productSet].reinforcedPrice - productSets[config.productSet].standardPrice}€)</span>
                        </div>
                      )}
                      {config.colorOption && (
                        <div className="flex justify-between">
                          <span>Farboption:</span>
                          <span className="font-medium text-green-600">Ja (+49€)</span>
                        </div>
                      )}
                      {config.advertisingBoardSize !== 'none' && (
                        <div className="flex justify-between">
                          <span>Werbetafel:</span>
                          <span className="font-medium text-green-600">
                            {productSets[config.advertisingBoardSize as keyof typeof productSets].name} (+{productSets[config.advertisingBoardSize as keyof typeof productSets].advertisingPrice}€)
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Stückzahl:</span>
                        <span className="font-medium">{config.quantity}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Preis pro Einheit:</span>
                        <span className="text-green-600">{Math.round(calculatePrice() / config.quantity)}€</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Gesamtpreis:</span>
                        <span className="text-green-600">{calculatePrice()}€</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Zurück zu Schritt 1
                  </button>
                  <button
                    onClick={addToCart}
                    className="flex-1 bg-[#baf742] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
                  >
                    In den Warenkorb
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h4 className="text-lg font-bold mb-4">Zusammenfassung</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Produktset:</span>
                  <span className="font-medium">{productSets[config.productSet].name}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Durchmesser:</span>
                  <span className="font-medium">{productSets[config.productSet].diameterText}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Module gesamt:</span>
                  <span className="font-medium">{calculateTotalModules()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Stückzahl:</span>
                  <span className="font-medium">{config.quantity}</span>
                </div>
              </div>

              {/* Live Preview */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-medium mb-3">Live-Vorschau</h5>
                <div className="bg-white rounded border-2 border-dashed border-gray-300 p-4 text-center">
                  <div className="text-gray-500 text-sm">
                    TriCast360 {productSets[config.productSet].name}
                    <br />
                    {productSets[config.productSet].diameterText} Durchmesser
                    <br />
                    {calculateTotalModules()} Module
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-2 text-sm">
                <h5 className="font-medium">Preisaufschlüsselung</h5>
                
                <div className="flex justify-between">
                  <span>TriCast360 {productSets[config.productSet].name}:</span>
                  <span>{config.reinforcement ? productSets[config.productSet].reinforcedPrice : productSets[config.productSet].standardPrice}€</span>
                </div>
                
                {config.reinforcement && (
                  <div className="flex justify-between text-green-600">
                    <span>Verstärkung:</span>
                    <span>+{productSets[config.productSet].reinforcedPrice - productSets[config.productSet].standardPrice}€</span>
                  </div>
                )}
                
                {config.colorOption && (
                  <div className="flex justify-between text-green-600">
                    <span>Farboption:</span>
                    <span>+49€</span>
                  </div>
                )}
                
                {config.advertisingBoardSize !== 'none' && (
                  <div className="flex justify-between text-green-600">
                    <span>Werbetafel {productSets[config.advertisingBoardSize as keyof typeof productSets].name}:</span>
                    <span>+{productSets[config.advertisingBoardSize as keyof typeof productSets].advertisingPrice}€</span>
                  </div>
                )}
                
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Preis pro Einheit:</span>
                  <span>{Math.round(calculatePrice() / config.quantity)}€</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg text-green-600">
                  <span>Gesamtpreis ({config.quantity}x):</span>
                  <span>{calculatePrice()}€</span>
                </div>
                
                <div className="text-xs text-gray-500 mt-2">
                  *Alle Preise zzgl. MwSt. und Versand
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}