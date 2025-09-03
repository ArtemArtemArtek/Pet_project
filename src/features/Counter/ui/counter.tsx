import React from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/providers/StoreProvider/index";
import { counterActions } from "../model/slice/counterSlice";
import type { StateSchema } from "../../../app/providers/StoreProvider/index";
import { getCounter } from "../model/selectors/selectCount/selectCount";
import { getCounterValue } from "../model/selectors/selectCounterValue/selectCountValue";


export const Counter=()=>{

    const dispatch = useDispatch()
    const count = useSelector(getCounterValue)
    // const count2 = getCounter()
    
    const increment=()=>{
        dispatch(counterActions.increment())
    }

    const decrement=()=>{
        dispatch(counterActions.decrement())
    }
    
    return(
        <>
        <h1 data-testid='count_value'>{count}</h1>
        <Button data-testid='increment_btn' onClick={increment}>+</Button>
        <Button data-testid='decrement_btn' onClick={decrement}>-</Button>
        </>
    )
}