import React, { FC, ReactNode } from 'react';
import cls from './FlexStack.module.scss';
import ClassNameHelper from '../../../../shared/lib/classNames/classNames';

export interface FlexStackProps {
    className?: string;
    children: ReactNode;
    gap?: gapType;
    justifyContent?: justifyContentType;
    allignItem?: allignItemtype;
    flexDirection?: flexDirectionType;
}

export type allignItemtype = 'center' | 'baseline' | 'end';
export type flexDirectionType = 'row' | 'column';

export type gapType = '8' | '16' | '20' | '24';
export type justifyContentType = 'center' | 'space-between' | 'end' | 'start';

export const FlexStack: FC<FlexStackProps> = (props) => {
    const {
        children,
        className,
        gap = '16',
        justifyContent = 'center',
        allignItem = 'center',
        flexDirection = 'row',
    } = props;

    const allignItemClasses: Record<allignItemtype, string> = {
        baseline: cls.alignItemBaseline,
        center: cls.alignItemCenter,
        end: cls.alignItemEnd,
    };

    const gapClasses: Record<gapType, string> = {
        '8': cls.gap8,
        '16': cls.gap16,
        '20': cls.gap20,
        '24': cls.gap24,
    };

    const flexDirectionClasses: Record<flexDirectionType, string> = {
        column: cls.flexDirectionColumn,
        row: cls.flexDirectionRow,
    };

    const justifyContentClasses: Record<justifyContentType, string> = {
        center: cls.justifyContentCenter,
        start: cls.justifyContentStart,
        'space-between': cls.justifyContentSpaceBetween,
        end: cls.justifyContentEnd,
    };

    const classes = [
        className,
        allignItemClasses[allignItem],
        gapClasses[gap],
        justifyContentClasses[justifyContent],
        flexDirectionClasses[flexDirection],
    ];

    return (
        <div className={ClassNameHelper(cls.elementWrapper, {}, classes)}>
            {children}
        </div>
    );
};
