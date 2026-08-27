export function getOrganizationStructuredData(overrides = {}) {
  const SITE = process.env.SITE_URL || 'https://naygal.cm'

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NAYGAL",
    url: SITE,
    logo: `${SITE}/images/logo.png`,
    description:
      'NAYGAL accompagne les organisations au Cameroun dans leur infrastructure IT, cybersécurité, cloud, IA et transformation numérique.',
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+237655002493",
        contactType: "customer service",
        availableLanguage: ["French", "English"],
        areaServed: "CM",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Douala",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    areaServed: ["CM", "Cameroun", "Afrique"],
    sameAs: [
      "https://www.facebook.com/naygal",
      "https://www.linkedin.com/company/naygal",
    ],
    ...overrides,
  }

  return data
}

export function getWebsiteStructuredData(overrides = {}) {
  const SITE = process.env.SITE_URL || 'https://naygal.cm'

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NAYGAL",
    url: SITE,
    description:
      'Solutions IT, cybersécurité, cloud, IA et transformation numérique pour les organisations au Cameroun.',
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/ressources?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    ...overrides,
  }

  return data
}
