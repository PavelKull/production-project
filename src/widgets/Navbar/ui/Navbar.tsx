import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

<<<<<<< HEAD
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
=======
export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Главная
                    {' '}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    О сайте
                    {' '}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
                </AppLink>
            </div>
        </div>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
