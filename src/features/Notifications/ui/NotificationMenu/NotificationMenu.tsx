import React, { ReactNode } from 'react';
import { useGetNotifications } from '../../service/fetchNotifications';
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserView as BrowserViewComponent } from '../BrowserView/BrowserView';
import { MobileView as MobileViewComponent } from '../MobileView/MobileView';
import { AnimationProvider } from '../../../../shared/lib/animationProvider';

interface NotificationMenuProps {
    trigger: ReactNode;
    className?: string;
}

export const NotificationMenu: React.FC<NotificationMenuProps> = (props) => {
    const { data: notifictionsData, isLoading } = useGetNotifications(null, {
        pollingInterval: 5000,
    });

    const { trigger, className } = props;

    return (
        <div>
            <MobileView>
                <AnimationProvider>
                    <MobileViewComponent
                        isLoading={isLoading}
                        notifictionsData={notifictionsData}
                        trigger={trigger}
                    />
                </AnimationProvider>
            </MobileView>
            <BrowserView>
                <BrowserViewComponent
                    isLoading={isLoading}
                    notifictionsData={notifictionsData}
                    trigger={trigger}
                    className={className}
                />
            </BrowserView>
        </div>
    );
};
