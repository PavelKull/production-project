<<<<<<< HEAD
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
=======
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

<<<<<<< HEAD
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
=======
export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
<<<<<<< HEAD

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
=======
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
<<<<<<< HEAD
                toggle
=======
                {t('toggle')}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
