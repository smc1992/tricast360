import { NextRequest, NextResponse } from 'next/server';

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
  color: string;
  material: string;
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
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
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { checkoutData, cartItems, couponCode, totalPrice, discountedPrice } = body;

    // Validierung der erforderlichen Felder
    if (!checkoutData.name || !checkoutData.email || !checkoutData.address || 
        !checkoutData.city || !checkoutData.postalCode || !checkoutData.country) {
      return NextResponse.json(
        { error: 'Erforderliche Felder fehlen' },
        { status: 400 }
      );
    }

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'Warenkorb ist leer' },
        { status: 400 }
      );
    }

    // Hier würde normalerweise die Bestellung in einer Datenbank gespeichert werden
    // und eine E-Mail-Benachrichtigung versendet werden
    
    // Bestellnummer generieren
    const orderNumber = `TC-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Bestelldaten für Logging/Debugging
    console.log('Neue Bestellung erhalten:', {
      orderNumber,
      customer: {
        name: checkoutData.name,
        email: checkoutData.email,
        company: checkoutData.company,
        phone: checkoutData.phone,
        address: `${checkoutData.address}, ${checkoutData.postalCode} ${checkoutData.city}, ${checkoutData.country}`
      },
      items: cartItems.map(item => ({
        product: `TriCast360 ${item.productModel === '2-chamber' ? '2-Kammer' : '7-Kammer'} System`,
        specifications: `${item.diameter}cm × ${item.height}cm, ${item.modules} Module`,
        style: `${item.color}, ${item.material}`,
        quantity: item.quantity,
        unitPrice: item.pricePerUnit,
        totalPrice: item.totalPrice
      })),
      coupon: couponCode ? {
        code: couponCode.code,
        discount: couponCode.discount
      } : null,
      pricing: {
        subtotal: totalPrice,
        discount: couponCode ? totalPrice - discountedPrice : 0,
        total: discountedPrice
      },
      notes: checkoutData.notes,
      timestamp: new Date().toISOString()
    });

    // Hier könnte eine E-Mail-Benachrichtigung implementiert werden
    // await sendOrderConfirmationEmail(checkoutData.email, orderNumber, cartItems, discountedPrice);
    // await sendOrderNotificationToAdmin(orderData);

    return NextResponse.json({
      success: true,
      orderNumber,
      message: 'Bestellung erfolgreich aufgegeben'
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}