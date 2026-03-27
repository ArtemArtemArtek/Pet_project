import { EnabledFlags } from "../../types"

let flags: EnabledFlags

export const setEnabledFlags=(newFlags: EnabledFlags)=>{
    if(newFlags){
        flags = newFlags
    }
}

export const getEnabledFlags=(flag: keyof EnabledFlags):boolean=>{
    return flags[flag]
}