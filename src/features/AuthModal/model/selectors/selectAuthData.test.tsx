import { getAuth } from './selectAuthData';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';

const testingState: DeepPartial<StateSchema> = {
    auth: {
        username: 'admin',
        password: '123',
        error: '',
        isLoading: false
    },
}

describe('selectAuthData test', () => {
    test('Get auth', () => {
        expect(getAuth(testingState as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            error: '',
            isLoading: false
        })
    })
    test('Get auth with empty data', () => {
        const testingState: DeepPartial<StateSchema> = {}
        expect(getAuth(testingState as StateSchema)).toBe(undefined)
    })
})