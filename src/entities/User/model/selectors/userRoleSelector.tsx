import { StateSchema } from "../../../../app/providers/StoreProvider/";

export const getUserRole=(state:StateSchema)=>{
    return state.user.isAuth.role
}