import axios from "axios"
import { cartdatafail, cartdatareq, cartdatasucc } from "./ActionTypes"

export const cartdatarequest=()=>{
    return {type:cartdatareq}
}
export const cartdatasuccess=(payload)=>{
    return {type:cartdatasucc,payload}
}
export const cartdatafailure=()=>{
    return {type:cartdatafail}
}


export const usercarddata=(token)=>(dispatch)=>{
    dispatch(cartdatarequest())
    // const usertoken=localStorage.getItem("usertoken")
    axios.get(`${process.env.REACT_APP_Url}/userdata/userproduct`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }).then((res)=>{

        dispatch(cartdatasuccess(res.data))
    }).catch((err)=>dispatch(cartdatafailure()))
}