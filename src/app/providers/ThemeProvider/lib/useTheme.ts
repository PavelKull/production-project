import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
<<<<<<< HEAD
    toggleTheme: () => void;
    theme: Theme;
=======
  toggleTheme: () => void
  theme: Theme
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
<<<<<<< HEAD

=======
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
<<<<<<< HEAD

    return {
        theme,
        toggleTheme,
    };
=======
    return { toggleTheme, theme };
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
}
