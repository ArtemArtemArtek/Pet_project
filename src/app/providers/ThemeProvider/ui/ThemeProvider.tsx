import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from './ThemeContext';

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

interface ThemeProviderProps {
    initialTheme?: Themes;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    
    const {children, initialTheme}=props

    const [theme, setTheme] = useState<Themes>(initialTheme||currentTheme)
    
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider