import { en } from './en'
import { uk, type Dict } from './uk'

export const locales = ['uk', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'uk'

export const dicts: Record<Locale, Dict> = { uk, en }

export const toLocale = (value: string | undefined): Locale =>
  locales.includes(value as Locale) ? (value as Locale) : defaultLocale

export const getDict = (locale: string | undefined): Dict => dicts[toLocale(locale)]

/** Path of the home page for a locale: `/` for the default one, `/en/` otherwise. */
export const homePath = (locale: Locale) => (locale === defaultLocale ? '/' : `/${locale}/`)

export const otherLocales = (locale: Locale) => locales.filter(l => l !== locale)
