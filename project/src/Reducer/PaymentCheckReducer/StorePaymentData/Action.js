import { store } from "./ActionTypes"

export const storingdata=(payload)=>{
    return {type:store,payload}
}


export const storedata=(obj)=>(dispatch)=>{
    dispatch(storingdata(obj))
}