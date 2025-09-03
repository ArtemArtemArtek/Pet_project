import { counterSchema } from "../../../../features/Counter";
import { authSchema } from "../../../../features/AuthModal";

export interface StateSchema{
    counter: counterSchema
    auth: authSchema
}