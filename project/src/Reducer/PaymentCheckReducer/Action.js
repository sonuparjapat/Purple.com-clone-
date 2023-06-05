import { checkedmark } from "./ActionTypes"

export const checkmarkdata=()=>{
    return {type:checkedmark}
}


export const checking=(dispatch)=>{
    dispatch(checkmarkdata())
}