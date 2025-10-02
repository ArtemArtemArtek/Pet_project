import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../app/providers/StoreProvider/types/types';
import { Dispatch } from '@reduxjs/toolkit';
import { authUser, useData } from './asyncThunk';
import axios from 'axios';
import { user, userActions } from '../../../../entities/User';
import { $api } from '../../../../shared/api/instanceApi';

jest.mock('../../../../shared/api/instanceApi', () => ({
    $api: {
        post: jest.fn(),
    },
}))

const mockedApi = $api as jest.Mocked<typeof $api>


const mockedUserActions = userActions as jest.Mocked<typeof userActions>


let dispatch: Dispatch
let state: () => StateSchema


const userData:user = {
    id:1,
    username: 'admin'
}

const responseData: useData={
    username: 'admin',
    password: '123'
}

describe('authUser thunk', () => {


     beforeEach(() => {
        jest.clearAllMocks()
        dispatch = jest.fn()    
        state = jest.fn()
    })

  test('should dispatch setUserData and save to localStorage on successful login', async () => {

    mockedApi.post.mockResolvedValueOnce({ data: responseData })
    const extra = { api: mockedApi }

    // Act
    const result = await authUser(responseData)(dispatch, state, extra)

    // Assert
    // expect(mockedApi.post).toHaveBeenCalledWith('/login', userData)
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })


})