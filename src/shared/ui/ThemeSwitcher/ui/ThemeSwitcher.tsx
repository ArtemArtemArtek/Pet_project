import React, {FC} from "react";
import useTheme from "../../../../app/providers/ThemeProvider/lib/useTheme";
import {Button, ButtonTheme} from "../../Button/Button"
import ClassNameHelper from "../../../lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import DarkIcon from '../../../assets/icons/theme-dark 1.svg'
import LightIcon from '../../../assets/icons/theme-light 1.svg'
import {Themes} from '../../../../app/providers/ThemeProvider/ui/ThemeContext'
interface ThemeSwitcherProps{
    className?:string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps>=(props)=>{
    const {className} = props

    const {theme, changeTheme} = useTheme()
    
    return(
    <Button className={ClassNameHelper(cls.themeSwitcher, {}, [className])} theme={ButtonTheme.CLEAR}
    onClick={changeTheme}
    >
        {theme === Themes.LIGHT? <LightIcon/>: <DarkIcon/>}
    </Button>)
}