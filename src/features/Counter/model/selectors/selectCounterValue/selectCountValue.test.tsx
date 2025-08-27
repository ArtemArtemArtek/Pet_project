import { getCounterValue } from './selectCountValue';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../../app/providers/StoreProvider/";

describe('selectCountValue test', () => {
    test('Get count value', () => {
        const testingState: StateSchema = {
            counter: { value: 10 }
        }
        expect(getCounterValue(testingState)).toBe(10)
    })

})