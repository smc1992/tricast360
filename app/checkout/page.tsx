'use client';

import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface CheckoutData {
  name: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  notes: string;
}

export default function CheckoutPage() {
  const { state, applyCoupon, removeCoupon } = useCart();
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Deutschland',
    notes: ''
  });
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (key: keyof CheckoutData, value: string) => {
    setCheckoutData(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;
    
    const result = await applyCoupon(couponInput);
    setCouponMessage(result.message);
    if (result.success) {
      setCouponInput('');
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkoutData,
          cartItems: state.items,
          couponCode: state.couponCode,
          totalPrice: state.totalPrice,
          discountedPrice: state.discountedPrice,
          vatAmount: state.vatAmount,
          totalWithVat: state.totalWithVat
        }),
      });

      if (response.ok) {
        alert('Ihre Bestellung wurde erfolgreich aufgegeben!');
        // Hier könnte eine Weiterleitung zur Bestätigungsseite erfolgen
      } else {
        alert('Fehler beim Aufgeben der Bestellung. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Fehler beim Aufgeben der Bestellung. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Ihr Warenkorb ist leer</h1>
              <p className="text-gray-600 mb-8">Fügen Sie Produkte zu Ihrem Warenkorb hinzu, um fortzufahren.</p>
              <Link 
                href="/konfigurator"
                className="inline-flex items-center px-6 py-3 bg-[#baf742] text-white font-semibold rounded-lg hover:bg-[#a8e63a] transition-colors"
              >
                Zum Konfigurator
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bestellformular */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Rechnungsinformationen</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={checkoutData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Firma
                </label>
                <input
                  type="text"
                  value={checkoutData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={checkoutData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse *
                </label>
                <input
                  type="text"
                  required
                  value={checkoutData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PLZ *
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stadt *
                  </label>
                  <input
                    type="text"
                    required
                    value={checkoutData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Land *
                  </label>
                  <select
                    required
                    value={checkoutData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  >
                    <option value="Deutschland">Deutschland</option>
                    <option value="Österreich">Österreich</option>
                    <option value="Schweiz">Schweiz</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Anmerkungen
                </label>
                <textarea
                  rows={3}
                  value={checkoutData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  placeholder="Besondere Wünsche oder Anmerkungen..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#baf742] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Bestellung wird aufgegeben...' : 'Bestellung aufgeben'}
              </button>
            </form>
          </div>

          {/* Bestellübersicht */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Bestellübersicht</h2>
            
            {/* Warenkorb-Artikel */}
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b pb-4">
                  <div className="flex-1">
                    <h3 className="font-medium">
                      TriCast360 {item.productModel === '2-chamber' ? '2-Kammer' : '7-Kammer'} System
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.diameter}cm × {item.height}cm, {item.modules} Module
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.color}, {item.material}
                    </p>
                    <p className="text-sm text-gray-600">Menge: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{item.totalPrice.toLocaleString('de-DE')} €</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gutscheincode */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Gutscheincode</h3>
              {state.couponCode ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                  <div>
                    <p className="font-medium text-green-800">{state.couponCode.code}</p>
                    <p className="text-sm text-green-600">-{state.couponCode.discount}% Rabatt</p>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-red-600 hover:text-red-800"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Gutscheincode eingeben"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#baf742]"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Anwenden
                  </button>
                </div>
              )}
              {couponMessage && (
                <p className={`text-sm mt-2 ${couponMessage.includes('erfolgreich') ? 'text-green-600' : 'text-red-600'}`}>
                  {couponMessage}
                </p>
              )}
            </div>

            {/* Preisübersicht */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Zwischensumme (Netto):</span>
                <span>{state.totalPrice.toLocaleString('de-DE')} €</span>
              </div>
              {state.couponCode && (
                <div className="flex justify-between text-green-600">
                  <span>Rabatt ({state.couponCode.discount}%):</span>
                  <span>-{(state.totalPrice - state.discountedPrice).toLocaleString('de-DE')} €</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>zzgl. Umsatzsteuer (19%):</span>
                <span>{state.vatAmount.toLocaleString('de-DE')} €</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t pt-2">
                <span>Gesamtsumme (Brutto):</span>
                <span>{state.totalWithVat.toLocaleString('de-DE')} €</span>
              </div>
              <p className="text-sm text-gray-600">zzgl. Versandkosten</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}