import React, { FC } from 'react';
import ClassNameHelper from '../../../shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={ClassNameHelper(cls.wrapperLoader)}>
            <div className={ClassNameHelper(cls.loader, {}, [className])} />
        </div>
    );
};
