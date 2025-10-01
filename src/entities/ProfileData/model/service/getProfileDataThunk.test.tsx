import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { Dispatch } from '@reduxjs/toolkit';
import { fetchProfileData } from './getProfileDataThunk';
import axios from 'axios';
import { ProfileSchema } from '../type/profileSchema';
import { Cities, Country, Currency } from '../../../../shared/consts/enums';
import { user, userActions } from '../../../../entities/User';

jest.mock('axios')

const mockedAxios = jest.mocked(axios)
const testingState: DeepPartial<StateSchema> = {}

let dispatch: Dispatch
let state: () => StateSchema

const userProfile: DeepPartial<ProfileSchema> = {
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

describe('GetProfileDataThunk test', () => {
    beforeEach(() => {
        dispatch = jest.fn()
        state = jest.fn()
    })
    test('Sucsess response', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({userProfile}))
        const action = fetchProfileData()
        const response = await action(dispatch, state, undefined)
        console.log(response)

        expect(mockedAxios.get).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(3)
        // expect(response.payload).toEqual(userData)
        // expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(userData))
        expect(response.meta.requestStatus).toBe('fulfilled')
    })
})