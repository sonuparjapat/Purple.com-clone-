import axios from "axios"
import { addtocardreq, addtocartfail } from "./ActionTypes"


export const addtocartrequest=()=>{
    return {type:addtocardreq}
}
export const addtocartsuccess=()=>{
    return {type:addtocartsuccess}
}
export const addtocartfailure=()=>{
    return {type:addtocartfail}
}


export const addtocart=(obj,token)=>(dispatch)=>{
    // console.log(obj)
    dispatch(addtocartrequest())
    // const usertoken=localStorage.getItem("usertoken")
    return axios.post(`${process.env.REACT_APP_Url}/userdata/post`,obj,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
}