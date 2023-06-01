import { signinfail, signinreq, signinsucc } from "./actionTypes"
import axios from "axios"
export const signinrequest=()=>{
    return {type:signinreq}
}
export const signinsucccess=(payload)=>{
    return {type:signinsucc,payload}
}
export const signinfailed=()=>{
    return {type:signinfail}
}
export const usersignin=(obj)=>async(dispatch)=>{
dispatch(signinrequest())
return axios.post(`${process.env.REACT_APP_Url}/user/login`,obj)
}