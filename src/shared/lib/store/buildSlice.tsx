import React from 'react';
import {
    createSlice,
    CreateSliceOptions,
    SliceCaseReducers,
    SliceSelectors,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string,
    Selectors extends SliceSelectors<State>,
    ReducerPath extends string = Name,
>(
    options: CreateSliceOptions<
        State,
        CaseReducers,
        Name,
        ReducerPath,
        Selectors
    >,
) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        return React.useMemo(
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
