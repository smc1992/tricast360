'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Custom CheckCircle SVG Icon
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<{
    orderNumber: string;
    customerEmail: string;
    customerName: string;
    total: number;
    paymentIntentId: string;
  } | null>(null);

  useEffect(() => {
    const orderNumber = searchParams.get('order');
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const total = searchParams.get('total');
    const paymentIntentId = searchParams.get('payment_intent');

    if (orderNumber && email && name && total && paymentIntentId) {
      setOrderDetails({
        orderNumber,
        customerEmail: email,
        customerName: name,
        total: parseFloat(total),
        paymentIntentId
      });
    }
  }, [searchParams]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Bestelldetails werden geladen...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon and Header */}
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <CheckCircleIcon className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Zahlung erfolgreich!
            </h1>
            <p className="text-lg text-gray-600">
              Vielen Dank für Ihre Bestellung bei TriCast360
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Bestelldetails
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Bestellnummer:</span>
                <span className="font-semibold text-gray-900">{orderDetails.orderNumber}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Kunde:</span>
                <span className="font-semibold text-gray-900">{orderDetails.customerName}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">E-Mail:</span>
                <span className="font-semibold text-gray-900">{orderDetails.customerEmail}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Gesamtbetrag:</span>
                <span className="font-bold text-lg text-green-600">
                  {orderDetails.total.toFixed(2)} €
                </span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Zahlungs-ID:</span>
                <span className="font-mono text-sm text-gray-700">
                  {orderDetails.paymentIntentId}
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Was passiert als nächstes?
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</span>
                <span className="ml-2">Sie erhalten eine Bestätigungs-E-Mail mit allen Details</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</span>
                <span className="ml-2">Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-600 mt-0.5">✓</span>
                <span className="ml-2">Wir planen gemeinsam die Installation Ihres TriCast360 Systems</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              Zurück zur Startseite
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Support Information */}
          <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Haben Sie Fragen zu Ihrer Bestellung? 
              <br />
              Kontaktieren Sie uns unter{' '}
              <a href="mailto:info@tricast360.de" className="text-green-600 hover:text-green-700">
                info@tricast360.de
              </a>
              {' '}oder{' '}
              <a href="tel:+49123456789" className="text-green-600 hover:text-green-700">
                +49 (0) 123 456 789
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}