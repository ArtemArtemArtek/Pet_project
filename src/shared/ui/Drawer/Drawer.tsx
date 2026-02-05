import React, { useEffect } from 'react';
import './Drawer.scss';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    position?: 'left' | 'right' | 'top' | 'bottom';
    children: React.ReactNode;
    title?: string;
    closeOnOutsideClick?: boolean;
    showCloseButton?: boolean;
    width?: string;
    height?: string;
    className?: string;
}

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    position = 'right',
    children,
    title,
    closeOnOutsideClick = true,
    showCloseButton = true,
    width = '400px',
    height = '100%',
    className = '',
}) => {
    // Блокировка скролла при открытии
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Закрытие по нажатию Escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    const getPositionStyles = () => {
        const baseStyle: React.CSSProperties = {};

        switch (position) {
            case 'left':
                baseStyle.width = width;
                baseStyle.height = height;
                baseStyle.left = isOpen ? 0 : `-${width}`;
                baseStyle.top = 0;
                break;
            case 'right':
                baseStyle.width = width;
                baseStyle.height = height;
                baseStyle.right = isOpen ? 0 : `-${width}`;
                baseStyle.top = 0;
                break;
            case 'top':
                baseStyle.width = '100%';
                baseStyle.height = height;
                baseStyle.top = isOpen ? 0 : `-${height}`;
                baseStyle.left = 0;
                break;
            case 'bottom':
                baseStyle.width = '100%';
                baseStyle.height = height;
                baseStyle.bottom = isOpen ? 0 : `-${height}`;
                baseStyle.left = 0;
                break;
        }

        return baseStyle;
    };

    if (!isOpen) return null;

    return (
        <div className="drawer-container">
            {/* Затемнение фона */}
            <div
                className={`drawer-backdrop ${isOpen ? 'backdrop-open' : ''}`}
                onClick={handleBackdropClick}
                data-testid="drawer-backdrop"
            />

            {/* Панель drawer */}
            <div
                className={`drawer ${position} ${isOpen ? 'open' : ''} ${className}`}
                style={getPositionStyles()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'drawer-title' : undefined}>
                {/* Заголовок */}
                {(title || showCloseButton) && (
                    <div className="drawer-header">
                        {title && (
                            <h2
                                id="drawer-title"
                                className="drawer-title">
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                className="drawer-close-button"
                                onClick={onClose}
                                aria-label="Закрыть">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Контент */}
                <div className="drawer-content">{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
