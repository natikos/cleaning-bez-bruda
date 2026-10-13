import { getRelativeLocaleUrl } from 'astro:i18n'
import { en } from './en'
import { uk, type Dict } from './uk'
import { defaultLocale, locales } from './config'

export { defaultLocale, locales }
export type Locale = (typeof locales)[number]

const dicts: Record<Locale, Dict> = { uk, en }

export const getDict = (locale: string | undefined): Dict =>
  dicts[locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale]

/** Path of the home page for a locale: `/` for the default one, `/en/` otherwise. */
export const homePath = (locale: string) => getRelativeLocaleUrl(locale)
