import type { Dict } from '../i18n/uk'
import { instagram, phone } from './contacts'
import { prices } from './prices'

/** schema.org JSON-LD for the home page: business, website, page and FAQ in one graph. */
export function buildStructuredData(t: Dict, site: URL, pageUrl: string) {
  const abs = (path: string) => new URL(path, site).href
  const businessId = abs('/#business')
  const websiteId = abs('/#website')

  const business = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': businessId,
    name: t.brand.name,
    alternateName: ['Без бруда', 'Bez Bruda', 'Bez bruda'].filter(n => n !== t.brand.name),
    slogan: t.brand.tagline,
    description: t.meta.description,
    url: abs('/'),
    logo: abs('/logo.png'),
    image: abs(t.meta.ogImage),
    telephone: phone.e164,
    priceRange: t.schema.priceRange,
    currenciesAccepted: 'UAH',
    address: {
      '@type': 'PostalAddress',
      addressLocality: t.schema.city,
      addressRegion: t.schema.region,
      addressCountry: 'UA'
    },
    areaServed: [
      { '@type': 'City', name: t.schema.city },
      { '@type': 'AdministrativeArea', name: t.schema.region }
    ],
    founder: { '@type': 'Person', name: t.contact.ownerName },
    knowsLanguage: ['uk', 'en'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: phone.e164,
      contactType: 'sales',
      areaServed: 'UA',
      availableLanguage: ['Ukrainian', 'English']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.pricing.catalogName,
      itemListElement: prices.map(p => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: t.pricing.items[p.key], areaServed: t.schema.city },
        ...('price' in p && {
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: p.price,
            priceCurrency: 'UAH',
            unitCode: 'MTK',
            unitText: 'm²'
          }
        })
      }))
    },
    sameAs: [`https://instagram.com/${instagram.handle}`]
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: abs('/'),
        name: t.brand.name,
        inLanguage: ['uk', 'en'],
        publisher: { '@id': businessId }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: t.lang,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        primaryImageOfPage: abs(t.meta.ogImage)
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        inLanguage: t.lang,
        mainEntity: t.faq.items.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }
    ]
  }
}
