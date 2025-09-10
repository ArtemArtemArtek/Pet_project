import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { authSchema } from '../types/AuthSchema';
import { authReducer, authActions } from './AuthSlice';

const testingState: authSchema = {
            isLoading: false,
            password:'admin',
            username:'Alalala',
            error:''
        }

describe('AuthSlice test', () => {
    test('Set login', () => {
        expect(authReducer(testingState, authActions.setLogin('dsaddd'))).toEqual({
            isLoading: false,
            password:'admin',
            username:'dsaddd',
            error:''
        })
    })
    test('Set password', () => {
        expect(authReducer(testingState, authActions.setPassword('223344'))).toEqual({
            isLoading: false,
            password:'223344',
            username:'Alalala',
            error:''
        })
    })

})