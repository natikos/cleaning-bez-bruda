import { phone } from '../data/contacts';
import { maxPrice, minPrice } from '../data/prices';
import type { Dict } from './uk';

export const en: Dict = {
  lang: 'en',
  ogLocale: 'en_US',
  switchLabel: 'EN',
  switchName: 'English',

  meta: {
    title: `Commercial Cleaning in Lviv — from ${minPrice} UAH/m² | Bez Bruda`,
    description: `Commercial cleaning company in Lviv, Ukraine: floor washing, carpet cleaning, office and post-renovation cleaning for businesses. Kärcher equipment, from ${minPrice} UAH/m². ☎ ${phone.intl}`,
    ogImage: '/og-en.jpg',
    ogImageAlt: 'Bez Bruda — commercial cleaning in Lviv'
  },

  brand: {
    name: 'Bez Bruda',
    first: 'Bez',
    accent: 'Bruda',
    sub: 'Cleaning company',
    tagline: 'Cleanliness you can trust',
    home: 'Bez Bruda — back to top'
  },

  ids: { services: 'services', clients: 'clients', prices: 'prices', faq: 'faq', contacts: 'contacts' },

  header: {
    navLabel: 'Main navigation',
    nav: { services: 'Services', clients: 'Clients', prices: 'Prices', faq: 'FAQ', contacts: 'Contacts' },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langLabel: 'Site language'
  },

  hero: {
    h1: 'Commercial cleaning in Lviv',
    titleAccent: 'Cleanliness',
    titleRest: ' you can trust',
    text: 'Offices, warehouses, shops, malls and factories: we clean large areas with professional Kärcher equipment. No streaks, stains or odours.',
    facts: [
      { icon: 'flag', title: 'Officially registered' },
      { icon: 'map-pin', title: 'Lviv & the region' },
      { icon: 'calculator', title: 'Quote', sub: 'based on area & surface' },
      { icon: 'schedule', title: 'Flexible terms', sub: 'one-off or scheduled' }
    ],
    logoAlt: 'Bez Bruda mascot — a yellow rubber duck in soap foam',
    priceFrom: 'from',
    unit: 'UAH/m²'
  },

  marquee: [
    'Professional cleaning',
    'Floor washing',
    'Carpet cleaning',
    'Post-renovation cleaning',
    'Office cleaning',
    'Maintenance cleaning',
    'Window & glass partition cleaning',
    'Restroom cleaning',
    'Commercial properties'
  ],

  services: {
    badge: 'Services',
    title: 'What we clean and how',
    items: [
      {
        alt: 'Yana washing an office floor with a professional scrubber',
        title: 'Floor washing & deep cleaning',
        text: 'Professional cleaning of hard floors with specialised equipment and professional-grade chemicals.',
        tags: ['Specialised equipment', 'Professional chemicals']
      },
      {
        alt: 'Carpet cleaning in an office',
        title: 'Carpet cleaning',
        text: 'Deep cleaning of carpets and textile floor coverings to remove dirt, stains and unpleasant odours. Dry or wet method, depending on your carpet.',
        tags: ['Dry', 'Wet', 'Stains & odours']
      },
      {
        alt: 'Professional Kärcher carpet cleaning machine',
        title: 'Our equipment',
        text: 'Specialised Kärcher Professional machines and professional chemicals for every type of surface. We bring all the equipment with us.',
        tags: ['Kärcher Professional']
      }
    ]
  },

  clients: {
    tag: 'Commercial properties only',
    title: 'Our clients',
    items: [
      'Office centres',
      'Shopping & business centres',
      'Shops',
      'Hotels',
      'Restaurants',
      'Factories & warehouses',
      'Other large commercial properties'
    ]
  },

  pricing: {
    badge: 'Prices',
    title: 'Cleaning prices in Lviv',
    note: 'Prices may vary depending on the complexity of the property and the level of soiling.',
    panelTitle: 'Core services for commercial properties',
    catalogName: 'Commercial cleaning services',
    items: {
      renovation: 'Post-renovation cleaning',
      maintenance: 'Maintenance cleaning',
      windows: 'Window & glass partition cleaning',
      floors: 'Large-area floor washing',
      carpet: 'Carpet cleaning',
      restrooms: 'Restroom cleaning'
    },
    unit: 'UAH/m²',
    onRequest: 'on request'
  },

  faq: {
    badge: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How much does commercial cleaning cost in Lviv?',
        a: 'Maintenance cleaning is 100 UAH/m², window and glass partition cleaning is 120 UAH/m², and post-renovation cleaning is 130 UAH/m². Large-area floor washing, carpet cleaning and restroom cleaning are quoted individually, based on the area, surface type and level of soiling.'
      },
      {
        q: 'What kind of properties do you clean?',
        a: 'Commercial properties only: office, shopping and business centres, shops, hotels, restaurants, factories, warehouses and other large premises.'
      },
      {
        q: 'Do you work outside Lviv?',
        a: 'Yes, we work in Lviv and throughout the Lviv region.'
      },
      {
        q: 'How do you clean carpets?',
        a: 'We use dry or wet cleaning, choosing the method to suit the carpet type. We remove dirt, stains and unpleasant odours.'
      },
      {
        q: 'Do I need to provide equipment or cleaning products?',
        a: 'No. We bring professional Kärcher equipment and professional cleaning chemicals with us.'
      },
      {
        q: 'Can I order regular cleaning?',
        a: 'Yes. You can order a one-off clean or ongoing service on an agreed schedule.'
      },
      {
        q: 'How do I get a quote?',
        a: `Call us at ${phone.intl} or message us on WhatsApp, Viber or Telegram. Tell us the area, surface type and scope of work, and we will calculate the cost and suggest the best way to work together.`
      }
    ]
  },

  contact: {
    badge: 'Contacts',
    title: 'Need professional cleaning for a large property?',
    lead: 'Call or message us — we will calculate the cost and suggest the best way to work together.',
    phoneLabel: 'Phone',
    ownerRole: 'Owner',
    ownerName: 'Yana Pyrozhok',
    ownerAlt: 'Yana Pyrozhok, owner of Bez Bruda, with a Kärcher Professional single-disc floor machine'
  },

  footer: {
    legal: 'Sole proprietor Yana Pyrozhok',
    area: 'Lviv and Lviv Oblast'
  },

  callbar: { call: 'Call', quote: 'Get a quote' },

  schema: {
    city: 'Lviv',
    region: 'Lviv Oblast',
    priceRange: `${minPrice}–${maxPrice} UAH/m²`
  }
};
