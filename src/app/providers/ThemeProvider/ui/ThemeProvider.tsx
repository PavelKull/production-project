<<<<<<< HEAD
import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
=======
import { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

<<<<<<< HEAD
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
=======
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
