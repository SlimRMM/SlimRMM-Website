import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

export type SupportedLocale = 'de' | 'en'

const savedLocale = typeof localStorage !== 'undefined'
  ? localStorage.getItem('locale') as SupportedLocale
  : null

const browserLocale = typeof navigator !== 'undefined'
  ? navigator.language.split('-')[0] as SupportedLocale
  : 'de'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale || (browserLocale === 'de' ? 'de' : 'en'),
  fallbackLocale: 'en',
  messages: {
    de,
    en,
  },
})

export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}
