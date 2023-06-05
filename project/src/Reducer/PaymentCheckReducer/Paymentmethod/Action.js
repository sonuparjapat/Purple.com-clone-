import { checkedmarkmethod } from "./ActionType"

export const checkmarkpaymentmethod=()=>{
    return {type:checkedmarkmethod}
}


export const checkingpaymentmethod=(dispatch)=>{
    dispatch(checkmarkpaymentmethod())
}