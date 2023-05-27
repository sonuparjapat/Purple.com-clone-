import axios from "axios"
import { signupreq,signupsucc,signupfail } from "./ActionTypes"

export const signuprequest=()=>{
    return {type:signupreq}
}
export const signupsuccess=(payload)=>{
    return {type:signupsucc,payload}
}
export const signupfailed=(payload)=>{
    return {type:signupfail,payload}
}
const url=process.env.REACT_APP_Url
export const usersignup=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch(signuprequest())
  return axios.post(`${url}/user/register`,obj)
    }