import { getCounter } from "../selectCount/selectCount";
import { createSelector } from "@reduxjs/toolkit";
import { counterSchema } from "../../types/counterSchema";

export const getCounterValue =createSelector(
    getCounter,
    (count: counterSchema)=>count.value
)