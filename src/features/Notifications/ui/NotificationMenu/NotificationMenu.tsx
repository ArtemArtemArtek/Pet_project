import React, { ReactNode, useState } from 'react'
import { Popover } from '@headlessui/react'
import { VStack } from '../../../../shared/ui/Stacks'
import { NotificationItem, NotificationItemProps, NotificationItemData } from '../NotificationItem/NotificationItem'
import { useGetNotifications } from '../../service/fetchNotifications'
import Drawer from '../../../../shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect';
import ClassNameHelper from '../../../../shared/lib/classNames/classNames'
import cls from './NotificationMenu.module.scss'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'

interface NotificationMenuProps {
    trigger: ReactNode
    className?: string
    // menuItems: NotificationItemData[]
}

export const NotificationMenu: React.FC<NotificationMenuProps> = (props) => {

    const { data: notifictionsData, isLoading } = useGetNotifications(null, { pollingInterval: 5000 })

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState<'bottom'>('bottom');
    const { trigger, className } = props

    return (
        <div>
            <MobileView>
                <button className={cls.mobile_button} onClick={() => {
                    setDrawerPosition('bottom');
                    setIsDrawerOpen(true);
                }}>
                    {trigger}
                </button>
                <Drawer title="Уведомления" height="70%"
                    position={drawerPosition} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                               {isLoading ?
                            <Skeleton /> :
                            // <VStack justifyContent='start' allignItem='baseline'>
                            <div >
                                {notifictionsData.map((element) => (
                                    <NotificationItem item={element} />
                                ))}
                            </div>
                            // </VStack>
                        }
                </Drawer>
            </MobileView>
            <BrowserView>
                <Popover className={ClassNameHelper(cls.popoverBody, {}, [className])}>
                    <Popover.Button className={cls.popoverButton}>{trigger}</Popover.Button>

                    <Popover.Panel className={cls.popoverPanel}>
                        {isLoading ?
                            <Skeleton /> :
                            // <VStack justifyContent='start' allignItem='baseline'>
                            <div className={cls.notificationsWrapper}>
                                {notifictionsData.map((element) => (
                                    <NotificationItem item={element} />
                                ))}
                            </div>
                            // </VStack>
                        }
                    </Popover.Panel>
                </Popover>
            </BrowserView>
        </div>
    )
}