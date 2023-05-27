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


export const usercarddata=(dispatch)=>{
    dispatch(cartdatarequest())
    const usertoken=localStorage.getItem("usertoken")
    axios.get(`${process.env.REACT_APP_Url}/userdata/userproduct`,{
        headers:{
            "Authorization":`Bearer ${usertoken}`
        }
    }).then((res)=>{
        // console.log(res.data.data)
        dispatch(cartdatasuccess(res.data))
    }).catch((err)=>dispatch(cartdatafailure()))
}