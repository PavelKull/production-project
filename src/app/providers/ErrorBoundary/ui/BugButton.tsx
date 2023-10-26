<<<<<<< HEAD
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
=======
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

<<<<<<< HEAD
    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
=======
    return <Button onClick={onThrow}>{t('throw error')}</Button>;
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
};
