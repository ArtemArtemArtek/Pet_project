import React, { useEffect } from 'react';
import { useCallback, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timer = useRef() as React.MutableRefObject<any>;

    useEffect(() => {
        return clearTimeout(timer.current);
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callback();
            }, delay);
        },
        [callback, delay],
    );
}
