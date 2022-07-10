import i18 from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import { Ar } from './Ar';
import { He } from './He';
import { En } from './En';
import { Fr } from './Fr';
import { Ru } from './Ru';


const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => cb('he'),
    init: () => { },
    cacheUserLanguage: () => { },
};

i18
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            he: He,
            en: En,
            ar: Ar,
            fr: Fr,
            ru: Ru
        },
        //language to use if translations in user language are not available
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react!!
        }
    });

export default i18;