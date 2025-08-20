# Treecast360 - Modulares 360° Baumschutzsystem

Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform. Innovative Lösung für nachhaltigen Baumschutz auf Baustellen.

## 🚀 Live Website

**Produktions-URL:** [https://tricast360.de](https://tricast360.de)

## 🛠️ Technologie-Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Coolify + Docker
- **CI/CD:** GitHub Actions
- **Hosting:** Nginx (containerisiert)

## 📋 Voraussetzungen

- Node.js 18+
- npm oder yarn
- Docker (für lokale Container-Tests)
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

## 🐳 Docker Entwicklung

### Lokaler Docker Build
```bash
# Image bauen
docker build -t treecast360 .

# Container starten
docker run -p 3000:80 treecast360
```

### Docker Compose (Entwicklung)
```bash
# Entwicklungsumgebung
docker-compose up treecast-dev

# Produktions-Test
docker-compose --profile production up treecast-prod
```

## 🚀 Deployment mit Coolify

### Automatisches Deployment

Das Projekt ist für automatisches Deployment über **Coolify** und **GitHub Actions** konfiguriert.

#### 1. GitHub Repository Setup

1. **Repository auf GitHub pushen:**
   ```bash
   git add .
   git commit -m "Initial commit: Treecast360 website"
   git branch -M main
   git remote add origin https://github.com/smc1992/tricast360.git
   git push -u origin main
   ```

2. **GitHub Container Registry aktivieren:**
   - Gehe zu Repository Settings → Packages
   - Aktiviere "Improved container support"

#### 2. Coolify Setup

1. **Neue Anwendung in Coolify erstellen:**
   - Source: GitHub Repository
   - Build Pack: Docker
   - Dockerfile: `./Dockerfile`

2. **Umgebungsvariablen in Coolify setzen:**
   ```env
   SITE_URL=https://tricast360.de
   NODE_ENV=production
   ```

3. **Domain konfigurieren:**
   - Custom Domain: `tricast360.de`
   - SSL/TLS: Automatisch (Let's Encrypt)

4. **Webhook URL kopieren:**
   - Gehe zu Application → Webhooks
   - Kopiere die Webhook URL

#### 3. GitHub Secrets konfigurieren

Gehe zu Repository Settings → Secrets and variables → Actions:

```
COOLIFY_WEBHOOK_URL=https://your-coolify-instance.com/api/v1/webhooks/your-webhook-id
```

### Manuelles Deployment

```bash
# Build und Push zum GitHub Container Registry
docker build -t ghcr.io/smc1992/tricast360:latest .
docker push ghcr.io/smc1992/tricast360:latest

# Coolify Webhook triggern
curl -X POST "$COOLIFY_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"image": "ghcr.io/your-username/treecast360:latest"}'
```

## 📁 Projekt-Struktur

```
treecast360/
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
├── Dockerfile           # Docker Konfiguration
├── docker-compose.yml   # Docker Compose
├── nginx.conf          # Nginx Konfiguration
├── .dockerignore       # Docker Ignore
├── .env.example        # Umgebungsvariablen Beispiel
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

- **Security Headers** - Nginx Konfiguration
- **HTTPS** - Automatisch via Coolify/Let's Encrypt
- **Content Security Policy** - Implementiert
- **XSS Protection** - Aktiviert

## 📞 Support & Kontakt

- **Website:** [https://tricast360.de](https://tricast360.de)
- **E-Mail:** info@tricast360.de
- **Support:** support@tricast360.de

## 📄 Lizenz

© 2024 Treecast360. Alle Rechte vorbehalten.
