import React, { useEffect } from "react";

interface useInfiniteScrollProps {
    callback?: () => void
    triggerRef: React.MutableRefObject<HTMLElement>
    wrapperRef: React.MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: useInfiniteScrollProps) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        
        const options = {
            root: wrapperElement,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entities]) => {
            if (entities.isIntersecting) {
                
                callback()
            }
        }, options);

        observer.observe(triggerElement)

        return () => {
            observer.unobserve(triggerElement)
        }
    }, [triggerRef, wrapperRef, callback])
}