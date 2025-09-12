import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './counter';
import { wrapperTest } from '../../../shared/lib/wrapperTest/wrapperTest';
import { DeepPartial } from '../../../app/providers/StoreProvider/types/types';

describe('Counter test', () => {
    test('Test render value', () => {
        wrapperTest(<Counter />, { store: { counter: { value: 10 }, auth: null } })
        expect(screen.getByTestId('count_value')).toHaveTextContent('10')
        screen.debug()//Опционально, можно убрать
    })
    test('Test increment', () => {
        wrapperTest(<Counter />, { store: { counter: { value: 10 }, auth: null } })
        fireEvent.click(screen.getByTestId('increment_btn'))
        expect(screen.getByTestId('count_value')).toHaveTextContent('11')
    })
    test('Test decrement', () => {
        wrapperTest(<Counter />, { store: { counter: { value: 10 }, auth: null } })
        fireEvent.click(screen.getByTestId('decrement_btn'))
        expect(screen.getByTestId('count_value')).toHaveTextContent('9')
    })
})