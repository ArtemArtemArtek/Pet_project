import { StateSchema } from "../../../../../app/providers/StoreProvider/";
import { buildSelector } from "../../../../../shared/lib/store";
// export const getCounter=(state:StateSchema)=>{
//     return state.counter.value
// }

export const [useGetCounter,getCounter]=buildSelector((state:StateSchema)=>state.counter.value)
