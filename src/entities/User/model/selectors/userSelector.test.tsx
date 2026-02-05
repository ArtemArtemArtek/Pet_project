import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '../../../../app/providers/StoreProvider/';
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { getUser } from './userSelector';

const testingState: DeepPartial<StateSchema> = {
    user: {
        isAuth: {
            id: 1,
            username: 'bertold',
        },
    },
};

describe('selectUserData test', () => {
    test('Get user', () => {
        expect(getUser(testingState as StateSchema)).toEqual({
            isAuth: {
                id: 1,
                username: 'bertold',
            },
        });
    });
    test('Get user with empty data', () => {
        const testingState: DeepPartial<StateSchema> = {};
        expect(getUser(testingState as StateSchema)).toBe(undefined);
    });
});
