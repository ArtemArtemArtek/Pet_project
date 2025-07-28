import ClassNameHelper  from '../../lib/classNames/classNames';
import cls from './Button.module.scss';
// import {Link, LinkProps} from "react-router-dom";
import {FC, ButtonHTMLAttributes} from "react";
// import React from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme ,
        ...otherProps
    } = props;

    return (
        <button
            className={ClassNameHelper(cls.Button, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

