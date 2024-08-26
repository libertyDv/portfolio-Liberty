import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/enTraduccion.json'
import esTranslation from './locales/espTraduccion.json'



const resources = {
    en: {
        translation: enTranslation,
    },
    es: {
        translation: esTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // Idioma por defecto
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
