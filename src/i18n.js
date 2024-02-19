// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './languages/translations/en.json';
import ruTranslations from './languages/translations/ru.json';

const storedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
      // Add translations for other languages as needed
    },
    lng: storedLanguage || 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
