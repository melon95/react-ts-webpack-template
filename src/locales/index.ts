import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as enUS from './enUS'
import * as zhCN from './zhCN'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  resources: {
    en: enUS,
    zh: zhCN
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})
