'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

interface StripePaymentFormProps {
  onPaymentSuccess: (paymentIntentId: string) => void;
  onPaymentError: (error: string) => void;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
  customerEmail: string;
  customerName: string;
}

export default function StripePaymentForm({
  onPaymentSuccess,
  onPaymentError,
  isProcessing,
  setIsProcessing,
  customerEmail,
  customerName,
}: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage('');

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        receipt_email: customerEmail,
        payment_method_data: {
          billing_details: {
            name: customerName,
            email: customerEmail,
          },
        },
      },
      redirect: 'if_required',
    });

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'Ein Fehler ist aufgetreten');
        onPaymentError(error.message || 'Ein Fehler ist aufgetreten');
      } else {
        setMessage('Ein unerwarteter Fehler ist aufgetreten');
        onPaymentError('Ein unerwarteter Fehler ist aufgetreten');
      }
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onPaymentSuccess(paymentIntent.id);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Zahlungsinformationen
        </h3>
        
        <PaymentElement 
          options={{
            layout: 'tabs',
            defaultValues: {
              billingDetails: {
                name: customerName,
                email: customerEmail,
              },
            },
          }}
        />
        
        {message && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{message}</p>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
          isProcessing || !stripe || !elements
            ? 'bg-gray-400 cursor-not-allowed text-white'
            : 'bg-[#baf742] hover:bg-[#a8e63a] text-[#0E1C3D] focus:ring-4 focus:ring-[#baf742]/20'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Zahlung wird verarbeitet...
          </div>
        ) : (
          'Jetzt bezahlen'
        )}
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-500">
          Sichere Zahlung powered by{' '}
          <span className="font-semibold text-gray-700">Stripe</span>
        </p>
        <div className="flex justify-center items-center mt-2 space-x-2 text-xs text-gray-400">
          <span>🔒 SSL verschlüsselt</span>
          <span>•</span>
          <span>PCI DSS konform</span>
        </div>
      </div>
    </form>
  );
}