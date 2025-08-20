import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Treecast360",
    "url": "https://tricast360.de",
    "logo": "https://tricast360.de/logo.png",
    "description": "Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform. Innovative Lösung für nachhaltigen Baumschutz auf Baustellen.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "German"
    },
    "sameAs": [
      "https://www.linkedin.com/company/treecast360",
      "https://twitter.com/treecast360"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Treecast360 Baumschutzsystem",
    "description": "Modulares 360°-Baumschutzsystem für nachhaltigen Baumschutz auf Baustellen. Schnell installiert, wiederverwendbar und normkonform.",
    "brand": {
      "@type": "Brand",
      "name": "Treecast360"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Treecast360"
    },
    "category": "Baustellenschutz",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Treecast360",
    "url": "https://tricast360.de",
    "description": "Modulares 360°-Baumschutzsystem: schnell installiert, wiederverwendbar, normkonform.",
    "publisher": {
      "@type": "Organization",
      "name": "Treecast360"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tricast360.de/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}