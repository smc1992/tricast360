import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// E-Mail-Template-Funktion
function createEmailTemplate(data: any, type: 'contact' | 'project' | 'configuration') {
  const baseTemplate = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Neue Anfrage - Tricast360</title>
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
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .header p {
          margin: 10px 0 0 0;
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          padding: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #baf742;
        }
        .field-label {
          font-weight: 600;
          color: #2b3138;
          margin-bottom: 5px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #555;
          font-size: 16px;
          word-wrap: break-word;
        }
        .footer {
          background: #2b3138;
          color: white;
          padding: 25px;
          text-align: center;
          font-size: 14px;
        }
        .footer a {
          color: #baf742;
          text-decoration: none;
        }
        .badge {
          display: inline-block;
          background: #baf742;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 10px;
        }
        @media (max-width: 600px) {
          .container {
            margin: 10px;
          }
          .header, .content, .footer {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌳 Tricast360</h1>
          <p>${type === 'contact' ? 'Neue Kontaktanfrage' : type === 'project' ? 'Neue Projektanfrage' : 'Neue Produktkonfiguration'}</p>
          <div class="badge">${type === 'contact' ? 'KONTAKT' : type === 'project' ? 'PROJEKT' : 'KONFIGURATOR'}</div>
        </div>
        <div class="content">
  `;

  let fieldsHtml = '';
  
  if (type === 'contact') {
    fieldsHtml = `
      <div class="field">
        <div class="field-label">👤 Name</div>
        <div class="field-value">${data.name}</div>
      </div>
      ${data.company ? `
      <div class="field">
        <div class="field-label">🏢 Unternehmen</div>
        <div class="field-value">${data.company}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="field-label">📧 E-Mail</div>
        <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="field-label">📞 Telefon</div>
        <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      ` : ''}
      ${data.subject ? `
      <div class="field">
        <div class="field-label">📋 Betreff</div>
        <div class="field-value">${data.subject}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="field-label">💬 Nachricht</div>
        <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
    `;  } else if (type === 'project') {
    fieldsHtml = `
      <div class="field">
        <div class="field-label">🏢 Unternehmen</div>
        <div class="field-value">${data.company}</div>
      </div>
      <div class="field">
        <div class="field-label">👤 Ansprechpartner</div>
        <div class="field-value">${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">📧 E-Mail</div>
        <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">📞 Telefon</div>
        <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      <div class="field">
        <div class="field-label">🏗️ Projekttyp</div>
        <div class="field-value">${data.projectType}</div>
      </div>
      <div class="field">
        <div class="field-label">🌳 Anzahl Bäume</div>
        <div class="field-value">${data.treeCount}</div>
      </div>
      <div class="field">
        <div class="field-label">📍 Standort</div>
        <div class="field-value">${data.location}</div>
      </div>
      <div class="field">
        <div class="field-label">📅 Gewünschter Starttermin</div>
        <div class="field-value">${data.startDate}</div>
      </div>
      ${data.message ? `
      <div class="field">
        <div class="field-label">💬 Zusätzliche Informationen</div>
        <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
    `;
  } else {
    fieldsHtml = `
      <div class="field">
        <div class="field-label">👤 Name</div>
        <div class="field-value">${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">📧 E-Mail</div>
        <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${data.company ? `
      <div class="field">
        <div class="field-label">🏢 Unternehmen</div>
        <div class="field-value">${data.company}</div>
      </div>
      ` : ''}
      ${data.phone ? `
      <div class="field">
        <div class="field-label">📞 Telefon</div>
        <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      ` : ''}
      
      <div style="margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #baf742 0%, #a3e635 100%); border-radius: 12px; color: white;">
        <h3 style="margin: 0 0 15px 0; font-size: 18px;">🔧 Produktkonfiguration</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
          <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">DURCHMESSER</div>
            <div style="font-size: 16px; font-weight: 600;">${data.configuration.diameter} cm</div>
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">HÖHE</div>
            <div style="font-size: 16px; font-weight: 600;">${data.configuration.height} cm</div>
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">STÜCKZAHL</div>
            <div style="font-size: 16px; font-weight: 600;">${data.configuration.quantity}x Systeme</div>
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; opacity: 0.9; margin-bottom: 5px;">MATERIAL</div>
            <div style="font-size: 16px; font-weight: 600;">${data.configuration.material === 'premium' ? 'Premium' : 'Standard'}</div>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.3); border-radius: 8px; text-align: center;">
          <div style="font-size: 14px; opacity: 0.9; margin-bottom: 5px;">GESAMTPREIS</div>
          <div style="font-size: 24px; font-weight: 700;">€ ${data.configuration.totalPrice.toLocaleString()}</div>
          <div style="font-size: 12px; opacity: 0.8; margin-top: 5px;">${data.configuration.quantity}x Systeme à ${data.configuration.pricePerSystem.toLocaleString()} €</div>
        </div>
      </div>
      
      ${data.message ? `
      <div class="field">
        <div class="field-label">💬 Zusätzliche Informationen</div>
        <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
    `;
  }

  const footerTemplate = `
        </div>
        <div class="footer">
          <p><strong>Tricast360 - Modulares 360° Baumschutzsystem</strong></p>
          <p>📧 <a href="mailto:info@tricast360.de">info@tricast360.de</a> | 🌐 <a href="https://tricast360.de">tricast360.de</a></p>
          <p style="margin-top: 15px; opacity: 0.8;">Diese E-Mail wurde automatisch über das Kontaktformular auf tricast360.de gesendet.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return baseTemplate + fieldsHtml + footerTemplate;
}

// Validierungsfunktionen
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name ist erforderlich und muss mindestens 2 Zeichen lang sein');
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Gültige E-Mail-Adresse ist erforderlich');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Nachricht ist erforderlich und muss mindestens 10 Zeichen lang sein');
  }
  
  if (data.message && data.message.length > 500) {
    errors.push('Nachricht darf maximal 500 Zeichen lang sein');
  }
  
  return { isValid: errors.length === 0, errors };
}

function validateProjectForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.company || data.company.trim().length < 2) {
    errors.push('Firmenname ist erforderlich');
  }
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Ansprechpartner ist erforderlich');
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Gültige E-Mail-Adresse ist erforderlich');
  }
  
  if (!data.phone || data.phone.trim().length < 5) {
    errors.push('Telefonnummer ist erforderlich');
  }
  
  if (!data.projectType) {
    errors.push('Projekttyp ist erforderlich');
  }
  
  if (!data.treeCount) {
    errors.push('Anzahl der Bäume ist erforderlich');
  }
  
  if (!data.location || data.location.trim().length < 3) {
    errors.push('Standort ist erforderlich');
  }
  
  if (!data.startDate) {
    errors.push('Starttermin ist erforderlich');
  }
  
  if (data.message && data.message.length > 500) {
    errors.push('Zusätzliche Informationen dürfen maximal 500 Zeichen lang sein');
  }
  
  return { isValid: errors.length === 0, errors };
}

function validateConfigurationForm(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Pflichtfelder prüfen
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name ist erforderlich und muss mindestens 2 Zeichen lang sein.');
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Eine gültige E-Mail-Adresse ist erforderlich.');
  }

  // Konfigurationsdaten prüfen
  if (!data.configuration) {
    errors.push('Konfigurationsdaten sind erforderlich.');
  } else {
    const config = data.configuration;
    
    if (!config.diameter || config.diameter < 50 || config.diameter > 300) {
      errors.push('Durchmesser muss zwischen 50 und 300 cm liegen.');
    }
    
    if (!config.height || config.height < 100 || config.height > 250) {
      errors.push('Höhe muss zwischen 100 und 250 cm liegen.');
    }
    
    if (!config.modules || config.modules < 3 || config.modules > 8) {
      errors.push('Anzahl Module muss zwischen 3 und 8 liegen.');
    }
    
    if (!config.material || !['standard', 'premium'].includes(config.material)) {
      errors.push('Ungültiges Material ausgewählt.');
    }
  }

  if (!data.estimatedPrice || data.estimatedPrice <= 0) {
    errors.push('Geschätzter Preis ist erforderlich.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body;
    
    // Validierung basierend auf Formulartyp
    let validation;
    if (type === 'project') {
      validation = validateProjectForm(formData);
    } else if (type === 'configuration') {
      validation = validateConfigurationForm(formData);
    } else {
      validation = validateContactForm(formData);
    }
    
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }
    
    // E-Mail-Konfiguration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    // E-Mail-Optionen
    const mailOptions = {
      from: `"Tricast360 Website" <${process.env.SMTP_USER}>`,
      to: 'info@tricast360.de',
      subject: type === 'project' 
        ? `🏗️ Neue Projektanfrage von ${formData.company}` 
        : type === 'configuration'
        ? `🔧 Neue Produktkonfiguration von ${formData.name}`
        : `📧 Neue Kontaktanfrage von ${formData.name}`,
      html: createEmailTemplate(formData, type),
      replyTo: formData.email,
    };
    
    // E-Mail senden
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { 
        success: true, 
        message: type === 'project' 
          ? 'Projektanfrage erfolgreich gesendet!' 
          : type === 'configuration'
          ? 'Produktkonfiguration erfolgreich gesendet!'
          : 'Nachricht erfolgreich gesendet!' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('E-Mail-Versand-Fehler:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' 
      },
      { status: 500 }
    );
  }
}