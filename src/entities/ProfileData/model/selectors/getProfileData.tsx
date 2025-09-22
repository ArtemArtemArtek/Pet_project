import { StateSchema } from "../../../../app/providers/StoreProvider/";

export const getProfileData=(state:StateSchema)=>{
    console.log('dsdasdasdsadsadadsad')
    console.log(state)
    return state.profile
}