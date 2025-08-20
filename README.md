# Treecast360 - Modulares 360° Baumschutzsystem

Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform. Innovative Lösung für nachhaltigen Baumschutz auf Baustellen.

## 🚀 Live Website

**Produktions-URL:** [https://tricast360.de](https://tricast360.de)

## 🛠️ Technologie-Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Coolify + Nixpacks
- **CI/CD:** GitHub Actions
- **Hosting:** Statischer Export

## 📋 Voraussetzungen

- Node.js 18+
- npm oder yarn
- Git

## 🏃‍♂️ Lokale Entwicklung

### 1. Repository klonen
```bash
git clone https://github.com/smc1992/tricast360.git
cd tricast360
```

### 2. Dependencies installieren
```bash
npm install
```

### 3. Entwicklungsserver starten
```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### 4. Produktions-Build erstellen
```bash
npm run build
```

### 5. Produktions-Build lokal testen
```bash
npx serve@latest out -p 3000
```

## 🚀 Deployment mit Coolify

### Automatisches Deployment mit Nixpacks

Das Projekt ist für automatisches Deployment über **Coolify** mit **Nixpacks** konfiguriert.

#### 1. Coolify Setup

1. **Neue Anwendung in Coolify erstellen:**
   - **Source:** GitHub Repository (https://github.com/smc1992/tricast360)
   - **Build Pack:** Nixpacks (automatisch erkannt)
   - **Branch:** main

2. **Umgebungsvariablen in Coolify setzen:**
   ```env
   SITE_URL=https://tricast360.de
   NODE_ENV=production
   ```

3. **Domain konfigurieren:**
   - **Custom Domain:** tricast360.de
   - **SSL/TLS:** Automatisch (Let's Encrypt)

Das war's! Coolify erkennt automatisch Änderungen im Repository und deployed bei jedem Push zum main Branch.

## 📁 Projekt-Struktur

```
tricast360/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout mit SEO
│   ├── page.tsx           # Homepage
│   ├── system/            # System-Seite
│   ├── ueber-uns/         # Über uns
│   ├── kontakt/           # Kontakt
│   ├── impressum/         # Impressum
│   ├── datenschutz/       # Datenschutz
│   ├── favicon.ico        # Favicon
│   ├── icon.svg           # App Icon
│   └── apple-icon.png     # Apple Touch Icon
├── components/            # React Komponenten
├── public/               # Statische Assets
│   ├── sitemap.xml       # SEO Sitemap
│   └── robots.txt        # Robots.txt
├── .github/workflows/    # GitHub Actions
├── .env.example        # Umgebungsvariablen Beispiel
├── next.config.ts      # Next.js Konfiguration
├── package.json        # Dependencies
└── README.md           # Diese Datei
```

## 🔧 Verfügbare Scripts

```bash
npm run dev          # Entwicklungsserver
npm run build        # Produktions-Build
npm start            # Produktionsserver (nicht für statischen Export)
npm run lint         # ESLint
```

## 🌐 SEO & Performance

### Implementierte Features:
- ✅ **Sitemap.xml** - Automatisch generiert
- ✅ **Robots.txt** - Suchmaschinen-Anweisungen
- ✅ **Meta Tags** - Umfassende SEO-Optimierung
- ✅ **Open Graph** - Social Media Integration
- ✅ **Twitter Cards** - Twitter-Optimierung
- ✅ **Strukturierte Daten** - JSON-LD Schema
- ✅ **Performance** - Optimierte Bilder und Caching
- ✅ **Accessibility** - WCAG-konform
- ✅ **Mobile-First** - Responsive Design

### Lighthouse Score Ziele:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔒 Sicherheit

- **HTTPS** - Automatisch via Coolify/Let's Encrypt
- **Content Security Policy** - Next.js Headers
- **XSS Protection** - Next.js Security Features
- **Statischer Export** - Minimale Angriffsfläche

## 📞 Support & Kontakt

- **Website:** [https://tricast360.de](https://tricast360.de)
- **E-Mail:** info@tricast360.de
- **Support:** support@tricast360.de

## 📄 Lizenz

© 2024 Treecast360. Alle Rechte vorbehalten.
