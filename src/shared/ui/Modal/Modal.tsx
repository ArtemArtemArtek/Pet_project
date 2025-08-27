import React, { Children, FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import cls from './Modal.module.scss'
import ClassNameHelper from "../../../shared/lib/classNames/classNames";
import useTheme from "../../../app/providers/ThemeProvider/lib/useTheme";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    children?: ReactNode
    className?: string
    opened?: boolean
    setOpen?: () => void
}

const Modal: FC<ModalProps> = (props) => {
    const { children, className, opened, setOpen } = props

    const { theme } = useTheme()

    const [closing, setClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.opened]: opened,
        [cls.isClosing]: closing
    }

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const CloseModal = useCallback(() => {
        if (setOpen) {
            setClosing(true)
            timerRef.current = setTimeout(() => {
                setOpen()
                setClosing(false)
            }, 300)
        }
    },[setOpen])

    const onKeyDownClick = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            CloseModal()
        }
    }, [CloseModal])


    useEffect(() => {
        if(opened){
            window.addEventListener('keydown', onKeyDownClick)
        }else{
            window.removeEventListener('keydown', onKeyDownClick)
        }
        return () => {
            clearTimeout(timerRef.current);
        }

    }, [opened, onKeyDownClick])

    return (
        <Portal>
        <div className={ClassNameHelper(cls.wrapper, mods, [className])}>
            <div className={cls.overlay} onClick={CloseModal}>
                <div className={ClassNameHelper(cls.content)} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
        </Portal>
    )
}

export default Modal