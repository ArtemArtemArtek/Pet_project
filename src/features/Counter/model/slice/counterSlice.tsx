import { PayloadAction } from '@reduxjs/toolkit';
import { counterSchema } from '../types/counterSchema';
import { buildSlice } from '../../../../shared/lib/store';

const initialState: counterSchema = {
    value: 0,
};

const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addCount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;
