import { getCounterValue } from './selectCountValue';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from "../../../../../app/providers/StoreProvider/";
import { DeepPartial } from '../../../../../app/providers/StoreProvider/types/types';

describe('selectCountValue test', () => {
    test('Get count value', () => {
        const testingState: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }
        expect(getCounterValue(testingState as StateSchema)).toBe(10)
    })

})