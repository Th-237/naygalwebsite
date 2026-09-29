import type { Metadata } from 'next'

const SITE = (process.env.SITE_URL || 'https://naygal.cm').replace(/\/+$/, '')

export function createPageMetadata(path: string, title: string, description: string, options: { noIndex?: boolean } = {}): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const canonical = `${SITE}${normalizedPath}`
  const fullTitle = /naygal/i.test(title) ? title : `${title} | NAYGAL`

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'NAYGAL',
      locale: 'fr_FR',
      type: 'website',
      images: ['/images/home/NAYTECHROOM.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/images/home/NAYTECHROOM.png'],
    },
    ...(options.noIndex ? { robots: { index: false, follow: true } } : {}),
  }
}

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
        telephone: "+237674509721",
        contactType: "customer service",
        availableLanguage: ["French", "English"],
        areaServed: "CM",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    areaServed: ["CM", "Cameroun", "Afrique"],
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
    ...overrides,
  }

  return data
}
