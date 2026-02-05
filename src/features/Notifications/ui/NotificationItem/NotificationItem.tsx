import React from 'react';
import { Avatar, AvatarSize } from '../../../../shared/ui/Avatar/Avatar';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import cls from './NotificationItem.module.scss';

export interface NotificationItemData {
    title: string;
    text: string;
    href?: string;
    avatar?: string;
}

export interface NotificationItemProps {
    item: NotificationItemData;
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {
    const { item } = props;

    return (
        <div className={cls.notification_wrapper}>
            <div className={cls.title}>{item.title}</div>
            <div className={cls.notification_body_wrapper}>
                {item.avatar && (
                    <Avatar
                        src={item.avatar}
                        size={AvatarSize.SMALL}
                    />
                )}
                <div>{item.text}</div>
            </div>
            {item.href ? (
                <AppLink
                    className={cls.link_style}
                    to={item.href}>
                    Смотреть далее
                </AppLink>
            ) : null}
        </div>
    );
};
