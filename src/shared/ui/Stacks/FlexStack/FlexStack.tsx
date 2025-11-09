import React, { FC, ReactNode } from "react";
import cls from './FlexStack.module.scss'
import ClassNameHelper from "../../../../shared/lib/classNames/classNames";

interface FlexStackProps{
    className?: string
    children: ReactNode
    gap: string
    justifyContent: string
    allignItem: allignItemtype
}

export type allignItemtype = 'center'| 'baseline'|'end'

export const FlexStack:FC<FlexStackProps>=(props)=>{
    
    const {
        children, 
        className, 
        gap='10px', 
        justifyContent='center',
        allignItem='center'
    } = props

    const allignItemClasses:Record<allignItemtype, string>={
        baseline: cls.alignItemBaseline,
        center: cls.alignItemCenter,
        end: cls.alignItemEnd
    }
    
    const classes =[
        className,
        allignItemClasses[allignItem]
    ]

    return(
        <div className={ClassNameHelper(cls.elementWrapper,{}, classes)}>
            {children}
        </div>
    )
}