import nodemailer from 'nodemailer';

// E-Mail-Transporter-Konfiguration
export function createEmailTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Basis E-Mail-Template für TriCast360
function createBaseEmailTemplate(content: string, title: string) {
  return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title} - TriCast360</title>
      <style>
        body {
          font-family: 'Vela Sans', 'Inter', system-ui, -apple-system, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 20px;
        }
        .header {
          background: linear-gradient(135deg, #baf742 0%, #a3e635 100%);
          color: #2b3138;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          color: #2b3138;
        }
        .header p {
          margin: 10px 0 0 0;
          opacity: 0.8;
          font-size: 16px;
          color: #2b3138;
        }
        .logo {
          font-size: 32px;
          font-weight: 700;
          color: #2b3138;
          margin-bottom: 10px;
        }
        .content {
          padding: 30px;
        }
        .order-details {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
          border-left: 4px solid #baf742;
        }
        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .order-item:last-child {
          border-bottom: none;
          font-weight: 600;
          font-size: 18px;
          color: #2b3138;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #baf742 0%, #a3e635 100%);
          color: #2b3138;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          margin: 20px 0;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          color: #666;
        }
        .contact-info {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
          margin: 20px 0;
        }
        .contact-info h3 {
          margin: 0 0 10px 0;
          color: #2b3138;
          font-size: 16px;
        }
        .contact-info p {
          margin: 5px 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">TriCast360</div>
          <h1>${title}</h1>
          <p>Modulares 360° Baumschutzsystem</p>
        </div>
        <div class="content">
          ${content}
        </div>
        <div class="footer">
          <p><strong>TriCast360</strong> - Nachhaltiger Baumschutz für Baustellen</p>
          <p>Diese E-Mail wurde automatisch generiert. Bei Fragen kontaktieren Sie uns unter info@tricast360.de</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Kunden-Bestellbestätigung
export function createCustomerOrderConfirmationTemplate(orderData: {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  items: Array<{ name: string; quantity: number; price: number; advertisingBoard?: boolean; logoName?: string }>;
  total: number;
  vatId?: string;
  company?: string;
}) {
  const itemsHtml = orderData.items.map(item => `
    <div class="order-item">
      <span>${item.name} (${item.quantity}x)</span>
      <span>${(item.price / 100).toFixed(2)} €</span>
      ${item.advertisingBoard ? `
        <div style="margin-left: 20px; color: #e67e22; font-weight: bold;">
          ⚠️ Werbetafel bestellt (+49€ netto)
          ${item.logoName ? `<br>📎 Logo-Datei: ${item.logoName}` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');

  const content = `
    <h2>Vielen Dank für Ihre Bestellung!</h2>
    <p>Liebe/r ${orderData.customerName},</p>
    <p>wir haben Ihre Bestellung erfolgreich erhalten und bearbeiten sie bereits. Hier sind die Details Ihrer Bestellung:</p>
    
    <div class="order-details">
      <h3>Bestellnummer: ${orderData.orderNumber}</h3>
      ${orderData.company ? `<p><strong>Firma:</strong> ${orderData.company}</p>` : ''}
      ${orderData.vatId ? `<p><strong>Umsatzsteuer-ID:</strong> ${orderData.vatId}</p>` : ''}
      <p><strong>E-Mail:</strong> ${orderData.customerEmail}</p>
      
      <h4>Bestellte Artikel:</h4>
      ${itemsHtml}
      <div class="order-item">
        <span><strong>Gesamtsumme:</strong></span>
        <span><strong>${(orderData.total / 100).toFixed(2)} €</strong></span>
      </div>
    </div>
    
    <p>Ihre Zahlung wurde erfolgreich verarbeitet. Sie erhalten in Kürze eine separate Rechnung von Stripe.</p>
    
    <div class="contact-info">
      <h3>Was passiert als nächstes?</h3>
      <p>• Wir bearbeiten Ihre Bestellung umgehend</p>
      <p>• Sie erhalten eine Versandbestätigung mit Tracking-Informationen</p>
      <p>• Bei Fragen stehen wir Ihnen gerne zur Verfügung</p>
    </div>
    
    <div class="contact-info">
      <h3>Kontakt</h3>
      <p><strong>E-Mail:</strong> info@tricast360.de</p>
      <p><strong>Website:</strong> https://tricast360.de</p>
    </div>
    
    <p>Vielen Dank für Ihr Vertrauen in TriCast360!</p>
    <p>Ihr TriCast360 Team</p>
  `;

  return createBaseEmailTemplate(content, 'Bestellbestätigung');
}

// Admin-Benachrichtigung über neue Bestellung
export function createAdminOrderNotificationTemplate(orderData: {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  company?: string;
  address?: string;
  orderNumber: string;
  items: Array<{ name: string; quantity: number; price: number; advertisingBoard?: boolean; logoName?: string }>;
  total: number;
  vatId?: string;
  paymentIntentId: string;
}) {
  const itemsHtml = orderData.items.map(item => `
    <div class="order-item">
      <span>${item.name} (${item.quantity}x)</span>
      <span>${(item.price / 100).toFixed(2)} €</span>
    </div>
  `).join('');

  const content = `
    <h2>🎉 Neue Bestellung eingegangen!</h2>
    <p>Eine neue Bestellung ist über die Website eingegangen:</p>
    
    <div class="order-details">
      <h3>Bestellnummer: ${orderData.orderNumber}</h3>
      <h4>Kundendaten:</h4>
      <p><strong>Name:</strong> ${orderData.customerName}</p>
      <p><strong>E-Mail:</strong> ${orderData.customerEmail}</p>
      ${orderData.customerPhone ? `<p><strong>Telefon:</strong> ${orderData.customerPhone}</p>` : ''}
      ${orderData.company ? `<p><strong>Firma:</strong> ${orderData.company}</p>` : ''}
      ${orderData.address ? `<p><strong>Adresse:</strong> ${orderData.address}</p>` : ''}
      ${orderData.vatId ? `<p><strong>Umsatzsteuer-ID:</strong> ${orderData.vatId}</p>` : ''}
      
      <h4>Bestellte Artikel:</h4>
      ${itemsHtml}
      <div class="order-item">
        <span><strong>Gesamtsumme:</strong></span>
        <span><strong>${(orderData.total / 100).toFixed(2)} €</strong></span>
      </div>
      
      <p><strong>Payment Intent ID:</strong> ${orderData.paymentIntentId}</p>
    </div>
    
    <div class="contact-info">
      <h3>Nächste Schritte:</h3>
      <p>• Bestellung im Stripe Dashboard überprüfen</p>
      <p>• Artikel für Versand vorbereiten</p>
      <p>• Kunde bei Fragen kontaktieren</p>
    </div>
    
    <a href="https://dashboard.stripe.com" class="button">Stripe Dashboard öffnen</a>
  `;

  return createBaseEmailTemplate(content, 'Neue Bestellung');
}

// E-Mail senden Funktion
export async function sendOrderConfirmationEmails(orderData: {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  company?: string;
  address?: string;
  orderNumber: string;
  items: Array<{ name: string; quantity: number; price: number; advertisingBoard?: boolean; logoName?: string }>;
  total: number;
  vatId?: string;
  paymentIntentId: string;
  logoFile?: Buffer;
}) {
  const transporter = createEmailTransporter();

  try {
    // Kunden-E-Mail senden
    const customerEmailOptions = {
      from: `"TriCast360" <${process.env.SMTP_USER}>`,
      to: orderData.customerEmail,
      subject: `Bestellbestätigung - ${orderData.orderNumber}`,
      html: createCustomerOrderConfirmationTemplate(orderData),
    };

    // Admin-E-Mail senden
    const adminEmailOptions: any = {
      from: `"TriCast360 Website" <${process.env.SMTP_USER}>`,
      to: 'info@tricast360.de',
      subject: `🛒 Neue Bestellung: ${orderData.orderNumber} von ${orderData.customerName}`,
      html: createAdminOrderNotificationTemplate(orderData),
      replyTo: orderData.customerEmail,
    };

    // Logo-Anhang hinzufügen, falls vorhanden
    if (orderData.logoFile) {
      const logoItem = orderData.items.find(item => item.logoName);
      adminEmailOptions.attachments = [{
        filename: logoItem?.logoName || 'logo.png',
        content: orderData.logoFile,
        contentType: 'image/*'
      }];
    }

    // Beide E-Mails parallel senden
    const [customerResult, adminResult] = await Promise.allSettled([
      transporter.sendMail(customerEmailOptions),
      transporter.sendMail(adminEmailOptions)
    ]);

    // Ergebnisse loggen
    if (customerResult.status === 'fulfilled') {
      console.log('✅ Kunden-E-Mail erfolgreich gesendet:', customerResult.value.messageId);
    } else {
      console.error('❌ Fehler beim Senden der Kunden-E-Mail:', customerResult.reason);
    }

    if (adminResult.status === 'fulfilled') {
      console.log('✅ Admin-E-Mail erfolgreich gesendet:', adminResult.value.messageId);
    } else {
      console.error('❌ Fehler beim Senden der Admin-E-Mail:', adminResult.reason);
    }

    return {
      customerEmailSent: customerResult.status === 'fulfilled',
      adminEmailSent: adminResult.status === 'fulfilled',
      customerMessageId: customerResult.status === 'fulfilled' ? customerResult.value.messageId : null,
      adminMessageId: adminResult.status === 'fulfilled' ? adminResult.value.messageId : null,
    };

  } catch (error) {
    console.error('❌ Allgemeiner Fehler beim E-Mail-Versand:', error);
    throw error;
  }
}