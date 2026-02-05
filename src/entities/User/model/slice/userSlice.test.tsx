import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '../../../../app/providers/StoreProvider/';
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { userActions, userReducer } from './userSlice';
import { userSchema } from '../type/userSchema';
import { user } from '../type/userSchema';

const testingState: userSchema = {
    isAuth: {
        id: null,
        username: '',
    },
};

const UserEntryData: user = {
    id: 1,
    username: 'alan',
};

describe('userSlice test', () => {
    test('Set login', () => {
        expect(
            userReducer(testingState, userActions.setUserData(UserEntryData)),
        ).toEqual({
            isAuth: {
                id: 1,
                username: 'alan',
            },
        });
    });
    test('Logout', () => {
        expect(userReducer(testingState, userActions.logout())).toEqual({
            isAuth: undefined,
        });
    });
});
