import { useCallback, useEffect, useRef } from "react";

//eslint-disable-next-line
export function useThrottle(callback: (...args:any[])=>void, delay: number){
    
    const isDisabled = useRef(false)
    const timeoutRef = useRef(null);

    console.log('Throttle')
    //eslint-disable-next-line
    const throttleCallback=useCallback((...args: any[])=>{
        if(!isDisabled.current){
            callback(...args)
            isDisabled.current = true

            timeoutRef.current = setTimeout(()=>{
                isDisabled.current = false
            }, delay)
        }
    },[callback, delay])

    useEffect(()=>{
        return(clearTimeout(timeoutRef.current)) 
    }, [])

    
    return throttleCallback
}