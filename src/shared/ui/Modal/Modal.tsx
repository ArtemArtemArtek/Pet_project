import React, { Children, FC, ReactNode, useRef, useState } from "react";
import cls from './Modal.module.scss'
import ClassNameHelper from "../../../shared/lib/classNames/classNames";
import useTheme from "../../../app/providers/ThemeProvider/lib/useTheme";

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

    const CloseModal = () => {
        if (setOpen) {
            setClosing(true)
            timerRef.current = setTimeout(() => {
                setOpen()
                setClosing(false)
            }, 1500)
        }
    }

    return (
        <div className={ClassNameHelper(cls.wrapper, mods, [className])}>
            <div className={cls.overlay} onClick={CloseModal}>
                <div className={ClassNameHelper(cls.content)}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal