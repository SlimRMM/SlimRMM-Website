import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'
import es from './locales/es.json'

export type SupportedLocale = 'de' | 'en' | 'es'

const savedLocale = typeof localStorage !== 'undefined'
  ? localStorage.getItem('locale') as SupportedLocale
  : null

const browserLocale = typeof navigator !== 'undefined'
  ? navigator.language.split('-')[0] as SupportedLocale
  : 'de'

const getDefaultLocale = (): SupportedLocale => {
  if (savedLocale && ['de', 'en', 'es'].includes(savedLocale)) {
    return savedLocale
  }
  if (['de', 'en', 'es'].includes(browserLocale)) {
    return browserLocale
  }
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    de,
    en,
    es,
  },
})

export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale
}

export const supportedLocales: { code: SupportedLocale; name: string }[] = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
]
