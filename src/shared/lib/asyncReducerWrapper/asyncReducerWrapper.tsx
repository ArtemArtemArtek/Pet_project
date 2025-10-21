import React, { ReactNode, useEffect } from "react";
import { useAppDispatch } from "../../..//app/providers/StoreProvider/config/store";
import { useStore } from "react-redux";
import { ReducerManagerStore, StateSchemaKeys } from "../../../app/providers/StoreProvider";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKeys]?: Reducer
}

export type EntryReducerList = [StateSchemaKeys, Reducer]

interface asyncReducerWrapperProps {
    // children: ReactNode,
    reducers: ReducerList
    removeAfterClose?: boolean,
}

export const AsyncReducerWrapper: React.FC<asyncReducerWrapperProps> = (props) => {

    const {
        children,
        removeAfterClose = false,
        reducers
    } = props
    const dispatch = useAppDispatch()
    const store = useStore() as ReducerManagerStore

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap() 
        Object.entries(reducers).forEach(([name, reducer]: EntryReducerList) => {
            const mounted = mountedReducers[name as StateSchemaKeys]
            if(!mounted){
                store.reducerManager.add(name, reducer)
                dispatch({ type: `INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterClose) {
                Object.entries(reducers).forEach(([name, reducer]: EntryReducerList) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `DESTROY ${name} reducer` })
                })
            }
        }
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {children}
        </>
    )
}