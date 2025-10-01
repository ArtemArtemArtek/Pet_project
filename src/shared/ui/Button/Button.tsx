import ClassNameHelper  from '../../lib/classNames/classNames';
import cls from './Button.module.scss';
// import {Link, LinkProps} from "react-router-dom";
import {FC, ButtonHTMLAttributes} from "react";
import React from 'react';
// import React from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize{
    SIZE_L = 'size_l',
    SIZE_M = 'size_m',
    SIZE_XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize,
    square?: boolean,
    half_square?: boolean
}


export const Button: FC<ButtonProps> = React.memo((props) => {
    const {
        className,
        children,
        theme,
        size=ButtonSize.SIZE_M,
        square,
        half_square,
        ...otherProps
    } = props;


    const mods: Record<string, boolean> ={
    [cls[theme]]: true,
    [cls[size]]: true,
    [cls.square]:square,
    [cls.half_square]: half_square 
} 

    return (
        <button
            className={ClassNameHelper(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

