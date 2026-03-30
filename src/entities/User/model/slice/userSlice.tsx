import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { userSchema, user } from '../type/userSchema';
import { LOCAL_USER_AUTH_KEY } from '../../../../shared/consts/consts';
import { setEnabledFlags } from '../../../../shared/lib/enabledFlags';
import type { EnabledFlags } from '../../../../shared/types'
import { postJsonSettings } from '../../service/postJsonSettingsThunk';
import { jsonSettingsType } from '../type/jsonSrttings';

const initialState: userSchema = {
    isAuth: undefined,
    init: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<user>) => {
            state.isAuth = action.payload;
            setEnabledFlags(action.payload.enabledFlags)
        },
        initUserData: (state) => {
            const data = localStorage.getItem(LOCAL_USER_AUTH_KEY);
            if (data) {
                const json = JSON.parse(data) as user
                state.isAuth = json;
                setEnabledFlags(json.enabledFlags)
            }
            state.init = true;
        },
        logout: (state) => {
            state.isAuth = undefined;
            localStorage.removeItem(LOCAL_USER_AUTH_KEY);
            setEnabledFlags({} as EnabledFlags)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                postJsonSettings.fulfilled,
                (state, { payload }: PayloadAction<jsonSettingsType>) => {
                    if (state.isAuth) {
                        state.isAuth.jsonSettings = payload
                    };
                },
            )
        // .addCase(postJsonSettings.rejected, (state, action) => {
        //     state.error = action.error.message;
        //     state.isLoading = false;
        // })
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
