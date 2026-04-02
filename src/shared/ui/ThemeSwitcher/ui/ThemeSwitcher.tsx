import React, { FC, useCallback } from 'react';
import useTheme from '../../../../app/providers/ThemeProvider/lib/useTheme';
import { Button, ButtonTheme } from '../../Button/Button';
import ClassNameHelper from '../../../lib/classNames/classNames';
import DarkIcon from '../../../assets/icons/theme-dark 1.svg';
import LightIcon from '../../../assets/icons/theme-light 1.svg';
import OrangeIcon from '../../../assets/icons/theme-orange 1.svg';
import { Themes } from '../../../../app/providers/ThemeProvider/ui/ThemeContext';
import { postJsonSettings } from '../../../../entities/User/service/postJsonSettingsThunk';
import { useDispatch } from 'react-redux';
interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = React.memo(() => {

    const dispatch = useDispatch()

    const example = useCallback((defTheme)=>{
        //@ts-ignore
        dispatch(postJsonSettings({theme:defTheme}))
        // alert(defTheme)
    }, [])

    const { theme, changeTheme } = useTheme(example);

    return (
        <Button
            className={ClassNameHelper('', {}, [])}
            theme={ButtonTheme.CLEAR}
            onClick={changeTheme}>
            {theme === Themes.LIGHT ? (
                <LightIcon />
            ) : theme === Themes.DARK ? (
                <DarkIcon />
            ) : (
                <OrangeIcon />
            )}
        </Button>
    );
});
