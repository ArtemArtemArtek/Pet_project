import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userSchema } from "src/entities/User"
import { ThunkType } from '../../../../app/providers/StoreProvider';
import { UserProfile } from '../type/profileSchema';
import { getProfileData } from '../selectors/getProfileData';
import { validateProfileData } from './validateProfileData/validateProfileData';
import { getUser } from '../../../../entities/User';

export const updateProfileData = createAsyncThunk<
    UserProfile,
    undefined,
    ThunkType<string>
>('profile/updateUserData', async (_, thunkAPI) => {

    const { extra, rejectWithValue, getState } = thunkAPI;
    try {
        const { data: profileData } = getProfileData(getState());
        const { isAuth: authData } = getUser(getState());

        const validateError = validateProfileData(profileData);
  
        if (Object.keys(validateError).length) {
            return rejectWithValue(validateError);
        }
        const response = await extra.api.put<UserProfile>(
            `/profile/${authData.id}`,
            profileData,
        );
        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue(err);
    }
});
