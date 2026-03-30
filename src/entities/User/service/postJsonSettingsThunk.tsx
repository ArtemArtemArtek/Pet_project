import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkType } from '../../../app/providers/StoreProvider';
import { jsonSettingsType } from '../model/type/jsonSrttings';
import { jsonSettingsPatchData } from '../api/jsonSettingsEndpoints';
import { getUser } from '../../../entities/User';

export const postJsonSettings = createAsyncThunk<
    jsonSettingsType,
    jsonSettingsType,
    ThunkType<string>
>('user/jsonSettings', async (newJsonSettings, thunkAPI) => {

    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
        const { isAuth: authData } = getUser(getState());

        const currentJsonSettings = authData?.jsonSettings || null

        const response = await dispatch(jsonSettingsPatchData({
            userId: authData.id,
            jsonSettings: {
                ...newJsonSettings,
                ...currentJsonSettings
            }
        })).unwrap()

        if (!response) {
            return rejectWithValue('Ошибка сервера');
        }

        return response.jsonSettings
    } catch (err) {
        console.log(err);
        return rejectWithValue(err);
    }
});
