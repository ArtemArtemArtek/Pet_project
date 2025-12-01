import React, { ReactNode } from 'react'
import { Popover } from '@headlessui/react'
import { VStack } from '../../Stacks'
import { NotificationItem, NotificationItemProps, NotificationItemData } from '../NotificationItem/NotificationItem'

interface NotificationMenuProps{
    trigger: ReactNode
    menuItems: NotificationItemData[]
}

export const NotificationMenu:React.FC<NotificationMenuProps> = (props) => {
    
    const {menuItems, trigger} = props

    return (
        <Popover className="relative">
            <Popover.Button>{trigger}</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <VStack justifyContent='start' allignItem='baseline'>
                    {menuItems.map((element)=>(
                        <NotificationItem item={element}/>
                    ))}
                    {/* <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a> */}
                </VStack>
            </Popover.Panel>
        </Popover>
    )
}