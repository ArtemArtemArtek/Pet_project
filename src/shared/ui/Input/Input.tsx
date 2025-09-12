import React, { InputHTMLAttributes } from "react";
import ClassNameHelper from "../../../shared/lib/classNames/classNames";
import cls from './Input.module.scss'

export enum InputThemes {
    CLEAR = "clear",
    DRFAULT = "default"
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    theme?: InputThemes
    placeholder?: string

}

export const Input: React.FC<InputProps> = React.memo((props) => {

    const { 
        className, 
        theme, 
        placeholder = '',
        onChange } = props

    const mods: Record<string, boolean> = {
        [cls[theme]]: true
    }

    return (
        <input
            className={ClassNameHelper(cls.input_style, mods, [className])}
            placeholder={placeholder}
            onChange={onChange}
        />

    )
})