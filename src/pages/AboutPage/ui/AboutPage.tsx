import React from 'react';
import { useTranslation } from 'react-i18next';

<<<<<<< HEAD
const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};
=======
function AboutPage() {
    const { t } = useTranslation('about');
    return <div>{t('О сайте')}</div>;
}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

export default AboutPage;
