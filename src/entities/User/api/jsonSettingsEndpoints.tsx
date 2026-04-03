import { rtkApi } from '../../../shared/api/RTKApi';
import { user } from '../model/type/userSchema';
import { jsonSettingsType } from '../model/type/jsonSrttings';

interface JsonSettingsProps{
    userId: number
    jsonSettings: jsonSettingsType
}

const JsonSettingsAPI = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        patchJsonSettings: build.mutation<user, JsonSettingsProps>({
            query: ({jsonSettings, userId}) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings
                },
            }),
        }),
        getUserByID: build.query<user, string>({
            query:(userId)=>({
                url: `/users/${userId}`,
                method: 'GET',
            })
        })
    }),
});

export const jsonSettingsPatchData = JsonSettingsAPI.endpoints.patchJsonSettings.initiate
export const getUserByID = JsonSettingsAPI.endpoints.getUserByID.initiate