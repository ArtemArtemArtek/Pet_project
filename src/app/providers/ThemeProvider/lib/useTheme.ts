import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from '../ui/ThemeContext';

interface useThemeResult {
    theme: Themes,
    changeTheme: () => void
}

const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        // document.body.className = newTheme
    }
    return {
        theme,
        changeTheme
    }
}

export default useTheme