# Stripe Integration Setup

Diese Anleitung erklärt, wie Sie die Stripe-Zahlungsintegration für TriCast360 einrichten.

## 1. Stripe Account Setup

1. Erstellen Sie ein Stripe-Konto unter [https://stripe.com](https://stripe.com)
2. Gehen Sie zu Ihrem Stripe Dashboard: [https://dashboard.stripe.com](https://dashboard.stripe.com)

## 2. API Keys konfigurieren

1. Navigieren Sie zu **Entwickler > API-Schlüssel** in Ihrem Stripe Dashboard
2. Kopieren Sie die folgenden Schlüssel:
   - **Publishable Key** (beginnt mit `pk_test_` oder `pk_live_`)
   - **Secret Key** (beginnt mit `sk_test_` oder `sk_live_`)

3. Aktualisieren Sie die `.env.local` Datei:
```env
STRIPE_SECRET_KEY=sk_test_ihr_echter_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_ihr_echter_publishable_key
```

## 3. Webhook einrichten

1. Gehen Sie zu **Entwickler > Webhooks** in Ihrem Stripe Dashboard
2. Klicken Sie auf **Endpoint hinzufügen**
3. Geben Sie die Webhook-URL ein:
   - **Lokal (Entwicklung)**: `https://ihr-ngrok-url.ngrok.io/api/webhooks/stripe`
   - **Produktion**: `https://ihre-domain.de/api/webhooks/stripe`

4. Wählen Sie die folgenden Events aus:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `payment_intent.canceled`

5. Kopieren Sie den **Webhook-Signing-Secret** (beginnt mit `whsec_`)
6. Fügen Sie ihn zur `.env.local` hinzu:
```env
STRIPE_WEBHOOK_SECRET=whsec_ihr_webhook_secret
```

## 4. Lokale Entwicklung mit ngrok

Für lokale Tests benötigen Sie ngrok, um Webhooks zu empfangen:

1. Installieren Sie ngrok: [https://ngrok.com/download](https://ngrok.com/download)
2. Starten Sie Ihre Next.js App: `npm run dev`
3. Öffnen Sie ein neues Terminal und führen Sie aus: `ngrok http 3000`
4. Kopieren Sie die HTTPS-URL (z.B. `https://abc123.ngrok.io`)
5. Verwenden Sie diese URL für Ihren Webhook-Endpoint

## 5. Test-Kreditkarten

Verwenden Sie diese Test-Kreditkarten für die Entwicklung:

- **Erfolgreiche Zahlung**: `4242 4242 4242 4242`
- **Fehlgeschlagene Zahlung**: `4000 0000 0000 0002`
- **3D Secure erforderlich**: `4000 0025 0000 3155`

**Weitere Details:**
- Ablaufdatum: Beliebiges zukünftiges Datum
- CVC: Beliebige 3-stellige Zahl
- PLZ: Beliebige gültige PLZ

## 6. Zahlungsfluss testen

1. Starten Sie die Anwendung: `npm run dev`
2. Gehen Sie zum Konfigurator und fügen Sie Produkte hinzu
3. Gehen Sie zur Checkout-Seite
4. Füllen Sie die Kundendaten aus
5. Verwenden Sie eine Test-Kreditkarte für die Zahlung
6. Überprüfen Sie die Webhook-Logs in der Konsole

## 7. Produktionsbereitschaft

Bevor Sie live gehen:

1. **Ersetzen Sie Test-Keys durch Live-Keys**:
   ```env
   STRIPE_SECRET_KEY=sk_live_ihr_live_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_ihr_live_publishable_key
   ```

2. **Aktualisieren Sie den Webhook-Endpoint** auf Ihre Produktions-URL

3. **Testen Sie mit echten Kreditkarten** (kleine Beträge)

4. **Implementieren Sie Datenbankintegration** für Bestellungen

5. **Richten Sie E-Mail-Benachrichtigungen ein**

## 8. Wichtige Sicherheitshinweise

- ⚠️ **Niemals** Secret Keys im Frontend-Code verwenden
- ⚠️ **Niemals** API Keys in Git committen
- ✅ Verwenden Sie HTTPS in der Produktion
- ✅ Validieren Sie Webhook-Signaturen
- ✅ Implementieren Sie Rate Limiting

## 9. Nächste Schritte

Nach der Grundeinrichtung sollten Sie implementieren:

1. **Datenbankintegration** für Bestellungen (z.B. mit Supabase)
2. **E-Mail-Benachrichtigungen** für Kunden und Admins
3. **Bestellverwaltung** im Admin-Bereich
4. **Rückerstattungen** und Stornierungen
5. **Reporting** und Analytics

## Support

Bei Fragen zur Stripe-Integration:
- [Stripe Dokumentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)
- [Next.js Stripe Guide](https://nextjs.org/learn/dashboard-app/setting-up-your-database)