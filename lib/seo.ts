export function getOrganizationStructuredData(overrides = {}) {
  const SITE = process.env.SITE_URL || 'https://naygal.cm'

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NAYGAL",
    url: SITE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+237655002493",
        contactType: "customer service",
        availableLanguage: ["French", "English"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    sameAs: [
      "https://www.facebook.com/naygal",
      "https://www.linkedin.com/company/naygal"
    ],
    ...overrides,
  }

  return data
}
