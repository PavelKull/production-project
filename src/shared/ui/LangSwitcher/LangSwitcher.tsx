import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
=======
import { Button, ThemeButton } from '../Button/Button';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

interface LangSwitcherProps {
    className?: string;
}

<<<<<<< HEAD
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
=======
export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames(' ', {}, [className])}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
