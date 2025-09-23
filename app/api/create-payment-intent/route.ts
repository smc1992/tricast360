import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

interface PaymentIntentRequest {
  amount: number; // Betrag in Cent
  currency: string;
  metadata?: {
    orderNumber?: string;
    customerEmail?: string;
    customerName?: string;
    items?: string;
    vatId?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'eur', metadata }: PaymentIntentRequest = await request.json();

    // Validierung
    if (!amount || amount < 50) { // Mindestbetrag 50 Cent
      return NextResponse.json(
        { error: 'Ungültiger Betrag. Mindestbetrag ist 0,50 €' },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY ist nicht konfiguriert');
      return NextResponse.json(
        { error: 'Zahlungssystem nicht konfiguriert' },
        { status: 500 }
      );
    }

    // Payment Intent erstellen
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Sicherstellen, dass es eine ganze Zahl ist
      currency: currency.toLowerCase(),
      metadata: metadata || {},
      // Für deutsche Kunden relevante Zahlungsmethoden
      payment_method_types: [
        'card',
        'sepa_debit',
        'sofort',
        'giropay',
        'eps',
        'p24',
        'bancontact',
        'ideal'
      ],
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error) {
    console.error('Stripe Payment Intent Error:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Stripe Fehler: ${error.message}` },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Fehler beim Erstellen der Zahlung' },
      { status: 500 }
    );
  }
}