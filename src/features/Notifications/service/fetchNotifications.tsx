import { rtkApi } from '../../../shared/api/RTKApi';
import { NotificationItemData } from '../ui/NotificationItem/NotificationItem';

const NotificaationsAPI = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationItemData[], void>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

// const {useGetNotificationsQuery} = NotificaationsAPI
export const useGetNotifications = NotificaationsAPI.useGetNotificationsQuery;
