'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ReactNode } from 'react';

// Stripe initialisieren
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeProviderProps {
  children: ReactNode;
  clientSecret?: string;
}

export default function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#059669', // Emerald-600 (passend zum Design)
        colorBackground: '#ffffff',
        colorText: '#374151', // Gray-700
        colorDanger: '#dc2626', // Red-600
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
      },
      rules: {
        '.Input': {
          border: '1px solid #d1d5db', // Gray-300
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          padding: '12px',
          fontSize: '16px',
        },
        '.Input:focus': {
          border: '1px solid #059669', // Emerald-600
          boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.1)',
          outline: 'none',
        },
        '.Label': {
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151', // Gray-700
          marginBottom: '6px',
        },
        '.Error': {
          fontSize: '14px',
          color: '#dc2626', // Red-600
        },
      },
    },
    locale: 'de' as const,
  };

  return (
    <Elements stripe={stripePromise} options={clientSecret ? options : undefined}>
      {children}
    </Elements>
  );
}