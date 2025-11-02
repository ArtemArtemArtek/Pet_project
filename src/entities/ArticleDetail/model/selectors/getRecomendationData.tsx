import { StateSchema } from "../../../../app/providers/StoreProvider"

export const getRecomendationData=(state:StateSchema)=>{
    return state.recomendation
}
