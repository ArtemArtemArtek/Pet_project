import { getJsonSettings, getUser } from '../../../../entities/User';
import { FC, ReactNode, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Themes;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const jsonSettings = useSelector(getJsonSettings);
    const [isReady, setIsReady] = useState(false);

    console.log('jsonSettings',jsonSettings)
    
    useEffect(() => {
        if (jsonSettings &&!isReady) {
            setTheme(jsonSettings.theme)
            setIsReady(true);
        }

    }, [jsonSettings]);

    // let currentTheme = null

    // if(isReady){
    //     currentTheme =jsonSettings?.theme ??((localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT)
    // }
    
    const [theme, setTheme] = useState<Themes>(initialTheme || jsonSettings?.theme || Themes.LIGHT);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
