import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_SERVER_URL, LOCAL_USER_AUTH_KEY } from '../consts/consts';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_SERVER_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_USER_AUTH_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
