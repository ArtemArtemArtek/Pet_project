import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkType } from '../../../app/providers/StoreProvider';
import { user } from '../../../entities/User';
import { LOCAL_USER_AUTH_KEY } from '../../../shared/consts/consts';
import { getUserByID } from '../api/jsonSettingsEndpoints';

export const initUser = createAsyncThunk<
    user,
    void,
    ThunkType<string>
>('user/initUser', async (_, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userID = localStorage.getItem(LOCAL_USER_AUTH_KEY)

    if (!userID) {
        return rejectWithValue('')
    }

    try {
        const response = await dispatch(getUserByID(userID)).unwrap()
        if (!response) {
            return rejectWithValue('Ошибка сервера');
        }

        return response
    } catch (err) {
        console.log(err);
        return rejectWithValue(err);
    }
});
