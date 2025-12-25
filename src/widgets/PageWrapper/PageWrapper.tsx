import React, { ReactNode, useRef, useEffect } from "react"
import cls from './PageWrapper.module.scss'
import ClassNameHelper from "../../shared/lib/classNames/classNames"
import { useInfiniteScroll } from "../../shared/lib/useInfiniteScroll/useInfiniteScroll"
import { saveScrollActions, getScrollData } from "../SaveScroll"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useAppDispatch } from "../../app/providers/StoreProvider/config/store"
import { useThrottle } from "../../shared/hooks/useThrottle"

interface PageWrapperProps {
    className?: string
    children: ReactNode
    onScrolledEnd?: () => void
}

export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
    const { children, className, onScrolledEnd } = props
    const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const {scroll} = useSelector(getScrollData)


    useInfiniteScroll({
        callback: onScrolledEnd,
        triggerRef: triggerRef,
        wrapperRef: wrapperRef
    })

    useEffect(()=>{
        wrapperRef.current.scrollTop = scroll[pathname]
        //eslint-disable-next-line
    },[])

    const ScrollFunction = useThrottle((event: React.UIEvent<HTMLElement>) => {
        console.log(event.currentTarget.scrollTop)
        dispatch(saveScrollActions.setScroll({
            path: pathname,
            scroll: event.currentTarget.scrollTop
        }))

    }, 500)

    return (
        <section
            onScroll={ScrollFunction}
            ref={wrapperRef}
            className={ClassNameHelper(cls.pageWrapper, {}, [className])}
        >
            {children}
            <div className={cls.trigger} ref={triggerRef} />
        </section>
    )
}