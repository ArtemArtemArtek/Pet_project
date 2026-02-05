import {
    combineReducers,
    UnknownAction,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema, StateSchemaKeys } from '../types/types';
import { ReducerManagerInterface } from '../types/types';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManagerInterface {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKeys> = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];

            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
