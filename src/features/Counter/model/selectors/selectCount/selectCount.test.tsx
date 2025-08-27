import { getCounter } from './selectCount';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../../app/providers/StoreProvider/";

describe('selectCount test', () => {
    test('Get count', () => {
        const testingState: StateSchema = {
            counter: { value: 10 }
        }
        expect(getCounter(testingState)).toEqual({ value: 10 })
    })

})