<<<<<<< HEAD
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};
=======
import { BugButton } from 'app/providers/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');
    return <div>{t('Главная страница')}</div>;
}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

export default MainPage;
