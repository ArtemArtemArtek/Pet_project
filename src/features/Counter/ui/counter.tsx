import React from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { useCounterActions } from "../model/slice/counterSlice";
import { useGetCounter } from "../model/selectors/selectCount/selectCount";
// import { getCounterValue } from "../model/selectors/selectCounterValue/selectCountValue";


export const Counter=()=>{

    const count = useGetCounter()
    const {decrement, increment, addCount} = useCounterActions()
    // const count = useSelector(getCounterValue)
    // const count2 = getCounter()
    
    const hanleIncrement=()=>{
        increment()
    }

    const handleDecrement=()=>{
        decrement()
    }

    const addFive=()=>{
        addCount(5)
    }
    
    return(
        <>
        <h1 data-testid='count_value'>{count}</h1>
        <Button data-testid='increment_btn' onClick={hanleIncrement}>+</Button>
        <Button data-testid='decrement_btn' onClick={handleDecrement}>-</Button>
        <Button data-testid='decrement_btn' onClick={addFive}>+5</Button>
        </>
    )
}