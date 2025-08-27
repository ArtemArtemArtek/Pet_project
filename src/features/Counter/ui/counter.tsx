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
        <h1>{count}</h1>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        </>
    )
}