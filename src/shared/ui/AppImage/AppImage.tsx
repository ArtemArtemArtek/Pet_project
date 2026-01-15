import React, { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    fallback?: ReactElement
    errorFallback?: ReactElement
    className?: string
    alt?: string
}

export const AppImage: React.FC<AppImageProps> = (props) => {

    const {
        errorFallback,
        className,
        fallback,
        src,
        alt = 'image',
        ...otherProps
    } = props

    const [isLoading, setIsLoading] = useState(true)
    const [isHasError, setIsHasError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => {
            setIsLoading(false)
        }
        img.onerror = () => {
            setIsLoading(false)
            setIsHasError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (isHasError && errorFallback) {
        return errorFallback
    }

    return (
        <img alt={alt} className={className} src={src} {...otherProps} />
    )
}