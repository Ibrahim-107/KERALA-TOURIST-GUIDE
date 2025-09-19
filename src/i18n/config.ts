import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from './locales/en.json';
import mlTranslations from './locales/ml.json';
import taTranslations from './locales/ta.json';
import arTranslations from './locales/ar.json';
import hiTranslations from './locales/hi.json';

const resources = {
  en: { translation: enTranslations },
  ml: { translation: mlTranslations },
  ta: { translation: taTranslations },
  ar: { translation: arTranslations },
  hi: { translation: hiTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;