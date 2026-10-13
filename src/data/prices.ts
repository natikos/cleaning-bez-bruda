// Price per m² in UAH; no price means "on request". Names live in the i18n dictionaries.
export const prices = [
  { key: 'renovation', price: 130 },
  { key: 'maintenance', price: 100 },
  { key: 'windows', price: 120 },
  { key: 'floors' },
  { key: 'carpet' },
  { key: 'restrooms' }
] as const satisfies readonly { key: string, price?: number }[]

export type PriceKey = (typeof prices)[number]['key']

const fixed = prices.flatMap(p => ('price' in p ? [p.price] : []))
export const minPrice = Math.min(...fixed)
export const maxPrice = Math.max(...fixed)
