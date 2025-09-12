import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { Dispatch } from '@reduxjs/toolkit';
import { authUser } from './asyncThunk';
import axios from 'axios';
import { user, userActions } from '../../../../entities/User';

jest.mock('axios')

const mockedAxios = jest.mocked(axios)
const testingState: DeepPartial<StateSchema> = {}

let dispatch:Dispatch
let state: ()=>StateSchema

const userData:user = {
    id:1,
    username: 'admin'
}

describe('AsyncThunk test', () => {
    beforeEach(()=>{
        dispatch = jest.fn()
        state = jest.fn()
    })
    test('Sucsess response', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data:userData}))
        const action = authUser({username: 'admin', password: '123'})
        const response = await action(dispatch, state, undefined)
        console.log(response) 
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(response.payload).toEqual(userData)
        expect(dispatch).toHaveBeenCalledWith(userActions.setUserData(userData))
        expect(response.meta.requestStatus).toBe('fulfilled')
    })
    test('Error response', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status:403}))
        const action = authUser({username: 'admin', password: '123'})
        const response = await action(dispatch, state, undefined)
        console.log(response) 
        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(response.payload).toBe(undefined)
        expect(response.meta.requestStatus).toBe('rejected')
    })
})