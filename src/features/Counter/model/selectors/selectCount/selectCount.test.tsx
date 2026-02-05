import { getCounter } from './selectCount';
import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '../../../../../app/providers/StoreProvider/';
import { DeepPartial } from '../../../../../app/providers/StoreProvider/types/types';

describe('selectCount test', () => {
    test('Get count', () => {
        const testingState: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(testingState as StateSchema)).toEqual({ value: 10 });
    });
});
