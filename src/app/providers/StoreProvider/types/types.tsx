import { counterSchema } from "../../../../features/Counter";
import { authSchema } from "../../../../features/AuthModal";
import { userSchema } from "../../../../entities/User";

export interface StateSchema{
    counter: counterSchema
    auth: authSchema
    user?: userSchema
}