import React, { ReactNode } from 'react'
import { Popover } from '@headlessui/react'
import { VStack } from '../../../../shared/ui/Stacks'
import { NotificationItem, NotificationItemProps, NotificationItemData } from '../NotificationItem/NotificationItem'
import { useGetNotifications } from '../../service/fetchNotifications'
import ClassNameHelper from '../../../../shared/lib/classNames/classNames'
import cls from './NotificationMenu.module.scss'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'

interface NotificationMenuProps{
    trigger: ReactNode
    className?: string
    // menuItems: NotificationItemData[]
}

export const NotificationMenu:React.FC<NotificationMenuProps> = (props) => {
    
    const {data: notifictionsData, isLoading} = useGetNotifications(null, {pollingInterval: 5000})

    const {trigger, className} = props

    return (
        <Popover className={ClassNameHelper(cls.popoverBody, {} , [className])}>
            <Popover.Button className={cls.popoverButton}>{trigger}</Popover.Button>

            <Popover.Panel className={cls.popoverPanel}>
            {isLoading?            
            <Skeleton />:
                // <VStack justifyContent='start' allignItem='baseline'>
                <div className={cls.notificationsWrapper}>
                    {notifictionsData.map((element)=>(
                        <NotificationItem item={element}/>
                    ))}
                    </div>
                // </VStack>
            }
            </Popover.Panel>
        </Popover>
    )
}