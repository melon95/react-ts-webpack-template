import { getLng } from '@locales'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as enUS from './enUS'
import * as zhCN from './zhCN'

const resources = {
  en: enUS,
  zh: zhCN
}

void i18n.use(initReactI18next).init({
  resources,
  lng: getLng(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})
