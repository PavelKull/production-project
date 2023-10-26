import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
<<<<<<< HEAD
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
=======

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        fallbackLng: 'ru',
        debug: !!__IS_DEV__,

        interpolation: {
            escapeValue: false,
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        },
    });

export default i18n;
