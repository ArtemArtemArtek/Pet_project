import React, { ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import {
    NotificationItem,
    NotificationItemData,
} from '../NotificationItem/NotificationItem';
import ClassNameHelper from '../../../../shared/lib/classNames/classNames';
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton';
import cls from './BrowserView.module.scss';

interface BrowserViewProps {
    isLoading: boolean;
    notifictionsData: NotificationItemData[];
    trigger: ReactNode;
    className?: string;
}

export const BrowserView: React.FC<BrowserViewProps> = (props) => {
    const { isLoading, notifictionsData, trigger, className } = props;

    return (
        <Popover className={ClassNameHelper(cls.popoverBody, {}, [className])}>
            <Popover.Button className={cls.popoverButton}>
                {trigger}
            </Popover.Button>

            <Popover.Panel className={cls.popoverPanel}>
                {isLoading ? (
                    <Skeleton />
                ) : (
                    <div className={cls.notificationsWrapper}>
                        {notifictionsData.map((element) => (
                            <NotificationItem
                                key={element.title}
                                item={element}
                            />
                        ))}
                    </div>
                )}
            </Popover.Panel>
        </Popover>
    );
};
