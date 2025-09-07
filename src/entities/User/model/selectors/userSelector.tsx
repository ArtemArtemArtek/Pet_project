import { StateSchema } from "../../../../app/providers/StoreProvider/";

export const getUser=(state:StateSchema)=>{
    return state.user
}