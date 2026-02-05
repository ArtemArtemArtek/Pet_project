import React from 'react';
import ClassNameHelper from '../../../shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    borderRadius?: string;
    height?: string;
    width?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
    const {
        borderRadius = 'none',
        className,
        width = '20%',
        height = '5%',
    } = props;

    return (
        <div
            style={{ borderRadius: borderRadius, height: height, width: width }}
            className={ClassNameHelper(cls.skeleton, {}, [className])}></div>
    );
};
