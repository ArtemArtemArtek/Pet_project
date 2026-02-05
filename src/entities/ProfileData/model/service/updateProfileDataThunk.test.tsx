import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '../../../../app/providers/StoreProvider/';
import { Dispatch } from '@reduxjs/toolkit';
import { Cities, Country, Currency } from '../../../../shared/consts/enums';
import { $api } from '../../../../shared/api/instanceApi';
import { updateProfileData } from './updateProfileDataThunk';
import { UserProfile } from '../type/profileSchema';

jest.mock('../../../../shared/api/instanceApi', () => ({
    $api: {
        put: jest.fn(),
    },
}));

const mockedApi = $api as jest.Mocked<typeof $api>;

let dispatch: Dispatch;
let state: () => StateSchema;

const mockUserProfile: UserProfile = {
    age: '21',
    avatar: 'testUrl',
    city: Cities.Habarovsk,
    country: Country.Belarus,
    currency: Currency.RUB,
    firstname: 'dsad',
    lastname: 'dsdwwwwww',
    username: 'dddawawawaaaaaa',
};
describe('updateProfileData thunk', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        dispatch = jest.fn();
        state = jest.fn();
    });

    test('Default update data', async () => {
        mockedApi.put.mockResolvedValueOnce({ data: mockUserProfile });
        const extra = { api: mockedApi };

        //@ts-ignore
        const response = await updateProfileData(mockUserProfile)(
            dispatch,
            state,
            extra,
        );

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(response.payload).toEqual(mockUserProfile);
        expect(response.meta.requestStatus).toBe('fulfilled');
    });
    test('Update profile with wrong data', async () => {
        const mockUserProfile2: UserProfile = {
            age: '2100',
            avatar: 'testUrl',
            city: Cities.Habarovsk,
            country: Country.Belarus,
            currency: Currency.RUB,
            firstname: '',
            lastname: 'dsdwwwwww',
            username: '',
        };
        mockedApi.put.mockResolvedValueOnce({ data: mockUserProfile2 });
        const extra = { api: mockedApi };

        //@ts-ignore
        const response = await updateProfileData(mockUserProfile2)(
            dispatch,
            state,
            extra,
        );

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(response.payload).not.toEqual(mockUserProfile2);
        expect(response.meta.requestStatus).toBe('rejected');
    });
});
