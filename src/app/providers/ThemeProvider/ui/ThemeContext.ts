import { createContext } from "react";

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ContextProps {
    theme?: Themes,
    setTheme?: (theme: Themes) => void
}

export const ThemeContext = createContext<ContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'