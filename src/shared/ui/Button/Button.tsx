<<<<<<< HEAD
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
=======
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
<<<<<<< HEAD
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
=======
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
<<<<<<< HEAD
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
=======
        className, children, theme, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
            {...otherProps}
        >
            {children}
        </button>
    );
};
