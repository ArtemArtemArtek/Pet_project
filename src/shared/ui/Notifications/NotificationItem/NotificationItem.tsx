import React from "react";
import { Avatar, AvatarSize } from "../../Avatar/Avatar";
import { AppLink } from "../../AppLink/AppLink";
// import cls from './NotificationItem.module.scss'

export interface NotificationItemData {
    title: string
    text: string
    href?: string
    avatar?: string
}

export interface NotificationItemProps {
    item: NotificationItemData
}

export const NotificationItem: React.FC<NotificationItemProps> = (props) => {

    const {
        item
    } = props

    return (

        <div >
            <div>{item.title}</div>
            <div>
                <Avatar src={item.avatar} size={AvatarSize.SMALL} />
                <div>{item.text}</div>
            </div>
            {item.href ? <AppLink to={item.href}>Смотреть далее</AppLink> : null}
        </div>
    )
}