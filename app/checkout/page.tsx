'use client';

import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StripeProvider from '../../components/StripeProvider';
import StripePaymentForm from '../../components/StripePaymentForm';

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
  vatId: string;
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
    notes: '',
    vatId: ''
  });
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [paymentStep, setPaymentStep] = useState<'details' | 'payment' | 'success'>('details');
  const [orderNumber] = useState<string>('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleInputChange = (key: keyof CheckoutData, value: string) => {
    setCheckoutData(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyCoupon = async () => {
    if (couponInput.trim()) {
      const result = await applyCoupon(couponInput.trim());
      setCouponMessage(result.message);
      if (result.success) setCouponInput('');
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
      // Erstelle Payment Intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(state.totalWithVat * 100), // Stripe erwartet Cent
          currency: 'eur',
          metadata: {
            customerEmail: checkoutData.email,
            customerName: checkoutData.name,
            vatId: checkoutData.vatId,
            items: JSON.stringify(state.items.map(item => ({
              productModel: item.productModel,
              diameter: item.diameter,
              modules: item.modules,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              advertisingBoard: item.advertisingBoardSize,
              hasLogo: item.logo ? true : false,
              logoName: item.logo?.name || null
            })))
          }
        })
      });

      if (response.ok) {
        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
        setPaymentStep('payment');
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Unbekannter Fehler' }));
        throw new Error(errorData.error || 'Fehler beim Erstellen des Payment Intent');
      }
    } catch (error) {
      console.error('Fehler:', error);
      const errorMessage = error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten';
      alert(`Fehler beim Erstellen der Zahlung: ${errorMessage}\n\nBitte überprüfen Sie Ihre Stripe-Konfiguration oder versuchen Sie es später erneut.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    try {
      // Speichere die Bestellung
      const orderResponse = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkoutData,
          cartItems: state.items,
          totalPrice: state.totalPrice,
          discountedPrice: state.discountedPrice,
          vatAmount: state.vatAmount,
          totalWithVat: state.totalWithVat,
          couponCode: state.couponCode,
          paymentIntentId
        })
      });

      if (orderResponse.ok) {
        const { orderNumber } = await orderResponse.json();
        
        // Weiterleitung zur Success-Seite mit Bestelldetails
        const successUrl = new URL('/success', window.location.origin);
        successUrl.searchParams.set('order', orderNumber);
        successUrl.searchParams.set('email', checkoutData.email);
        successUrl.searchParams.set('name', checkoutData.name);
        successUrl.searchParams.set('total', state.totalWithVat.toString());
        successUrl.searchParams.set('payment_intent', paymentIntentId);
        
        window.location.href = successUrl.toString();
      } else {
        throw new Error('Fehler beim Speichern der Bestellung');
      }
    } catch (error) {
      console.error('Fehler beim Speichern der Bestellung:', error);
      alert('Die Zahlung war erfolgreich, aber es gab einen Fehler beim Speichern der Bestellung. Bitte kontaktieren Sie uns.');
    }
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    alert(`Zahlungsfehler: ${error}`);
  };

  if (state.items.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Ihr Warenkorb ist leer</h1>
            <p className="text-gray-600 mb-8">Fügen Sie Produkte zu Ihrem Warenkorb hinzu, um fortzufahren.</p>
            <Link href="/configurator" className="inline-flex items-center px-6 py-3 bg-[#baf742] text-[#0E1C3D] font-semibold rounded-lg hover:bg-[#a8e63a] transition-colors">
              Zum Konfigurator
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Success-Seite rendern
  if (paymentStep === 'success') {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Zahlung erfolgreich!</h1>
                <p className="text-gray-600 mb-6">
                  Vielen Dank für Ihre Bestellung. Ihre Zahlung wurde erfolgreich verarbeitet.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">Bestellnummer:</p>
                  <p className="text-lg font-semibold text-gray-900">{orderNumber}</p>
                </div>
                <p className="text-sm text-gray-600 mb-8">
                  Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu Ihrer Bestellung.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-[#baf742] text-[#0E1C3D] font-semibold rounded-lg hover:bg-[#a8e63a] transition-colors"
                >
                  Zurück zur Startseite
                </Link>
              </div>
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
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              <div className={`flex items-center ${paymentStep === 'details' ? 'text-[#0E1C3D]' : 'text-gray-400'}`}>
                <div className={`w-14 h-14 rounded-full grid place-items-center text-lg font-bold shadow-lg transition-all duration-300 ${paymentStep === 'details' ? 'bg-[#baf742] text-[#0E1C3D]' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <span className="ml-3 font-medium">Kundendaten</span>
              </div>
              <div className="w-16 h-0.5 bg-gray-300"></div>
              <div className={`flex items-center ${paymentStep === 'payment' ? 'text-[#0E1C3D]' : 'text-gray-400'}`}>
                <div className={`w-14 h-14 rounded-full grid place-items-center text-lg font-bold shadow-lg transition-all duration-300 ${paymentStep === 'payment' ? 'bg-[#baf742] text-[#0E1C3D]' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <span className="ml-3 font-medium">Zahlung</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {paymentStep === 'details' ? 'Kundendaten' : 'Zahlung'}
          </h1>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Linke Spalte - Formular oder Zahlung */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {paymentStep === 'details' ? (
                <>
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Umsatzsteuer-ID
                      </label>
                      <input
                        type="text"
                        value={checkoutData.vatId}
                        onChange={(e) => handleInputChange('vatId', e.target.value)}
                        placeholder="z.B. DE123456789"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Besondere Wünsche oder Anmerkungen..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#baf742] text-[#0E1C3D] py-3 px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Wird verarbeitet...' : 'Zur Zahlung'}
                    </button>
                  </form>
                </>
              ) : (
                <StripeProvider clientSecret={clientSecret}>
                  <StripePaymentForm
                    onPaymentSuccess={handlePaymentSuccess}
                    onPaymentError={handlePaymentError}
                    isProcessing={isProcessingPayment}
                    setIsProcessing={setIsProcessingPayment}
                    customerEmail={checkoutData.email}
                    customerName={checkoutData.name}
                  />
                </StripeProvider>
              )}
            </div>

            {/* Rechte Spalte - Bestellübersicht */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Bestellübersicht</h2>
              
              {/* Produkte */}
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-4">
                    <div className="flex-1">
                      <h3 className="font-medium">
                        TriCast360 {item.productModel === '2-chamber' ? '2-Kammer' : '7-Kammer'} System
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.diameter}cm Durchmesser, {item.modules} Module
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
              {paymentStep === 'details' && (
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
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              )}

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