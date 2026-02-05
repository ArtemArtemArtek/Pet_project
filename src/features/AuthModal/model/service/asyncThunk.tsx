import { createAsyncThunk } from '@reduxjs/toolkit';
import { user, userActions } from '../../../../entities/User';
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts';
import { ThunkType } from '../../../../app/providers/StoreProvider';

export interface useData {
    password: string;
    username: string;
}

export const authUser = createAsyncThunk<user, useData, ThunkType<string>>(
    'login/authUser',
    async (userData: useData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<user>('/login', userData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(
                LOCAL_USER_AUTH_KEY,
                JSON.stringify(response.data),
            );
            dispatch(userActions.setUserData(response.data));
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    },
);
