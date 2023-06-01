import axios from "axios";
import { deletereq,deletesucc,deletefail } from "./ActionTypes";
export const deleterequest=()=>{
    return {type:deletereq}
}
export const deletefailure=()=>{
    return {type:deletefail}
}
export const deletesuccess=()=>{
    return {type:deletefail}
}


export const deletedata=(id)=>(disppatch)=>{
    disppatch(deleterequest())
    // console.log(id)
    const usertoken=localStorage.getItem("usertoken")
    // console.log(usertoken)
    return axios(`${process.env.REACT_APP_Url}/userdata/userproduct/${id}`,{
        "method":"DELETE",
   headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${usertoken}`
   },

   
    })
}