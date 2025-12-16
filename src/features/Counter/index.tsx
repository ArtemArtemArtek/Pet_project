import { Counter } from "./ui/counter";
import type { counterSchema } from "./model/types/counterSchema";
import { counterReducer, counterActions } from "./model/slice/counterSlice";

export {Counter, counterActions, counterReducer, counterSchema}