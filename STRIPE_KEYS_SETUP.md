# Stripe API-Keys einrichten

## Problem
Der Fehler `Invalid API Key provided` tritt auf, weil die Stripe API-Keys in der `.env.local`-Datei noch Platzhalter sind.

## Lösung: Echte Stripe Test-Keys einrichten

### 1. Stripe-Konto erstellen (falls noch nicht vorhanden)
1. Gehe zu [https://stripe.com](https://stripe.com)
2. Klicke auf "Sign up" und erstelle ein kostenloses Konto
3. Verifiziere deine E-Mail-Adresse

### 2. API-Keys aus dem Stripe Dashboard holen
1. Logge dich in dein Stripe Dashboard ein: [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Stelle sicher, dass du im **Test-Modus** bist (Toggle oben rechts)
3. Gehe zu **Developers** → **API keys**
4. Kopiere die folgenden Keys:
   - **Publishable key** (beginnt mit `pk_test_...`)
   - **Secret key** (beginnt mit `sk_test_...`) - Klicke auf "Reveal live key"

### 3. Keys in .env.local eintragen
Öffne die `.env.local`-Datei und ersetze die Platzhalter:

```env
# Stripe Secret Key (für Server-seitige API-Aufrufe)
STRIPE_SECRET_KEY=sk_test_DEIN_ECHTER_SECRET_KEY_HIER

# Stripe Publishable Key (für Client-seitige Stripe Elements)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_DEIN_ECHTER_PUBLISHABLE_KEY_HIER
```

### 4. Server neu starten
Nach dem Ändern der `.env.local`-Datei:
1. Stoppe den Entwicklungsserver (Ctrl+C)
2. Starte ihn neu mit `npm run dev`

### 5. Testen
- Gehe zur Checkout-Seite
- Der Payment Intent sollte jetzt erfolgreich erstellt werden
- Verwende Stripe Test-Kreditkarten für Tests:
  - **Visa**: 4242 4242 4242 4242
  - **Mastercard**: 5555 5555 5555 4444
  - **Amex**: 3782 8224 6310 005
  - **Ablaufdatum**: Beliebiges zukünftiges Datum
  - **CVC**: Beliebige 3-4 Ziffern

## Wichtige Hinweise
- ⚠️ **Niemals** echte Produktions-Keys in der Entwicklung verwenden
- ⚠️ **Niemals** API-Keys in Git committen
- ✅ Verwende nur Test-Keys (beginnen mit `pk_test_` und `sk_test_`)
- ✅ Die `.env.local`-Datei ist bereits in `.gitignore` eingetragen

## Webhook Secret (optional für lokale Entwicklung)
Für Webhooks in der lokalen Entwicklung:
1. Installiere Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Führe aus: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
3. Kopiere das angezeigte Webhook Secret in die `.env.local`

## Fehlerbehebung
Wenn der Fehler weiterhin auftritt:
1. Überprüfe, dass die Keys korrekt kopiert wurden (keine Leerzeichen)
2. Stelle sicher, dass du im Test-Modus bist
3. Starte den Server neu
4. Überprüfe die Browser-Konsole und Server-Logs für weitere Details