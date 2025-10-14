import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { Dispatch } from '@reduxjs/toolkit';
import { fetchProfileData } from './getProfileDataThunk';
import axios from 'axios';
import { ProfileSchema } from '../type/profileSchema';
import { Cities, Country, Currency } from '../../../../shared/consts/enums';
import { user, userActions } from '../../../../entities/User';
import { $api } from '../../../../shared/api/instanceApi';


jest.mock('../../../../shared/api/instanceApi', () => ({
    $api: {
        get: jest.fn(),
    },
}))

const mockedApi = $api as jest.Mocked<typeof $api>

let dispatch: Dispatch
let state: () => StateSchema


const mockUserProfile: DeepPartial<ProfileSchema> = {
    data: {
        age: '21',
        avatar: 'testUrl',
        city: Cities.Habarovsk,
        country: Country.Belarus,
        currency: Currency.RUB,
        firstname: 'dsad',
        lastname: 'dsdwwwwww',
        username: 'dddawawawaaaaaa'
    }
}
describe('fetchProfileData thunk', () => {
    beforeEach(() => {
        jest.clearAllMocks()
        dispatch = jest.fn()    
        state = jest.fn()
    })

    test('should dispatch fulfilled action when API call is successful', async () => {
        mockedApi.get.mockResolvedValueOnce({ data: mockUserProfile })
        const extra = { api: mockedApi }

        const response = await fetchProfileData('1')(dispatch, state, extra)

        expect(mockedApi.get).toHaveBeenCalledWith('/profile')
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(response.payload).toEqual(mockUserProfile)
        expect(response.meta.requestStatus).toBe('fulfilled')

    })

})