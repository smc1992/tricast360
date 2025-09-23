import { NextResponse } from 'next/server';
import { sendOrderConfirmationEmails } from '@/lib/emailService';

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

interface CartItem {
  id: string;
  productModel: string; // Flexibler für Einstiegspaket und Add-ons
  diameter: number;
  height: number;
  modules: number;
  color?: string;
  material?: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  advertisingBoard?: boolean;
  logo?: File | null;
}

interface CouponCode {
  code: string;
  discount: number;
}

interface CheckoutRequest {
  checkoutData: CheckoutData;
  cartItems: CartItem[];
  couponCode: CouponCode | null;
  totalPrice: number;
  discountedPrice: number;
  vatAmount: number;
  totalWithVat: number;
  paymentIntentId?: string;
}

export async function POST(request: Request) {
  try {
    const body: CheckoutRequest = await request.json();
    
    // Validierung der Bestelldaten
    if (!body.checkoutData || !body.cartItems || body.cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Ungültige Bestelldaten' },
        { status: 400 }
      );
    }

    // Generiere eine eindeutige Bestellnummer (kurz aber eindeutig)
    const timestamp = Date.now().toString().slice(-8); // Letzte 8 Ziffern des Timestamps
    const randomPart = Math.random().toString(36).substr(2, 4).toUpperCase(); // 4 zufällige Zeichen
    const orderNumber = `TC${timestamp}${randomPart}`;

    // Hier würde normalerweise die Bestellung in einer Datenbank gespeichert werden
    console.log('Neue Bestellung:', {
      orderNumber,
      customer: body.checkoutData,
      items: body.cartItems,
      pricing: {
        totalPrice: body.totalPrice,
        discountedPrice: body.discountedPrice,
        vatAmount: body.vatAmount,
        totalWithVat: body.totalWithVat,
      },
      coupon: body.couponCode,
      paymentIntentId: body.paymentIntentId,
      timestamp: new Date().toISOString(),
    });

    // Logo-Datei verarbeiten (falls vorhanden)
    let logoFile: Buffer | undefined;
    const logoItem = body.cartItems.find(item => item.advertisingBoard && item.logo);
    
    if (logoItem?.logo) {
      try {
        // Logo-Datei in Buffer konvertieren (vereinfacht für Demo)
        // In einer echten Implementierung würde hier die Datei aus dem FormData extrahiert
        console.log('Logo-Datei gefunden:', logoItem.logo);
      } catch (error) {
        console.error('Fehler beim Verarbeiten der Logo-Datei:', error);
      }
    }

    // E-Mail-Bestätigungen senden
    try {
      const emailData = {
        customerName: body.checkoutData.name,
        customerEmail: body.checkoutData.email,
        customerPhone: body.checkoutData.phone,
        company: body.checkoutData.company,
        address: `${body.checkoutData.address}, ${body.checkoutData.postalCode} ${body.checkoutData.city}, ${body.checkoutData.country}`,
        orderNumber,
        items: body.cartItems.map(item => ({
          name: `${item.productModel} (Ø${item.diameter}cm, ${item.modules} Module)`,
          quantity: item.quantity,
          price: item.totalPrice,
          advertisingBoard: item.advertisingBoard,
          logoName: item.logo ? `logo_${orderNumber}.png` : undefined
        })),
        total: body.totalWithVat,
        paymentIntentId: body.paymentIntentId || 'N/A',
        logoFile
      };

      await sendOrderConfirmationEmails(emailData);
      console.log('✅ E-Mail-Bestätigungen erfolgreich gesendet');
    } catch (emailError) {
      console.error('❌ Fehler beim Senden der E-Mail-Bestätigungen:', emailError);
      // E-Mail-Fehler sollten die Bestellung nicht blockieren
    }

    // Erfolgreiche Antwort
    return NextResponse.json({
      success: true,
      message: 'Bestellung erfolgreich aufgegeben',
      orderNumber,
      estimatedDelivery: '2-3 Wochen',
    });

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Bestellung:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}