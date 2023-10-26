<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        resources: { ru: { translations: {} } },
    });

export default i18n;
=======
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',

    debug: false,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    resources: { ru: { translations: {} } },
});

export default i18n;
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
