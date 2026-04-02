import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Themes,
    ThemeContext,
} from '../ui/ThemeContext';

interface useThemeResult {
    theme: Themes;
    changeTheme: () => void;
}

//useTheme работает по дефолту с localStorage, однако 
//может принимать калбек с иной обработкой темы

const useTheme = (callback? :(theme: Themes) => void): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);


    const changeTheme = () => {
        let newTheme: Themes;
        switch (theme) {
            case Themes.DARK:
                newTheme = Themes.LIGHT;
                break;
            case Themes.LIGHT:
                newTheme = Themes.ORANGE;
                break;
            case Themes.ORANGE:
                newTheme = Themes.DARK;
                break;
            default:
                newTheme = Themes.LIGHT;
        }
        setTheme?.(newTheme);
        
        callback?callback(newTheme):localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Themes.LIGHT,
        changeTheme
    };
};

export default useTheme;
