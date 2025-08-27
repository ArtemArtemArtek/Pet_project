import { describe, expect, test } from '@jest/globals';
import { counterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('Counter slice test', () => {
    test('Increment', () => {
        const testingState: counterSchema = {
          value: 10 
        }
        expect(counterReducer(testingState, counterActions.increment())).toEqual({value:11})
    })
    test('Decrement', () => {
        const testingState: counterSchema = {
          value: 10 
        }
        expect(counterReducer(testingState, counterActions.decrement())).toEqual({value:9})
    })
        test('Increment with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({value:1})
    })
        test('Decrement with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({value:-1})
    })
})