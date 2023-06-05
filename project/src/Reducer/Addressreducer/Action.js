import { address } from "./ActionTypes"

export const addressdata=(payload)=>{
    return {type:address,payload}
}

export const useraddress=(obj)=>(dispatch)=>{
    dispatch(addressdata(obj))
}