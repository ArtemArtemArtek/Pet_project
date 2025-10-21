import React, { ReactNode, useRef } from "react"
import cls from './PageWrapper.module.scss'
import ClassNameHelper from "../../lib/classNames/classNames"
import { useInfiniteScroll } from "../../../shared/lib/useInfiniteScroll/useInfiniteScroll"

interface PageWrapperProps{
    className?: string
    children: ReactNode
    onScrolledEnd?:()=>void
}

export const PageWrapper:React.FC<PageWrapperProps>=(props)=>{
    const {children, className, onScrolledEnd}=props
    const triggerRef = useRef() 
    const wrapperRef = useRef()

    useInfiniteScroll({
        callback:onScrolledEnd,
        triggerRef: triggerRef,
        wrapperRef:wrapperRef
    })

    return(
        <section ref={wrapperRef} className={ClassNameHelper(cls.pageWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef}/>
        </section>
    )
}