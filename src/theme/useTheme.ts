import { FC, useMemo, useState } from 'react';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from './ThemeContext';

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
    }
    return {
        theme,
        changeTheme
    }
}

export default useTheme